import { useState, useEffect, useCallback } from 'react'

export const useQueryStorage = (itemKey) => {
    const [data, setData] = useState(undefined)
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(true)

    const getStorageData = useCallback(async () => localStorage.getItem(itemKey), [itemKey])

    const fetchData = useCallback(() => {
        getStorageData()
            .then((result) => {
                if (result) {
                    setData(JSON.parse(result))
                }
            })
            .catch((error) => setErrors(error))
            .finally(() => setLoading(false))
    }, [getStorageData])

    useEffect(() => {
        if (!itemKey) {
            throw new Error('You should provide path to data at localStorage')
        }

        fetchData()
    }, [itemKey, fetchData])

    return {
        data,
        loading,
        errors,
        refetch: fetchData,
    }
}
