import React from 'react';
import {
  teamDetailsColumn,
  teamDetailsColumnMedium,
  teamDetailsColumnMediumLarge,
} from './team-details.module.scss';
import {
  column,
  columnMediumLarge,
  borderRight,
  borderBottom,
  columnMedium,
} from '@styles/column.module.scss';
import { row } from '@global';
import clsx from 'clsx';
import { teamDetails } from '../team-row.module.scss';

export default function TeamDetails({ songData }) {
  const { song, round, points, songCount, pointsTimesPlayCount } = songData;
  return (
    <div key={song} className={clsx(borderBottom, teamDetails, row)}>
      <p className={clsx(teamDetailsColumn, column, borderRight)}>{round}</p>
      <p
        className={clsx(
          teamDetailsColumnMediumLarge,
          columnMediumLarge,
          borderRight
        )}
      >
        {song}
      </p>
      <p className={clsx(teamDetailsColumnMedium, columnMedium, borderRight)}>
        {points}
      </p>
      <p className={clsx(teamDetailsColumnMedium, columnMedium, borderRight)}>
        {songCount}
      </p>
      <p className={clsx(teamDetailsColumn, column)}>{pointsTimesPlayCount}</p>
    </div>
  );
}
