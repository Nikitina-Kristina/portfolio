export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bone: '#F4F7FC', card: '#FFFFFF', ink: '#14213D',
        muted: '#5B6B87', line: '#DCE4F2', amber: '#4F7BC0',
        sky: '#6C97CC', deep: '#2F4C82', mist: '#E8EEF9', night: '#08082B', iris: '#4B3DE0',
      },
      fontFamily: {
        sans: ['Onest', 'system-ui', 'sans-serif'],
        mono: ['Onest', 'system-ui', 'sans-serif'],
      },
    },
  },
}
