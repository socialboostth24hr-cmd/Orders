const params = new URLSearchParams(window.location.search);

const price = params.get("price") || "0";
const order = params.get("order") || "FF0000";

document.getElementById("price").innerText =
"฿" + price;

document.getElementById("order").innerText =
order;

const phone = "0991301221";

// QR แบบสแกนง่าย
const qrUrl =
"https://quickchart.io/qr?text=" +
encodeURIComponent(
"https://promptpay.io/0991301221/" + price
) +
"&size=500";

document.getElementById("qrImage").src =
qrUrl;
