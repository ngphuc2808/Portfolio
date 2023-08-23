const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-bold text-2xl">Liên lạc</h2>
        <div className="md:flex mt-7 justify-between items-center rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.937094170603!2d106.70152301139053!3d10.7393317598311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f99370d3c79%3A0xff5050e57e1735c7!2zNTg1IE5ndXnhu4VuIFRo4buLIFRo4bqtcCwgVMOibiBQaG9uZywgUXXhuq1uIDcsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1692777752360!5m2!1svi!2s"
              className="border-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center px-4 lg:px-8 py-8 bg-headerColor">
            <form className="w-full">
              <div className="mb-5">
                <input
                  className="w-full p-3 focus:outline-none rounded"
                  type="text"
                  placeholder="Nhập tên của bạn"
                  name=""
                  id=""
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full p-3 focus:outline-none rounded"
                  type="email"
                  placeholder="Nhập email của bạn"
                  name=""
                  id=""
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full p-3 focus:outline-none rounded"
                  type="text"
                  placeholder="Chủ đề"
                  name=""
                  id=""
                />
              </div>
              <div className="mb-5">
                <textarea
                  typeof="text"
                  rows={3}
                  className="w-full p-3 focus:outline-none rounded"
                  placeholder="Nhập tin nhắn của bạn"
                  name=""
                  id=""
                />
              </div>
              <button className="w-full p-3 focus:outline-none rounded bg-smallTextColor text-darkColor hover:bg-headingColor text-center ease-linear duration-200">
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
