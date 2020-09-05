export const useMutationStorage = (itemKey) => {
    const setStorageData = async (value) => {
        try {
            localStorage.setItem(itemKey, JSON.stringify(value))
        } catch (error) {
            console.error(error)
        }
    }

    return [setStorageData]
}
