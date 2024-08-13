export const Header = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-gray-800">와글와글</div>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          탐색하기
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          숙소 등록하기
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          마이페이지
        </a>
      </nav>
      <button className="bg-orange-400 text-white px-4 py-2 rounded-full">
        로그인
      </button>
    </div>
  </header>
);
