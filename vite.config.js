import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 5173,
        open: true,
        host: true,
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            input: {
                main: 'index.html',
                'card-flip': 'examples/01-css-card-flip.html',
                'rotating-cube': 'examples/02-rotating-cube.html',
                'product-visualization': 'examples/03-product-visualization.html'
            }
        }
    },
    optimizeDeps: {
        include: ['three']
    }
})