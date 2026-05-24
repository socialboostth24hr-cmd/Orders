const params =
new URLSearchParams(window.location.search);

const price =
params.get("price") || "0";

const order =
params.get("order") || "FF0000";

document.getElementById("price").innerText =
"฿" + price;

document.getElementById("order").innerText =
order;

const phone = "0991301221";

const qr =
"https://promptpay.io/" +
phone +
"/" +
price;

document.getElementById("qrImage").src =
qr;
