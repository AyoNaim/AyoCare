import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input/input'

const Phoneinput = () => {
  const [value, setvalue] = useState('');
  return (
    <PhoneInput  placeholder='enter your phone number' defaultCountry='US' onChange={() => {console.log('value...')}}/>
  )
}

export default Phoneinput