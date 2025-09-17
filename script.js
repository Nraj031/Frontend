// Script for navigation bar
// ==========================
// Navbar Toggle (Mobile Menu)
// ==========================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    navbar.classList.toggle('active');
  };

  // Close menu when scrolling
  window.onscroll = () => {
    navbar.classList.remove('active');
  };
}

// ==========================
// Product Image Switch (Single Product Page)
// ==========================
let mainImg = document.getElementById("MainImg");
let smallImgs = document.getElementsByClassName("small-img");

if (mainImg && smallImgs.length > 0) {
  for (let i = 0; i < smallImgs.length; i++) {
    smallImgs[i].onclick = function () {
      mainImg.src = smallImgs[i].src;
    };
  }
}

// ==========================
// Cart Button Click (Future Expansion)
// ==========================
let addToCartBtns = document.querySelectorAll(".add-to-cart");

if (addToCartBtns.length > 0) {
  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Item added to cart ✅");
    });
  });
}

// Store selected product and redirect to pay page
function buyNow(name, price, img) {
    localStorage.setItem("productName", name);
    localStorage.setItem("productPrice", price);
    localStorage.setItem("productImg", img);
    window.location.href = "pay.html";
  }
  
  // Load product details on pay.html
  window.onload = function () {
    if (window.location.pathname.includes("pay.html")) {
      const name = localStorage.getItem("productName");
      const price = localStorage.getItem("productPrice");
      const img = localStorage.getItem("productImg");
  
      if (name && price && img) {
        document.getElementById("selectedProduct").innerText = `${name} - $${price}`;
        document.getElementById("productImage").src = img;
      }
    }
  };
  
  // Redirect to home after payment
  function redirectHome() {
    alert("Payment Successful ✅ Redirecting to Home Page...");
    window.location.href = "index.html";
  }
  