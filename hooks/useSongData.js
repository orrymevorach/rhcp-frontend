import { useEffect, useState } from 'react';
import Airtable from 'airtable';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const apiKey = publicRuntimeConfig.AIRTABLE_API_KEY;

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey,
});

const base = new Airtable({ apiKey }).base('appeVwl7RXW9T18gk');

const getSongCount = () => base('Song Count').select().all();

export default function useSongData() {
  const [count, setCount] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (count.length === 0) {
      getSongCount().then(records => {
        const sortedRecordBySongCount = records
          .map(({ fields }) => fields)
          .sort((a, b) => {
            if (a.count < b.count) return 1;
            else return -1;
          });
        setIsLoading(false);
        setCount(sortedRecordBySongCount);
      });
    }
  }, [count]);
  return { count, isLoading };
}
