'use client'
import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import Logo from '@images/common/logo.svg'
import Link from "next/link";
const Header = () => {
    const router = useRouter()

    return (
        <header className="flex w-full h-20 justify-between bg-white px-16">
            <Image src={Logo} alt="logo"
                   onClick={()=>router.push('/')}
                   className="h-10 items-center mt-3 cursor-pointer"/>
            <div className={'flex justify-between items-center text-black font-bold gap-10'}>
                <Link href={'/'} className={'text-21'}>탐색하기</Link>
                <Link href={'/register'} className={'text-21'}>숙소등록하기</Link>
                <Link href={'/mypage'} className={'text-21'}>마이페이지</Link>
                <Link href={'/login'} className={'text-21'}><button className={'bg-[#F69E4D] p-2 rounded-2xl text-white'}>로그아웃</button></Link>
            </div>
        </header>
    )
}
export default Header;
