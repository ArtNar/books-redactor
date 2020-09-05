import { useState, useEffect } from 'react'

export const useQueryStorage = (itemKey) => {
    const [data, setData] = useState(undefined)
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(true)

    const getStorageData = async () => localStorage.getItem(itemKey)

    const fetchData = () => {
        getStorageData()
            .then((result) => {
                if (result) {
                    setData(JSON.parse(result))
                }
            })
            .catch((error) => setErrors(error))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        if (!itemKey) {
            return
        }

        fetchData()
    }, [itemKey])

    return {
        data,
        loading,
        errors,
        refetch: fetchData,
    }
}
