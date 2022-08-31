import React, { useEffect, useState } from 'react';

export default function useSongData() {
  const [count, setCount] = useState([]);
  useEffect(() => {
    fetch('https://rhcp-api.netlify.app/songCount.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(json => setCount(json));
  }, []);
  return count;
}
