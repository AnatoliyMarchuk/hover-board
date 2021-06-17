const board = document.querySelector('#board');
const colors = [
	'#800000',
	'#ADFF2F',
	'#008000',
	'#FFD700',
	'#00CED1',
	'#4169E1',
	'#D2691E',
	'#B8860B',
	'#FF00FF',
	'#A52A2A',
	'#FFFAFA',
	'#FFE4E1',
	'#F5DEB3',
];

const SQUARES_NUMBER = 800;

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	board.append(square);
	square.addEventListener('mouseover', () => setColor(square));
	square.addEventListener('mouseleave', () => removeColor(square));
}

function setColor(element) {
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10 px ${color} `;
}
function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d';
	element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
