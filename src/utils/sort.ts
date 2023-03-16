import type { CollectionEntry } from 'astro:content'

interface WithStartDate {
  startDate: Date
}
export function sortByMostRecentStartDate(
  first: WithStartDate,
  second: WithStartDate
) {
  return second.startDate.getTime() - first.startDate.getTime()
}

interface CollentionEntryWithStartDate {
  data: WithStartDate
}
export function sortCollectionByMostRecentStartDate(
  first: CollentionEntryWithStartDate,
  second: CollentionEntryWithStartDate
) {
  return sortByMostRecentStartDate(first.data, second.data)
}
