import { useEffect, useRef, useState } from 'react';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import css from './Pagination.module.css';

export function Pagination({ max = 1, callback, currentPage = 1 }) {
  const refEl = useRef();

  useEffect(() => {
    refEl.current.focus();
    console.log('refEl.current   === ', refEl.current.value);
    refEl.current.value = currentPage;
  }, [currentPage]);

  const incrementPage = () => {
    if (currentPage + 1 > max) return;
    callback(currentPage + 1);
  };

  const decrementPage = () => {
    if (currentPage - 1 < 1) return;
    callback(currentPage - 1);
  };
  const jumpToPage = e => {
    e.preventDefault();
    let value;
    if (e.currentTarget.nodeName === 'SPAN') {
      value = +e.currentTarget.textContent;
    } else {
      console.log('e', e.target.elements['page'].value);
      value = +e.target.elements['page'].value;
    }
    if (value > max || value < 1) return;
    callback(value);
  };
  return (
    <form className={css.pagination} onSubmit={jumpToPage}>
      <span className={css.pagPage} onClick={decrementPage}>
        <VscTriangleLeft className={css.pagIcon} />
      </span>
      <span className={css.pagPage} onClick={jumpToPage}>
        1
      </span>
      <input name="page" type="text" ref={refEl} className={css.pagInput} />
      <span className={css.pagPage} onClick={jumpToPage}>
        {max}
      </span>
      <span className={css.pagPage} onClick={incrementPage}>
        <VscTriangleRight className={css.pagIcon} />
      </span>
    </form>
  );
}
