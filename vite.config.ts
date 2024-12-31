import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// src/routes/__root.tsx
// src/routes/index.lazy.tsx
// src/routes/about.lazy.tsx

// https://vite.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  server: {
    port: 4002,
  },
})
