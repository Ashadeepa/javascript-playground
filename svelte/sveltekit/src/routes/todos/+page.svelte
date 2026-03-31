<script>
	/** @type {import('./$types').PageData} */
	export let data;

	let newTodo = '';
</script>

<svelte:head>
	<title>Todos - SvelteKit Workshop</title>
</svelte:head>

<div class="todos">
	<h1>Todo List</h1>
	<p class="subtitle">Demonstrating server-side data loading and form actions</p>

	<div class="add-todo">
		<form method="POST" action="?/addTodo">
			<input
				type="text"
				name="text"
				placeholder="Add a new todo..."
				bind:value={newTodo}
				required
			/>
			<button type="submit">Add</button>
		</form>
	</div>

	<ul class="todo-list">
		{#each data.todos as todo}
			<li class:completed={todo.completed}>
				<span>{todo.text}</span>
				<form method="POST" action="?/deleteTodo" style="display: inline;">
					<input type="hidden" name="id" value={todo.id} />
					<button type="submit" class="delete">Delete</button>
				</form>
			</li>
		{/each}
	</ul>

	<div class="info">
		<h3>💡 What's Happening Here?</h3>
		<ul>
			<li><code>+page.server.js</code> loads data on the server</li>
			<li>Form actions handle POST requests</li>
			<li>Data is passed to the page via <code>export let data</code></li>
			<li>Progressive enhancement works without JavaScript!</li>
		</ul>
	</div>
</div>

<style>
	.todos {
		max-width: 700px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
	}

	.subtitle {
		color: #666;
		margin-bottom: 2rem;
	}

	.add-todo form {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	input[type='text'] {
		flex: 1;
		padding: 0.75rem;
		border: 2px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
	}

	button {
		background: #ff3e00;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		cursor: pointer;
		font-size: 1rem;
	}

	button:hover {
		background: #e63900;
	}

	.todo-list {
		list-style: none;
		margin-bottom: 2rem;
	}

	li {
		background: white;
		padding: 1rem;
		margin-bottom: 0.5rem;
		border-radius: 4px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}

	li.completed span {
		text-decoration: line-through;
		color: #999;
	}

	.delete {
		background: #dc3545;
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
	}

	.delete:hover {
		background: #c82333;
	}

	.info {
		background: #e7f3ff;
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #4075a6;
	}

	.info h3 {
		color: #4075a6;
		margin-bottom: 0.5rem;
	}

	.info ul {
		margin-left: 1.5rem;
		margin-top: 0.5rem;
	}

	code {
		background: #f0f0f0;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
	}
</style>
