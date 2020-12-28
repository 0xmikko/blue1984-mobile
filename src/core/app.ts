/*
 * Copyright (c) 2020. Mikael Lazarev
 */

export type AppStatus =  "NEW" | "READY";

export interface App {
    status: AppStatus,
    showDeletedTweets: boolean,
}



