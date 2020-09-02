import { useState, useEffect } from 'react'

export const useQueryStorage = (itemKey) => {
    const [data, setData] = useState(undefined)
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(true)

    const getStorageData = async () => localStorage.getItem(itemKey)

    useEffect(() => {
        if (!itemKey) {
            return
        }

        getStorageData()
            .then((result) => {
                if (result) {
                    setData(result)
                }
            })
            .catch((error) => setErrors(error))
            .finally(() => setLoading(false))
    }, [itemKey])

    return {
        data,
        loading,
        errors,
    }
}
