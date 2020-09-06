import { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { parse, stringify } from 'qs'

// TODO: можно улучшить и сохранять для пользователя его вариант сортировки
export const useOrdering = () => {
    const location = useLocation()
    const history = useHistory()
    const [orderData, setOrderData] = useState(undefined)

    const makeUrl = (newOrder) => `?${stringify(newOrder)}`

    const setOrder = (newOrder) => {
        history.push(makeUrl(newOrder))
    }

    const resetOrder = () => {
        history.push(makeUrl({}))
    }

    useEffect(() => {
        const query = parse(location.search, { ignoreQueryPrefix: true })

        setOrderData(query.order)
    }, [location])

    return {
        order: orderData,
        setOrder,
        resetOrder,
    }
}
