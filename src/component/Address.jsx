import { LocateIcon, LocateOffIcon } from 'lucide-react'
import React from 'react'

const Address = () => {
    return (
        <div className=' dark:bg-black bg-red-200 flex justify-center items-center flex-col py-12 xl:max-w-[1000px] mx-auto rounded-3xl dark:text-neutral-100 '>
            <LocateIcon size={45} />
            <h2 className='font-bold text-3xl my-3'>Gadge Nagar Office</h2>
            <p className='xl:max-w-[600px] text-center'>In front of Govenment Polytechnic College Gate, Gadge Nagar, Amravati, Maharashtra 444602 Phone : 8180834389 |  8087212653 </p>
        </div>
    )
}

export default Address