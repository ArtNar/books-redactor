import { messages } from './messages'
import { integer } from './number'

const MIN = 1800

export const publishYear = integer
    .moreThan(MIN - 1, messages.min(MIN))
