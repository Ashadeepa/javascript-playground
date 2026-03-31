// This is a server-side load function
// It runs on the server before the page is rendered

// In-memory storage for demo (resets when server restarts)
// In a real app, use a database
let todos = [
	{ id: 1, text: 'Learn SvelteKit basics', completed: true },
	{ id: 2, text: 'Build a demo project', completed: true },
	{ id: 3, text: 'Present at workshop', completed: false }
];

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		todos
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	addTodo: async ({ request }) => {
		const data = await request.formData();
		const text = data.get('text');

		if (text) {
			// Generate new ID
			const newId = Math.max(...todos.map(t => t.id), 0) + 1;
			todos = [...todos, { id: newId, text: text.toString(), completed: false }];
			console.log('Added todo:', text);
		}

		return { success: true };
	},

	deleteTodo: async ({ request }) => {
		const data = await request.formData();
		const id = parseInt(data.get('id'));

		// Remove todo from array
		todos = todos.filter(todo => todo.id !== id);
		console.log('Deleted todo:', id);

		return { success: true };
	}
};
