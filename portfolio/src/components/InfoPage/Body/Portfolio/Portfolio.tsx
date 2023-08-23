import { Fragment, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Portfolio.module.css';
import data from '../../../../utils/dataConfig';
import { iData } from '../../../../utils/interface';
import Modal from './Modal';

interface iItem {
  currentItems: iData[];
  handleShowModal: (id: string) => void;
}

const Items = ({ currentItems, handleShowModal }: iItem) => {
  return (
    <Fragment>
      {currentItems &&
        currentItems?.map((item, index) => (
          <div
            key={index}
            data-aos="fade-zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
          >
            <figure>
              <img className="rounded-lg" src={item.imgUrl} alt="" />
            </figure>
            <div className="absolute w-full h-full rounded-lg bg-zinc-700 bg-opacity-30 top-0 left-0 z-[5] hidden group-hover:block group-hover:cursor-pointer">
              <div className="w-full h-full flex justify-center items-center">
                <button
                  onClick={() => handleShowModal(item.id)}
                  className="text-primaryColor bg-headerColor hover:bg-primaryColor hover:text-darkColor py-2 px-4 rounded-lg ease-in duration-300"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
    </Fragment>
  );
};

const Portfolio = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [checkPaginate, setCheckPaginate] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState('');

  const itemsPerPage = 9;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems: iData[] = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const handleShowModal = (id: string) => {
    setShowModal(true);
    setActiveProjectId(id);
  };

  useEffect(() => {
    currentItems.length < itemsPerPage ? setCheckPaginate(false) : setCheckPaginate(true);
  }, []);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap mt-12">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-2xl font-bold">Các dự án gần đây của tôi</h3>
          </div>
          <div className="flex gap-3">
            <button className="text-primaryColor border border-solid border-primaryColor hover:bg-primaryColor hover:text-darkColor py-2 px-4 rounded-lg ease-in duration-200">
              Tất cả
            </button>
            <button className="text-primaryColor border border-solid border-primaryColor hover:bg-primaryColor hover:text-darkColor py-2 px-4 rounded-lg ease-in duration-200">
              Mới nhất
            </button>
            <button className="text-primaryColor border border-solid border-primaryColor hover:bg-primaryColor hover:text-darkColor py-2 px-4 rounded-lg ease-in duration-200">
              2022
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap py-12">
          <Items currentItems={currentItems} handleShowModal={handleShowModal} />
        </div>
        {checkPaginate && (
          <ReactPaginate
            activeClassName={`${styles.item} ${styles.active}`}
            breakClassName={`${styles.item}`}
            breakLabel={'...'}
            containerClassName={`${styles.pagination}`}
            disabledClassName={`${styles.disabledPage}`}
            marginPagesDisplayed={2}
            nextClassName={`${styles.icon} ${styles.next}`}
            nextLabel={<i className="ri-arrow-drop-right-line"></i>}
            onPageChange={handlePageClick}
            pageCount={pageCount}
            pageClassName={`${styles.item} ${styles.paginationPage}`}
            pageRangeDisplayed={2}
            previousClassName={`${styles.icon} ${styles.previous}`}
            previousLabel={<i className="ri-arrow-drop-left-line"></i>}
          />
        )}
      </div>
      {showModal && <Modal setShowModal={setShowModal} projectId={activeProjectId} />}
    </section>
  );
};

export default Portfolio;
