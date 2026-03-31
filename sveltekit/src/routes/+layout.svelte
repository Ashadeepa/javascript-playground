<script>
	import '../app.css';
</script>

<div class="app">
	<header>
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/todos">Todos</a>
			<a href="/blog">Blog</a>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>SvelteKit Workshop Demo © 2026</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	header {
		background: #4075a6;
		color: white;
		padding: 1rem;
	}

	nav {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
	}

	nav a {
		color: white;
		text-decoration: none;
		font-weight: 500;
		transition: opacity 0.2s;
	}

	nav a:hover {
		opacity: 0.7;
	}

	main {
		flex: 1;
		padding: 2rem;
		max-width: 1200px;
		margin: 0 auto;
		width: 100%;
	}

	footer {
		background: #333;
		color: white;
		text-align: center;
		padding: 1rem;
	}
</style>
