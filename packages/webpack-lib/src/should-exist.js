import classes from './should-exist.css';

export function shouldExist() {
	console.log(classes);

	const div = document.createElement('div');
	div.innerHTML = `<div class="${classes.webpackShouldExist}">Webpack Should Exist!</div>`;
	document.body.appendChild(div);

	console.log('Webpack - Should exist!');
}
