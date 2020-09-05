import { messages } from './messages'
import { stringRequired } from './string'

const MAX = 20

export const authorName = stringRequired
    .max(MAX, messages.tooLong(MAX))
