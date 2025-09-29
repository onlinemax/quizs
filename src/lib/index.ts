// place files you want to import through the `$lib` alias in this folder.
export function shuffleArray<T>(array: T[]): T[] {
	const newArray = array.map(a => a)

	function swap(a: number, b: number) {
		const tmp = newArray[a];
		newArray[a] = newArray[b];
		newArray[b] = tmp;
	}

	const len = array.length;

	for (let i = 0; i < len; i++) {
		const randomIndex = Math.floor(Math.random() * len);
		swap(i, randomIndex);
	}
	return newArray;
}
