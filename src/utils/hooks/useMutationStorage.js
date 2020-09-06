export const useMutationStorage = (itemKey) => {
    const setStorageData = async (value) => {
        try {
            localStorage.setItem(itemKey, JSON.stringify(value))
        } catch (error) {
            throw new Error('Недостаточно места в Local Storage')
        }
    }

    return [setStorageData]
}
