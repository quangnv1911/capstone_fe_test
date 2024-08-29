import React from 'react'
import SidebarHeader from './SidebarHeader'
import SidebarSection from './SidebarSection'
import UserProfile from './UserProfile'
import LogoutButton from './LogoutButton'
import HideDashboardButton from './HideDashboardButton'

const studentCareItems = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/208d69b410e070507e4f9e9b5757e036c8e6f7c25cd8af8ac78ecf7b0e0bf409?placeholderIfAbsent=true&apiKey=14a3acb538e54360af1cf1ee025c61c0',
    text: 'Sinh viên cần chăm sóc',
    active: true,
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7b95a06f65e7df17dbafedfc0856b746266300108e6801ac53384b5840e0fc49?placeholderIfAbsent=true&apiKey=14a3acb538e54360af1cf1ee025c61c0',
    text: 'Ghi nhận phiếu đơn',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/53be1509c228c9c8cadbdea31a573c8dde2949d54cf0522805337592483ffe89?placeholderIfAbsent=true&apiKey=14a3acb538e54360af1cf1ee025c61c0',
    text: 'Mẫu email',
  },
]

const scanItems = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c485a9b1a57899743d16111973695963530a323c053f46339ed16c3990de4d68?placeholderIfAbsent=true&apiKey=14a3acb538e54360af1cf1ee025c61c0',
    text: 'Quét điểm danh sinh viên',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/491933b554c605377f41e83a28d02cc064fc3770ca655afccdfc28b0738e4396?placeholderIfAbsent=true&apiKey=14a3acb538e54360af1cf1ee025c61c0',
    text: 'Quét sinh viên bảo lưu',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/33dfe26ca70290588fe92eac6d3dc2f7b1d43b80e1df6714174fb3b26314a20d?placeholderIfAbsent=true&apiKey=14a3acb538e54360af1cf1ee025c61c0',
    text: 'Quét sinh viên trượt môn',
  },
]

const managementItems = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5aef88e2129c83417b7895a4225fb9d1196d00a04d9a65fb508a070f3db24e02?placeholderIfAbsent=true&apiKey=14a3acb538e54360af1cf1ee025c61c0',
    text: 'Lịch sử cuộc gọi',
  },
]

const StudentCareSystem: React.FC = () => {
  return (
    <nav className='flex flex-col max-w-[290px]'>
      <div className='flex flex-col justify-between px-4 py-6 w-full bg-white border-r border-zinc-100'>
        <div className='flex flex-col w-full font-semibold'>
          <SidebarHeader
            logo='https://cdn.builder.io/api/v1/image/assets/TEMP/f70d0bdf49f072bbf20fd9ca2d1ce4cc7663dee0698ae43cdb9f6ab8d40e6a4f?placeholderIfAbsent=true&apiKey=14a3acb538e54360af1cf1ee025c61c0'
            title='Student Care System FPT'
          />
          <SidebarSection title='CHĂM SÓC SINH VIÊN' items={studentCareItems} />
          <SidebarSection title='QUÉT THÔNG TIN' items={scanItems} />
          <SidebarSection title='QUẢN LÝ' items={managementItems} />
        </div>
        <div className='flex flex-col mt-96 w-full'>
          <div className='flex-1 shrink self-stretch px-3 w-full text-xs font-medium leading-none text-neutral-500'>
            CƠ SỞ FU HÒA LẠC
          </div>
          <UserProfile
            avatar='https://cdn.builder.io/api/v1/image/assets/TEMP/6ad11b6f5ac79a45c71e67f39ad32eeb747ad4eb277fae2cc53e16a9d3bb0864?placeholderIfAbsent=true&apiKey=14a3acb538e54360af1cf1ee025c61c0'
            name='Hoàng Mẫn Nhi'
            email='nhihm@fe.du.vn'
          />
          <div className='flex mt-1 w-full rounded-sm bg-neutral-100 min-h-[1px]' />
          <LogoutButton />
          <HideDashboardButton />
        </div>
      </div>
    </nav>
  )
}

export default StudentCareSystem
