<svelte:head>
	<title>About - SvelteKit Workshop</title>
</svelte:head>

<div class="about">
	<h1>About SvelteKit</h1>
	
	<section>
		<h2>What is SvelteKit?</h2>
		<p>
			SvelteKit is a framework for building web applications of all sizes, with a beautiful
			development experience and flexible filesystem-based routing.
		</p>
	</section>

	<section>
		<h2>Key Features</h2>
		<div class="features">
			<div class="feature-card">
				<h3>🚀 Fast</h3>
				<p>Blazing fast performance with minimal overhead</p>
			</div>
			<div class="feature-card">
				<h3>📦 Zero Config</h3>
				<p>Convention over configuration for rapid development</p>
			</div>
			<div class="feature-card">
				<h3>🎯 Type Safe</h3>
				<p>First-class TypeScript support</p>
			</div>
			<div class="feature-card">
				<h3>⚡ Full-Stack</h3>
				<p>Server-side rendering and API routes built-in</p>
			</div>
		</div>
	</section>
</div>

<style>
	.about {
		max-width: 900px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		margin-bottom: 2rem;
	}

	section {
		margin: 2rem 0;
	}

	h2 {
		color: #4075a6;
		margin-bottom: 1rem;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		margin-top: 1.5rem;
	}

	.feature-card {
		background: white;
		padding: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s;
	}

	.feature-card:hover {
		transform: translateY(-4px);
	}

	.feature-card h3 {
		color: #ff3e00;
		margin-bottom: 0.5rem;
	}
</style>
