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
    <div {...getRootProps()} className='file-upload'>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}