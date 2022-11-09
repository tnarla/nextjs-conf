import { useEffect, useState } from 'react';

interface Resource<T> {
	loading: boolean;
	data: T | null;
}

export function useFakeResource<T>(inData: T): Resource<T> {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<T | null>(null);

	useEffect(() => {
		if (!loading && !data) {
			setLoading(true);

			setTimeout(() => {
				setData(inData);
				setLoading(false);
			}, 500);
		}
	}, [loading, data, inData]);

	return {
		loading,
		data,
	};
}
