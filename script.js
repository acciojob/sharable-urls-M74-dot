// your code here
document.addEventListener('DOMContentLoaded', () => {
button = document.querySelector('#button');

button.addEventListener('click', (event)=>{
	event.preventDefault();
	heading = document.querySelector('#url');
	name = document.querySelector('#name').value;
	year = document.querySelector('#year').value;

	let updatedHeading = heading.innerText + "?";
	if(name!=="")updatedHeading += `name=${name}&`;
	if(year!=="")updatedHeading += `year=${year}`;

	updatedHeading = updatedHeading.endsWith('&')?updatedHeading.slice(0,-1):updatedHeading;
	heading.innerText = updatedHeading;
});
});