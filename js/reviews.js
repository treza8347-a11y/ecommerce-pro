function addReview(){

const review =
document.getElementById("reviewInput").value

const list =
document.getElementById("reviews")

list.innerHTML += `<p>⭐ ${review}</p>`

}
