"use client";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const busanDistricts = [
  "중구",
  "서구",
  "동구",
  "영도구",
  "부산진구",
  "동래구",
  "남구",
  "북구",
  "해운대구",
  "사하구",
  "금정구",
  "강서구",
  "연제구",
  "수영구",
  "사상구",
  "기장군",
  "경상남도 함안군",
];

export interface IMainSearchBar {
  setFilter: (filter: string) => void;
}

export const MainSearchBar = ({ setFilter }: IMainSearchBar) => {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isCheckInModalOpen, setIsCheckInModalOpen] = useState(false);
  const [isCheckOutModalOpen, setIsCheckOutModalOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);

  const [location, setLocation] = useState("부산 광역시");
  const [checkInDate, setCheckInDate] = useState<Date>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date>(null);
  const [guests, setGuests] = useState(2);

  const openModal = (modalSetter) => {
    modalSetter(true);
  };

  const closeModal = (modalSetter) => {
    modalSetter(false);
  };

  return (
    <div>
      <div
        className="bg-white shadow-lg rounded-full flex items-center p-4 max-w-screen-lg mx-auto"
        style={{
          height: "100px",
          width: "1000px",
          padding: 0,
          paddingLeft: "2rem",
          marginLeft: "70px",
          marginTop: "60px",
        }}
      >
        <div className="flex-grow flex items-center space-x-6">
          {/* 위치 */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => openModal(setIsLocationModalOpen)}
          >
            <FaMapMarkerAlt className="text-orange-500" />
            <div>
              <div className="text-gray-700 font-semibold">위치</div>
              <div className="text-gray-500 text-sm">
                {location ? location : "위치를 선택하세요"}
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className="border-l border-gray-300 h-12"></div>

          {/* 체크인 */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => openModal(setIsCheckInModalOpen)}
          >
            <FaCalendarAlt className="text-orange-500" />
            <div>
              <div className="text-gray-700 font-semibold">체크인</div>
              <div className="text-gray-500 text-sm">
                {checkInDate ? checkInDate.toLocaleDateString() : "날짜 선택"}
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className="border-l border-gray-300 h-12"></div>

          {/* 체크아웃 */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => openModal(setIsCheckOutModalOpen)}
          >
            <FaCalendarAlt className="text-orange-500" />
            <div>
              <div className="text-gray-700 font-semibold">체크아웃</div>
              <div className="text-gray-500 text-sm">
                {checkOutDate ? checkOutDate.toLocaleDateString() : "날짜 선택"}
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className="border-l border-gray-300 h-12"></div>

          {/* 인원 수 */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => openModal(setIsGuestsModalOpen)}
          >
            <FaUser className="text-orange-500" />
            <div>
              <div className="text-gray-700 font-semibold">인원 수</div>
              <div className="text-gray-500 text-sm">총 {guests}명</div>
            </div>
          </div>
        </div>

        {/* 검색 버튼 */}
        <button
          className="bg-orange-400 text-white rounded-full h-full px-8 text-lg font-semibold"
          style={{
            height: "100%",
            width: "200px",
          }}
          onClick={() => {
            setFilter(location);
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: "normal",
            }}
          >
            <FaSearch /> 검색
          </div>
        </button>
      </div>

      {/* 위치 선택 모달 */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div
            className="bg-white p-6 rounded-lg"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 className="text-xl font-semibold mb-4">위치 선택</h2>
            {/* 위치 선택 요소 */}
            <ul className="grid grid-cols-4 gap-4">
              {busanDistricts.map((district) => (
                <li key={district}>
                  <button
                    className="mt-4 bg-orange-400 text-white px-4 py-2 rounded w-full"
                    onClick={() => {
                      setLocation(`${district}`);
                      setIsLocationModalOpen(false);
                    }}
                  >
                    {district}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="mt-4 bg-gray-300 px-4 py-2 rounded"
              onClick={() => closeModal(setIsLocationModalOpen)}
            >
              닫기
            </button>
          </div>
        </div>
      )}

      {/* 체크인 날짜 선택 모달 */}
      {isCheckInModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">체크인 날짜 선택</h2>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => {
                setCheckInDate(date as Date);
                closeModal(setIsCheckInModalOpen);
              }}
              inline
            />
            <button
              className="mt-4 bg-gray-300 px-4 py-2 rounded"
              onClick={() => closeModal(setIsCheckInModalOpen)}
            >
              닫기
            </button>
          </div>
        </div>
      )}

      {/* 체크아웃 날짜 선택 모달 */}
      {isCheckOutModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">체크아웃 날짜 선택</h2>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => {
                setCheckOutDate(date as Date);
                closeModal(setIsCheckOutModalOpen);
              }}
              inline
            />
            <button
              className="mt-4 bg-gray-300 px-4 py-2 rounded"
              onClick={() => closeModal(setIsCheckOutModalOpen)}
            >
              닫기
            </button>
          </div>
        </div>
      )}

      {/* 인원 수 선택 모달 */}
      {isGuestsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">인원 수 선택</h2>
            <div className="flex items-center mb-4">
              <label className="mr-4 text-gray-700">총 인원 수:</label>
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                min="1"
                className="border rounded px-3 py-1 w-16"
              />
            </div>
            <button
              className="mt-4 bg-gray-300 px-4 py-2 rounded"
              onClick={() => closeModal(setIsGuestsModalOpen)}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
