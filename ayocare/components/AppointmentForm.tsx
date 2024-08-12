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
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Doctors, IdentificationTypes } from '@/constants'
import { SelectItem } from './ui/select'
import Image from 'next/image'
import MyDropzone from './FileUploader'
import { SubmitButton } from './submit-button'



export default function AppointmentForm(formData: FormData) {
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
  const [isLoading, setisLoading] = useState(false);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
        <section className="mb-12 space-y-4">
            <h1 className="header">New Appointment</h1>
            <p className="sub-header">Set an appointment date of your convienience</p>
        </section>
        <section className="mb-12 space-y-6">
          <div className='mb-9 space-y-1'>
          <h2 className="sub-header">Personal Information</h2>
          </div>
        </section>
        <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name="Doctor"
          label="Select a doctor"
          placeholder="Select your preferred doctor"
          iconSrc="/next.svg"
          iconAlt="user"
        >
          <Image src={'/user.svg'} alt='user' width={20} height={20} />
          {Doctors.map((doctor) => (
            <SelectItem key={doctor.name} value={doctor.name}>
              <div className='flex cursor-pointer items-center gap-2'>
                <Image src={doctor.image} alt={doctor.name} width={32} height={32} className='rounded-full border border-dark-500' />
                <p>{doctor.name}</p>
              </div> 
            </SelectItem>
          ))}
        </CustomFormField>
       
        <div className='flex gap-6'>
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="comment"
            label="Reason for appointment"
            placeholder="e.g annual monthly check-up"
            // iconSrc="./email.svg"
            // iconAlt="email"
          />
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="comment"
            label="Adidtional comments/notes"
            placeholder="e.g prefer afternoon appointments, if possible"
            // iconSrc="./email.svg"
            // iconAlt="email"
          />
        </div>
        <div className='flex flex-1'>
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="Date"
            label="Appointment date"
            placeholder="select your appointment date"
            iconSrc="./email.svg"
            iconAlt="email"
          />
        </div>
        {/* <PhoneInput defaultCountry="US" placeholder="enter your phone number" international withCountryCallingCode onChange={() => {}} /> */}
        <SubmitButton pendingText='please wait...' formAction={createUser} className='w-full bg-green-500 h-12 rounded-md'>Submit and Continue</SubmitButton>
      </form>
    </Form>
  )
}
