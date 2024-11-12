/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',    // Include all root-level HTML files
    './feed.html',
    './profile.html',
    './register.html',
    './src/**/*.{js,ts,jsx,tsx,html}', // Include all source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
