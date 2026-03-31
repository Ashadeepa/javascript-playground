<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Blog - SvelteKit Workshop</title>
</svelte:head>

<div class="blog">
	<h1>Blog Posts</h1>
	<p class="subtitle">Click on any post to see dynamic routing in action</p>

	<div class="posts">
		{#each data.posts as post}
			<article class="post-card">
				<h2>
					<a href="/blog/{post.id}">{post.title}</a>
				</h2>
				<p class="excerpt">{post.excerpt}</p>
				<time>{post.date}</time>
			</article>
		{/each}
	</div>
</div>

<style>
	.blog {
		max-width: 800px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		color: #666;
		margin-bottom: 2rem;
	}

	.posts {
		display: grid;
		gap: 1.5rem;
	}

	.post-card {
		background: white;
		padding: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s;
	}

	.post-card:hover {
		transform: translateY(-4px);
	}

	h2 {
		margin-bottom: 0.5rem;
	}

	h2 a {
		color: #4075a6;
		text-decoration: none;
	}

	h2 a:hover {
		color: #ff3e00;
	}

	.excerpt {
		color: #666;
		margin-bottom: 0.5rem;
	}

	time {
		color: #999;
		font-size: 0.875rem;
	}
</style>
