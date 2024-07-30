import React from 'react'
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

const CustomInput = ({input_name, description, placeholder}: any) => {
    
  const onSubmit = () => {
    console.log('submitting ur data...')
  };
  const form = useForm();
  return (
    <FormField
    control={form.control}
    name="username"
    render={({ field }) => (
      <FormItem>
        <FormLabel>{input_name}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} {...field} />
        </FormControl>
        <FormDescription>
          {description}
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
  )
}

export default CustomInput