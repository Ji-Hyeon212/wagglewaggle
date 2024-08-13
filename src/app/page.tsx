"use client";

import Header from "@components/common/Header";
import { MainSearchBar } from "@components/main/MainSearchBar";
import { useState } from "react";
import Link from "next/link";

type House = {
  si: string;
  address: string;
  price: string;
  rate: number;
};

const houses: House[] = [
  {
    si: "부산 광역시 기장군",
    address: "수림로 81번길",
    price: String(30000).toLocaleString(),
    rate: 4.7,
  },
  {
    si: "부산 광역시 사상구",
    address: "수림로 81번길",
    price: String(30000).toLocaleString(),
    rate: 4.4,
  },
  {
    si: "부산 광역시 수영구",
    address: "수림로 81번길",
    price: String(30000).toLocaleString(),
    rate: 3.8,
  },
  {
    si: "부산 광역시 강서구",
    address: "수림로 81번길",
    price: String(30000).toLocaleString(),
    rate: 3.6,
  },
  {
    si: "부산 광역시 연제구",
    address: "수림로 81번길",
    price: String(30000).toLocaleString(),
    rate: 3.5,
  },
  {
    si: "부산 광역시 영도구",
    address: "수림로 81번길",
    price: String(40000).toLocaleString(),
    rate: 3.3,
  },
];

export default function Home() {
  const [filter, setFilter] = useState<string>(" ");

  return (
    <div
      className="min-h-screen"
      style={{ maxWidth: "1280px", margin: "0 auto" }}
    >
      <Header />

      {/* Hero Section */}
      <section
        className="container mx-auto px-4 flex py-14 relative"
        style={{
          backgroundImage: `url("/IndexHero.svg")`,
          height: "656px",
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
          <p style={{ fontSize: "16px" }}>
            와글와글과 함께 새로운 특별한 숙소를 찾아보세요
            <span style={{ fontSize: "22px", fontWeight: "bold" }}>☺</span>
          </p>
          <MainSearchBar setFilter={setFilter} />
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto py-12">
        <div className="grid grid-cols-3 gap-6">
          {houses
            .filter((item) => item.si.includes(filter))
            .map((item, index) => (
              <Link key={index} href="/detail">
                <div
                  className="shadow-md rounded-lg overflow-hidden"
                  style={{ backgroundColor: "#fafafa", height: "500px" }}
                >
                  <div
                    style={{
                      minHeight: "300px",
                      maxHeight: "300px",
                      overflowY: "hidden",
                      backgroundImage: `url("/images/house/${index}.jpg")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="p-4">
                    <div className="text-sm text-gray-500">{item.si}</div>
                    <h3 className="font-semibold text-lg text-gray-800 mt-2">
                      {item.address}
                    </h3>
                    <div className="text-sm text-gray-600 mt-1">
                      {item.price}
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="text-red-500">★</span>
                      <span className="text-gray-800">{item.rate}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
