import React from 'react';
import styles from './table-headers.styles.css';

export default class TableHeaders extends React.Component {
	render() {
		return (
			<div className={styles.tableHeader}>
				<div>
					Name
				</div>
				<div>
					Date added
				</div>
				<div>
					Added by
				</div>
			</div>
		);
	}
}
