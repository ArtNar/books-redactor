export const useMutationStorage = (itemKey) => {
    const setStorageData = async (value) => localStorage.setItem(itemKey, JSON.stringify(value))

    return [setStorageData]
}
