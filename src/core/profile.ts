/*
 * Copyright (c) 2020. Mikael Lazarev
 */

export type ProfileStatus =  "NEW" | "READY";

export interface Profile {
    status: ProfileStatus,
    showDeletedTweets: boolean,
}



