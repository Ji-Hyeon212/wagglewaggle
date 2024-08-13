//예약하기
import React from 'react';
import Header from "@components/common/Header";
import Image from "next/image";
import House from '@images/detail/granpahouse.svg';
import UserIcon from '@images/detail/usericon.svg';
import AlarmIcon from '@images/detail/alarmicon.svg';
import CoinIcon from '@images/reservation/coin.svg';
import CalenderIcon from '@images/detail/calendaricon.svg';

const Reservation = () => {
    return (
        <div>
            <Header></Header>
            <div className={'flex flex-col items-center w-full h-full min-h-[100vh] px-32 py-20 bg-white'}>
                <div className={'text-black text-4xl font-extrabold mb-32'}>확인 및 결제하기</div>
                <div className={'flex bg-[#E8E8E8] rounded-3xl gap-20 w-650 h-500 px-20 py-16'}>
                    <Image src={House} alt={'house'} width={440} height={406} className={'rounded-2xl'}></Image>
                    <div className={'flex flex-col justify-between'}>
                        <div className={'text-black text-3xl font-extrabold'}>몽글몽글 함안군의 어느 할부지댁</div>
                        <div className={'flex flex-col gap-3'}>
                            <div className={'flex gap-3'}>
                                <Image src={CalenderIcon} alt={'calender'}></Image>
                                <span className={'text-black text-xl'}>2024년 8월 14일 ~ 2024년 8월 15일</span>
                            </div>
                            <div className={'flex gap-3'}>
                                <Image src={CoinIcon} alt={'coin'} width={24} height={24}></Image>
                                <span className={'text-black text-xl'}>20000 x 1박</span>
                            </div>
                            <div className={'flex gap-3'}>
                                <Image src={AlarmIcon} alt={'alarm'}></Image>
                                <span className={'text-black text-xl'}>체크인 11시, 체크아웃 15시</span>
                            </div>
                            <div className={'flex gap-3'}>
                                <Image src={UserIcon} alt={'user'}></Image>
                                <span className={'text-black text-xl'}>2인</span>
                            </div>
                        </div>
                        <button className={'bg-[#F69E4D] h-16 rounded-3xl text-black text-3xl font-bold'}>결제하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservation;