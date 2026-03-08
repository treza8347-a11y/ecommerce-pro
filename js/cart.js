let cart =
JSON.parse(localStorage.getItem("cart")) || []

function addToCart(id){

const product =
products.find(p=>p.id===id)

cart.push(product)

localStorage.setItem(
"cart",
JSON.stringify(cart)
)

alert("Produit ajouté au panier")

}
