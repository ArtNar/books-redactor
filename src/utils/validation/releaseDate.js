import { messages } from './messages'
import { date } from './date'

const MIN = new Date(1800, 0, 1) // '01.01.1800'

export const releaseDate = date
    .min(MIN, messages.min(MIN))
