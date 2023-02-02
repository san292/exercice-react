import { getDateFormatYear } from '../utils/getDateFormatYear';




export const PeopleItem = ({ name, image, age }:ImageProps) => {
	return (
		<article className='mt-2 p-2 text-center text-slate-300'>
			<h1>{name}</h1>

			<img className=' rounded-xl' src={image} alt={name} />
			<dt>Birthday :{getDateFormatYear(age)}</dt>
		</article>
	);
};
