/*
 * Copyright (c) 2020. Mikael Lazarev
 */

export interface TwitterAccount {
  id: string;
  username: string;
  name: string;
  profile_image_url?: string;
  description: string;
}

export interface Account extends TwitterAccount {
  bluID: string;
  deleted?: number;
  changed?: number;
  cached?: number;
  lastCached?: string;
}

export interface AccountCreateDTO {
  id: string;
}
