import { useState } from 'react';
// local modules
import { requestState } from '../@types';

export const useFetch = (
	endpoint: string,
	config?: RequestInit
): [requestState, () => unknown] => {
	const [requestState, setRequestState] = useState<requestState>({
		data: null,
		error: null,
		loading: false,
	});

	const fetcher = async () => {
		setRequestState((prevState) => ({
			...prevState,
			loading: true,
		}));
		try {
			const data = await fetch(endpoint, config);
			const JSONData = await data.json();
			setRequestState((prevState) => ({
				...prevState,
				loading: false,
				data: JSONData,
			}));
		} catch (error) {
			setRequestState((prevState) => ({
				...prevState,
				error: true,
				loading: false,
			}));
		}
	};

	return [requestState, fetcher];
};
