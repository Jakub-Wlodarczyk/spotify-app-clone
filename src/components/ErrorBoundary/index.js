import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error, info) {
		console.error(error, info);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;
		if (hasError) {
			return (
				<h1>
					An error occurred. Send us this info and we will investigate the issue:
					{hasError}
				</h1>
			);
		}

		return children;
	}
}

export default ErrorBoundary;
