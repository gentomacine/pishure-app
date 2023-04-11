const url = 'https://pishure-backend.herokuapp.com';

const client = async (endpoint, data, method = 'POST') => {
	try {
		const response = await fetch(`${url}/${endpoint}`, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		});
		return response.json();
	} catch (err) {
		console.log(err, 'what eactly is the problem');
	}
};

export { client };
