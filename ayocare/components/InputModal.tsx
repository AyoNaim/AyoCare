import { useState } from "react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"

  
  export function InputOTPDemo() {
    const [passkey, setpasskey] = useState('');
    const [error, seterror] = useState('');
    return (
    <div>
      <InputOTP maxLength={6} value={passkey} onChange={(value) => {setpasskey(value)}}>
        <InputOTPGroup className="shad-otp">
          <InputOTPSlot className="text-36-bold justify-center flex border border-dark-500 rounded-lg size-16 gap-4 !important;" index={0} />
          <InputOTPSlot className="text-36-bold justify-center flex border border-dark-500 rounded-lg size-16 gap-4 !important;" index={1} />
          <InputOTPSlot className="text-36-bold justify-center flex border border-dark-500 rounded-lg size-16 gap-4 !important;" index={2} />
          <InputOTPSlot className="text-36-bold justify-center flex border border-dark-500 rounded-lg size-16 gap-4 !important;" index={3} />
          <InputOTPSlot className="text-36-bold justify-center flex border border-dark-500 rounded-lg size-16 gap-4 !important;" index={4} />
          <InputOTPSlot className="text-36-bold justify-center flex border border-dark-500 rounded-lg size-16 gap-4 !important;" index={5} />
        </InputOTPGroup>
      </InputOTP>
      { error && <p className="shad-error text-14-regular mt-4 flex justify-center">{error}</p>}
    </div>
    )
  }
  