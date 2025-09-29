<script lang="ts">
	import type { QuestionType } from "$lib/data";
	import { shuffleArray } from "$lib";
	import { Button } from "$lib/components/ui/button/index";

	const {
		questions,
		finishQuiz,
	}: { questions: Array<QuestionType>; finishQuiz: () => void } = $props();
	const order = shuffleArray(
		new Array(questions.length).fill(0).map((_, i) => i),
	);
	let currentState: 0 | 1 = $state(0);
	function updateState() {
		currentState = 1 - currentState;
		currentIndex += currentState == 0 ? 1 : 0;
		if (currentState == 0 && currentIndex == order.length) {
			finishQuiz();
		}
	}

	let currentIndex = $state(0);
	const question = $derived(questions[order[currentIndex]]);
</script>

<div
	class="w-full h-full mx-auto md:w-2xl md:h-[unset] md:aspect-[16/9] border-border border-5 relative"
>
	<div class="w-full flex gap-1">
		<p class="flex-1 font-extrabold">{question.question}</p>
		<span>{currentIndex + 1} / {order.length}</span>
	</div>
	{#if currentState == 1}
		<p>{question.answer}</p>
	{/if}
	<Button class="bottom-2 absolute right-2" onclick={updateState}>
		{currentState == 0
			? "Reveal answer"
			: currentIndex != order.length - 1
				? "Next Question"
				: "Finish quiz"}
	</Button>
</div>
