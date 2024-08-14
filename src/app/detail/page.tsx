"use client";
import React from "react";
import Image from "next/image";
import Header from "@components/common/Header";
import House from "@images/detail/granpahouse.svg";
import Rate from "@images/detail/rate.svg";
import PhoneIcon from "@images/detail/phoneicon.svg";
import UserIcon from "@images/detail/usericon.svg";
import AlarmIcon from "@images/detail/alarmicon.svg";
import BedIcon from "@images/detail/bedicon.svg";
import CalenderIcon from "@images/detail/calendaricon.svg";
import DescriptionIcon from "@images/detail/description.svg";
import PinIcon from "@images/detail/pin.svg";
import Map from "@images/detail/haman.png";
import { useRouter } from "next/navigation";
import "./page.css";
import DailyChart from "@components/detail/DailyChart";

const Detail = () => {
  const router = useRouter();

  return (
    <div>
      <Header></Header>
      <div
        className={
          "flex flex-col w-full h-full min-h-[100vh] px-32 py-20 bg-white"
        }
      >
        <div className={"flex gap-24"}>
          <Image
            src={House}
            alt={"house"}
            width={640}
            height={606}
            className={"rounded-md"}
          ></Image>
          <div className={"flex flex-col w-full relative"}>
            <div className={"flex flex-col gap-6 pb-6"}>
              <span className={"text-black text-5xl font-bold"}>
                몽글몽글 함안군의{" "}
              </span>
              <span className={"text-black text-5xl font-bold"}>
                어느 할부지댁{" "}
              </span>
            </div>
            <Image
              src={Rate}
              alt={"rate"}
              width={200}
              height={100}
              className={"absolute right-0 top-32"}
            ></Image>
            <div className={"flex flex-col gap-3 py-20"}>
              <div className={"flex gap-3"}>
                <Image src={PhoneIcon} alt={"phone"}></Image>
                <span className={"text-black text-xl"}>0507-1234-1234</span>
              </div>
              <div className={"flex gap-3"}>
                <Image src={UserIcon} alt={"user"}></Image>
                <span className={"text-black text-xl"}>최대 4인</span>
              </div>
              <div className={"flex gap-3"}>
                <Image src={AlarmIcon} alt={"alarm"}></Image>
                <span className={"text-black text-xl"}>
                  체크인 15시, 체크아웃 11시
                </span>
              </div>
              <div className={"flex gap-3"}>
                <Image src={BedIcon} alt={"bed"}></Image>
                <span className={"text-black text-xl"}>침구류 구비</span>
              </div>
            </div>
            <div className={"flex flex-col gap-3"}>
              <div className={"flex gap-3"}>
                <Image src={CalenderIcon} alt={"calender"}></Image>
                <span className={"text-black text-xl"}>
                  2024년 8월 14일 ~ 2024년 8월 15일
                </span>
              </div>
              <div className={"flex justify-between"}>
                <span className={"mt-2 text-[#C20E0E] text-4xl font-extrabold"}>
                  30,000원
                </span>
                <div style={{ display: "flex" }}>
                  <div className="heart-container" title="Like">
                    <input
                      type="checkbox"
                      className="checkbox"
                      id="Give-It-An-Id"
                    />
                    <div className="svg-container">
                      <svg
                        viewBox="0 0 24 24"
                        className="svg-outline"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        className="svg-filled"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                      </svg>
                      <svg
                        className="svg-celebrate"
                        width="100"
                        height="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon points="10,10 20,20"></polygon>
                        <polygon points="10,50 20,50"></polygon>
                        <polygon points="20,80 30,70"></polygon>
                        <polygon points="90,10 80,20"></polygon>
                        <polygon points="90,50 80,50"></polygon>
                        <polygon points="80,80 70,70"></polygon>
                      </svg>
                    </div>
                  </div>
                  <button
                    className={
                      "bg-[#F69E4D] text-2xl text-white font-bold py-3 px-10 rounded-3xl"
                    }
                    onClick={() => router.push("/reservation")}
                  >
                    예약하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"bg-[#E8E8E8] h-0.5 my-16"}></div>
        <div className={"flex flex-col gap-10 mb-40"}>
          <div className={"flex gap-3"}>
            <Image src={DescriptionIcon} alt={"description"}></Image>
            <span className={"text-black text-3xl font-extrabold"}>
              숙소 설명
            </span>
          </div>
          <div className={"flex flex-col gap-3 text-black text-xl"}>
            <div>안녕하셔요.</div>
            <div>
              함안군에 30년째 거주하고 있는 한 할부지입니다. 아들 도움 받아 처음
              작성하네요.
            </div>
            <div>
              잔잔하고 때론 붉은 노을이 감동적인 함안군으로 놀러와서 마음 편하게
              하루 푹 ~ 쉬고, 함안도 둘러보고 그러다가 가셨으면 좋겠네요.
            </div>
            <div>여러모로 소중한 추억 많이 만들어가시길 바래요.</div>
            <div>편하게 전화주셔요.</div>
          </div>
          <DailyChart />
        </div>
        <div className={"bg-[#E8E8E8] h-0.5 my-16"}></div>
        <div className={"flex flex-col gap-10"}>
          <div className={"flex gap-3"}>
            <Image src={PinIcon} alt={"pin"}></Image>
            <span className={"text-black text-3xl font-extrabold"}>
              숙소 위치
            </span>
          </div>
          <Image src={Map} alt={"map"} height={500} width={1500}></Image>
        </div>
      </div>
    </div>
  );
};

export default Detail;
