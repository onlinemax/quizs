import type { LayoutLoad } from './$types';
import { getData } from '$lib/data';

export const load: LayoutLoad = async () => {
	const data = getData()?.data;

	return {
		data: data
	};
};

