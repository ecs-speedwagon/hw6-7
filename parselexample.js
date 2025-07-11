// import {fruits} from "./index";
// let fruit ='apple'
// const  fr =fruits(fruit);
// printResult(fr);
import { products } from './index.js';

function rProducts(products) {
    return products.map(product => `
        <div class="product">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('products-container');
    container.innerHTML = rProducts(products);
});