import CountUp from 'react-countup';

import images from '../../../../assets/images';

const About = () => {
  return (
    <section className="pt-0 mt-[80px]" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h5 data-aos="fade-right" data-aos-duration="1500" className="text-headingColor font-semibold">
              Xin chào,
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-bold text-2xl leading-[38px] sm:text-3xl sm:leading-[35px] mt-7"
            >
              Tôi là Nguyễn Hoàng Phúc,
              <br />
              Software Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="py-2 px-4 rounded-lg font-medium flex items-center gap-2 bg-headerColor text-primaryColor hover:bg-primaryColor hover:text-darkColor ease-in duration-300">
                  <i className="ri-mail-line"></i>
                  Kết nối
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-semibold border-b border-solid border-smallTextColor hover:text-primaryColor hover:border-primaryColor ease-in duration-300"
              >
                Xem thông tin
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-white mt-10 font-medium text-base leading-7 sm:pl-10 sm:pr-10"
            >
              <span className="text-headingColor">
                <i className="ri-lightbulb-line"></i>
              </span>
              <span className="italic">" Người mà bạn nên cố gắng vượt qua chính là bản thân của ngày trước. "</span>
            </p>
            <div className="flex items-center gap-7 mt-7">
              <span className="text-smallTextColor text-sm font-semibold">Theo dõi tôi trên:</span>
              <span className="ease-in duration-200 hover:rotate-[30deg]">
                <a
                  href="https://www.facebook.com/Hoangphuc2808/"
                  target="_blank"
                  className="text-smallTextColor text-xl font-medium cursor-pointer hover:text-headingColor"
                >
                  <i className="ri-facebook-circle-line"></i>
                </a>
              </span>
              <span className="ease-in duration-200 hover:rotate-[30deg]">
                <a
                  href="https://www.instagram.com/phucnh_/"
                  target="_blank"
                  className="text-smallTextColor text-xl font-medium cursor-pointer hover:text-headingColor"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span className="ease-in duration-200 hover:rotate-[30deg]">
                <a
                  href="https://github.com/ngphuc2808"
                  target="_blank"
                  className="text-smallTextColor text-xl font-medium cursor-pointer hover:text-headingColor"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span className="ease-in duration-200 hover:rotate-[30deg]">
                <a
                  href="https://www.linkedin.com/in/phucnh2808"
                  target="_blank"
                  className="text-smallTextColor text-xl font-medium cursor-pointer hover:text-headingColor"
                >
                  <i className="ri-linkedin-box-line"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={images.avatar} className="rounded-2xl" alt="avatar" />
            </figure>
          </div>
          <div className="flex justify-between text-center mt-10 flex-wrap gap-3 md:basis-1/6 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="flex flex-col gap-2 mb-10">
              <h2 className="text-headingColor font-semibold text-3xl">
                <CountUp start={0} end={1} duration={1} suffix="+" />
              </h2>
              <h4 className="text-smallTextColor font-medium text-base">Kinh nghiệm</h4>
            </div>
            <div className="flex flex-col gap-2 mb-10">
              <h2 className="text-headingColor font-semibold text-3xl">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-smallTextColor font-medium text-base">Tỉ lệ thành công</h4>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-headingColor font-semibold text-3xl">
                <CountUp start={0} end={2} duration={1} suffix="+" />
              </h2>
              <h4 className="text-smallTextColor font-medium text-base">Dự án hoàn thành</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
