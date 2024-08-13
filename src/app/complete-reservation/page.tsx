'use client'
import React from 'react';
import Complete from '@images/reservation/completeReservation.png';
import Image from "next/image";
import Header from "@components/common/Header";
import {useRouter} from "next/navigation";

const CompleteReservation = () => {
    const router = useRouter()

    return (
        <div>
            <Header></Header>
            <div className={'flex flex-col items-center w-full h-full min-h-[100vh] px-32 py-20 bg-white'}>
                <Image src={Complete} alt={'complete'} width={500} height={500}></Image>
                <button className={'bg-[#F69E4D] w-96 h-16 rounded-3xl text-black text-3xl font-bold'}
                        onClick={() =>router.push('/')}>메인으로 돌아가기</button>
            </div>
        </div>
    );
};

export default CompleteReservation;