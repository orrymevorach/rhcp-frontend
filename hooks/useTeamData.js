import { useState, useEffect } from 'react';

import draftBoard from 'json/draftBoard.json';
import useSongData, { getSongData } from 'hooks/useSongData';
// import count from '../../../api/json/songCount.json';

const points = {
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 7,
  7: 9,
  8: 9,
  9: 10,
  10: 11,
  11: 12,
  12: 13,
  13: 14,
};

const addPointValuesToEachSong = (draftBoard, count = []) => {
  return draftBoard.map(songData => {
    let songCount = 0;
    count.map(([song, { count }]) => {
      if (songData.song === song) {
        songCount = count;
      }
    });
    return {
      ...songData,
      points: points[songData.round],
      songCount,
    };
  });
};

const createTeamsWithSongData = draftBoard => {
  const teams = {};
  draftBoard.map(songData => {
    if (!teams[songData.team]) {
      teams[songData.team] = [
        {
          ...songData,
          pointsTimesPlayCount: songData.songCount * songData.points,
        },
      ];
    } else {
      teams[songData.team].push({
        ...songData,
        pointsTimesPlayCount: songData.songCount * songData.points,
      });
    }
  });
  return teams;
};

const calculateTeamsTotalPoints = teams => {
  const teamsAsArray = Object.entries(teams);
  return teamsAsArray.map(([teamName, songSelections]) => {
    let totalPoints = 0;
    songSelections.map(song => {
      totalPoints = totalPoints + song.pointsTimesPlayCount;
    });
    return [teamName, songSelections, totalPoints];
  });
};

const sortTeamsByTotalPoints = teamsWithTotalPoints => {
  return teamsWithTotalPoints.sort((a, b) => {
    const teamAPoints = a[2];
    const teamBPoints = b[2];
    if (teamAPoints < teamBPoints) return 1;
    else return -1;
  });
};

export default function useTeamData() {
  const [teamData, setTeamData] = useState([]);
  const songData = useSongData();
  useEffect(() => {
    if (songData) {
      const draftBoardWithSongPointTotals = addPointValuesToEachSong(
        draftBoard,
        songData
      );
      const teamsObject = createTeamsWithSongData(
        draftBoardWithSongPointTotals
      );
      const teamsAsArrayWithTotalPoints =
        calculateTeamsTotalPoints(teamsObject);
      const teamsSortedByLeaders = sortTeamsByTotalPoints(
        teamsAsArrayWithTotalPoints
      );
      setTeamData(teamsAsArrayWithTotalPoints);
    }
  }, [songData]);
  return teamData;
}

// export { teamsSortedByLeaders as teams };
