import React from 'react';
import { songCountContainer } from './song-count.module.scss';
import {
  pageColumn,
  columnMediumLarge,
  borderRight,
  borderBottom,
  columnMedium,
} from '@styles/column.module.scss';
import {
  fontPrimaryCondensed,
  center,
  row,
  left,
  fontPrimary,
  justifyContentCenter,
} from '@global';
import clsx from 'clsx';
import useSongData from 'hooks/useSongData';

export default function SongCount() {
  const count = useSongData();
  return (
    <div className={clsx(pageColumn, songCountContainer)}>
      <h2 className={clsx(fontPrimaryCondensed, center)}>Song Count</h2>
      <div className={clsx(row, fontPrimary, justifyContentCenter)}>
        <p
          style={{ textAlign: 'left' }}
          className={clsx(columnMediumLarge, borderRight)}
        >
          Song
        </p>
        <p className={clsx(columnMedium, borderRight)}>Play Count</p>
        <p style={{ textAlign: 'right' }} className={columnMedium}>
          Last Played
        </p>
      </div>
      <div className={justifyContentCenter}>
        <div>
          {count.map(([song, { count, formattedDate }]) => {
            return (
              <div className={row} key={song}>
                <p
                  style={{ textAlign: 'left' }}
                  className={clsx(fontPrimary, borderBottom, columnMediumLarge)}
                >
                  {song}
                </p>
                <p className={clsx(fontPrimary, borderBottom, columnMedium)}>
                  {count}
                </p>
                <p
                  style={{ textAlign: 'right' }}
                  className={clsx(fontPrimary, borderBottom, columnMedium)}
                >
                  {formattedDate}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
