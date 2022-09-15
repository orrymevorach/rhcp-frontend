import React from 'react';
import useLastUpdatedDate from 'hooks/useLastUpdatedDate';
import globalStyles from '@global';
import clsx from 'clsx';

export default function LastUpdated() {
  const { lastUpdated, isLoading } = useLastUpdatedDate();
  return (
    <>
      {!isLoading && (
        <p
          className={clsx(
            globalStyles.fontPrimaryCondensed,
            globalStyles.center
          )}
        >
          Last updated on {lastUpdated}
        </p>
      )}
    </>
  );
}
