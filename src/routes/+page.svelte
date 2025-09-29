<script lang="ts">
	import { buttonVariants } from "$lib/components/ui/button/index";
	import type { PageProps } from "./$types";
	import { resolve } from "$app/paths";
	const { data: d }: PageProps = $props();
	const data = d.data;
</script>

<h1>Welcome to the quiz</h1>
<h2>Choose your subject:</h2>
{#if !data}
	<span>Could not load the quizs</span>
{:else}
	<div class="w-full grid grid-cols-2 md:grid-cols-5 auto-rows-[5rem]">
		{#each Object.keys(data) as subject}
			<a
				href={resolve(`/subject/${subject}`)}
				class={[buttonVariants({ variant: "default" }), "w-full h-full"]}
				>{subject}</a
			>
		{/each}
	</div>
{/if}
