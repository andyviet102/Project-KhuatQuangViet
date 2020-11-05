const main = document.getElementById('main');

// window.onload = products.push(JSON.parse(localStorage.getItem('newPro')));
// console.log(products);

function showlist() {
  main.innerHTML = '';
  for (let item of products) {
    let id = item.id;
    let name = item.name;
    let gender;
    if (item.gender.length == 2) {
      gender = 'unisex'
    } else {
      gender = `${item.gender[0]}'s`;
    };
    let proType = item.productType;
    let price = item.price;
    let img = item.img[0];
    product(id, name, gender, proType, price, img);
  }
}

function product(id, name, gender, proType, price, img) {
  main.insertAdjacentHTML('beforeend',
    `
  <div class="main__item">
  <div class="main__pic">
    <img src="${img}" alt="${name}">
  </div>
  <div class="main__title">
    <h3 class="btn_detailPro" onclick="detailPro(${id})" >${name}</h3>
    <strong>${gender} ${proType}</strong>
    <p>$${price}</p>
  </div>
  <button class="btn" onclick="AddProduct(${id})">Add to bags</button>
  </div>`
  )
}
showlist();
//sortby
let sortby = document.getElementById('sortby');
sortby.addEventListener('change', () => {
  if (sortby.value == 'low') {
    products.sort(function (a, b) { return a.price - b.price });
    showlist();
    console.log(products);
  } else if (sortby.value == 'high') {
    products.sort(function (a, b) { return b.price - a.price });
    showlist();
    console.log(products);
  } else {
    products.sort(function (a, b) { return a.id - b.id });
    showlist();
  }
});
//choice
// function men() {
//   for (let item of products) {
//     if (item.gender[0] == 'male') {
//       console.log(products);
//     }
//   }
// }









let list_product = [];
// let carts = document.querySelectorAll('.btn');
// for (let i = 0; i < carts.length; i++) {
//   carts[i].addEventListener('click', () => {
//     // cartNumber();
//     console.log(carts[i]);
//   })
// }

// function cartNumber() {
//   let pro = localStorage.getItem('cartNumber');
//   localStorage.setItem('cartNumber', 1);
//   console.log(pro);
// }



function AddProduct(id) {
  alert('Add to cart successfully!');
  for (item of products) {
    if (item.id == id) {
      if (!list_product.includes(item)) {
        list_product.push(item);
        list_product[list_product.indexOf(item)].amount = 1;
      } else {
        list_product[list_product.indexOf(item)].amount++;
      }
    }
  }
  console.log(list_product);
  updateTable();
  delBill();
}

//delete Bill
function delBill() {
  let btn_delBill = document.getElementsByClassName('btn_delBill');
  for (let i = 0; i < btn_delBill.length; i++) {
    btn_delBill[i].addEventListener('click', () => {
      list_product.splice(i, 1);
      updateTable();
      alert('You have successfully deleted the product');
    }
    )
  }
}

function updateTable() {
  // let btn_delBill = document.getElementsByClassName('btn_delBill');
  // for (let i = 0; i < btn_delBill.length; i++) {
  //   btn_delBill[i].addEventListener('click', () => {
  //     list_product.splice(i, 1);
  //     updateTable();
  //   }
  //   )
  // }
  // them so luong sp





  document.getElementById("totalCardProduct").innerHTML = list_product.length;
  let tableCart = document.getElementById('table_cart');
  tableCart.innerHTML = ''
  let TotalPrice = 0;
  let cost = 0
  for (let item of list_product) {
    idd = item.id;
    img = item.img[0];
    name = item.name;
    gender = item.gender;
    if (item.gender.length == 2) {
      gender = 'unisex';
    } else {
      gender = item.gender;
    }
    amount = item.amount;
    category = item.category;
    productType = item.productType;
    price = item.price;
    cost = price * amount;
    TotalPrice += item.price * amount;
    addTable(idd, img, name, gender, category, productType, price, cost, TotalPrice, amount);
  }
}

