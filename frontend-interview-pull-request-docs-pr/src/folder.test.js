import React from 'react';
import {shallow} from 'enzyme';
import Folder from './folder.component.js';

describe(`<Folder />`, () => {
	it(`renders a file with file name, date added, and username`, () => {
		const wrapper = shallow(<Folder
			indentationLevel={0}
			folder={{
				id: 'folder1',
				name: 'Folder 1',
				addedBy: {
					id: 'user1',
					name: 'Wilhelm II',
				},
				folders: [
					{
						id: 'folder2',
						name: 'Folder 2',
						folders: [],
						files: [],
						addedBy: {
							id: 'user1',
							name: 'Wilhelm II',
						},
					},
				],
				files: [
					{
						id: 'file1',
						name: 'Genghis-Khan.png',
						dateAdded: 1489183017615,
						addedBy: {
							id: 'user1',
							name: 'Erich Ludendorff',
						}
					},
				],
			}}
		/>);
		expect(wrapper).toMatchSnapshot();
	});
});

