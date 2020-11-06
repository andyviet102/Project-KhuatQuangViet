let products = JSON.parse(localStorage.getItem('productData'));
if (products == null) {
  localStorage.setItem('productData', JSON.stringify(productData));
  products = JSON.parse(localStorage.getItem('productData'));
}
console.log(products);

let arrayName = [];
let showNike = document.getElementById('nike');
let showAdidas = document.getElementById('adidas');
let showBalen = document.getElementById('balenciaga');
let showVete = document.getElementById('vetements'); 
let showMen = document.getElementById('proMen');
let showWoman = document.getElementById('proWomen');
let showApparel = document.getElementById('apparel');
let showShoes = document.getElementById('shoes');
let showAccessories = document.getElementById('accessories');
let showList= document.getElementById("showList");
let search_Text = document.getElementById("search");
let search_btn = document.getElementById("search-btn");
let x = document.getElementsByClassName("silderItems");
// responsive menu
let menuBtn = document.querySelector(".menu-icon #menu-icon-bars")
let searchBtn = document.querySelector("#search-icon");
let cancelBtn = document.querySelector(".cancel-icon");
let items = document.querySelector(".menu-items")
let form = document.querySelector("#form-search")
menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  // cancelBtn.classList.remove("show");
  form.classList.remove("active1");
  // cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = ()=>{
  form.classList.add("active1");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
// }
//chuyển đọng trái phải silder show + auto run
var slideIndex = 0;
showDivs(slideIndex); 

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for(i = 0 ; i< x.length;i++ ){
    x[i].style.display = 'none';
  }
  slideIndex ++;
  if (slideIndex > x.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  setTimeout(showDivs,2000);
}


// show sản phẩm ra từ đầu
function getdata(){
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    soProduct(products[i].id, products[i].img, products[i].name, products[i].price);
  }
}
function soProduct(id, img, name, price)
{
    showList.insertAdjacentHTML('beforeEnd', 
    `
    <div class="productItem">
      <div class ="productsImg" style = "position: relative">
        <div class="productImg0" style = "top:0; "><img src="${img[0]}" alt="" ></div>
        <div class="productImg1" style = "position: absolute ; top: 0 ; z-index :-1"><img src="${img[1]}" alt="" ></div>
      </div>
      <div class="productTit">
        <b style ="font-size:10px;">${name}</b>
      </div>
      <div class="productPrice">$${price}</div>
      <button  class="btnToCart" onclick="AddPro(${id})" >Add to cart</button>
     </div>
    `
    )
}
getdata()

let ProductsList = document.getElementById('ProductsList')
function searchResult (name){
  ProductsList.insertAdjacentHTML('beforeEnd',
  `
      <option value="${name}" />              
  `
  )
}
// tên tìm kiếm
function fillArr(){
  for( let i = 0 ; i <products.length;i++){
    arrayName.push(products[i].name.toLowerCase())
  }
  // console.log(arrayName)
  for(let i = 0 ; i < products.length; i++){
    searchResult(products[i].name)
  }
}
fillArr()



// tìm kiếm theo brand + gender
// nike
showNike.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.brand == 'Nike');
  getdata(products);
})
// adidas
showAdidas.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.brand == 'adidas');
  getdata(products);
})
// balenciaga
showBalen.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.brand == 'balenciaga');
  getdata(products);
})
// vetements
showVete.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.brand == 'VETEMENTS');
  getdata(products);
})
// show products for men
showMen.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  let product1 = products.filter(x => x.gender.length == 2 );
  let product2 = products.filter(x => x.gender == 'male');
  products = product1.concat(product2);
  getdata(products)
})
// show products for women
showWoman.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  let product1 = products.filter(x => x.gender.length == 2 );
  let product2 = products.filter(x => x.gender == 'female');
  products = product1.concat(product2);
  console.log(products);
  getdata(products)
})

showApparel.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.category == 'apparel');
  getdata(products);
})
showShoes.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.category == 'shoes');
  getdata(products);
})
showAccessories.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.category == 'accessories');
  getdata(products);
})
// tìm kiếm theo tên

