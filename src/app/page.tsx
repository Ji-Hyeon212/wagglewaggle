// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between">
//       <div>hi</div>
//     </main>
//   );
// }

// pages/index.js

import IndexHero from "../../public/IndexHero.svg";
import Image from "next/image";
import { Header } from "@/components/commons/Header";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="container mx-auto px-4 flex py-14 relative"
        style={{
          backgroundImage: `url("/IndexHero.svg")`,
          height: "656px",
          maxWidth: "1280px",
          aspectRatio: "16:9",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
        }}
      >
        <div
          className="w-1/2 justify-center"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            paddingLeft: "50px",
          }}
        >
          <h1
            className="text-4xl font-bold text-gray-800 leading-snug"
            style={{
              fontStyle: "Open Sans",
              fontSize: "60px",
              textAlign: "start",
            }}
          >
            당신의 하루를
          </h1>
          <h1
            className="text-4xl font-bold text-gray-800 leading-snug"
            style={{
              fontStyle: "Open Sans",
              fontSize: "60px",
              textAlign: "start",
            }}
          >
            보다,
          </h1>
          <h1
            className="text-4xl font-bold text-gray-800 leading-snug"
            style={{
              fontStyle: "Open Sans",
              fontSize: "60px",
              textAlign: "start",
            }}
          >
            <span
              className="text-orange-400"
              style={{
                fontFamily: "Jua",
                fontWeight: "normal",
                fontSize: "85px",
              }}
            >
              와글와글
            </span>
            <span>하게!</span>
          </h1>
          <p className="text-gray-600 mt-4">
            와글와글과 함께 새로운 특별한 숙소를 찾아보세요 :)
          </p>
          <div className="mt-6 space-x-2">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
              위치
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
              체크인
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
              체크아웃
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
              인원 수
            </button>
          </div>
          <button className="bg-orange-400 text-white mt-4 px-6 py-2 rounded-full">
            검색
          </button>
        </div>
        {/*<div className="w-1/2">*/}
        {/*  <Image src={IndexHero} alt={"인덱스 배너"} />*/}
        {/*</div>*/}
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <div className="text-sm text-gray-500">
                  London, MIDT | England
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mt-2">
                  Danubius Hotel Regents Park
                </h3>
                <div className="text-sm text-gray-600 mt-1">$200 Per Night</div>
                <div className="flex items-center mt-2">
                  <span className="text-red-500">★</span>
                  <span className="ml-2 text-gray-800">4.8</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
