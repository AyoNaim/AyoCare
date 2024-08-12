'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";


export function AlertDialogDemo() {
    const [open, setopen] = useState(true);
    const closeModal = () => {
        setopen(false);
        redirect('./')
    }
    return (
      <AlertDialog open={open} onOpenChange={setopen}>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="space-y-5 bg-dark-400 border-dark-500 outline-none !important;">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-start justify-between">Admin access verification
                <Image src={'close.svg'} alt="close" width={20} height={20} className="cursor-pointer" onClick={() => closeModal()}/>
            </AlertDialogTitle>
            <AlertDialogDescription>
                To access the admin page, please enter the passkey
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div>
            
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  