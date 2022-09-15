import { useEffect, useState } from 'react';
import Airtable from 'airtable';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const apiKey = publicRuntimeConfig.AIRTABLE_API_KEY;

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey,
});

const getLastUpdatedDate = () =>
  new Airtable({ apiKey })
    .base('appptIOz9nCmZxE3Q')('Last Updated Date')
    .select()
    .all();

export default function useLastUpdatedDate() {
  const [lastUpdated, setLastUpdated] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!lastUpdated) {
      getLastUpdatedDate().then(records => {
        const record = records[0];
        const { Date: date, Time: time } = record.fields;
        setIsLoading(false);
        setLastUpdated(`${date} at ${time}`);
      });
    }
  }, [lastUpdated]);
  return { lastUpdated, isLoading };
}
