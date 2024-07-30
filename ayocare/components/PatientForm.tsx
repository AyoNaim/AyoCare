"use client"
import React, {useState} from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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


export default function PatientForm() {
  // ...

  const onSubmit = async () => {
    console.log('submitting ur data...');
    try {
      // const userData = { name, email, phone};
      const user = await createUser('ayonaim101@gmail.com', '09032139771', 'Ayo');
    } catch (error) {
      console.log(error)
    }
  };
  const form = useForm<z.infer <typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    }
});
  const [isLoading, setisLoading] = useState(false)
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="mb-12 space-y-4">
            <h1 className="header">Hi there 👋</h1>
            <p className="text-dark-700">schedule your first appointment</p>
        </section>
        <CustomInput input_name='Username' description='Enter your username' placeholder='username' />
        <CustomInput input_name='email' description='Enter your email' placeholder='email' />
        {/* <PhoneInput defaultCountry="US" placeholder="enter your phone number" international withCountryCallingCode onChange={() => {}} /> */}
        <SubmitBtn isLoading={isLoading}>Submit</SubmitBtn>
      </form>
    </Form>
  )
}
