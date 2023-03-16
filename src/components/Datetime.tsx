import type { ExperienceFrontmatter } from '@content/_schemas'
import { formatDistanceStrict } from 'date-fns'
import { fr } from 'date-fns/locale'

type Dates = Pick<ExperienceFrontmatter, 'startDate' | 'endDate'>

export interface Props extends Dates {}

const formatter = new Intl.DateTimeFormat('fr-FR', {
  year: 'numeric',
  month: 'long'
})
function formatRange({ startDate, endDate = new Date() }: Dates) {
  return `${formatter.formatRange(startDate, endDate)} (${formatDistanceStrict(
    endDate,
    startDate,
    { locale: fr }
  )})`
}

// Reformat in .astro
export default function Datetime({ startDate, endDate }: Props) {
  return (
    <div className='flex items-center space-x-2 opacity-80'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='inline-block h-6 w-6 scale-90 fill-slate-900'
        aria-hidden='true'
      >
        <path d='M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z'></path>
        <path d='M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z'></path>
      </svg>
      <span className='sr-only'>Posted on:</span>
      <span className='text-sm oblique'>
        {formatRange({ startDate, endDate })}
      </span>
    </div>
  )
}
