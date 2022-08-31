import { useEffect, useState } from 'react';

export default function useDraftBoard() {
  const [draftBoard, setDraftBoard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://rhcp-api.netlify.app/draftboard.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(json => {
        setIsLoading(false);
        setDraftBoard(json);
      });
  }, []);
  return { draftBoard, isLoading };
}
