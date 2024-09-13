import React from 'react'
import Image from 'next/image'
import UserModal from '../UserModal'
const UserCard = ({firstName, lastName , city, phoneNumber}) => {

    const location = <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" viewBox="0 0 100 100" id="location">
    <path d="M79.535 27.4c-.32-1.201-.971-2.48-1.452-3.6C72.324 9.96 59.741 5 49.581 5 35.98 5 21 14.12 19 32.919v3.841c0 .16.055 1.6.134 2.32 1.121 8.959 8.19 18.48 13.47 27.439 5.68 9.599 11.574 19.041 17.415 28.479 3.6-6.159 7.188-12.399 10.707-18.399.959-1.761 2.071-3.521 3.031-5.201.64-1.119 1.862-2.238 2.421-3.279C71.857 57.722 81 47.24 81 36.92v-4.24c0-1.119-1.387-5.039-1.465-5.28M49.83 46.68c-3.998 0-8.374-1.999-10.534-7.52-.322-.879-.296-2.64-.296-2.801v-2.48c0-7.038 5.976-10.239 11.175-10.239 6.4 0 11.351 5.121 11.351 11.521S56.23 46.68 49.83 46.68"></path>
  </svg>

  const phoneIcon = <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5" id="phone">
  <defs>
    <clipPath id="a">
      <path d="M0 38h38V0H0v38Z"></path>
    </clipPath>
  </defs>
  <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
    <path fill="#292f33" d="m35.06 10.593-3.496 3.496a4.942 4.942 0 0 1-8.341-2.528c-5.765 1.078-11.372 6.662-11.721 11.653a4.918 4.918 0 0 1 2.587 1.36 4.944 4.944 0 0 1 0 6.991l-3.495 3.495a4.943 4.943 0 0 1-6.99 0C-6.881 24.574 24.575-6.882 35.06 3.604a4.942 4.942 0 0 1 0 6.989"></path>
  </g>
</svg>

  return (
    <main className='w-full  h-72  rounded-xl p-8 bg-white'>
        <div className='flex flex-col'>
            <Image
             height={62}
             width={62}
             src="/cardImage.png"
             className='rounded-full'
            />
            <h1 className=' mt-2 text-3xl font-bold' >{firstName}&nbsp;{lastName}</h1>
            <div className='flex items-center'>{location} {city} </div>

            <div className='flex border-t-2  border-gray-200 mt-10 pt-2 justify-between '>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-1 font-bold'>
                        {phoneIcon}
                        {phoneNumber}
                    </div>
                    <p className='text-[#AFAFAF]'>Available on phone</p>
                </div>
                <div>
                <UserModal firstName = {firstName} lastName = {lastName} city={city} phoneNumber = {phoneNumber}/>
                </div>
            </div>


        </div>
    </main>
  )
}

export default UserCard