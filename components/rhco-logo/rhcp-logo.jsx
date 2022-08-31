import React from 'react';
import styles from './rhcp-logo.module.scss';
import globalStyles from '@styles/global.module.scss';
import clsx from 'clsx';

export default function RhcpLogo() {
  return (
    <div className={clsx(globalStyles.row, styles.headerContainer)}>
      <h2 className={globalStyles.fontPrimaryCondensed}>Mock</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/33/Red_Hot_Chili_Peppers_logo.png"
        alt=""
        className={styles.logo}
      />
      <h2 className={globalStyles.fontPrimaryCondensed}>Draft</h2>
    </div>
  );
}
