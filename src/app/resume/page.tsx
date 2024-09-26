"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';

export default function Resume() {
  const router = useRouter()

  useEffect(() => {
    router.push("/resume.pdf")
  },[router]);

  return (
  <div className='font-mono flex align-center justify-center items-center flex-col h-screen w-screen bg-background text-foreground">'>
    <h1>Loading...</h1>
  </div>
  )
}
