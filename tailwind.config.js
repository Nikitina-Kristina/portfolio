export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bone: '#F5F1EA', card: '#FBF9F5', ink: '#1F1D1A',
        muted: '#6F685D', line: '#E4DDD0', amber: '#E8A33D',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
}
