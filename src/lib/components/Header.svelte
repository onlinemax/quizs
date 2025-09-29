<script lang="ts">
	import { toggleMode } from "mode-watcher";
	import { Button } from "$lib/components/ui/button/index";
	import MoonIcon from "@lucide/svelte/icons/moon";
	import SunIcon from "@lucide/svelte/icons/sun";
</script>

<header
	class="h-15 flex px-5 items-center justify-end sticky top-0 bg-background border-b-border border-b-3"
>
	<Button size="icon" variant="outline" class="relative" onclick={toggleMode}>
		<MoonIcon
			class="absolute dark:scale-100 block scale-0 aspect-square w-full !transition-transform ease-in-out"
		/>
		<SunIcon
			class="dark:scale-0 block aspect-square w-full !transition-transform ease-in-out"
		/>
	</Button>
</header>
