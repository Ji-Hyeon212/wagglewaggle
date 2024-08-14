import { Fragment } from "react";
import Header from "@components/common/Header";

interface TravelHistory {
  id: number;
  si: string;
  address: string;
  price: number;
  rate: number;
  userRating: number;
  visitDate: string;
}

const travelHistories: TravelHistory[] = [
  {
    id: 1,
    si: "부산 광역시 기장군",
    address: "손이 큰 할머니댁",
    price: 30000,
    rate: 4.7,
    userRating: 4,
    visitDate: "2024-08-01",
  },
  {
    id: 2,
    si: "부산 광역시 사상구",
    address: "행복한 집",
    price: 30000,
    rate: 4.4,
    userRating: 5,
    visitDate: "2024-07-21",
  },
];

const MyPage = () => {
  return (
    <Fragment>
      <Header />
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">마이페이지</h1>
          {/* 프로필 섹션 */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <img
                src="/images/profile.avif"
                alt="Profile"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  이웃집 할부지
                </h2>
                <p className="text-gray-600">honggildong@example.com</p>
                <p className="text-gray-600 mt-1">
                  계좌 번호: 우리은행 1111-222-112233
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            나의 여행 히스토리
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelHistories.map((history) => (
              <div
                key={history.id}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {history.address}
                </h3>
                <p className="text-gray-500">{history.si}</p>
                <p className="text-gray-600 mt-2">
                  방문 날짜: {history.visitDate}
                </p>
                <p className="text-gray-600 mt-2">
                  가격: ₩{history.price.toLocaleString()}
                </p>
                <p className="text-gray-600 mt-2">평점: {history.rate} / 5</p>
                <p className="text-orange-400 mt-2 font-semibold">
                  내가 준 평점: {history.userRating} / 5
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyPage;
