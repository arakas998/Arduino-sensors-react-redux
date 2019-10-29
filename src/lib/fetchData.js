// Post data with fetch api

const fetchData = (url = '', method = 'POST', token = '', data = null, cb) => {
	fetch(url, {
		method: method,
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
			token: token
		},
		redirect: 'follow',
		referrer: 'no-referrer',
		body: (data && JSON.stringify(data)) || null
	})
		.then(res => {
			console.log('TCL: postData -> res', res);
			res
				.json()
				.then(data => (res.ok ? cb(null, data) : cb(data, null)))
				.catch(err => {
					console.log('TCL: postData -> err', err);
					cb({ error: 'Error parsing response.' }, null);
				});
		})
		.catch(err => {
			console.log('TCL: postData -> err', err);
			cb({ error: err.code }, null);
		});
};

export default fetchData;
