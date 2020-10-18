document.getElementById("shop").addEventListener("click",()=>{
    window.location.pathname = "basicshop/allproduct.html";
})
function setUser(){
    let user_name = localStorage.getItem("user");
    if (user_name ==null){
        document.getElementById("user_name").innerHTML="";
        document.getElementById("home_logout").style.display = "none";
        document.getElementById("home_login").style.display = "block";
        localStorage.removeItem("shoppingCart");
    }else{
        document.getElementById("home_logout").style.display ="block";
        document.getElementById("user_name").innerHTML = user_name;
        document.getElementById("home_login").style.display= "none";
    }
}
setUser();
document.getElementById("home_login").addEventListener("click",()=>{
    window.location.pathname = "basicshop/login.html";
});
document.getElementById("home_logout").addEventListener("click",()=>{
    localStorage.removeItem("user");
    clearCart();
    header_shopcart();
    setUser();
})
document.getElementById("click-search").addEventListener("click",()=>{
    let search = document.getElementById("search").nodeValue;
    let arr = [];
    for (let i =0 ; i<data,length; i++){
        if(data[i].name.includes(search)){
            arr.push(i);
        }
    }
    if(arr.length==0){
        alert(`not found`);
    }else{
        localStorage.setItem("indexsearch", JSON.stringify(arr));
        window.location.pathname = "basicshop/search/html";
    }
});
let items = document.getElementsByClassName('items');
console.log(items);
for( let i=0; i< items.length;i++){
    items[i].addEventListener("click",()=>
    {
        if(localStorage.getItem("user")==null){
            window.location.pathname= "basicshop/login.html";
        }else{localStorage.setItem("index", i);
        window.location.pathname= `basicshop/product.html`;
        }
    })
}
function header_shopcart(){
    let hascart = document.getElementsByClassName('hascart')[0];
    loadCart();
    console.log(cart);
    if(cart==null|| cart.length<1){
        hascart.innerHTML = "No Product";
    }else{
        hascart.innerHTML="";
        hascart.insertAdjacentHTML("beforeend", `<h5 class="hascart-heading">All Product</h4>`);
        for(let i=0; i<cart.length; i++){
            let img = "";
            for(let j=0; j<data.length;j++){
                if(cart[i].name== data[j].name){
                    img = data[j].img[0];
                    break;
                }
            }
            hascart.insertAdjacentHTML("beforeend",`<div class="hascart-product>${img}
            <span class="name">${cart[i].name}</span>
            <div class="hascart-right">
                <span class="price">${cart[i].price}</span>
                <button class="btn-delete">Delete</button>
                </div>
                </div>`);
        }
        hascart.insertAdjacentHTML("beforeend", `<button id="view">View Cart</button>`);
    }
    deleteItem();
}
header_shopcart();
function deleteItem(){
    for(let i=0; i< cart.length;i++){
        document.getElementsByClassName("btn-delelte")[i].addEventListener("click",()=>{
            console.log(i);
            removeItem(i);
            header_shopcart();
        });
    }
}
document.getElementById("view").addEventListener("click",()=>{
    window.location.pathname= "basicshop/cart.html";
});
let user_name= localStorage.getItem("user");
console.log(user_name);


// console.log(products[0].img[1])