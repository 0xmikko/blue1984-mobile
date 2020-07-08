/*
 * Lean tool - hypothesis testing application
 *
 * https://github.com/MikaelLazarev/lean-tool/
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from 'react';
import {Tweet} from '../../core/tweet';
import {TweetWidget} from './TweetWidget';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

interface TweetsFeedWidgetProps {
  data: Tweet[];
}

export const TweetsFeedWidget: React.FC<TweetsFeedWidgetProps> = ({data}) => {
  const showDeletedOnly = useSelector(
    (state: RootState) => state.profile.showDeletedTweets,
  );

  const filteredData = showDeletedOnly
    ? data.filter((e) => e.wasDeleted)
    : data;
  return (
    <>
      {filteredData.map((elm) => (
        <TweetWidget data={elm} key={elm.id} />
      ))}
    </>
  );
};