function getInputValue(){
  showList.innerHTML ='';
  products = JSON.parse(localStorage.getItem('productData'));
  var inputVal = search_Text.value.toLowerCase();
  products = products.filter(x => x.name.toLowerCase() == inputVal);
  getdata(products);
  // for(let i = 0 ; i < products.length ;i++){
  //   let x = products[i].name.toLowerCase()
  //     if(x == inputVal){
  //       // soProduct(products[i].img, products[i].name, products[i].price);
  //       getdata(products);
  //       searchResult(products[i].name);
        
  //   }
  // }
}

// sắp xếp theo giá 
let sortby = document.getElementById('sortby');
sortby.addEventListener('change', ()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  if(sortby.value == 'low') {
    products.sort(function(a, b) {return a.price - b.price});
    getdata(products);
  }else if (sortby.value == 'high') {
    products.sort(function(a, b) {return b.price - a.price});
    getdata(products);
  }else{
    getdata(products);
  }
})
//gio hang
function AddPro(id) {
  alert('Add to cart successfully');
  for (let item of products) {
    if (item.id == id) {
      if(!listPro.includes(item)){
        listPro.push(item);
        listPro[listPro.indexOf(item)].number = 1;
      }else {
        listPro[listPro.indexOf(item)].number++
      }
    }
  }
  console.log(listPro);
  updateTable();
  delBill()
  push(listPro);
}
function updateTable() {
  document.getElementById('numberCard').innerHTML = listPro.length;
  let tabbleCart = document.getElementById('tableCart');
  tabbleCart.innerHTML = '';
  let cost = 0; totalPrice = 0;
  for (let item of listPro) {
    idd = item.id;
    img = item.img[0];
    name = item.name;
    if (item.gender.length == 2) {
      gender = 'unisex';
    }else {
      gender = item.gender[0];
    }
    number = item.number;
    price = item.price;
    cost = price*number;
    totalPrice += price*number;
    addTable(idd, img, name, gender, number, price, cost, totalPrice)
  }
}
function addTable(idd, img, name, gender, number, price, cost, totalPrice){
  let totalCart = document.getElementById('totalCart');
  let tabbleCart = document.getElementById('tableCart');
  tabbleCart.insertAdjacentHTML('beforeend',
`
  <div class = 'boxProducts' style = "width : 70% ; display: flex; padding-bottom : 20px;"> 
    <div class = "BoxImg"><img height="160rem" width="160rem" src="${img}" alt="${idd}"></div>
    <div class = "infoProducts" style = "flex-direction: column;">
      <div>${name}</div>
      <div>${gender}</div>
      <div>Quantity :<input type="number" id="editNumber_${idd}" placeholder="${number}" value="${number}"/></div>
      <div>$${cost} </div>
      <div>${price}</div>
      <div><button class="btn_delBill" onclick="delBill()">Delete</button></div>
    </div>
    
  </div>
  `)
  totalCart.innerHTML = 'Subtotal :  $'+totalPrice;
  let editNumber = document.getElementById(`editNumber_${idd}`);
  editNumber.addEventListener('change',()=>{
    for (item of listPro) {
      if (item.id == idd) {
        listPro[listPro.indexOf(item)].number = editNumber.value;
        updateTable();
      }
    }
  })
}
function delBill(){
  let btn_delBill = document.getElementsByClassName('btn_delBill');
  for (let i=0; i<listPro.length; i++){
    btn_delBill[i].addEventListener('click', ()=>{
      listPro.splice(i, 1);
      updateTable();
      alert('You have successfully deleted the product');
    })
  }
}
//Them xua xoa sp
let idPro = document.getElementById('idPro');
let catPro = document.getElementById('catPro');
let namePro = document.getElementById('namePro');
let brandPro = document.getElementById('brandPro');
let sizePro = document.getElementById('sizePro');
let colorPro = document.getElementById('colorPro');
let genderPro = document.getElementById('genderPro');
let pricePro = document.getElementById('pricePro');
let imgPro = document.getElementById('imgPro');
let desPro = document.getElementById('desPro');
let typePro = document.getElementById('typePro');

let btn_add = document.getElementById('btn_add');
let btn_update = document.getElementById('btn_update');
btn_update.style.display ="none";

