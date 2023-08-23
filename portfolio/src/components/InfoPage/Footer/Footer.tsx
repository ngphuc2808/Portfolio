const Footer = () => {
  return (
    <footer className="bg-zinc-700 py-12">
      <div className="container">
        <div className="sm:flex justify-between items-start md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-xl leading-10 text-headingColor font-semibold mb-5 md:text-2xl">
              Bạn có muốn sở hữu một Website đẹp?
            </h2>
            <a href="#contact">
              <button className="flex items-center gap-2 text-primaryColor border border-solid border-primaryColor hover:bg-primaryColor hover:text-darkColor py-2 px-4 rounded-lg ease-in duration-200">
                <i className="ri-mail-line"></i>
                Kết nối
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="italic text-white leading-7 mt-4 sm:mt-0">
              By leveraging known knowledge and technology. i yearn become a Fullstack developer.
            </p>
            <div className="flex items-center gap-7 mt-7">
              <span className="text-white text-sm font-semibold">Theo dõi tôi trên:</span>
              <span className="ease-in duration-200 hover:rotate-[30deg]">
                <a
                  href="https://www.facebook.com/Hoangphuc2808/"
                  target="_blank"
                  className="text-white text-2xl font-medium cursor-pointer hover:text-headingColor"
                >
                  <i className="ri-facebook-circle-line"></i>
                </a>
              </span>
              <span className="ease-in duration-200 hover:rotate-[30deg]">
                <a
                  href="https://www.instagram.com/phucnh_/"
                  target="_blank"
                  className="text-white text-2xl font-medium cursor-pointer hover:text-headingColor"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span className="ease-in duration-200 hover:rotate-[30deg]">
                <a
                  href="https://github.com/ngphuc2808"
                  target="_blank"
                  className="text-white text-2xl font-medium cursor-pointer hover:text-headingColor"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span className="ease-in duration-200 hover:rotate-[30deg]">
                <a
                  href="https://www.linkedin.com/in/phucnh2808"
                  target="_blank"
                  className="text-white text-2xl font-medium cursor-pointer hover:text-headingColor"
                >
                  <i className="ri-linkedin-box-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="menu mt-12">
          <ul className="flex items-center justify-center gap-10 text-white">
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
            <li>
              <a className="hover:text-headingColor ease-in duration-200" href="#portfolio">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
