import { differenceInDays, formatDistance, parseISO } from "date-fns";

export const subtractDates = (dateStr1: string, dateStr2: string) => differenceInDays(String(parseISO(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr: string) => formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
})
    .replace('about', '')
    .replace('in', 'In');

export const getToday = function(options: any={}) {
    const today = new Date();

    if (options?.end)
        today.setUTCHours(23, 59, 59, 999);
    else today.setUTCHours(0, 0, 0, 0);
    return today.toISOString();
}