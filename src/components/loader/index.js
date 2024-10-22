import React from 'react';

import style from './loader.module.scss';

const Loader = () => {
  return (
    <div className={style.loaderClass}>
      <span
        className={`${style.spinner} ${style.spinnerLarge} ${style.spinnerBlue} ${style.spinnerFast}`}
      ></span>
    </div>
  );
};

export default Loader;
