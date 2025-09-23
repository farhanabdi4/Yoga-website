document.addEventListener('DOMContentLoaded',()=>{
const productsGrid = document.getElementById('product-grid');
const  cartItemsDiv = document.getElementById('cart-items');
const subtotalSpan = document.getElementById('subtotal');
const taxtSpan = document.getElementById ('taxt');
const totalSpan = document.getElementById('total');
const chechoutBtn = document.getElementById('chechout-btn');

const products = [
    { id: 1, name: 'Bur', price: 2500, image: 'https://via.placeholder.com/80?text=Bur' },
    { id: 2, name: 'Sonkor', price: 10000, image: 'https://via.placeholder.com/80?text=Sonkor' },
    { id: 3, name: 'Biyo', price: 1500, image: 'https://via.placeholder.com/80?text=Biyo' },
    { id: 4, name: 'Shaah', price: 5000, image: 'https://via.placeholder.com/80?text=Shaah' },
    { id: 5, name: 'Gacmo-dhaq', price: 3000, image: 'https://via.placeholder.com/80?text=Gacmo-dhaq' },
    { id: 6, name: 'Sabbuun', price: 2000, image: 'https://via.placeholder.com/80?text=Sabbuun' },
    { id: 7, name: 'Daawada Cadayga', price: 4500, image: 'https://via.placeholder.com/80?text=Cadayga' },
    { id: 8, name: 'Bataray', price: 3500, image: 'https://via.placeholder.com/80?text=Bataray' },
];

let cart = [];
const TAX_RATE = 0.10;

function displayProducts(){
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
        
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price.toLocaleString()}SL shilin</p>

        `;
        productCard.addEventListener('click',()=> addToCart(product));
        productsGrid.appendChild(productCard);
        
    });

    
}

//ku daridii rasiidka
function addToCart(product){
    const existringItem = cart.find(item=> item.id === product.id);
    if (existringItem){
        existringItem.quantity++;
    }else{
        cart.push({...product, quantity:1});
    }
    updateCartDisplay();

    console.log (cart);

}

//cusboneysiinta shaashada

    function updateCartDisplay(){
        cartItemsDiv.innerHTML= '';
        let subtotal=0;

        cart.forEach(item=>{
            const cartItemsDiv= document.createElement ('div');
            cartItemsDiv.classList.add('cart-item');
            cartItemsDiv.innerHTML = `
            
            <span>${item.name} (${item.quantity})</span>
            <span>${(item.price * item.quantity).toLocaleString()}SL shilin </span>

            <button class="remove-btn" data-id="${item.id}"> Xidh </button>

            `;
            cartItemsDiv.appendChild(cartItemsDiv);
            
            subtotal+= item.price * item.quantity ; 

        });

        const tax = subtotal * TAX_RATE ; 
        const total = subtotal + tax;

        subtotalSpan.textContent= subtotal.toLocaleString();
        taxtSpan.taxContent = total.toLocaleString();

        const removeButtons= document.querySelectorAll('.remove-btn');
        removeButtons.forEach(button=>{
            button.addEventListener('click',(e)=>{
                const idToRemove = parseInt(e.target.datase.id);
                removeFromCart(idToRemove);
            });
        });
    }




})