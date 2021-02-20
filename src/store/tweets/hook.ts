/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import { useSelector } from "react-redux";
import { tweetsListSelector } from "./index";
import { Tweet } from "../../core/tweet";

export function useTweets(): Array<Tweet> {
  return useSelector(tweetsListSelector);
}
