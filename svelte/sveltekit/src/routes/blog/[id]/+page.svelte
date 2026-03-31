<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.post.title} - SvelteKit Workshop</title>
</svelte:head>

<article class="post">
	<a href="/blog" class="back-link">← Back to Blog</a>
	
	<h1>{data.post.title}</h1>
	<time>{data.post.date}</time>
	
	<div class="content">
		{@html data.post.content}
	</div>

	<div class="info">
		<h3>🎯 Dynamic Routes</h3>
		<p>
			This page uses a dynamic route parameter <code>[id]</code>. The ID from the URL
			is passed to the server load function, which fetches the corresponding post.
		</p>
		<p>Try changing the URL to <code>/blog/1</code>, <code>/blog/2</code>, or <code>/blog/3</code>!</p>
	</div>
</article>

<style>
	.post {
		max-width: 800px;
		margin: 0 auto;
	}

	.back-link {
		display: inline-block;
		color: #4075a6;
		text-decoration: none;
		margin-bottom: 1rem;
	}

	.back-link:hover {
		color: #ff3e00;
	}

	h1 {
		color: #ff3e00;
		margin-bottom: 0.5rem;
	}

	time {
		color: #999;
		font-size: 0.875rem;
		display: block;
		margin-bottom: 2rem;
	}

	.content {
		background: white;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		line-height: 1.8;
		margin-bottom: 2rem;
	}

	.content :global(ul) {
		margin: 1rem 0;
		padding-left: 2rem;
	}

	.content :global(p) {
		margin: 1rem 0;
	}

	.info {
		background: #fff3cd;
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #ffc107;
	}

	.info h3 {
		color: #856404;
		margin-bottom: 0.5rem;
	}

	.info p {
		margin: 0.5rem 0;
	}

	code {
		background: #f0f0f0;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
	}
</style>
