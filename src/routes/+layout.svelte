<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import { ModeWatcher } from "mode-watcher";
	import Header from "$lib/components/Header.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<div class="h-full flex flex-col relative">
	<Header />
	<main class="tipography p-5 flex-1">
		{@render children?.()}
	</main>
	<footer
		class="h-10 sticky bottom-0 bg-background border-t-border border-t-3"
	></footer>
</div>
