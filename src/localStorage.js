export const setLocalStorage = theme => {
  try {
    localStorage.setItem('theme', theme)
  } catch (err) {
    console.log(err)
  }
}

export const getLocalStorage = () => {
  try {
    const theme = localStorage.getItem('theme')

    return theme || 'light'
  } catch (err) {
    console.log(err)
  }
}
