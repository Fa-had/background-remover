'use client'
import { useState } from 'react'
import axios from 'axios'
import Header from '@/components/Header'
import Image from 'next/image'
import backgroundImage from '@/public/background_remove_icon.png'
import upload_icon from '@/public/uploadIcon.png'
import Footer from '@/components/Footer'

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [processedImage, setProcessedImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!selectedFile) return
    setLoading(true)
    const formData = new FormData()
    formData.append('file', selectedFile)
    const url = process.env.NEXT_PUBLIC_HOST
    const api = process.env.NEXT_PUBLIC_API_KEY
    try {
      const response = await axios.post(`${url}remove-background/`, formData, {
        headers: {
          Authorization: api, // Use a valid API key from the list
        },
      })
      const filename = response.data.filename
      setProcessedImage(`${url}download/${filename}`)
    } catch (error) {
      console.error('Error removing background:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className='flex w-full h-auto flex-col md:flex-row items-center px-4 py-16 justify-center bg-gray-100'>
        <div className='relative w-1/2 h-auto flex flex-col items-center justify-center'>
          <Image
            src={backgroundImage}
            className='rounded-full'
            alt='Background remover'
            width={200}
            height={200}
          />
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center' />
          <h1 className='text-4xl font-bold text-gray-800 mt-6'>
            Remove Image Background
          </h1>
          <p className='text-lg text-gray-600 mt-2'>
            100% Automatically and{' '}
            <span className='text-yellow-500 font-bold'>Free</span>
          </p>
        </div>

        <div className='mt-8 p-6 bg-white shadow-lg rounded-lg flex flex-col space-y-5 items-center'>
          <label htmlFor='image'>
            <Image
              src={
                !selectedFile ? upload_icon : URL.createObjectURL(selectedFile)
              }
              width={!selectedFile ? 150 : 500}
              height={!selectedFile ? 150 : 500}
              alt='thumbnail'
            />
          </label>
          <input
            onChange={handleFileChange}
            type='file'
            id='image'
            accept='image/*'
            hidden
            required
          />

          <button
            onClick={handleUpload}
            className='bg-blue-500 text-white px-4 py-2 shadow-xl rounded-md disabled:bg-gray-400'
            disabled={!selectedFile || loading}
          >
            {loading ? 'Processing...' : 'Remove Background'}
          </button>
        </div>
      </main>
      {processedImage && (
        <div className='flex flex-col items-center mt-12'>
          <h2 className='text-lg font-semibold'>Processed Image:</h2>
          <Image
            src={processedImage}
            width={500}
            height={500}
            alt='Processed'
            className='w-48 h-48 object-cover rounded-lg mb-2'
          />
          <a
            href={processedImage}
            onClick={() => {
              setTimeout(() => {
                window.location.reload()
              }, 2000)
            }}
            download
            className='bg-green-500 text-white px-4 py-2 rounded-md'
          >
            Download
          </a>
        </div>
      )}
      <div className='mt-8 text-center'>
        <Footer />
      </div>
    </>
  )
}
