function foodbowlchange(){
    document.getElementById('foodbowlhover').src ="images/presstodonate.png";
}
function foodbowlchangeout(){
	document.getElementById('foodbowlhover').src ="images/foodbowl.png";
}

// DONATION
// fetching elements
const amboxall = document.querySelectorAll(".am_box");
const mimboxall = document.querySelectorAll(".mim_box");
const fa_paw_am = document.querySelectorAll(".fa_paw_am");
const fa_paw_am2 = document.querySelectorAll(".fa_paw_am2");
const payment_inputs = document.querySelectorAll(".payment_input");
const pay_logo_mother = document.querySelectorAll(".pay_logo_mother");
const product_disables = document.querySelectorAll(".product_disable");
const product_types = document.querySelectorAll(".product_type");
const product_amount = document.querySelectorAll(".product_amount");
const btn_product = document.querySelectorAll(".btn_product");
const buy_now = document.querySelector(".buy_now");
const amount_area = document.querySelector(".amount_area");
const payment_area = document.querySelector(".payment_area");
const gift_area = document.querySelector(".gift_area");
const to_amount = document.querySelector(".to_amount");
const to_payment = document.querySelector(".to_payment");
const amt_box = document.querySelector(".amt_box");
const amount_type = document.querySelector(".amount_type");
const donated_times = document.querySelector(".donated_times");
const donated_amount = document.querySelector(".donated_amount");
const donate_btn = document.querySelector(".donate_btn");
const modal_body = document.querySelector(".modal-body");
const buy_confirm = document.querySelector(".buy_confirm");
const close_buy = document.querySelector(".close_buy");
const thank_for_buying = document.querySelector(".thank_for_buying");
const pwc_main = document.querySelector(".pwc_main");
const choose_btn = document.querySelector(".choose_btn");
const shop_amount = document.querySelector(".shop_amount");
 
// conditional statements
let unselect = null;
let unselect2 = null;
let paw_am = null;
let paw_am2 = null;
let amount = null;
let donate_option = null;
let check_array = [];
let shop_items = [];
let amount_array = [15, 25, 50, 150, 250, 300, 500];
 
// Landing Page JS
function foodbowlchange(){
  document.getElementById('foodbowlhover').src ="images/presstodonate.png";
}
function foodbowlchangeout(){
document.getElementById('foodbowlhover').src ="images/foodbowl.png";
}
 
// active local storages
if(!localStorage.getItem("donated times") && !localStorage.getItem("donated amount")){
  localStorage.setItem("donated times", 0);
  localStorage.setItem("donated amount", 0);
  localStorage.setItem("donator", JSON.stringify([]));
}
 
donated_times.innerText = localStorage.getItem("donated times");
donated_amount.innerText = localStorage.getItem("donated amount");
 
// when select an amount this functin will run
const slected = (ambox, paw, amt) =>{
  if (unselect){
    unselect.style.backgroundColor = "white";
    unselect.style.color = "black";
  }
  if (paw_am){
    paw_am.style.display = "none";
  }
  ambox.style.backgroundColor = "black";
  ambox.style.color = "white";
  paw.style.display = "unset";
  amount = amt;
  unselect = ambox;
  paw_am = paw;
};
 
// when choose an option of donatin method this function will run
const slected2 = (mimbox, paw2, option) =>{
  if (unselect2){
    unselect2.style.backgroundColor = "white";
    unselect2.style.color = "black";
  }
  if(paw_am2){
    paw_am2.style.display = "none";
  }
  mimbox.style.backgroundColor = "black";
  mimbox.style.color = "white";
  paw2.style.display = "unset";
  donate_option = option;
  unselect2 = mimbox;
  paw_am2 = paw2;
}
 
//when donate button click this function will run
const donate = (e) => {
  e.preventDefault();
 
  payment_inputs.forEach((input) => {
    if(input.value === ""){
      check_array.push(1);
    }
  })
  if(check_array.length > 0){
    alert("Please fill all the fields.")
  }else{
    let add_donated_times = Number(localStorage.getItem("donated times")) + 1;
    let add_donated_amount = Number(localStorage.getItem("donated amount")) + amount;
    let donator_collection = JSON.parse(localStorage.getItem("donator"));
    let donator = {
      credit_number : payment_inputs[0].value,
      cvv : payment_inputs[1].value,
      email : payment_inputs[2].value,
      frist_name : payment_inputs[3].value,
      last_name : payment_inputs[4].value,
      phone_number : payment_inputs[5].value
    }
 
    donator_collection.push(donator);
    localStorage.setItem("donator", JSON.stringify(donator_collection));
    localStorage.setItem("donated times", add_donated_times);
    localStorage.setItem("donated amount", add_donated_amount);
    donated_times.innerText = add_donated_times;
    donated_amount.innerText = add_donated_amount;
    payment_area.style.display = "none";
    gift_area.style.display = "unset";
  }
  check_array = [];
}
 
