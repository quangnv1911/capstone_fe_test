/**
 * This code was generated by Builder.io.
 */
import React from 'react'

interface UserProfileProps {
  avatar: string
  name: string
  email: string
}

const UserProfile: React.FC<UserProfileProps> = ({ avatar, name, email }) => {
  return (
    <div className='flex gap-3 items-center p-3 mt-1 w-full bg-white rounded-xl'>
      <div className='flex flex-1 shrink gap-3 items-start self-stretch my-auto w-full basis-0'>
        <img
          loading='lazy'
          src={avatar}
          alt={`${name}'s avatar`}
          className='object-contain shrink-0 w-10 aspect-square rounded-[999px]'
        />
        <div className='flex flex-col flex-1 shrink basis-0'>
          <div className='text-sm font-semibold leading-6 text-gray-900 text-ellipsis'>{name}</div>
          <div className='text-xs font-medium leading-none text-ellipsis text-neutral-500'>
            {email}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
