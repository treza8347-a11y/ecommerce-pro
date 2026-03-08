const container = document.getElementById("products")

function displayProducts(list){

container.innerHTML=""

list.forEach(product=>{

container.innerHTML += `

<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>${product.price}€</p>

<p>⭐ ${product.rating}</p>

<a href="product.html?id=${product.id}">
Voir produit
</a>

<button onclick="addToCart(${product.id})">
Ajouter
</button>

</div>

`

})

}

displayProducts(products)

function searchProducts(){

const value =
document.getElementById("searchInput")
.value.toLowerCase()

const filtered = products.filter(p =>
p.name.toLowerCase().includes(value)
)

displayProducts(filtered)

}

function filterCategory(cat){

if(cat==="all"){
displayProducts(products)
return
}

const filtered =
products.filter(p=>p.category===cat)

displayProducts(filtered)

}
