import Header from "@components/common/Header";
import { Fragment } from "react";

const Login = () => {
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
        {/* 로그인 폼 */}
        <div className="w-80">
          <input
            type="text"
            placeholder="아이디"
            className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400"
            style={{ fontFamily: "Jua" }}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full px-4 py-3 mb-6 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400"
            style={{ fontFamily: "Jua" }}
          />

          <button
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold"
            style={{ fontFamily: "Jua" }}
          >
            <a href="/">로그인</a>
          </button>
        </div>

        {/* 회원가입 링크 */}
        <div className="mt-6 text-gray-600" style={{ fontFamily: "Jua" }}>
          계정이 아직 없으신가요?{" "}
          <a href="/signup" className="text-orange-400 font-semibold">
            회원가입하기
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
