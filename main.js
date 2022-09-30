import './style.scss';
import {removeLoaderUi, showLoaderUi} from "./js/loader.js";
import {createItemUi} from "./js/item.js";
import {addToCart} from "./js/cart.js";
import * as bootstrap from 'bootstrap'


export let items = [];
export const itemRow = document.querySelector(".item-row");
export const cartBtn = document.querySelector(".cart-btn");
export const cartCounter = document.querySelectorAll(".cart-counter");
export const cartBox = document.querySelector('#cartBox');
export const total = document.querySelector('#total');
export const allCartCost = document.querySelectorAll('.cart-cost');




showLoaderUi()
fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> {
        items = json

        items.forEach(item => {
            // console.log(item)

            itemRow.append(createItemUi(item))
        })

        // console.log(items)
        removeLoaderUi()
    })


// window.addToCart = event => {
//     console.log('add-to-cart',event.target)
// }


//event delegation
itemRow.addEventListener('click',e => {
    // console.log(e.target)
    if(e.target.classList.contains('add-cart')){
        addToCart(e)
    }
});

// const addCartBtns = document.querySelectorAll('.add-cart');
// addCartBtns.forEach(addCartBtn => {
//     addCartBtn.addEventListener('click',function (){
//         console.log('add-to-cart')
//     })
// })