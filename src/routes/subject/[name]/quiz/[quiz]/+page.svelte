<script lang="ts">
	import SectionSelector from "$lib/components/SectionSelector.svelte";
	import QuizWidget from "$lib/components/QuizWidget.svelte";
	const { data: d } = $props();

	const { subject, quiz, data } = d;
	const sections = data?.[subject]?.[quiz].sections;
	let selectedSections: undefined | number[] = $state(undefined);

	const questions = $derived.by(() => {
		if (!selectedSections || !sections) {
			return;
		}
		return selectedSections
			.flatMap((section) => sections.at(section)?.questions)
			.filter((x) => x != undefined);
	});

	function finishQuiz() {
		selectedSections = undefined;
	}
	function setSelectedSections(sections: number[]) {
		selectedSections = sections;
	}
</script>

{#if sections && !selectedSections}
	<SectionSelector {subject} {sections} {quiz} update={setSelectedSections} />
{:else if selectedSections && questions}
	<QuizWidget {questions} {finishQuiz} />
{:else}
	<span>Could not load the sections for the quiz: {subject}/{quiz}</span>
{/if}
