/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Tweet} from '../../core/tweet';
import {TweetWidget} from './TweetWidget';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

interface TweetsFeedWidgetProps {
  data: Tweet[];
}

export function TweetsFeedWidget({
  data,
}: TweetsFeedWidgetProps): React.ReactElement {
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
}
