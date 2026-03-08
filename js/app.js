const productContainer = document.getElementById("products");
const filter = document.getElementById("categoryFilter");

function displayProducts(list){

productContainer.innerHTML="";

list.forEach(product => {

productContainer.innerHTML += `

<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>${product.price}€</p>

<a href="product.html?id=${product.id}" class="btn">Voir</a>

<button onclick="addToCart(${product.id})">
Ajouter
</button>

</div>

`;

});

}

displayProducts(products);

filter.addEventListener("change",()=>{

if(filter.value==="all"){

displayProducts(products);

}else{

const filtered = products.filter(p=>p.category===filter.value);

displayProducts(filtered);

}

});
