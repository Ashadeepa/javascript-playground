import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const data = {
		message: 'Hello from the API!',
		timestamp: new Date().toISOString(),
		framework: 'SvelteKit'
	};

	return json(data);
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const body = await request.json();
	
	return json({
		received: body,
		message: 'Data received successfully'
	});
}