function loadTable() {
  products = JSON.parse(localStorage.getItem('productData'));
  console.log(products)
  let MaTable = document.getElementById('MaTable');
  MaTable.innerHTML = '';
  for (let item of products) {
    let id = item.id;
    let category = item.category;
    let name = item.name;
    let brand = item.brand;
    let size = item.size;
    let color = item.color;
    let gender = item.gender;
    let price = item.price
    let img = item.img;
    let description = item.description;
    let productType = item.productType;
    showTable(id, category, name, brand, size, color, gender, price, img.join('</br>'), description, productType);
  }
  btn();
}
function showTable(id, category, name, brand, size, color, gender, price, img, description, productType) {
  let MaTable = document.getElementById('MaTable');
  MaTable.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${id}</td>
    <td>${category}</td>
    <td>${name}</td>
    <td>${brand}</td>
    <td>${size}</td>
    <td>${color}</td>
    <td>${gender}</td>
    <td>${price}</td>
    <td>${img}</td>
    <td>${description}</td>
    <td>${productType}</td>
    <td>
      <button class="editPro">Edit</button>
      <button class="deletePro">Delete</button>
    </td>
  </tr>
  `)
}
loadTable()

function btn() {
  const deletePro = document.getElementsByClassName('deletePro');
  const editPro = document.getElementsByClassName('editPro');
  for (let i = 0; i < deletePro.length; i++) {
    deletePro[i].addEventListener('click', () => {
      products.splice(i, 1);
      MaTable.innerHTML = '';
      loadTable();
    })
  }
  for (let i = 0; i < editPro.length; i++) {
    editPro[i].addEventListener('click', () => {
      idPro.value = products[i].id;
      catPro.value = products[i].category;
      namePro.value = products[i].name;
      brandPro.value = products[i].brand;
      sizePro.value = products[i].size;
      colorPro.value = products[i].color;
      genderPro.value = products[i].gender;
      pricePro.value = products[i].price;
      imgPro.value = products[i].img;
      desPro.value = products[i].description;
      typePro.value = products[i].productType;
      btn_update.style.display ="block";
      btn_add.style.display = "none"
      btn_update_Pro(i)
    })
  }
}
function btn_update_Pro(i) {
  btn_update.addEventListener('click', () => {
    products = JSON.parse(localStorage.getItem('productData'));
    products[i].category = catPro.value;
    products[i].brand = brandPro.value;
    products[i].id = idPro.value;
    products[i].name = namePro.value;
    products[i].size = sizePro.value.split(',');
    products[i].color = colorPro.value.split(',');
    products[i].gender = genderPro.value.split(',');
    products[i].price = pricePro.value;
    products[i].img = imgPro.value.split(',');
    products[i].description = desPro.value;
    products[i].productType = typePro.value;
    // console.log(products)
    loadTable()
    localStorage.setItem('productData', JSON.stringify(products));
      idPro.value = ''
      catPro.value = ''
      namePro.value = ''
      brandPro.value = ''
      sizePro.value = ''
      colorPro.value = ''
      genderPro.value = ''
      pricePro.value = ''
      imgPro.value = ''
      desPro.value = ''
      typePro.value = ''
      btn_update.style.display ="none";
      btn_add.style.display = "block"
  }
  )
}
btn_add.addEventListener('click', () => {
  products = JSON.parse(localStorage.getItem('productData'));
  let newPro = {}
  newPro.id = idPro.value;
  newPro.category = catPro.value;
  newPro.name = namePro.value;
  newPro.brand = brandPro.value;
  newPro.size = sizePro.value.split(',');
  newPro.color = colorPro.value.split(',');
  newPro.gender = genderPro.value.split(',');
  newPro.price = pricePro.value;
  newPro.img = imgPro.value.split(',');
  newPro.description = desPro.value;
  newPro.productType = typePro.value;
  if (newPro.id>products.length && newPro.id<(products.length+2)) {
    alert('them thanh cong')
    products.push(newPro)
    loadTable();
    showlist();
    localStorage.setItem('productData', JSON.stringify(products));
  }else if (newPro.id>products.length) {
    alert('id tiep theo cua ban la ' + (products.length + 1) );
  }
  else {
    alert('id da trung')
  }
})