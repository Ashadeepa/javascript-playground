import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	// Simulating database lookup
	const posts = {
		1: {
			id: 1,
			title: 'Getting Started with SvelteKit',
			content: `
				<p>SvelteKit is an amazing framework that makes building web applications a breeze!</p>
				<p>Here are some key concepts:</p>
				<ul>
					<li>File-based routing</li>
					<li>Server-side rendering</li>
					<li>API endpoints</li>
					<li>Form actions</li>
				</ul>
				<p>This post demonstrates dynamic routing using the [id] parameter in the URL.</p>
			`,
			date: '2026-03-20'
		},
		2: {
			id: 2,
			title: 'Understanding SvelteKit Routing',
			content: `
				<p>Routing in SvelteKit is based on the filesystem. Each folder in src/routes becomes a route in your app.</p>
				<p>Dynamic routes use square brackets: [id], [slug], etc.</p>
				<p>The parameter is then available in your load functions via params.id or params.slug.</p>
			`,
			date: '2026-03-22'
		},
		3: {
			id: 3,
			title: 'Server-Side Rendering in SvelteKit',
			content: `
				<p>SSR is one of SvelteKit's superpowers. Your pages are rendered on the server first, then hydrated on the client.</p>
				<p>This gives you the best of both worlds: fast initial load and interactive client-side behavior.</p>
				<p>Use +page.server.js for server-only code and data loading.</p>
			`,
			date: '2026-03-24'
		}
	};

	const post = posts[params.id];

	if (!post) {
		throw error(404, 'Post not found');
	}

	return { post };
}
