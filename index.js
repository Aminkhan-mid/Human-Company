import {v4 as uuidv4} from "https://jspm.dev/uuid"

const product = [
    {
        gender: "Man",
        price:"Price: ₹ 3000",
        img:"https://i.pinimg.com/736x/c9/91/9f/c9919f951eb38b9b8216924109b99e46.jpg",
        uuid:uuidv4(),
    },
    {
        gender: "Woman",
        price:"Price: ₹ 3000",
        img:"https://i.pinimg.com/736x/fc/f7/27/fcf727eaa7ebac926fe3d5caf2a15f97.jpg",
        uuid:uuidv4(),
    },
    {
        gender: "Kid",
        price:"Price: ₹ 1500",
        img:"https://i.pinimg.com/736x/9f/ee/1e/9fee1e6522b0854a39e6a523317e5d90.jpg",
        uuid:uuidv4(),
    }
]


document.addEventListener('click', function(e){
    if(e.target.dataset.uid){
        console.log("Man Added to cart!!", e.target.dataset.uid)
    }
    else if(e.target.id === 'cart'){
        console.log("Your Cart!")
    }
})

function renderProducts(){
    let productsFeed = ''
    product.forEach(function (human){
        productsFeed += `
        <div class="humanContainer">
                <p class="productName">${human.gender}</p>
                <img src="${human.img}" alt="product man">
                
                <div class="flexThree">
                    <div>
                    <p class="ratingsBox">
                        ${human.price}
                        <br>
                        4.4 ⭐️⭐️⭐️⭐️
                        <br>
                        (1,62,234 reviews)
                    </p>
                </div>

                <div>
                    <i class="fa-solid fa-cart-plus" data-uid="${human.uuid}"></i>
                </div>
            </div>
        </div>
                `
    })
    return productsFeed
}

function render(){
    document.getElementById('humans').innerHTML = renderProducts()
}
render()