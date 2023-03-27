import { capitalize } from './string';

export enum DurationUnits {
  Milliseconds = 'milliseconds',
  Seconds = 'seconds',
  Minutes = 'minutes',
  Hours = 'hours',
  Days = 'days',
}

/**
 * Helper class for converting durations to and from milliseconds
 *
 * Duration units up to days supported.
 * Beyond that, calendars become significant.
 */
export class DurationMS {
  private static readonly multiplier = {
    milliseconds: 1,
    seconds: 1_000,
    minutes: 60 * 1_000,
    hours: 60 * 60 * 1_000,
    days: 24 * 60 * 60 * 1_000,
  };

  static fromMilliseconds(count: number) {
    return count * this.multiplier.milliseconds;
  }
  static fromSeconds(count: number) {
    return count * this.multiplier.seconds;
  }
  static fromMinutes(count: number) {
    return count * this.multiplier.minutes;
  }
  static fromHours(count: number) {
    return count * this.multiplier.hours;
  }
  static fromDays(count: number) {
    return count * this.multiplier.days;
  }

  static toMilliseconds(count: number) {
    return count / this.multiplier.milliseconds;
  }
  static toSeconds(count: number) {
    return count / this.multiplier.seconds;
  }
  static toMinutes(count: number) {
    return count / this.multiplier.minutes;
  }
  static toHours(count: number) {
    return count / this.multiplier.hours;
  }
  static toDays(count: number) {
    return count / this.multiplier.days;
  }
}

type DurationConfig = Record<DurationUnits | 'months' | 'years', number>;

export function addDuration(date: Date, duration: DurationConfig) {
  const result = new Date(date);
  if (duration.milliseconds) {
    result.setMilliseconds(date.getMilliseconds() + duration.milliseconds);
  }
  if (duration.seconds) {
    result.setSeconds(date.getSeconds() + duration.seconds);
  }
  if (duration.minutes) {
    result.setMinutes(date.getMinutes() + duration.minutes);
  }
  if (duration.hours) {
    result.setHours(date.getHours() + duration.hours);
  }
  if (duration.days) {
    result.setDate(date.getDate() + duration.days);
  }
  if (duration.months) {
    result.setMonth(date.getMonth() + duration.months);
  }
  if (duration.years) {
    result.setFullYear(date.getFullYear() + duration.years);
  }
  return result;
}

/**
 * Durations up to days supported.
 * Beyond that, calendars become significant.
 */
export function durationBetween(start: Date, stop: Date, units: DurationUnits) {
  const durationInMS = stop.getTime() - start.getTime();

  const method = `to${capitalize(units)}` as const;

  return DurationMS[method](durationInMS);
}

/**
 * Checks if date object contains a valid date
 */
export const isValidDate = (date: Date): boolean => {
  return !isNaN(date.getTime());
};
