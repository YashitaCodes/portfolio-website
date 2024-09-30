import React from 'react'
import Link from 'next/link'
const NotFound = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center space-y-2 -translate-y-16'>
        <h1 className='text-2xl font-semibold'>404: Looks like this page took a coffee break.</h1>
        <p className='pb-3'>While it&apos;s out, why not head back and explore the rest of the site?</p>
        <Link href="/" className='inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'>
            Take Me Home 
        </Link>
        </div>    
    </div>
  )
}

export default NotFound
