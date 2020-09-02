import { withNaming } from '@bem-react/classname'

export default (prefix, styles) => {
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
