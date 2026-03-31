# SvelteKit Workshop Demo Project

A comprehensive demo project showcasing SvelteKit fundamentals for workshop presentations.

## 🚀 What is SvelteKit?

SvelteKit is a modern web framework for building fast, efficient web applications. It's built on Svelte and provides:
- File-based routing
- Server-side rendering (SSR)
- API endpoints
- Form actions
- Built-in optimizations

## 📁 Project Structure

```
sveltekit/
├── src/
│   ├── routes/              # File-based routing
│   │   ├── +layout.svelte   # Root layout (wraps all pages)
│   │   ├── +page.svelte     # Home page (/)
│   │   ├── about/
│   │   │   └── +page.svelte # About page (/about)
│   │   ├── todos/
│   │   │   ├── +page.svelte        # Todos UI
│   │   │   └── +page.server.js    # Server-side data & actions
│   │   ├── blog/
│   │   │   ├── +page.svelte        # Blog list
│   │   │   ├── +page.server.js
│   │   │   └── [id]/               # Dynamic route
│   │   │       ├── +page.svelte
│   │   │       └── +page.server.js
│   │   └── api/
│   │       └── hello/
│   │           └── +server.js      # API endpoint
│   ├── lib/
│   │   └── components/      # Reusable components
│   ├── app.html            # HTML template
│   └── app.css             # Global styles
├── static/                 # Static assets
├── package.json
├── svelte.config.js        # SvelteKit configuration
└── vite.config.js          # Vite configuration
```

## 🎯 Key Concepts Demonstrated

### 1. **File-Based Routing**
- Each folder in `src/routes/` becomes a route
- `+page.svelte` defines the page component
- Example: `src/routes/about/+page.svelte` → `/about`

### 2. **Layouts (+layout.svelte)**
- Wraps all pages with common UI (header, nav, footer)
- Located at `src/routes/+layout.svelte`
- Pages are rendered in the `<slot />` element

### 3. **Server-Side Loading (+page.server.js)**
- Load data on the server before rendering
- Use `export async function load()` to fetch data
- Data is passed to the page component
- Example: See `src/routes/todos/+page.server.js`

### 4. **Form Actions**
- Handle form submissions on the server
- Use `export const actions` in `+page.server.js`
- Progressive enhancement - works without JavaScript!
- Example: Add/delete todos in `/todos`

### 5. **Dynamic Routes ([parameter])**
- Use square brackets for dynamic segments
- Access via `params` in load function
- Example: `/blog/[id]` matches `/blog/1`, `/blog/2`, etc.

### 6. **API Endpoints (+server.js)**
- Create API routes alongside pages
- Export GET, POST, PUT, DELETE functions
- Return JSON responses
- Example: `/api/hello` endpoint

## 🛠️ How to Run This Project

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically reload when you make changes

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📚 Pages in This Demo

### Home (/)
- Interactive counter demonstrating reactivity
- Overview of SvelteKit features

### About (/about)
- Static page example
- Feature cards with hover effects

### Todos (/todos)
- Server-side data loading
- Form actions (add/delete)
- Demonstrates full-stack capabilities

### Blog (/blog)
- List of blog posts
- Links to individual posts

### Blog Post (/blog/[id])
- Dynamic routing example
- Parameter extraction from URL
- Error handling (try `/blog/999`)

### API Endpoint (/api/hello)
- RESTful API example
- GET and POST methods
- Returns JSON data

## 🎨 Key Files Explained

### `+page.svelte`
The page component. Contains:
```svelte
<script>
  // JavaScript logic
  export let data; // Receives data from load function
</script>

<!-- HTML template -->
<h1>Hello World</h1>

<style>
  /* Scoped CSS */
</style>
```

### `+page.server.js`
Server-only code:
```javascript
export async function load() {
  // Fetch data
  return { data };
}

export const actions = {
  default: async ({ request }) => {
    // Handle form submission
  }
};
```

### `+layout.svelte`
Wraps all pages:
```svelte
<nav><!-- Navigation --></nav>
<slot /> <!-- Pages render here -->
<footer><!-- Footer --></footer>
```

## 💡 Workshop Talking Points

1. **Zero Config** - SvelteKit works out of the box
2. **File = Route** - Intuitive routing based on file structure
3. **Full-Stack** - Handle frontend and backend in one framework
4. **Performance** - Automatic code splitting and optimization
5. **Progressive Enhancement** - Works without JavaScript
6. **Type Safety** - TypeScript support built-in

## 🔧 Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run dev -- --open    # Start and open browser

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Other
npm run check            # Type checking
```

## 📖 Learn More

- [SvelteKit Documentation](https://kit.svelte.dev)
- [Svelte Tutorial](https://svelte.dev/tutorial)
- [SvelteKit FAQ](https://kit.svelte.dev/faq)

## 🎓 Workshop Tips

1. **Start Simple** - Begin with the home page and routing
2. **Show File Structure** - Emphasize how files map to routes
3. **Live Coding** - Modify pages and show hot reload
4. **Forms Demo** - Show form actions in /todos
5. **Dynamic Routes** - Explain [id] parameter syntax
6. **API Routes** - Demonstrate /api/hello endpoint

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Dependencies not installed?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
npm run check
```

---

**Happy Teaching! 🎉**
