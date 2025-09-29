<script lang="ts">
	import type { SectionType } from "$lib/data";
	import { Button } from "$lib/components/ui/button/index";
	const {
		sections,
		quiz,
		subject,
		update,
	}: {
		sections: Array<SectionType>;
		quiz: string;
		subject: string;
		update: (selectedSections: number[]) => void;
	} = $props();
	let sectionsDiv: undefined | HTMLDivElement;

	function getCheckedInput() {
		if (!sectionsDiv) {
			return [];
		}
		const inputIDRegex = /section-(\d+)/m;
		const checkedInputs = Array.from(sectionsDiv.children).flatMap((element) =>
			Array.from(element.children)
				.filter(
					(el) =>
						el.nodeName.toLowerCase() == "input" &&
						(el as HTMLInputElement).checked,
				)
				.map((el) => Number(inputIDRegex.exec(el.id)?.at(1))),
		);
		return checkedInputs;
	}
</script>

<h1>Quiz: {quiz} of {subject}</h1>
<h2>Sections:</h2>

<div bind:this={sectionsDiv} class="flex w-full flex-col">
	{#each sections as section, i}
		<div class="border-border border-3 gap-2 p-2 flex">
			<input
				type="checkbox"
				id="section-{i}"
				class="block w-5 border-r-border border-r-2"
			/>
			<label for="section-{i}" class="flex-1">{section.title}</label>
		</div>
	{/each}
</div>
<Button onclick={() => update(getCheckedInput())}>Generate the quiz</Button>
