import { withNaming } from '@bem-react/classname'

export default (prefix, styles) => {
    if (!styles) {
        throw new Error('You should pass styles to cn function')
    }

    const cn = withNaming({ e: '__', m: '_', v: '_' })(prefix)

    return (...props) => {
        const names = cn(...props)

        return names
            .split(' ')
            .map((name) => styles[name])
            .join(' ')
            .trim()
    }
}
