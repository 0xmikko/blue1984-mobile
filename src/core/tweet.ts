/*
 * Copyright (c) 2020. Mikael Lazarev
 */

export type TweetToken =  TweetText | TweetURL | Mention | HashTag;

export class TweetText {
  start: number;
  end: number;
  text: string;


  constructor(start: number, end: number, text: string) {
    this.start = start;
    this.end = end;
    this.text = text.substr(start, end-start);
  }
}

export class TweetURL {
  start: number;
  end: number;
  url: string;
  expanded_url: string;
  display_url: string;

  constructor(
      start: number,
      end: number,
      url: string,
      expanded_url: string,
      display_url: string
  ) {
    this.start = start;
    this.end = end;
    this.url = url;
    this.expanded_url = expanded_url;
    this.display_url = display_url;
  }
}

export interface TweetMedia {
  media_key: string;
  type: string;
  url: string;
}

export class Mention {
  start: number;
  end: number;
  username: string;

  constructor(start: number, end: number, username: string) {
    this.start = start;
    this.end = end;
    this.username = username;
  }
}

export class HashTag {
  start: number;
  end: number;
  tag: string;

  constructor(start: number, end: number, tag: string) {
    this.start = start;
    this.end = end;
    this.tag = tag;
  }
}

export interface TwitterAccount {
  id: string;
  username: string;
  name: string;
  profile_image_url?: string;
  description: string;
}

export interface Tweet {
  id: string;

  text: string;

  created_at: Date;

  entities: {
    mentions: Array<Mention>;
    urls: Array<TweetURL>;
    hashtags: Array<HashTag>;
  };

  author_id: string;

  author?: TwitterAccount;

  media: Array<TweetMedia>;

  wasDeleted: boolean;

  attachments: {
    media_keys: Array<string>;
  };
}