// when gift done
const done =() =>{
  alert("You've chosen, Thanks for donating" );
  gift_area.style.display = "none";
  amount_area.style.display = "unset"
  unselect.style.backgroundColor = "white";
  unselect.style.color = "black";
  if(paw_am){
    paw_am.style.display = "none";
  }
 
  unselect2.style.backgroundColor = "white";
  unselect2.style.color = "black";
  paw_am2.style.display = "none";
  amount_type.value = "";
 
  payment_inputs.forEach((input) => {
    input.value = "";
  })
 
  unselect = null;
  unselect2 = null;
  paw_am = null;
  paw_am2 = null;
  amount = null;
  donate_option = null;
 
}
 
// attaching with onClick to all " am box " elements
amboxall.forEach((box, i) => {
  box.addEventListener("click", () => {
    slected(amboxall[i], fa_paw_am[i], amount_array[i]);
  })
});
 
// attaching with onClick to " amt box " element
amt_box.addEventListener("click", () => {
  if (unselect){
    unselect.style.backgroundColor = "white";
    unselect.style.color = "black";
  }
  if (paw_am){
    paw_am.style.display = "none";
  }
  unselect = amt_box;
  paw_am = null;
  amt_box.style.backgroundColor = "black";
  amt_box.style.color = "white";
  amount_type.value = "$";
});
 
amount_type.addEventListener("change", () => {
  amount = Number(amount_type.value.split("$")[1]);
});
 
// when click to shop this function will run
const shopping = (i) => {
  shop_items.push(i);
  shop_amount.innerText = shop_items.length;
  product_disables[i].style.display = "unset";
}
 
// when click "buy now" this function will run
const buy_now_clicked = () => {
  let total_amount = 0;
  shop_items.forEach((item) => {
    let type = product_types[item].innerText;
    let the_amount = product_amount[item].innerText;
    total_amount = total_amount + Number(product_amount[item].innerText.split("$")[1]);
 
    let product_info = document.createElement("p");
    product_info.innerText = type + " : " + the_amount;
    modal_body.appendChild(product_info);
  });
  let the_total_amount = document.createElement("p");
  the_total_amount.innerText = "total amount : $" + total_amount
  modal_body.appendChild(the_total_amount);
 
};
 
const refresh_shop = (con) => {
  let confirm = con;
  shop_items = [];
  shop_amount.innerText = shop_items.length;
  modal_body.innerHTML = "";
  if(confirm){
    thank_for_buying.style.display = "unset";
    setTimeout(() => {
      thank_for_buying.style.display = "none";
    }, 1000)
  }
  product_disables.forEach((disable) => {
    disable.style.display = "none";
  });
}
 
to_amount.addEventListener("click", () => {
  payment_area.style.display = "none";
  gift_area.style.display = "none";
  amount_area.style.display = "unset";
})
 
to_payment.addEventListener("click", () => {
  gift_area.style.display = "none";
  payment_area.style.display = "unset";
})
// attaching with onClick to " mim box " element
mimboxall[0].addEventListener("click", () =>{
  slected2(mimboxall[0], fa_paw_am2[0], "Montly");
});
 
// attaching with onClick to " mim box " element
mimboxall[1].addEventListener("click", () =>{
  slected2(mimboxall[1], fa_paw_am2[1], "Once");
});
 
// attaching with onClick to " pay with card " element
pwc_main.addEventListener("click", () => {
  if ((!amount && !donate_option) || !amount || !donate_option){
    alert("You have to choose amount and donate option first.");
  }else{
    amount_area.style.display = "none";
    payment_area.style.display = "unset";
  }
});
 
 
// attaching onClick to "donate_btn" element
donate_btn.addEventListener("click", (e) => {
  donate(e);
});
 
choose_btn.addEventListener("click", () => {
  done();
});
 
pay_logo_mother[0].addEventListener("click", () => {
  amount_area.style.display = "none";
  gift_area.style.display = "unset";
});
 
btn_product.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    shopping(i);
  })
});
 
buy_now.addEventListener("click", () => {
  buy_now_clicked();
});
 
buy_confirm.addEventListener("click", () => {
  refresh_shop(true);
})
 
close_buy.addEventListener("click", () => {
  refresh_shop(false);
})