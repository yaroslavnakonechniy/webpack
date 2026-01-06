import './css/style.css';
import './sass/style.scss';
//import './less/style.less';
import './ts/index.ts';
import img from '../src/img/chery.jpg';

const image = document.createElement('img');
image.src = img;
document.body.append(image);

console.log('hello hello');

//для перевірки чи працює babel
async function fetchData() {
    const response = await new Promise(resolve => setTimeout(() => resolve("Дані отримано!"), 1000));
    console.log(response);
}
fetchData();

//для перевірки eslintrc
const myVariable = 42; // Ця змінна не використовується (помилка no-unused-vars)