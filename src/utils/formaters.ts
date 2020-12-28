/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import moment from 'moment';

export function toHumanDate(d: Date | undefined | number | string): string {
  return moment(d).format('DD.MM.YYYY');
}
