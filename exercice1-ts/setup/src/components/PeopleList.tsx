
import { useState } from 'react';
import peopleData from '../peopleData';
import { PeopleItem } from './PeopleItem';

export const PeopleList = () => {
	const [peoples, setPeoples] = useState(peopleData);

	const clearPeopleData = () => setPeoples([]);

	return (
		<section className='flex flex-col items-center mt-10 bg-slate-500'>
			{peoples.map((people) => (
				<PeopleItem
					key={people.id}
					{...people}
					
				/>
			))}
			<button
				className=' bg-slate-300 p-4 text-2xl rounded-lg'
				onClick={clearPeopleData}>
				Clear all
			</button>
		</section>
	);
};
