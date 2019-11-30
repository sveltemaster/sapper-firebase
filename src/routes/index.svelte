<script>
	import firebase from 'firebase/app';
	import 'firebase/database';
	import {onMount} from 'svelte';

	let pokemons = {};
	onMount(() => {
		firebase.database().ref('/pokemon/')
		.once('value').then(function(snapshot) {
			pokemons = snapshot.val();
			console.log(pokemons)
		});
	});
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Pokemon</h1>

{#each Object.keys(pokemons) as pokemon}
	{pokemon} is {pokemons[pokemon]}<br>
{/each}

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
