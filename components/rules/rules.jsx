import React, { useState } from 'react';
import { points } from 'hooks/useTeamData';
import globalStyles from '@global';
import clsx from 'clsx';
import styles from './rules.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { chevron } from 'components/team-row/team-row.module.scss';

export default function Rules() {
  const pointsAsList = Object.entries(points);
  const [showRules, setShowRules] = useState(false);
  const showRulesButtonText = showRules ? 'Hide Rules' : 'Show Rules';
  const iconToShow = showRules ? faChevronUp : faChevronDown;
  return (
    <div>
      <button
        onClick={() => setShowRules(!showRules)}
        className={clsx(
          styles.ruleButton,
          globalStyles.fontPrimaryCondensed,
          globalStyles.row
        )}
      >
        {showRulesButtonText}
        <FontAwesomeIcon icon={iconToShow} className={chevron} />
      </button>
      {showRules && (
        <div className={styles.rulesContainer}>
          <h2 className={globalStyles.fontPrimaryCondensed}>Rules:</h2>
          <div className={styles.rowContainer}>
            <div className={styles.descriptionColumn}>
              <p className={clsx(globalStyles.fontPrimary, styles.title)}>
                Point Calculations:
              </p>
              <p className={clsx(globalStyles.fontPrimary, styles.bulletPoint)}>
                - The amount of points that a song is worth depends on the round
                that it was taken.
              </p>
              <p className={clsx(globalStyles.fontPrimary, styles.bulletPoint)}>
                - Each song's point value is multiplied by the amount of times
                it was played on the 2022-23 Global Stadium Tour
              </p>
              <p className={globalStyles.fontPrimary}>
                - Point total are updated the morning after every concert.
              </p>
              <p className={clsx(globalStyles.fontPrimary, styles.title)}>
                For example:
              </p>
              <p className={clsx(globalStyles.fontPrimary, styles.bulletPoint)}>
                - If you take "By the Way" in the first round, it is worth 2
                points. If "By the Way" us played 20 times on the tour, you get
                20 points total for that song.
              </p>
              <p className={clsx(globalStyles.fontPrimary, styles.bulletPoint)}>
                - If you take "Suck My Kiss" in the 5th round, it is worth 6
                points. If "Suck My Kiss" is played 10 times on the tour, you
                get 60 points for that song.
              </p>
              <p className={clsx(globalStyles.fontPrimary, styles.emphasize)}>
                The last date of the tour is Sun Feb 12.
              </p>
            </div>
            <div>
              <p className={clsx(globalStyles.fontPrimary, styles.title)}>
                Point Totals:
              </p>
              {pointsAsList.map(([round, points]) => (
                <p className={globalStyles.fontPrimary}>
                  <span className={styles.round}>Round {round}:</span>

                  <span className={styles.points}>{points} points</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
