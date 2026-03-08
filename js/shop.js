const container = document.getElementById("products");

products.forEach(product => {

container.innerHTML += `

<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>${product.price}€</p>

<button onclick="addToCart(${product.id})">
Ajouter au panier
</button>

</div>

`;

});
