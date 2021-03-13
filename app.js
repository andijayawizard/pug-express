const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');

app.get('/', async (req, res) => {
	// res.send('halo dunia');
	const query = await axios.get('http://localhost:3001/results');
	res.render('index', {employees: query.data});
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});

