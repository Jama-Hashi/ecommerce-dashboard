const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

const orders = [
  {
    productName: "Kquizi 1132 Hoodie",
    productNumber: "7462",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "Cookey A43 T-shirt",
    productNumber: "7231",
    paymentStatus: "Refunded",
    shipping: "Declined",
  },
  {
    productName: "Maniac Sweater",
    productNumber: "6342",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "KobiKobi Hoodie 43",
    productNumber: "8342",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
  {
    productName: "Queen K12",
    productNumber: "5462",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
];

// import { orders } from "./orders";
// show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
  menuBtn.style.display = "none";
});

// close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
  menuBtn.style.display = "inline-block";
});

// change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variants");

  themeToggler.querySelector("svg").classList.toggle("active");

  //   themeToggler.querySelector("svg:nth-child(1)").classList.toggle("active");
  //   themeToggler.querySelector("svg:nth-child(1)").classList.toggle("active");
});

orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class='${
          order.shipping === `Declined`
            ? `danger`
            : order.shipping === `Pending`
            ? `warning`
            : `primary`
        }'>${order.shipping}</td>
        <td class="primary">Details</td>
    `;

  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
