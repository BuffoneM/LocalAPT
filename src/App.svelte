<script lang="ts">
	import AptTable from './AptTable.svelte'
</script>

<main>
	<h1>Hello, user.</h1>
	<AptTable></AptTable>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 500px) {
		main {
			max-width: none;
		}
	}
</style>
