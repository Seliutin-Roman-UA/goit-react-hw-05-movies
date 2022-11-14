import { useEffect, useRef } from 'react';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import css from './Pagination.module.css';

export function Pagination({ max = 1, callback, currentPage }) {
  const refEl = useRef();

  useEffect(()=>{refEl.current.focus()}, []);
  // setTimeout(() => {
  //   console.log(refEl);
  //   refEl.current.focus();
  // }, 1000);

  const incrementPage = () => {
    if (currentPage + 1 > max) return;
    callback(1);
  };
  const decrementPage = () => {
    if (currentPage - 1 < 1) return;
    callback(-1);
  };
  const jumpToPage = e => {
    let value;
    if (e.currentTarget.nodeName === 'SPAN') {
      value = e.currentTarget.textContent;
    } else {
      value = e.currentTarget.value;
    }
    if (value > max || value < 1) return;
    callback(value - currentPage);
  };
  return (
    <div className={css.wrapper}>
      <div className={css.pagination}>
        <span className={css.pagPage} onClick={decrementPage}>
          <VscTriangleLeft className={css.pagIcon} />
        </span>
        <span className={css.pagPage} onClick={jumpToPage}>
          1
        </span>
        <input
          type="text"
          value={currentPage}
          onChange={jumpToPage}
          ref={refEl}
          className={css.pagInput}
        />
        <span className={css.pagPage} onClick={jumpToPage}>
          {max}
        </span>
        <span className={css.pagPage} onClick={incrementPage}>
          <VscTriangleRight className={css.pagIcon} />
        </span>
      </div>
    </div>
  );
}
