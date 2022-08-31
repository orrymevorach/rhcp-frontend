import { useEffect, useState } from 'react';

export default function useDraftBoard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://rhcp-api.netlify.app/draftboard.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(json => setData(json));
  }, []);
  return data;
}
