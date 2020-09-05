import { messages } from './messages'
import { integer } from './number'

const MIN = 1800
const MAX = new Date().getFullYear()

export const publishYear = integer
    .moreThan(MIN - 1, messages.min(MIN))
    .lessThan(MAX + 1, messages.max(MAX))
