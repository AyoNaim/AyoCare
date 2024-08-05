import Image from 'next/image'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

type fileUploaderProps = {
    files: File[],
    onChange: (files: File[]) => void
}

export default function MyDropzone({files, onChange}: fileUploaderProps) {
  const onDrop = useCallback(( acceptedFiles: File[] ) => {
    onChange(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className='text-12-regular flex cursor-pointer  flex-col items-center justify-center gap-3 rounded-md border border-dashed border-dark-500 bg-dark-400 p-5'>
      <input {...getInputProps()} />
      <Image src={'/upload.svg'} alt='upload' width={40} height={40} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}