import './css/style.css';
import './sass/style.scss';
//import './less/style.less';
import img from '../src/img/chery.jpg';

const image = document.createElement('img');
image.src = img;
document.body.append(image);

console.log('hello hello');