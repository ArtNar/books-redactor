import { messages } from './messages'
import { integerRequired } from './number'

const MIN = 1
const MAX = 10000

export const amountOfPages = integerRequired
    .moreThan(MIN - 1, messages.min(1))
    .lessThan(MAX + 1, messages.max(MAX))
