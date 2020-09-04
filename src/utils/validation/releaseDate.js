import { messages } from './messages'
import { date } from './date'

const MIN = '01.01.1800'

export const releaseDate = date
    .min(MIN, messages.min(MIN))
