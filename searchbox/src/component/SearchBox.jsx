import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "./DebounceHook";

function SearchResult({ isLoading, data }) {
	return (
		<div className='flex flex-col px-4 py-2 w-full bg-gray-500 divide-y divide-gray-300'>
			{isLoading && <div className='text-white'>Loading...</div>}
			{data &&
				data.map((item) => (
					<div key={item.id} className='text-gray-100 py-2'>
						{item.title}
					</div>
				))}
		</div>
	);
}

export default function SearchBox() {
	const [search, setSearch] = useState("");

	const debounceSearch = useDebounce(search, 200);

	const { data, isLoading, error } = useQuery({
		queryKey: ["search", debounceSearch],
		queryFn: () => {
			if (debounceSearch) {
				return fetch(`https://dummyjson.com/products/search?q=${search}`).then(
					(res) => res.json()
				);
			} else {
				return {products: []};
			}
		},
	});

	return (
		<div>
			<input
				type='search'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder='Enter your search text here'
				className='p-2 w-full focus:outline-none placeholder:text-gray-500 bg-gray-600 text-gray-50 rounded-md focus:ring focus:ring-purple-500'
			/>
			{data && <SearchResult isLoading={isLoading} data={data.products} />}
		</div>
	);
}
