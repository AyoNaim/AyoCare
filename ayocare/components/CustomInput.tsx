import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { E164Number } from "libphonenumber-js/core";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
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
import Image from 'next/image'
import { Control } from 'react-hook-form'
import { Textarea } from './ui/textarea'
import PhoneInput from "react-phone-number-input";
import { Checkbox } from './ui/checkbox';
import ReactDatePicker from "react-datepicker";



export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

interface CustomProps {
control: Control<any>;
name: string;
label?: string;
placeholder?: string;
iconSrc?: string;
iconAlt?: string;
disabled?: boolean;
dateFormat?: string;
showTimeSelect?: boolean;
children?: React.ReactNode;
renderSkeleton?: (field: any) => React.ReactNode;
fieldType: FormFieldType;
}


const RenderInput = ({field, props} : {field: any, props:CustomProps}) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
        {props.iconSrc && (
          <Image
            src={props.iconSrc}
            height={24}
            width={24}
            alt={props.iconAlt || "icon"}
            className="ml-2"
          />
        )}
        <FormControl>
          <Input
            placeholder={props.placeholder}
            {...field}
            className="bg-dark-400 placeholder:text-dark-600 border-dark-500 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
          />
        </FormControl>
      </div>
      )
      case FormFieldType.TEXTAREA:
        return (
          <FormControl>
            <Textarea
              placeholder={props.placeholder}
              {...field}
              className="bg-dark-400 placeholder:text-dark-600 border-dark-500 focus-visible:ring-0 focus-visible:ring-offset-0"
              disabled={props.disabled}
            />
          </FormControl>
        );
      case FormFieldType.PHONE_INPUT:
        return (
          <FormControl>
            <PhoneInput
              defaultCountry="US"
              placeholder={props.placeholder}
              international
              withCountryCallingCode
              value={field.value as E164Number | undefined}
              onChange={field.onChange}
              className="mt-2 h-11 rounded-md px-3 text-sm border bg-dark-400 placeholder:text-dark-600 border-dark-500"
            />
          </FormControl>
        );
      case FormFieldType.CHECKBOX:
        return (
          <FormControl>
            <div className="flex items-center gap-4">
              <Checkbox
                id={props.name}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <label htmlFor={props.name} className="cursor-pointer text-sm font-medium text-dark-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 md:leading-none">
                {props.label}
              </label>
            </div>
          </FormControl>
        );
      case FormFieldType.DATE_PICKER:
        return (
          <div className="flex rounded-md border border-dark-500 bg-dark-400">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="user"
              className="ml-2"
            />
            <FormControl>
              <ReactDatePicker
                showTimeSelect={props.showTimeSelect ?? false}
                selected={field.value}
                onChange={() => {console.log('hey...')}}
                timeInputLabel="Time:"
                dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
                wrapperClassName="overflow-hidden border-transparent w-full placeholder:text-dark-600  h-11 text-14-medium rounded-md px-3 outline-none"
              />
            </FormControl>
          </div>
        );
      case FormFieldType.SELECT:
        return (
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-dark-400  placeholder:text-dark-600 border-dark-500 h-11 focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder={props.placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-dark-400 border-dark-500">
                {props.children}
              </SelectContent>
            </Select>
          </FormControl>
        );
      case FormFieldType.SKELETON:
        return props.renderSkeleton ? props.renderSkeleton(field) : null;
      default:
        return null;
    }
  
  }

const CustomFormField = (props: CustomProps) => {
    const {control, name, label } = props;

  const form = useForm();
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex-1">
        {props.fieldType !== FormFieldType.CHECKBOX && label && (
          <FormLabel className="text-14-medium text-dark-700">{label}</FormLabel>
        )}
        <RenderInput field={field} props={props} />

        <FormMessage className="text-red-400" />
      </FormItem>
    )}
  />
  )
}

export default CustomFormField