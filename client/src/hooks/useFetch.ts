export const useFetch = (
	endpoint: string,
	callback: (error: unknown, data: Promise<Response> | null) => unknown,
	config?: RequestInit
) => {
	return async () => {
		try {
			const data = await fetch(endpoint, config);
			const JSONData = await data.json();
			callback(null, JSONData);
		} catch (error) {
			callback(error, null);
		}
	};
};