function addTable(idd, img, name, gender, category, productType, price, cost, TotalPrice, amount) {
  let total = document.getElementById('total')
  let tableCart = document.getElementById('table_cart');
  tableCart.insertAdjacentHTML('beforeend', `
  <tr>
      <td><div>(${idd})</div><img height="100px" width="100px" src="${img}" alt="${idd}"></td>
      <td>${name}</td>
      <td><input type="number" id="edit_amount_${idd}" placeholder="${amount}" value="${amount}"/></td>
      <td>${gender}</td>
      <td>${category}</td>
      <td>${productType}</td>
      <td align="right">$${price}</td>
      <td align="right">$${cost}</td>
      <td><button class="btn_delBill" onclick="delBill()")">Delete</button></td>
  </tr>
  `)
  total.innerHTML = '$' + TotalPrice;
  let edit_amount = document.getElementById(`edit_amount_${idd}`);
  edit_amount.addEventListener('change', () => {
    for (item of list_product) {
      if (item.id == idd) {
        list_product[list_product.indexOf(item)].amount = edit_amount.value;
        updateTable();
      }
    }
  })
};

//detail Product
let show_detail = document.getElementById('show_detail')
function detailPro(id) {
  let found = products.find(x => x.id == id)
  console.log(found);
  show_detail.innerHTML = '';
  show_detail.insertAdjacentHTML('beforeend', `
  <div class="detail_Pro">
    <div class="detail_pic"> 
      <img src="${found.img[0]}" alt="img1"/>
      <img src="${found.img[1]}" alt="img2"/>
    </div>
    <div class="detail_all">
      <h1>${found.name}</h1>
      <p>${found.brand}</h1>
      <div class="select_size">
        <span>
          <input class="size" type="radio" value="${found.size[0]}">
          <label>${found.size[0]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[1]}">
          <label>${found.size[1]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[2]}">
          <label>${found.size[2]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[3]}">
          <label>${found.size[3]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[4]}">
          <label>${found.size[4]}
        </span>
         <span>
          <input class="size" type="radio" value="${found.size[5]}">
          <label>${found.size[5]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[6]}">
          <label>${found.size[6]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[7]}">
          <label>${found.size[7]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[8]}">
          <label>${found.size[8]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[9]}">
          <label>${found.size[9]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[10]}">
          <label>${found.size[10]}
        </span>
        <span>
          <input class="size" type="radio" value="${found.size[11]}">
        <label>${found.size[11]}
        </span>
      </div>
      <div>$${found.price}</div>
      <div>${found.description}</div>
    </div>
  </div>
  `)
}

//show bảng quản lý sp
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


function loadTable() {
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
      add1(i)
    })
  }
}
function add1(i) {
  btn_add.addEventListener('click', () => {
    products[i].category = catPro.value;
    products[i].brand = brandPro.value;
    products[i].id = idPro.value;
    products[i].name = namePro.value;
    products[i].size = sizePro.value;
    products[i].color = colorPro.value;
    products[i].gender = genderPro.value;
    products[i].price = pricePro.value;
    products[i].img = imgPro.value;
    products[i].description = desPro.value;
    products[i].productType = typePro.value;
    // console.log(products)
    loadTable()
  }
  )
}





// btn_add.addEventListener('click', () => {
//   let newitem = 'newPro';
//   let newPro = {};
//   newPro.id = idPro.value;
//   newPro.category = catPro.value;
//   newPro.name = namePro.value;
//   newPro.brand = brandPro.value;
//   newPro.size = sizePro.value.split(',');
//   newPro.color = colorPro.value.split(',');
//   newPro.gender = genderPro.value.split(',');
//   newPro.price = pricePro.value;
//   newPro.img = imgPro.value.split(',');
//   newPro.description = desPro.value;
//   newPro.productType = typePro.value;
//   console.log(newPro);
//   products.push(newPro);
//   showlist();
//   loadTable();
// })