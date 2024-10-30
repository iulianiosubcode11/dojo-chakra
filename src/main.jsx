import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

//extend theme
const colors = {
  brand: {
    50: '#E6F0F9',   // Lightest - for backgrounds
    100: '#CCE1F4',  // Very light - for hover states
    200: '#99C4E9',  // Light - for secondary elements
    300: '#66A6DE',  // Medium light - for active states
    400: '#3389D3',  // Medium - for primary elements
    500: '#2A69AC',  // Base color - for primary actions
    600: '#1F4F82',  // Medium dark - for hover on dark
    700: '#153E75',  // Dark - for text on light backgrounds
    800: '#0C2B52',  // Very dark - for headings
    900: '#1A365D',  // Darkest - for emphasis
  },
}

const fonts = {
  heading: `'Tahoma', sans-serif`,
  body: `'Segoe UI', sans-serif`,
}

const theme = extendTheme({
  colors,
  fonts,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)