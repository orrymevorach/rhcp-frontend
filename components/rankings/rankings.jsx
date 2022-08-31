import React from 'react';
import ColumnHeadings from '../column-headings/column-headings';
// import { teams } from '../../json';
import TeamRow from '@components/team-row/team-row';
import columnStyles from '@styles/column.module.scss';
import globalStyles from '@global';
import useTeamData from 'hooks/useTeamData';

export default function Rankings() {
  const teams = useTeamData();
  return (
    <div className={columnStyles.pageColumn}>
      <div className={globalStyles.justifyContentCenter}>
        <ColumnHeadings />
      </div>
      <div className={globalStyles.justifyContentCenterColumn}>
        {teams.map(([teamName, songSelections, totalPoints], index) => {
          return (
            <TeamRow
              teamName={teamName}
              songSelections={songSelections}
              totalPoints={totalPoints}
              key={teamName}
              place={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
}
