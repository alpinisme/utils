export enum Duration {
  Milliseconds = 'milliseconds',
  Seconds = 'seconds',
  Minutes = 'minutes',
  Hours = 'hours',
  Days = 'days',
}

type DurationConfig = Record<Duration | 'months' | 'years', number>;

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

const durationMultiplierFromMS: Record<Duration, number> = {
  milliseconds: 1,
  seconds: 1_000,
  minutes: 60 * 1_000,
  hours: 60 * 60 * 1_000,
  days: 24 * 60 * 60 * 1_000,
};

/**
 * Durations up to days supported.
 * Beyond that, calendars become significant.
 */
export function getDurationBetween(from: Date, to: Date, units: Duration) {
  const durationInMS = to.getTime() - from.getTime();

  return durationInMS * durationMultiplierFromMS[units];
}
