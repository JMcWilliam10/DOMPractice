const heading = document.querySelector('h1');

heading.style.color = 'red';
const color = 'blue';

switch(color){
    case 'red':
    console.log('color is red');
    break;
    case 'blue':
    console.log('color is blue');
    break;
    default:
    console.log('color is not red or blue')
}