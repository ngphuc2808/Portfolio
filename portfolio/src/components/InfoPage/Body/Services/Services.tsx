import images from '../../../../assets/images';

const Services = () => {
  return (
    <section id="services">
      <div className="container pt-28">
        <div className="text-center">
          <h2 className="text-headingColor font-bold text-3xl mb-5">Tôi có thể giúp gì cho bạn?</h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-smallTextColor font-medium text-base leading-7">
            Hiện tại, đây là những kỹ năng và các dịch vụ tôi có thể làm. Xin mời các bạn tham khảo (sẽ còn cập nhật
            trong tương lai).
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center sm:py-12">
        <div className="w-full py-3 px-2 sm:max-w-2xl sm:mx-auto sm:px-0">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            <div className="hidden absolute w-0.5 sm:block bg-primaryColor h-full left-1/2 transform -translate-x-1/2"></div>
            {/* Left Card */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div data-aos="fade-right" data-aos-duration="1200" className="w-full sm:w-1/2 sm:pr-9">
                    <div className="bg-headerColor shadow-lg p-4 rounded shadow group cursor-pointer hover:bg-zinc-800 ease-in duration-300">
                      <h3 className="text-headingColor font-semibold mt-3 sm:mt-0 mb-3 text-xl">
                        Frontend Development
                      </h3>
                      <p className="text-sm text-smallTextColor font-medium group-hover:text-white leading-7">
                        - HTML, CSS, JavaScript (TypeScript), ReactJS, NextJS.
                        <br />- CSS Frameworks: SCSS, Bootstrap, Tailwind, NextUI, Material UI.
                        <br />- JavaScript Library: Redux.
                        <br />- Responsive, UI/UX Design.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-headerColor border-primaryColor border-2 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                  <figure>
                    <img src={images.frontend} alt="frontend img" />
                  </figure>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1300"
                    className="w-full sm:w-1/2 sm:pl-9"
                  >
                    <div className="bg-headerColor shadow-lg p-4 rounded shadow group cursor-pointer hover:bg-zinc-800 ease-in duration-300">
                      <h3 className="text-headingColor font-semibold mt-3 sm:mt-0 mb-3 text-xl">Backend Development</h3>
                      <p className="text-sm text-smallTextColor font-medium group-hover:text-white leading-7">
                        - Java Spring, NodeJs (ExpressJs).
                        <br />
                        - RESTful API.
                        <br />- Database: MySQL, NoSQL (MongoDB).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-headerColor border-primaryColor border-2 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                  <figure>
                    <img src={images.backend} alt="backend img" />
                  </figure>
                </div>
              </div>
            </div>

            {/* Left Card */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1400"
                    className="w-full sm:w-1/2 sm:pr-9"
                  >
                    <div className="bg-headerColor shadow-lg p-4 rounded shadow group cursor-pointer hover:bg-zinc-800 ease-in duration-300">
                      <h3 className="text-headingColor font-semibold mt-3 sm:mt-0 mb-3 text-xl">DevOps Engineer</h3>
                      <p className="text-sm text-smallTextColor font-medium group-hover:text-white leading-7">
                        Đang cập nhật...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-headerColor border-primaryColor border-2 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                  <figure>
                    <img src={images.devops} alt="devops img" />
                  </figure>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div
                    data-aos="fade-left"
                    data-aos-delay="150"
                    data-aos-duration="1500"
                    className="w-full sm:w-1/2 sm:pl-9"
                  >
                    <div className="bg-headerColor shadow-lg p-4 rounded shadow group cursor-pointer hover:bg-zinc-800 ease-in duration-300">
                      <h3 className="text-headingColor font-semibold mt-3 sm:mt-0 mb-3 text-xl">Apps Development</h3>
                      <p className="text-sm text-smallTextColor font-medium group-hover:text-white leading-7">
                        Đang cập nhật...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-headerColor border-primaryColor border-2 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                  <figure>
                    <img src={images.apps} alt="apps img" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
