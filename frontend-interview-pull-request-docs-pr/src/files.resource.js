import {Observable} from 'rx';

export const dummyData = [
	{
		id: 'folder1',
		name: 'Hobbiton',
		folders: [],
		addedBy: {
			id: 'user1',
			name: 'Frodo Bagginses',
		},
		files: [
			{
				id: 'file1',
				name: 'Name',
				dateAdded: 1489008841673,
				addedBy: {
					id: 'user1',
					name: 'Frodo Bagginses',
				},
			},
			{
				id: 'file2',
				name: 'Name',
				dateAdded: 1489008841673,
				addedBy: {
					id: 'user2',
					name: 'Tinuviel',
				},
			},
			{
				id: 'file3',
				name: 'Name',
				dateAdded: 1489008841673,
				addedBy: {
					id: 'user1',
					name: 'Frodo Bagginses',
				},
			},
		],
	},
	{
		id: 'folder2',
		name: 'Buckland',
		addedBy: {
			id: 'user1',
			name: 'Frodo Bagginses',
		},
		folders: [
			{
				id: 'folder3',
				name: 'Gondor',
				addedBy: {
					id: 'user3',
					name: 'Beren',
				},
				folders: [
					{
						id: 'folder4',
						name: 'Rohan',
						folders: [],
						addedBy: {
							id: 'user3',
							name: 'Beren',
						},
						files: [
							{
								id: 'file4',
								name: 'Name',
								dateAdded: 1489008841673,
								addedBy: {
									id: 'user1',
									name: 'Frodo Bagginses',
								},
							},
							{
								id: 'file5',
								name: 'Name',
								dateAdded: 1489008841673,
								addedBy: {
									id: 'user3',
									name: 'Beren',
								},
							},
							{
								id: 'file6',
								name: 'Name',
								dateAdded: 1489008841673,
								addedBy: {
									id: 'user3',
									name: 'Beren',
								},
							},
						],
					},
				],
				files: [
					{
						id: 'file7',
						name: 'Name',
						dateAdded: 1489008841673,
						addedBy: {
							id: 'user4',
							name: 'Tom Bombadil',
						},
					},
				],
			},
		],
		files: [
			{
				id: 'file8',
				name: 'Name',
				dateAdded: 1489008841673,
				addedBy: {
					id: 'user1',
					name: 'Frodo Bagginses',
				},
			},
		],
	},
]

export function getFiles() {
	return Observable.just(dummyData);
}
