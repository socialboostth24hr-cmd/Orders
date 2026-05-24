const params =
new URLSearchParams(
window.location.search
);

const price =
params.get("price") || "0";

const order =
params.get("order") || "FF-XXXX";

document.getElementById(
"price"
).innerText =
"฿" + price;

document.getElementById(
"orderId"
).innerText =
order;

// ===== QR =====

const phone =
"0991301221";

const qrUrl =
`https://promptpay.io/${phone}/${price}`;

document.getElementById(
"qrImage"
).src = qrUrl;
