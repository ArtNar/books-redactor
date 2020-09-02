export const useMutationStorage = (itemKey) => {
    const setStorageData = async (value) => localStorage.setItem(itemKey, value)

    return [setStorageData]
}
