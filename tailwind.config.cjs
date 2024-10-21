
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './public/index.html',
  ],
  // content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        winter: {
          primary: '#1F2937',
          "primary-hover": "#4B5563",
          secondary: '#E5E7EB',
          "secondary-hover": "#D1D5DB",
          accent: '#A3E635',
          neutral: '#F3F4F6',
          'base-100': '#FFFFFF',
          'base-content': '#1F2937',
          info: '#3B82F6',
          success: '#10B981',
          warning: '#FBBF24',
          error: '#EF4444',
        },
      },
      {
        dracula: {
          primary: '#F3F4F6',
          "primary-hover": "#E5E7EB",
          secondary: '#374151',
          "secondary-hover": "#4B5563",
          accent: '#D97706',
          neutral: '#1F2937',
          'base-100': '#111827',
          'base-content': '#F9FAFB',
          info: '#60A5FA',
          success: '#34D399',
          warning: '#FCD34D',
          error: '#F87171',
        },
      },
    ],
  },
}
