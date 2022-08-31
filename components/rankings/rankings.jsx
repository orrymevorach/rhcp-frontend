import React from 'react';
import ColumnHeadings from '../column-headings/column-headings';
import TeamRow from '@components/team-row/team-row';
import columnStyles from '@styles/column.module.scss';
import globalStyles from '@global';
import useTeamData from 'hooks/useTeamData';
import Loader from '@components/loader/loader';

export default function Rankings() {
  const { teams, isLoading } = useTeamData();
  return (
    <div className={columnStyles.pageColumn}>
      <div className={globalStyles.justifyContentCenter}>
        <ColumnHeadings />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
}
