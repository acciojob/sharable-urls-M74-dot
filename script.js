// your code here
button = document.querySelector('#button');

button.addEventListener('click', ()=>{
	heading = document.querySelector('#url');
	name = document.querySelector('#name').value;
	year = document.querySelector('#year').value;

	let updatedHeading = heading.textContent + "?";
	if(name!=="")updatedHeading += `name=${name}&`;
	if(year!=="")updatedHeading += `year=${year}`;

	updatedHeading = updatedHeading.endsWith('&')?updatedHeading.slice(0,-1):updatedHeading;
	heading.textContent = updatedHeading;
});