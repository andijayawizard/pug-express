const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');

app.get('/', async (req, res) => {
	// res.send('halo dunia');
	const query = await axios.get('http://localhost:3001/results');
	res.render('index', {employees: query.data});
});
app.get('/about', (req, res, next) => {
	var locals = {
		title: 'About Us',
		desc: 'Kami adalah sekelompok orang2an sawah',
	};
	res.render('about', locals);
});
app.get('/contact', (req, res) => {
	res.render('contact');
});
app.get('/roti', (req, res) => {
	res.render('roti');
});
app.get('/products', (req, res) => {
	var objects = {
		title: 'Our Products',
		desc: 'Daftar produk yang telah kami rilis',
		nama: {
			first: 'andika',
			last: 'sanjaya',
		},
		alamat: {
			lama: 'jl. raya bogor km. 30, depok',
			baru: 'jl. raya ahmad yani, bandung',
		}
	}
	res.render('products', objects);
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});

