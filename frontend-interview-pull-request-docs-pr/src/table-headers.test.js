import React from 'react';
import renderer from 'react-test-renderer';
import TableHeaders from './table-headers.component.js';

describe(`<TableHeaders />`, () => {
	it(`renders some table headers`, () => {
		const tree = renderer.create(<TableHeaders />);
		expect(tree).toMatchSnapshot();
	});
});
