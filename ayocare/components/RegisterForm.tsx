"use client"
import React, {useState} from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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


export default function PatientForm() {
  // ...

  const onSubmit = async () => {
    console.log('submitting ur data...');
    try {
      const user = await createUser();
      console.log(user);
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
        <section className="mb-12 space-y-4">
            <h1 className="header">Hi there 👋</h1>
            <p className="sub-header">Lets know more about yourself</p>
        </section>
        <section className="mb-12 space-y-6">
          <div className='mb-9 space-y-1'>
          <h2 className="sub-header">Personal Information</h2>
          </div>
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
        <div className='flex flex-col gap-6 xl:flex-row'>
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="johndoe@gmail.com"
            iconSrc="./email.svg"
            iconAlt="email"
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="phone"
            label="Phone number"
            placeholder="(555) 123-4567"
          />
          <div className='flex flex-col gap-6 xl:flex-row'>
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="Date of birth"
              label="birthdate"
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div className='flex flex-col gap-6 xl:flex-row'>
          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="gender"
            label="gender"
            renderSkeleton={(field) => {
              <FormControl>
                
              </FoemControl>
            }}
          />
          </div>
          <div className='flex flex-col gap-6 xl:flex-row'>
            
          </div>
          <div className='flex flex-col gap-6 xl:flex-row'>
            
          </div>

        </div>
        
        {/* <PhoneInput defaultCountry="US" placeholder="enter your phone number" international withCountryCallingCode onChange={() => {}} /> */}
        <div onClick={onSubmit}><SubmitBtn isLoading={isLoading}>Submit</SubmitBtn></div>
      </form>
    </Form>
  )
}
