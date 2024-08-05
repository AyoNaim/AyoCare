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
  const [isLoading, setisLoading] = useState(false);
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
        <div className='flex gap-6'>
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
        </div>
        <div className='flex gap-6'>
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Address"
            placeholder="johndoe@gmail.com"
            iconSrc="./email.svg"
            iconAlt="email"
          />
          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="gender"
            label="Gender"
            renderSkeleton={(field: any) => {
              <FormControl>
                <RadioGroup className='flex h-11 gap-6 x:justify-between' onChange={field.onChange} defaultValue={field.value}>
                  <RadioGroupItem value='male' className='cursor-pointer'/>
                </RadioGroup>
              </FormControl>
            }}
          />
        </div>
        <section className="mb-12 space-y-6">
          <div className='mb-9 space-y-1'>
          <h2 className="sub-header">Medical Information</h2>
          </div>
        </section>
        <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="./user.svg"
          iconAlt="user"
        >
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
        </div>
        <div className='flex gap-6'>
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Address"
            placeholder="johndoe@gmail.com"
            iconSrc="./email.svg"
            iconAlt="email"
          />
          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="gender"
            label="Gender"
            renderSkeleton={(field: any) => {
              <FormControl>
                <RadioGroup className='flex h-11 gap-6 x:justify-between' onChange={field.onChange} defaultValue={field.value}>
                  <RadioGroupItem value='male' className='cursor-pointer'/>
                </RadioGroup>
              </FormControl>
            }}
          />
        </div>
        <div className='flex gap-6'>
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="email"
            label="Email"
            placeholder="johndoe@gmail.com"
            iconSrc="./email.svg"
            iconAlt="email"
          />
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="phone"
            label="Phone number"
            placeholder="(555) 123-4567"
          />
        </div>
        <div className='flex gap-6'>
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="allergies"
            label="Email"
            placeholder="johndoe@gmail.com"
            iconSrc="./email.svg"
            iconAlt="email"
          />
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="medication"
            label="Phone number"
            placeholder="(555) 123-4567"
          />
        </div>
        <section className="mb-12 space-y-6">
          <div className='mb-9 space-y-1'>
          <h2 className="sub-header">Identification and Verification</h2>
          </div>
        </section>
        <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="Identification Type"
          iconSrc="./user.svg"
          iconAlt="user"
        >
          {IdentificationTypes.map((item) => (
            <SelectItem key={item} value={item}>
              <div className='flex cursor-pointer items-center gap-2'>
                <p>{item}</p>
              </div> 
            </SelectItem>
          ))}
        </CustomFormField>
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="phone"
            label="Identification number"
            placeholder="e.g 1234567"
          />
          <MyDropzone />
          <section className="mb-12 space-y-6">
            <div className='mb-9 space-y-1'>
            <h2 className="sub-header">Consent And Privacy</h2>
          </div>
        </section>
        <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="phone"
            label="I consent to treatment for my health condition"
            placeholder="e.g 1234567"
          />
          <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="phone"
            label="I consent to treatment for my health condition"
            placeholder="e.g 1234567"
          />
          <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="phone"
            label="I consent to treatment for my health condition"
            placeholder="e.g 1234567"
          />
        {/* <PhoneInput defaultCountry="US" placeholder="enter your phone number" international withCountryCallingCode onChange={() => {}} /> */}
        <div onClick={onSubmit}><SubmitBtn isLoading={isLoading}>Submit</SubmitBtn></div>
      </form>
    </Form>
  )
}
