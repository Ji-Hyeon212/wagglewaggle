// import { Fragment } from "react";
// import Header from "@components/common/Header";
//
// const Signup = () => {
//   return (
//     <Fragment>
//       <Header />
//       <div className="min-h-screen flex flex-col items-center bg-white">
//         {/* 로고 영역 */}
//         <div
//           className="text-orange-400 text-6xl mb-8"
//           style={{ fontFamily: "Jua", marginTop: "200px" }}
//         >
//           와글와글
//         </div>
//         {/* 회원가입 폼 */}
//         <div className="w-80">
//           <input
//             type="text"
//             placeholder="아이디"
//             className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400"
//             style={{ fontFamily: "Jua" }}
//           />
//           <input
//             type="email"
//             placeholder="이메일"
//             className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400"
//             style={{ fontFamily: "Jua" }}
//           />
//           <input
//             type="password"
//             placeholder="비밀번호"
//             className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400"
//             style={{ fontFamily: "Jua" }}
//           />
//           <input
//             type="password"
//             placeholder="비밀번호 확인"
//             className="w-full px-4 py-3 mb-6 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400"
//             style={{ fontFamily: "Jua" }}
//           />
//           <input
//             type="number"
//             placeholder="나이"
//             className="w-full px-4 py-3 mb-6 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400"
//             style={{ fontFamily: "Jua" }}
//           />
//           <button
//             className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold"
//             style={{ fontFamily: "Jua" }}
//           >
//             <a href="/">회원가입</a>
//           </button>
//         </div>
//
//         {/* 로그인 링크 */}
//         <div className="mt-6 text-gray-600" style={{ fontFamily: "Jua" }}>
//           이미 계정이 있으신가요?{" "}
//           <a href="/login" className="text-orange-400 font-semibold">
//             로그인하기
//           </a>
//         </div>
//       </div>
//     </Fragment>
//   );
// };
//
// export default Signup;
"use client";
import React, { Fragment, useState } from "react";
import Header from "@components/common/Header";

const Signup: React.FC = () => {
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);

  const openPassModal = () => {
    setIsPassModalOpen(true);
  };

  const closePassModal = () => {
    setIsPassModalOpen(false);
  };

  return (
    <Fragment>
      <Header />
      <div className="min-h-screen flex flex-col items-center bg-white">
        {/* 로고 영역 */}
        <div
          className="text-orange-400 text-6xl mb-8"
          style={{ fontFamily: "Jua", marginTop: "200px" }}
        >
          와글와글
        </div>
        {/* 회원가입 폼 */}
        <div className="w-80">
          <input
            type="text"
            placeholder="아이디"
            className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400"
            style={{ fontFamily: "Jua" }}
          />
          <input
            type="email"
            placeholder="이메일"
            className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400"
            style={{ fontFamily: "Jua" }}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400"
            style={{ fontFamily: "Jua" }}
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400"
            style={{ fontFamily: "Jua" }}
          />

          <div
            className="flex items-center"
            style={{
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            {/*<input*/}
            {/*  type="number"*/}
            {/*  placeholder="나이"*/}
            {/*  className="w-full px-4 py-3 mb-6 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400"*/}
            {/*  style={{ fontFamily: "Jua" }}*/}
            {/*/>*/}
            <button
              type="button"
              onClick={openPassModal}
              className="w-full ml-2 px-4 py-2 bg-orange-400 text-white rounded-lg"
              style={{ fontFamily: "Jua" }}
            >
              나이 (PASS 인증 / 휴대폰 인증 / 전화 인증)
            </button>
          </div>

          <button
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold"
            style={{ fontFamily: "Jua" }}
          >
            <a href="/">회원가입</a>
          </button>
        </div>

        {/* 로그인 링크 */}
        <div className="mt-6 text-gray-600" style={{ fontFamily: "Jua" }}>
          이미 계정이 있으신가요?{" "}
          <a href="/login" className="text-orange-400 font-semibold">
            로그인하기
          </a>
        </div>
      </div>

      {/* PASS 인증 모달 */}
      {isPassModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2
              className="text-2xl font-semibold mb-4 text-gray-800"
              style={{ fontFamily: "Jua" }}
            >
              PASS 인증
            </h2>
            <p className="text-gray-600 mb-4" style={{ fontFamily: "Jua" }}>
              본인 인증을 위해 PASS 인증을 진행해주세요.
            </p>
            <button
              onClick={closePassModal}
              className="w-full bg-orange-400 text-white py-3 rounded-lg text-lg font-semibold"
              style={{ fontFamily: "Jua" }}
            >
              인증 완료
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Signup;
