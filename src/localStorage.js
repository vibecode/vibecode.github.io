export const setLocalStorage = theme => {
  try {
    localStorage.setItem('theme', theme)
  } catch (err) {
    console.log(err)
  }
}

export const getLocalStorage = () => {
  try {
    return localStorage.getItem('theme')
  } catch (err) {
    console.log(err)
  }
}
