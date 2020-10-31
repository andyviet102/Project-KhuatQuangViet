let user =[
    {
        email : 'admin123@gmail.com',
        userName : 'admin dep trai',
        password : 'Anh213210',
        role: 'admin'
    },
    {
        userName : 'duyet tran',
        name : 'Trần Quang Duyệt',
        age : 20,
        address : '20 Đồng Me , Mễ Trì , Nam Từ Liêm , Hà Nội',
        phoneNumber : `0969907663`,
        email : 'hieuminhtran050300@gmail.com',
        password : '123456789',
        role : 'client',
    },
    {   
        userName : 'hieuthuba',
        name : 'Đỗ Duy Hiếu',
        age : 21,
        address : '1207C kdt Linh Đàm , Hà Nội',
        phoneNumber : `0123456789`,
        email : 'duyhieu99@gmail.com',
        password : '123456789',
        role : 'client',
    },
    {
        userName : 'long bot',
        name : 'Nguyễn bảo Long',
        age : 20,
        address : '14 ngõ 32/47 Đỗ Đức Dục , Mễ Trì , Nam Từ Liêm , Hà Nội',
        phoneNumber : `0969567890`,
        email : 'longbot00@gmail.com',
        password : '123456789',
        role : 'client',
    },
    {
        userName : 'vietbatkhuat',
        name : 'Khuất Quang Việt',
        age : 20,
        address : '79 Lê Trọng Tấn, Hà Đông , Hà Nội',
        phoneNumber : `0382512348`,
        email : 'vietkhuat00@gmail.com',
        password : '123456789',
        role : 'client',
    },
]
let loginForm =  document.getElementById('login_form');
let regiterForm = document.getElementById('register_form');
let btnLogin = document.getElementById("btn_login");
let btnSubmit = document.getElementById("btnSubmit");
let btnLogout = document.getElementById("btn_logout");
let btnRegister =  document.getElementById("btn_register");
let btnSubmitRegister = document.getElementById("btnRegister");
let userName = document.getElementById("userName");
let password = document.getElementById("pass");
let newUserName = document.getElementById("nUName");
let passwordRegister = document.getElementById("pass2");
let confirmPassword = document.getElementById("cfPassword");
let userForm = document.getElementById("user_form");
let cartForm = document.getElementById("cart_form");
let detailForm = document.getElementById("detail_form");
let btnManageBill = document.getElementById("btnManageBill");
let btnManageProduct = document.getElementById("btnManageProduct");
let adminForm = document.getElementById("admin_form");
let filterForm = document.getElementById("filter_form");
let btnViewProduct = document.getElementById("btn_viewListProduct");
let btnAddNewProduct = document.getElementById("btn_addNewProduct");
let addProductForm = document.getElementById("add-product-form");
let viewProductForm = document.getElementById("")
let email = document.getElementById("email.value");
let in02 = document.getElementById("in02");
let form = document.getElementById('form')
let sideName = document.getElementById('user_name');
//sự kiện của nút login và sign up
btnLogin.addEventListener("click", function(){
    showLoginForm();
});
btnRegister.addEventListener("click", function(event){
    // alert('aaa')
    event.preventDefault();
    showRegisterForm();
}); 
btnSubmit.addEventListener("click", function(e) {
    e.preventDefault()
for (let i = 0; i < user.length; i++) {
    if (userName.value === user[i].userName && password.value == user[i].password) {
        btnLogin.style.display = 'none';
        // for(let i=0; i<user.length;i++){
            // if(user[i].userName== userName.value && user[i].pass== pass.value ){
            //     loginForm(i);
            //     sideName.style.display = 'block';

            // }
        // }
        if (user[i].role == "admin") {
            showAdminForm();
        } else if (user[i].role == "client") {
            alert("Welcome to " + user[i].userName);
            console.log(user[i])
            sideName.innerHTML = user[i].userName;

            // showClientForm()
            // btnLogin.style.display = "none";
        }else (alert("depzaivcl"));
    }
}
});

btnRegister.addEventListener("click", function(){
    showSignupform();
});

let userRe = document.getElementById('newuserName').value;
let passRe = document.getElementById('password').value;
let cfpassRe = document.getElementById('confirmPassword').value;

btnSubmitRegister.addEventListener("click", function(){
    if (passRe === cfpassRe){
        var newClient = {
            email: '',
            userName: userRe,
            password: passRe,
            role: "client"
     
            
        }
      
            user.push(newClient)
            console.log(user);
            showLoginform();
            alert("Đăng ký thành công");
            
    }   else {
        alert("Đăng ký thất bại");
    }
});

btnLogout.addEventListener("click",function(){
    showLoginform();
});

// function cho login và sign up
function showLoginform(){
    loginForm.style.display = "block";
    btnLogin.style.display = "block";
    cartForm.style.display = "block";
    regiterForm.style.display = "none";
    userForm.style.display = "none";
    btnLogin.style.display = "none";
}

function showSignupform(){
    regiterForm.style.display = "block";
    loginForm.style.display = "none";
}

function showadminform(){
    adminForm.style.display = "block";
    loginForm.style.display = "none";
    btnLogout.style.display = "block";
    btnLogin.style.display = "none";
}

function showClientform(){
    loginForm.style.display = "none";
    btnLogin.style.display= "none";
    userForm.style.display = "block";
    cartForm.style.display = "block";
    btnLogout.style.display = "block";
}
function showRegisterForm(){
    in02.style.display = "block";
    // form.style.display = "none";
    // btnSubmitRegister.style.display= "block";
    // userForm.style.display= "block";
    // console.dir(loginForm.style.display)
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}