/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {TwitterAccount} from './accounts';

export interface Tweet {
  id: string;
  text: string;
  created_at: string;
  author?: TwitterAccount;

  time: string;
  urls: string[];
  hashtags: string[];
  images: string[];
  wasDeleted: boolean;
}
