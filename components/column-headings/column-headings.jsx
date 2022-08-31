import React from 'react';
import {
  fontPrimaryCondensed,
  rankingsHeading,
  center,
  column,
  borderRight,
  columnMedium,
} from '@styles/column.module.scss';
import {
  fontPrimary,
  row,
  justifyContentCenter,
  justifyContentCenterColumn,
} from '@global';
import clsx from 'clsx';

export default function ColumnHeadings() {
  return (
    <div>
      <h2 className={clsx(fontPrimaryCondensed, rankingsHeading, center)}>
        Rankings
      </h2>
      <div className={clsx(row, fontPrimary)}>
        <p className={clsx(column, borderRight)}>Rank</p>
        <p className={clsx(column, borderRight)}>Team</p>
        <p className={clsx(column)}>Points</p>
        <p className={columnMedium}></p>
      </div>
    </div>
  );
}
