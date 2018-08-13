import React from 'react';
import renderer from 'react-test-renderer';
import File from './file.component.js';

describe(`<File />`, () => {
	it(`renders a file with file name, date added, and username`, () => {
		const tree = renderer.create(<File
			indentationLevel={0}
			file={{
				id: 'file1',
				name: 'Genghis-Khan.png',
				dateAdded: 1489183017615,
				addedBy: {
					id: 'user1',
					name: 'Erich Ludendorff',
				}
			}}
			/>
		);
		expect(tree).toMatchSnapshot();
	});
});
