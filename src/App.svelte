<link rel='stylesheet' href='/global.css'>

<script lang="ts">
	import AptTable from "./AptTable.svelte";

	// create greeting based on time of day
	const username = 'user';
	const greeting = new Date().getHours() < 12 ? `Good morning, ${ username } ☀` : 
		new Date().getHours() < 18 ? `Good afternoon, ${ username } 🌤` : `Good evening, ${ username } 🌖`;
</script>

<main>
	<div>
		<navbar>
			<h2>Local Apt Discovery 🚀</h2>
		</navbar>
		<h1> {greeting} </h1>
		<AptTable></AptTable>
		<p></p>
		<footer></footer>
	</div>
</main>

<style>
	main {
		text-align: center;
		max-width: 240px;
	}

	h1 {
		color: var(--c1);
		font-size: 4em;
		font-weight: 100;
	}
	
	h2 {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-left: 0.5em;
		color: var(--c1);
		font-size: 1.5em;
		font-weight: 100;
	}
	
	navbar {
		position: static;
		top: 0;
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid var(--c1);
		background: linear-gradient(to left, var(--c4), var(--c5));
	}
	
	footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		border-top: 1px solid var(--c1);
		background: linear-gradient(to right, var(--c4), var(--c5));
	}

	@media (min-width: 500px) {
		main {
			max-width: none;
		}
	}
</style>
