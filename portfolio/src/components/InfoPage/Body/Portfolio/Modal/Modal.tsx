import { Fragment } from 'react';
import data from '../../../../../utils/dataConfig';

interface iProject {
  projectId: string;
  setShowModal: (value: boolean) => void;
}

const Modal = ({ projectId, setShowModal }: iProject) => {
  const portfolio = data.find((value) => value.id === projectId);
  return (
    <div className="fixed inset-0 z-20 flex justify-center items-center">
      <div
        onClick={() => setShowModal(false)}
        className="fixed inset-0 z-20 bg-headerColor bg-opacity-40 cursor-pointer"
      ></div>
      <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-lg transform -translate-x-1/2 -translate-y-1/2 p-5">
        <figure>
          <img className="rounded-lg" src={portfolio?.imgUrl} alt="img project" />
        </figure>

        <div>
          <h2 className="text-2xl text-pr font-bold my-5">{portfolio?.title}</h2>
          <p className="text-base leading-7 text-darkColor">{portfolio?.description}</p>
          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-darkColor text-lg font-semibold">Công nghệ sử dụng:</h4>
            {portfolio?.technologies.map((item, index) => (
              <span key={index} className="bg-gray-200 py-1 px-2 rounded-md leading-0 text-sm">
                {item}
              </span>
            ))}
          </div>
          <a href={portfolio?.siteUrl}>
            <button className="bg-headerColor text-primaryColor py-2 px-4 my-5 rounded-lg font-medium hover:bg-primaryColor hover:text-darkColor ease-in duration-300">
              Xem trang
            </button>
          </a>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="flex items-center justify-center w-6 h-6 text-xl bg-white absolute top-7 right-7 rounded"
        >
          <i className="ri-close-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
