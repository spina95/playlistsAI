// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const customDarkTheme = {
  dark: true,
  colors: {
    background: '#1a1a1a',
    surface: '#347a59',
    primary: '#347a59',
    'primary-darken-1': '#347a59',
    secondary: '#347a59',
    'secondary-darken-1': '#018786',
    error: '#347a59',
    info: '#347a59',
    success: '#347a59',
    warning: '#347a59',
  }
}

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      defaultTheme: 'customDarkTheme',
      themes: {
        customDarkTheme,
      }
    }
  }
)
