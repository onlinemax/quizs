import { getData } from "$lib/data"
import { readable } from "svelte/store";

let d = null;

try {
	d = getData()?.data;
} catch (e) {
	console.error("Couldn't parse data because of", e);
}

export const data = readable(d);
