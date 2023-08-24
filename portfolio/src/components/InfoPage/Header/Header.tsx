import 'remixicon/fonts/remixicon.css';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-[100] w-full h-[80px] bg-headerColor shadow-lg leading-20 flex items-center ">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[40px] h-[40px] bg-primaryColor text-darkColor text-lg rounded-full flex items-center justify-center font-medium cursor-default">
              P
            </span>
            <div className="leading-5">
              <h2 className="text-lg text-smallTextColor font-semibold cursor-default">Phúc Nguyễn</h2>
              <p className="text-sm text-smallTextColor font-medium cursor-default">Front-end Developer</p>
            </div>
          </div>

          <div className="menu hidden sm:block">
            <ul className="flex items-center gap-10 text-smallTextColor">
              <li>
                <a className="hover:text-headingColor ease-in duration-200" href="#about">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a className="hover:text-headingColor ease-in duration-200" href="#services">
                  Dịch vụ
                </a>
              </li>
              <li>
                <a className="hover:text-headingColor ease-in duration-200" href="#portfolio">
                  Sản phẩm
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <button className="items-center gap-2 text-primaryColor border border-solid border-primaryColor hover:bg-primaryColor hover:text-darkColor py-2 px-4 rounded-lg ease-in duration-200 hidden sm:flex">
              <i className="ri-send-plane-line"></i>
              <a className="" href="#contact">
                Liên hệ
              </a>
            </button>
            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
