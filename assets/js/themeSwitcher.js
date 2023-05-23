

/**
 * All themes supported by the application. The array index is used to determine the order of the themes in the dropdown.
 */
const themes = [
  'default', 
  'cupcake', 
  'tuttifrutti', 
  'mango',
]


/**
 * Creates a one year expiration date for a cookie.
 */
const createExpiration = () => {
  const aYearFromNow = new Date()
  aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1)
}

/**
 * Gets a cookie by name.
 * @param {string} name 
 * @returns 
 */
const getCookie = (name) => {
  const cookies = document.cookie.split(';')
  const cookie = cookies.find(c => c.trim().startsWith(name))
  if (!cookie) return null
  return cookie.split('=')[1]
}

/**
 * Sets a cookie.
 * @param {string} name 
 * @param {string} value 
 */
const setCookie = (name, value) => {
  const expiration = createExpiration()
  document.cookie = `${name}=${value};expires=${expiration}`
}

/**
 * Gets the default theme from the cookie or sets it if it doesn't exist.
 * @returns string
 */
const getDefaultTheme = () => {
  const theme = getCookie('theme')
  if (!theme) {
    setCookie('theme', 'default')
    return 'default'
  }
  return theme
}

/**
 * Generates the theme switcher dropdown.
 * @param {string} defaultTheme
 */
const generateThemeSwitcher = (defaultTheme) => {
  // Create the button to open the dropdown
  const label = document.createElement('label')
  label.classList.add('select', 'select-xs', 'flex', 'items-center', 'm-1')
  label.innerText = 'Thème'
  label.setAttribute('tabindex', '0')

  // Create the options for the dropdown
  const options = themes.map(theme => {
    const li = document.createElement('li')
    const button = document.createElement('button')
    button.innerText = theme
    button.addEventListener('click', () => changeTheme(theme))
    if (theme === defaultTheme) button.classList.add('active')
    li.append(button)
    return li
  })
  // Create the dropdown
  const ul = document.createElement('ul')
  ul.classList.add('dropdown-content', 'menu', 'p-2', 'shadow', 'bg-base-300', 'rounded-box', 'border', 'border-base-content', 'border-opacity-50')
  ul.append(...options)
  ul.id = 'theme-dropdown'
  const dropdownContainer = document.createElement('div')
  dropdownContainer.classList.add('dropdown', 'dropdown-end')
  dropdownContainer.append(label)
  dropdownContainer.append(ul)
  const div = document.createElement('div')
  div.append(dropdownContainer)
  div.classList.add('flex', 'justify-center', 'gap-4')
  const container = document.querySelector('#header-right')
  container.append(div)
}

/**
 * Changes the theme of the site.
 * @param {string} theme 
 */
const changeTheme = (theme) => {
  const html = document.querySelector('html')
  html.setAttribute('data-theme', theme)
  setCookie('theme', theme)
  const ul = document.querySelector('#theme-dropdown')
  const buttons = ul.querySelectorAll('button')
  buttons.forEach(button => button.classList.remove('active'))
  const index = themes.findIndex(t => t === theme)
  buttons[index].classList.add('active')
}

export const initTheme = () => {
  const defaultTheme = getDefaultTheme()
  document.querySelector('html').setAttribute('data-theme', defaultTheme)
  generateThemeSwitcher(defaultTheme)
}
export default initTheme