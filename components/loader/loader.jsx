import React from 'react';
import { ripple, loaderContainer } from './loader.module.scss';

export default function Loader() {
  return (
    <div className={loaderContainer}>
      <div className={ripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
