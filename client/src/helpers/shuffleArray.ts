export function shuffleArray<T>(array: T[]): T[] {
	// it's not the best way to shuffle an array, but it has a functional approach (which fits with react philosophy) and it's great for small arrays
	return array
		.map((item) => ({ item, position: Math.random() }))
		.sort((a, b) => a.position - b.position)
		.map(({ item }) => item);
}
