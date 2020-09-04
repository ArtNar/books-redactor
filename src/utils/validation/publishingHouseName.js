import { messages } from './messages'
import { stringNotRequired } from './string'

const MAX = 30

export const publishingHouseName = stringNotRequired
    .max(MAX, messages.tooLong(MAX))
