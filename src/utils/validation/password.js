import { messages } from './messages'
import { stringRequired } from './string'

export const password = stringRequired
    .min(3, messages.tooShort(3))
    .max(255, messages.tooLong(255))
