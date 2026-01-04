/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'accent': 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'border': 'var(--border)',
        'cube-bg-1': 'var(--cube-bg-1)',
        'cube-bg-2': 'var(--cube-bg-2)',
        'orbit-color-1': 'var(--orbit-color-1)',
        'orbit-color-2': 'var(--orbit-color-2)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      screens: {
        'sm': '768px',
        'md': '1024px',
        'lg': '1200px',
      },
      backdropBlur: {
        'custom': '10px',
      },
    },
  },
  plugins: [],
}
