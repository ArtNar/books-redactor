import React                from 'react'
import _cn                  from 'utils/cn'
import { NavigationLink }   from 'components/NavigationLink'
import styles               from './NotFoundPage.module.css'

const cn = _cn('nf-page', styles)

export const NotFoundPage = () => (
    <div className={cn()}>
        <p className={cn('description')}>
            Упс, страница которую вы ищете больше недоступна.
        </p>
        <NavigationLink
            to="/"
            text="На главную &#8594;"
        />
    </div>
)

export default NotFoundPage
