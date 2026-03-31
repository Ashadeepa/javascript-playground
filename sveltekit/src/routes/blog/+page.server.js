/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// Simulating fetching blog posts
	const posts = [
		{
			id: 1,
			title: 'Getting Started with SvelteKit',
			excerpt: 'Learn the basics of SvelteKit and build your first app',
			date: '2026-03-20'
		},
		{
			id: 2,
			title: 'Understanding SvelteKit Routing',
			excerpt: 'Deep dive into file-based routing and dynamic routes',
			date: '2026-03-22'
		},
		{
			id: 3,
			title: 'Server-Side Rendering in SvelteKit',
			excerpt: 'How SSR works and why it matters for your application',
			date: '2026-03-24'
		}
	];

	return { posts };
}
