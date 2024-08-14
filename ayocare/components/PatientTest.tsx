"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "./CustomInput";
import SubmitBtn from "./SubmitBtn";
import { createUser } from "@/lib/actions/patient.action";

export const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState({
    name: '',
    email: '',
    password: '', 
  })

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);
    try {
        console.log('creating user, please wait............................')
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      // const test = {
      //   name: 'ayo',
      //   role: 'user',
      //   purpose: 'test'
      // };
      const newUser = await createUser(user);
      console.log(newUser, formData.password);
    //   if (newUser) {
    //     router.push(`/patients/${newUser.$id}/register`);
    //   }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Get started with appointments.</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          iconSrc="/email.svg"
          iconAlt="email"
        />

        {/* <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(555) 123-4567"
        /> */}

        <button onClick={onSubmit} className="bg-green-500 h-12 w-full rounded-md">Get Started</button>
      </form>
    </Form>
  );
};