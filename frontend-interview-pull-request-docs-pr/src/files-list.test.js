import React from 'react';
import {shallow} from 'enzyme';
import FilesList from './files-list.component.js';

describe(`<FilesList />`, () => {
	it(`renders a list a files`, () => {
		const wrapper = shallow(<FilesList />);
		wrapper.setState({folders: [
			{id: 'folder1'},
			{id: 'folder2'},
			{id: 'folder3'},
		]});
		expect(wrapper).toMatchSnapshot();
	});
});
