<script lang="ts">
	import type { PageProps } from "./$types";
	import { buttonVariants } from "$lib/components/ui/button/index";

	const { data: d }: PageProps = $props();
	const { data, name: subject } = d;

	const quizzes = data ? data[subject] : undefined;
</script>

<h1>Subject: {subject}</h1>

<h2>All the quizs:</h2>

{#if quizzes}
	<div class="grid w-full md:grid-cols-5 grid-cols-2">
		{#each Object.keys(quizzes) as quiz}
			<a
				href="./{subject}/quiz/{quiz}"
				class={[
					buttonVariants({ variant: "default" }),
					"w-full h-20 border-border border-1 grid place-items-center",
				]}
			>
				{quiz}
			</a>
		{/each}
	</div>
{:else}
	<span class="text-destructive"
		>Couldn't find subject for subject: {subject}</span
	>
{/if}
