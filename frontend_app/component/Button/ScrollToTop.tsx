import React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showBtn && (
        <div
          className="back-to-top d-flex justify-content-center align-items-center fs-5 fw-bold"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: 20, color: '#198754' }} className="scroll-top" />
        </div>
      )}
    </>
  );
};
export { ScrollToTop };
