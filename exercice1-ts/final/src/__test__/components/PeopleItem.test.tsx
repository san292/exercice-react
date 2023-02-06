import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PeopleItem } from '../../components/PeopleItem';
import { getDateFormatYear } from '../../utils/getDateFormatYear';

describe('PeopleItem', () => {
	const name = 'Bertie Yates';
	const image =
		'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/930.jpg';
	const age = 29;

	test('should render props name image age', () => {
		render(<PeopleItem name={name} image={image} age={age} />);

		screen.logTestingPlaygroundURL();
		const heading = screen.getByRole('heading', { name: /Bertie Yates/i });
		const { src, alt } = screen.getByRole('img', {
			name: /Bertie Yates/i,
		}) as HTMLImageElement;

		expect(src).toBe(image);
		expect(alt).toBe(name);
		expect(heading.textContent).toBe(name);
	});

	test('should mock function return age', () => {
		render(<PeopleItem name={name} image={image} age={age} />);

		const birthdayAge = '1994';

		const mock = vi.fn().mockImplementation(() => getDateFormatYear(age));
		expect(mock()).toBe(1994);

		
	});
});
