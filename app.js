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
app.get('/roti', (req, res, next) => {
	var problematika_hidup = {
		daftar_problem_lu: {
			problem1: "sulitnya nagih utang",
			problem2: "balikan sama mantan",
			problem3: "kencan sama mantan",
			problem4: "kondangan kawinan tapi ngegandeng mantan",
			problem5: "cicilan mobil dan rumah yang tiada kunjung lunas karena kemakan gengsi",
		},
		daftar_problem_gua: {
			problem1: "konflik yang tiada kunjung padam",
		},
		daftar_problem_kita_semua: {
		}
	}
	let mereka = 'ada dh, siapa ke..';
	let kita = 'ya kita'
	let ngerti = 'mengerti dan memahami';
	if (mereka===ngerti) {
		console.log('sukur alhamdulilah..');
	} else if (kita===ngerti) {
		console.log('sukur alhamdulilah juga..');
	} else {
		console.log('ah, itu sih beban hidup lu..');
	}
	console.log(
		`tiada cara (cepat dan mudah) #{ngerti} #{mereka}`+
		`satu2nya cara #{ngerti} #{mereka}`+
		`yaitu memperlakukan #{mereka} layaknya pasangan lu`+
		`#{mereka} ga harus #{ngerti}, tapi kita harus`+
		`asek..`
	);
	res.render('roti', problematika_hidup);
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});

