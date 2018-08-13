import React from 'react';
import File from './file.component.js';
import {shallow} from 'enzyme';
import UserDetails from './user-details.component.js';
import {noop} from 'lodash';

describe(`<UserDetails />`, () => {
	let folders;

	beforeEach(() => {
		folders = [
			{
				id: 'folder1',
				folders: [
					{
						id: 'folder2',
						folders: [],
						files: [
							{
								id: 'file1',
								addedBy: {
									id: 'user1',
								},
							},
							{
								id: 'file2',
								addedBy: {
									id: 'user2',
								},
							},
						],
					},
				],
				files: [
					{
						id: 'file3',
						addedBy: {
							id: 'user1',
						},
					},
				],
			},
		];
	});

	it(`renders no files if there are no files uploaded by this user`, () => {
		const wrapper = shallow(<UserDetails folders={folders} userId="user9" close={noop} top={0} right={0} />);
		expectRenderedFileIds(wrapper, []);
	});

	it(`renders only the files that were uploaded by user1`, () => {
		const wrapper = shallow(<UserDetails folders={folders} userId="user1" close={noop} top={0} right={0} />);
		expectRenderedFileIds(wrapper, ['file2', 'file3']);
	});
});

function expectRenderedFileIds(wrapper, expectedIds) {
	let actualIds = [];
	wrapper.find(File).forEach(file => actualIds.push(file.prop('file').id));
	expect(actualIds).toEqual(expectedIds);
}
