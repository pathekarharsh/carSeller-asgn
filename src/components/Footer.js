import React, { useState } from 'react';
import './Footer.css';

const Footer = ({ onPageChange }) => {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (page) => {
    setActivePage(page);
    onPageChange(page);
  };

  return (
    <div className="footer">
      <ul className="page-list">
        <li
          key="prev"
          onClick={() => handlePageClick(activePage - 1)}
          className={activePage === 1 ? 'disabled' : ''}
        >
          Previous
        </li>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
          <li
            key={page}
            className={activePage === page ? 'active-page' : ''}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </li>
        ))}
        <li
          key="next"
          onClick={() => handlePageClick(activePage + 1)}
          className={activePage === 10 ? 'disabled' : ''}
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default Footer;
