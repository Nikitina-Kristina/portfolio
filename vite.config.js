import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base должен совпадать с названием репозитория на GitHub
export default defineConfig({ plugins: [react()], base: '/portfolio/' })
