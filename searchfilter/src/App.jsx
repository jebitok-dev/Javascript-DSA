/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { GalleryData } from "./GalleryData";

function App() {
	const [data, setData] = useState([]);
	const [collection, setCollection] = useState([]);

	useEffect(() => {
		setData(GalleryData);
		setCollection([...new Set(GalleryData.map((item) => item.title))]);
	}, []);

	const galleryFilter = (itemData) => {
		const filterData = GalleryData.filter((item) => item.title == itemData);
		setData(filterData)
	}

	console.log(data);
	console.log(collection);

	return (
		<>
			<div className='App'>
				<div className='galleryWrapper'>
					<div className='filterItem'>
						<ul>
							<button onClick={() => setData(GalleryData)}>All</button>
							{collection.map((item) => (
								<li>
									<button onClick={() => {galleryFilter(item)}}>{item}</button>
								</li>
							))}
						</ul>
					</div>
					<div className='galleryContainer'>
						{data.map((item) => (
							<div key={item.key} className='galleryItem'>
								<img src={item.image} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
