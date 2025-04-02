/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#011627', // Dark blue (VSCode-like dark theme)
        secondary: '#607B96', // Muted blue for secondary text
        accent: '#4D5BCE', // Bright blue for accents
        success: '#43D9AD', // Green for success states
        warning: '#E99287', // Soft red for warnings
        highlight: '#FEA55F', // Orange for highlights
        code: {
          bg: '#1E2D3D', // Slightly lighter background for code blocks
          text: '#E5E9F0' // Light gray for code text
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'code': '0 0 0 2px rgba(77, 91, 206, 0.2)',
      }
    },
  },
  plugins: [],
}