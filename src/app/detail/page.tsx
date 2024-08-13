import React from 'react';
import Image from "next/image";
import Header from "@components/common/Header";
import House from '@images/detail/granpahouse.svg';
import Rate from '@images/detail/rate.svg';
import PhoneIcon from '@images/detail/phoneicon.svg';
import UserIcon from '@images/detail/usericon.svg';
import AlarmIcon from '@images/detail/alarmicon.svg';
import BedIcon from '@images/detail/bedicon.svg';
import CalenderIcon from '@images/detail/calendaricon.svg';
import DescriptionIcon from '@images/detail/description.svg';
import PinIcon from '@images/detail/pin.svg';
import Map from '@images/detail/haman.png';

const Detail = () => {
    return (
        <div>
            <Header></Header>
            <div className={'flex flex-col w-full h-full min-h-[100vh] px-32 py-20 bg-white'}>
                <div className={'flex gap-24'}>
                    <Image src={House} alt={'house'} width={640} height={606} className={'rounded-md'}></Image>
                    <div className={'flex flex-col w-full relative'}>
                        <div className={'flex flex-col gap-6 pb-6'}>
                            <span className={'text-black text-5xl font-bold'}>몽글몽글 함안군의 </span>
                            <span className={'text-black text-5xl font-bold'}>어느 할부지댁 </span>
                        </div>
                        <Image src={Rate} alt={'rate'} width={200} height={100} className={'absolute right-0 top-32'}></Image>
                        <div className={'flex flex-col gap-3 py-20'}>
                            <div className={'flex gap-3'}>
                                <Image src={PhoneIcon} alt={'phone'}></Image>
                                <span className={'text-black text-xl'}>0507-1234-1234</span>
                            </div>
                            <div className={'flex gap-3'}>
                                <Image src={UserIcon} alt={'user'}></Image>
                                <span className={'text-black text-xl'}>최대 4인</span>
                            </div>
                            <div className={'flex gap-3'}>
                                <Image src={AlarmIcon} alt={'alarm'}></Image>
                                <span className={'text-black text-xl'}>체크인 15시, 체크아웃 11시</span>
                            </div>
                            <div className={'flex gap-3'}>
                                <Image src={BedIcon} alt={'bed'}></Image>
                                <span className={'text-black text-xl'}>침구류 구비</span>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-3'}>
                            <div className={'flex gap-3'}>
                                <Image src={CalenderIcon} alt={'calender'}></Image>
                                <span className={'text-black text-xl'}>2024년 8월 14일 ~ 2024년 8월 15일</span>
                            </div>
                            <div className={'flex justify-between'}>
                                <span className={'mt-2 text-[#C20E0E] text-4xl font-extrabold'}>30,000원</span>
                                <button className={'bg-[#F69E4D] text-2xl text-white font-bold py-3 px-10 rounded-3xl'}>예약하기</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'bg-[#E8E8E8] h-0.5 my-16'}></div>
                <div className={'flex flex-col gap-10 mb-40'}>
                    <div className={'flex gap-3'}>
                        <Image src={DescriptionIcon} alt={'description'}></Image>
                        <span className={'text-black text-3xl font-extrabold'}>숙소 설명</span>
                    </div>
                    <div className={'flex flex-col gap-3 text-black text-xl'}>
                        <div>안녕하셔요.</div>
                        <div>함안군에 30년째 거주하고 있는 한 할부지입니다. 아들 도움 받아 처음 작성하네요.</div>
                        <div>잔잔하고 때론 붉은 노을이 감동적인 함안군으로 놀러와서 마음 편하게 하루 푹 ~ 쉬고, 함안도 둘러보고 그러다가 가셨으면 좋겠네요.</div>
                        <div>여러모로 소중한 추억 많이 만들어가시길 바래요.</div>
                        <div>편하게 전화주셔요.</div>
                    </div>
                </div>
                <div className={'bg-[#E8E8E8] h-0.5 my-16'}></div>
                <div className={'flex flex-col gap-10'}>
                    <div className={'flex gap-3'}>
                        <Image src={PinIcon} alt={'pin'}></Image>
                        <span className={'text-black text-3xl font-extrabold'}>숙소 위치</span>
                    </div>
                    <Image src={Map} alt={'map'} height={500} width={1500}>
                    </Image>
                </div>
            </div>

        </div>
    );
};

export default Detail;