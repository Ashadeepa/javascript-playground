<script>
	let name = 'SvelteKit Workshop';
	let count = 0;
	let apiResponse = null;
	let loading = false;

	function increment() {
		count += 1;
	}

	async function callAPI() {
		loading = true;
		apiResponse = null;

		try {
			const response = await fetch('/api/hello');
			const data = await response.json();
			apiResponse = data;
		} catch (error) {
			apiResponse = { error: 'Failed to fetch API' };
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Home - SvelteKit Workshop</title>
</svelte:head>

<div class="container">
	<h1>Welcome to {name}!</h1>
	
	<div class="intro">
		<p>This is a demo project showcasing SvelteKit's key features:</p>
		<ul>
			<li>📁 File-based routing</li>
			<li>🎨 Layouts and nested routes</li>
			<li>⚡ Server-side data loading</li>
			<li>📝 Form actions</li>
			<li>🔌 API endpoints</li>
			<li>🧩 Component composition</li>
		</ul>
	</div>

	<div class="counter">
		<h2>Interactive Counter Example</h2>
		<p>Count: <strong>{count}</strong></p>
		<button on:click={increment}>Increment</button>
	</div>

	<div class="api-demo">
		<h2>API Integration Demo</h2>
		<p>Click the button to call the GET /api/hello endpoint:</p>
		<button on:click={callAPI} disabled={loading}>
			{loading ? 'Loading...' : 'Call API'}
		</button>

		{#if apiResponse}
			<div class="api-response">
				<h3>API Response:</h3>
				<pre>{JSON.stringify(apiResponse, null, 2)}</pre>
			</div>
		{/if}
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.intro {
		background: #f0f0f0;
		padding: 1.5rem;
		border-radius: 8px;
		margin: 2rem 0;
	}

	ul {
		margin-top: 1rem;
		line-height: 1.8;
	}

	.counter {
		background: white;
		border: 2px solid #4075a6;
		padding: 2rem;
		border-radius: 8px;
		text-align: center;
	}

	.api-demo {
		background: white;
		border: 2px solid #40c057;
		padding: 2rem;
		border-radius: 8px;
		margin-top: 2rem;
		text-align: center;
	}

	.api-response {
		margin-top: 1.5rem;
		background: #f8f9fa;
		padding: 1rem;
		border-radius: 4px;
		text-align: left;
	}

	.api-response h3 {
		margin-top: 0;
		color: #40c057;
	}

	.api-response pre {
		background: #2d2d2d;
		color: #f8f8f2;
		padding: 1rem;
		border-radius: 4px;
		overflow-x: auto;
		margin: 0;
	}

	button {
		background: #ff3e00;
		color: white;
		border: none;
		padding: 0.75rem 2rem;
		font-size: 1rem;
		border-radius: 4px;
		cursor: pointer;
		transition: background 0.2s;
	}

	button:hover {
		background: #e63900;
	}

	button:disabled {
		background: #ccc;
		cursor: not-allowed;
	}

	strong {
		color: #ff3e00;
		font-size: 1.5rem;
	}
</style>
