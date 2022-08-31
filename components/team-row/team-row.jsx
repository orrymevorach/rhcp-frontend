import React, { useState } from 'react';
import {
  column,
  borderRight,
  columnMedium,
  columnMediumLarge,
} from '@styles/column.module.scss';
import styles from './team-row.module.scss';
import teamDetailsStyles from './team-details/team-details.module.scss';
import globalStyles from '@global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import TeamDetails from './team-details/team-details';
import clsx from 'clsx';
import teamRowStyles from './team-row.module.scss';

const TeamDetailsTitleRow = () => {
  return (
    <div className={clsx(globalStyles.row, styles.teamDetailsTitleRow)}>
      <p className={clsx(teamDetailsStyles.teamDetailsColumn, column)}>Round</p>
      <p
        className={clsx(
          teamDetailsStyles.teamDetailsColumnMediumLarge,
          columnMediumLarge
        )}
      >
        Song
      </p>
      <p
        className={clsx(
          teamDetailsStyles.teamDetailsColumnMedium,
          columnMedium
        )}
      >
        Points per play
      </p>
      <p
        className={clsx(
          teamDetailsStyles.teamDetailsColumnMedium,
          columnMedium
        )}
      >
        Times Played
      </p>
      <p className={clsx(teamDetailsStyles.teamDetailsColumn, column)}>Total</p>
    </div>
  );
};

export default function TeamRow({
  teamName,
  songSelections,
  totalPoints,
  place,
}) {
  const [showPoints, setShowPoints] = useState(false);
  const iconToShow = showPoints ? faChevronUp : faChevronDown;
  const textToShow = showPoints ? 'Hide team' : 'Show team';
  return (
    <div>
      <button
        className={clsx(
          teamRowStyles.teamButton,
          globalStyles.fontPrimary,
          showPoints && teamRowStyles.showPoints
        )}
        onClick={() => setShowPoints(!showPoints)}
      >
        <p className={clsx(column, borderRight)}>{place}</p>
        <p className={clsx(column, borderRight)}>{teamName}</p>
        <p className={clsx(column, borderRight)}>{totalPoints}</p>

        <div
          className={clsx(
            globalStyles.row,
            columnMedium,
            globalStyles.justifyContentCenter
          )}
        >
          <p className={globalStyles.fontPrimary}>{textToShow}</p>
          <FontAwesomeIcon
            icon={iconToShow}
            className={teamRowStyles.chevron}
          />
        </div>
      </button>
      {showPoints && (
        <div className={teamRowStyles.teamDetailsContainer}>
          <TeamDetailsTitleRow />
          {songSelections.map(song => {
            return <TeamDetails songData={song} key={song.song} />;
          })}
        </div>
      )}
    </div>
  );
}
