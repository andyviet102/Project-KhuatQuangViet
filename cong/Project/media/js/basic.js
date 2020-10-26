const main = document.getElementById('main')
function showlist(products) {
  for (let item of products) {
    let id = Number(item.id)
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
showlist(products);
function product(id, name, gender, proType, price, img) {
  main.insertAdjacentHTML('beforeend',
    `
  <div class="main__item">
  <div class="main__pic">
    <img src="${img}" alt="${name}">
  </div>
  <div class="main__title">
    <h3>${name}</h3>
    <strong>${gender} ${proType}</strong>
    <p>$${price}</p>
  </div>
  <button class="btn" onclick="AddProduct(${id})">Add to bags</button>
  </div>`
  )
}

let list_product = [];
let carts = document.querySelectorAll('.btn');
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    // cartNumber();
    console.log(carts[i]);
  })
}

// function cartNumber() {
//   let pro = localStorage.getItem('cartNumber');
//   localStorage.setItem('cartNumber', 1);
//   console.log(pro);
// }

function AddProduct(id) {
  for (item of products) {
    if (item.id == id) {
      if (!list_product.includes(item)) {
        list_product.push(item);
        list_product[list_product.indexOf(item)].amount = 1;
      } else {
        list_product[list_product.indexOf(item)].amount ++;
      }
    }
  }
  console.log(list_product);
  document.getElementById("totalCardProduct").innerHTML = list_product.length;
  let tableCart = document.getElementById('table_cart');
  tableCart.innerHTML = ''
  let TotalPrice = 0;
  let idd, name, gender, category, productType, price, amount=0;
  alert('Add to cart successfully!');
  for (let item of list_product) {
    idd = item.id;
    name = item.name;
    gender = item.gender;
    if (item.gender.length == 2) {
      gender = 'unisex';
    } else {
      gender = item.gender;
    }
    amount = list_product[list_product.indexOf(item)].amount;
    category = item.category;
    productType = item.productType;
    price = item.price;
    TotalPrice += item.price * amount;
    addTable(idd, name, gender, category, productType, price, TotalPrice, amount);
  
  }
}
// amount = Arrcheck.filter(function (x) { return x == item[0].id }).length + 1;

function addTable(idd, name, gender, category, productType, price, TotalPrice, amount) {
  let total = document.getElementById('total')
  let tableCart = document.getElementById('table_cart');
  tableCart.insertAdjacentHTML('beforeend', `
  <tr>
      <td>${idd}</td>
      <td>${name}</td>
      <td>${amount}</td>
      <td>${gender}</td>
      <td>${category}</td>
      <td>${productType}</td>
      <td align="right">$${price}</td>
  </tr>
  `)
  total.innerHTML = '$' + TotalPrice;
};