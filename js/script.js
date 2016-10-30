console.log('peasy app!');

function draw() {
	console.log('draw');
}

var view = [
	m('div', 'hello')
]

m.render(document.getElementById('app'), view);