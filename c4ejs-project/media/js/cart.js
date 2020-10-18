let cart = [];
function saveCart(){
    localStorage.setItem("shoppingCart",JSON.stringify(cart));
}
function loadCart(){
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
}
function addItemToCart(name,price,size){
    loadCart();
    for(let item in cart){
        if(cart[item].name==name&& cart[item].size==size){
           cart[item].count++;
           saveCart();
           return; 
        }
    }
    let item = {"name": name, "price": price, "size": size,"count": 1};
    cart.push(item);
    saveCart();
}
function removeItem(index){
    cart.splice(index,1);
    saveCart();
}
function clearCart(){
    cart=[];
    saveCart();
}