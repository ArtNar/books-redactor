import { messages } from './messages'
import { stringRequired } from './string'

const MAX = 30

export const bookName = stringRequired
    .max(MAX, messages.tooLong(MAX))
