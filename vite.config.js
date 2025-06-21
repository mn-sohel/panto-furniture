import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],

    darkMode: 'class',
    
    theme: {
      extend: {
        colors: {
          'primary': '#E58411',
          'secondary': '#1E1E1E',
          'secondary-bg': '#F7F7F7',
        },
        // fontFamily: {
        //   'primary': ["Poppins", "sans-serif"]
        // }
      },
    },
})
