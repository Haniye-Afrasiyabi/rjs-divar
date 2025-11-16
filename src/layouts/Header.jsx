import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center border-b-2 border-gray-200 py-2.5 mb-5">
      <div className="flex">
        <Link to="/">
          <img src="divar.svg" className="w-11 ml-10" />
        </Link>
        <span className="flex items-center text-gray-500 h-12">
          <img src="location.svg" />
          <p className="mr-1 text-base">تهران</p>
        </span>
      </div>
      <div className="flex">
        <Link to="/auth">
          <span className="flex items-center text-gray-500 h-12">
            <img src="profile.svg" />
            <p className="mr-1 text-base">دیوار من</p>
          </span>
        </Link>
        <Link
          to="/dashboard"
          className="bg-[#a62626] text-white w-20 h-10 leading-10 text-center rounded mr-10"
        >
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
