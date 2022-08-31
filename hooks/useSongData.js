import { useEffect, useState } from 'react';

export default function useSongData() {
  const [count, setCount] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://rhcp-api.netlify.app/songCount.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(json => {
        setIsLoading(false);
        setCount(json);
      });
  }, []);
  return { count, isLoading };
}
