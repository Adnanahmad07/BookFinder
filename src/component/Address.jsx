import { LocateIcon, LocateOffIcon } from 'lucide-react'
import React from 'react'

const Address = () => {
    return (
        <div className=' dark:bg-black bg-red-200 flex justify-center items-center flex-col py-12 xl:max-w-[1000px] mx-auto rounded-3xl dark:text-neutral-100 '>
            <LocateIcon size={45} />
            <h2 className='font-bold text-3xl my-3'>Ameerpet Office</h2>
            <p className='xl:max-w-[600px] text-center'>KVR Enclave, Flat.No.A3 3RD Floor, beside Satyam Theatre `Road, above Bata Showroom, Ameerpet, Hyderabad, Telangana 500016 Phone : 9985023023 | 9581766526</p>
        </div>
    )
}

export default Address