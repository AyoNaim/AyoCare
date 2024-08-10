"use client"
import React, {FormEvent, useState} from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { any, z } from "zod"
import CustomFormField, { FormFieldType } from "./CustomInput";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from "./CustomInput"
import Phoneinput from "./Phoneinput"
import PhoneInput from "react-phone-number-input/input"
import SubmitBtn from "./SubmitBtn"
import { UserFormValidation } from '@/lib/validation'
import { createUser } from '@/lib/actions/patient.action'
import { SubmitButton } from './submit-button'

export default function PatientForm() {
  // ...
  const form = useForm<z.infer <typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    }
  });

  //values: z.infer<typeof UserFormValidation>
  const onSubmit = async (e: FormEvent) => {
    const formData = new FormData(e.target);
    const userName = formData.get("name");
    try {
      console.log('creating user.........');
      const newUser = createUser();
      console.log(`this is the new account ${userName}`)
    } catch (error) {
      console.log(`your error is ${error}`)
    }
  };
  const [isLoading, setisLoading] = useState(false)
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="mb-12 space-y-4">
            <h1 className="header">Hi there 👋</h1>
            <p className="text-dark-700">schedule your first appointment</p>
        </section>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="./user.svg"
          iconAlt="user"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          iconSrc="./email.svg"
          iconAlt="email"
        />
        {/* <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(555) 123-4567"
        /> */}
        <Input name='name' placeholder='test' aria-label='test' />
        {/* <PhoneInput defaultCountry="US" placeholder="enter your phone number" international withCountryCallingCode onChange={() => {}} /> */}
        {/* <SubmitButton pendingText='please wait...' formAction={createUser} className='w-full bg-green-500 h-12 rounded-md'>Sign Up</SubmitButton> */}
        <button className='w-full bg-green-500 h-12 rounded-md' onClick={onSubmit}>Sign Up</button>
      </form>
    </Form>
  )
}
