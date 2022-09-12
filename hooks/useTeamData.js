import { useState, useEffect } from 'react';
import useDraftBoard from 'hooks/useDraftBoard';
import useSongData from 'hooks/useSongData';

export const points = {
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 7,
  7: 8,
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
    count.map(({ song, count }) => {
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
  const [teams, setTeamData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { count: songData, isLoading: isSongDataLoading } = useSongData();
  const { draftBoard, isLoading: isDraftBoardLoading } = useDraftBoard();
  useEffect(() => {
    if (draftBoard.length > 0 && songData.length > 0) {
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
      setTeamData(teamsSortedByLeaders);
      const isLoading = isSongDataLoading || isDraftBoardLoading || isLoading;
      setIsLoading(isLoading);
    }
  }, [
    songData,
    draftBoard,
    isLoading,
    isSongDataLoading,
    isDraftBoardLoading,
    setTeamData,
    setIsLoading,
  ]);
  return { teams, isLoading };
}
