
export const AddUserLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}