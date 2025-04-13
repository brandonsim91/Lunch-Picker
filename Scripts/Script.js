const lunchSpots = [
  {
    name: "Paik's Coffee",
    cuisine: "Korean Café",
    address: "40 Pasir Panjang Road, #02-39B, Mapletree Business City, 117440",
    mapLink: "https://maps.app.goo.gl/8y3hdqLN7mFeYu1NA"
  },
  {
    name: "Tuckshop@MBC",
    cuisine: "Kopitiam",
    address: "20 Pasir Panjang Rd, #02-21 Mapletree Business City II, Singapore 117439",
    mapLink: "https://maps.app.goo.gl/qLb8X28kcTaeE4D28"
  },
  {
    name: "Mr Bean",
    cuisine: "Soybeans & Snacks",
    address: "20 Pasir Panjang Rd, #02-12A Mapletree Business City II, Singapore 117439",
    mapLink: "https://maps.app.goo.gl/YJq1fqciibtpwQak8"
  },
  {
    name: "Grains & Co. @ Mapletree Business City",
    cuisine: "Protein Bowls & Salads",
    address: "40 Pasir Panjang Rd, #02-37 Mapletree Business City, Singapore 117383",
    mapLink: "https://maps.app.goo.gl/6cS8RW8aZwTSw9Mr5"
  },
  {
    name: "Guzman y Gomez",
    cuisine: "Mexican burritos & tacos",
    address: "02-35, 40, Pasir Panjang Rd, Mapletree Business City, 117383",
    mapLink: "https://goo.gl/maps/8xGv1Y1Z1Z14https://maps.app.goo.gl/gN6pUtN5NFfQ76Xi9"
  },
  {
    name: "SANDO",
    cuisine: "Japanese Sandwiches, Coffee, Craft Beer... some say Burgers too.",
    address: "Alexandra Technopark, 438C Alexandra Rd, #01-04/04A The Hub, 119976",
    mapLink: "https://maps.app.goo.gl/ZTBsYB6RnG2kMuAUA"
  },
  {
    name: "Super Thai by Soi Aroy @ Pasir Panjang",
    cuisine: "Thai Food",
    address: "91 Pasir Panjang Rd, Singapore 118512",
    mapLink: "https://maps.app.goo.gl/Bo6qN8J9zdUbMHvK6"
  },
  {
    name: "Knots Cafe & Living (Pasir Panjang)",
    cuisine: "Western Café",
    address: "102E Pasir Panjang Rd, #01-08 Citilink Warehouse Complex, Singapore 118529",
    mapLink: "https://maps.app.goo.gl/dBHoCmi98vHFHfce6"
  },
  {
    name: "Eat 3 Bowls @ Pasir Panjang",
    cuisine: "Taiwanese Food",
    address: "103 Pasir Panjang Rd, Singapore 118531",
    mapLink: "https://maps.app.goo.gl/6W4LAmTmdU1TQTdGA"
  },
  {
    name: "Uncle Ho Tuckshop",
    cuisine: "Vietnamese",
    address: "100 Pasir Panjang Rd, #01-04 Old Behn Meyer Building, Singapore 118518",
    mapLink: "https://maps.app.goo.gl/XGN1xzjBjpXUMWmU6"
  },
  {
    name: "Killiney Kopitiam",
    cuisine: "Singaporean Food",
    address: "456 Alexandra Rd, #01-01 Fragrance Empire Building, Singapore 119962",
    mapLink: "https://maps.app.goo.gl/KxwJf6TjVxugktjw9"
  },
  {
    name: "Hitoyoshi Ramen & Grill",
    distance: "2 min walk",
    cuisine: "Japanese",
    address: "40 Pasir Panjang Rd, #02-38, Singapore 117383",
    mapLink: "https://maps.app.goo.gl/LgQTu6kNX6cvzESn9"
  },
  {
    name: "Liu Lang Mian Noodle Bar",
    cuisine: "Japanese Mazesoba",
    address: "321 Alexandra Rd, #01-03 Outside Alexandra Mall, Singapore 159971",
    mapLink: "https://maps.app.goo.gl/GFGG5AMT2nE7bc6U9"
  },
  {
    name: "Keng Eng Kee Seafood @ Alexandra Village",
    cuisine: "Zi char & other wok-prepared favourites in an informal eatery offering covered outdoor seating.",
    address: "124 Bukit Merah Lane 1, #01-136, Singapore 150124",
    mapLink: "https://maps.app.goo.gl/4nFMo9K8ZderbVQw9"
  },
  {
    name: "Manhill Restaurant",
    distance: "10 min walk",
    cuisine: "Chinese, Cantonese",
    address: "99 Pasir Panjang Rd, Singapore 118517",
    mapLink: "https://goo.gl/maps/5xGv1Y1Z1Z24"
  },
  {
    name: "Esarn Thai Corner ",
    cuisine: "Thai Cusine",
    address: "130 Pasir Panjang Rd, Singapore 118548",
    mapLink: "https://maps.app.goo.gl/jBp5PkTS4h6MeenD8"
  },
  {
    name: "Straits Club - Nasi Lemak",
    cuisine: "Nasi Lemak",
    address: "122 Bukit Merah Lane 1, #01-50, Singapore 150122",
    mapLink: "https://maps.app.goo.gl/RsbWQWesueh5Zzsi8"
  },
  {
    name: "Canton Paradise 樂天小香港 at ARC",
    cuisine: "Cantonese",
    address: "460 Alexandra Rd, #02 - 30, Singapore 119963",
    mapLink: "https://maps.app.goo.gl/fc8QiJZDQh7DoRHG8"
  },
  {
    name: "川太子麻辣烫",
    cuisine: "麻辣",
    address: "460 Alexandra Rd, #02-19, Singapore 119963",
    mapLink: "https://maps.app.goo.gl/QBtv9pcspjPy5WNv8"
  },
  {
    name: "Paradise Restaurant",
    cuisine: "Indian Mamak",
    address: "93 Pasir Panjang Rd, Singapore 118513",
    mapLink: "https://maps.app.goo.gl/ML11q85VwLG1BUvJ9"
  },
  {
    name: "Italian Coffee Lab Singapore",
    cuisine: "Cafe",
    address: "100 Pasir Panjang Rd, #03-07, Singapore 118518",
    mapLink: "https://maps.app.goo.gl/V71s9g1fpFji9BKa9"
  },
  {
    name: "D’Penyetz @ ARC",
    cuisine: "Indonesian",
    address: "460 Alexandra Rd, #01-02 Alexandra Retail Centre (ARC), Singapore 119963",
    mapLink: "https://maps.app.goo.gl/8UC9szCM5AJihipD9"
  },
  {
    name: "Food Master @ Pasir Panjang",
    cuisine: "Kopitiam",
    address: "50 Pasir Panjang Road #03-51 Mapletree Business City, 117384",
    mapLink: "https://maps.app.goo.gl/WeHEkBoXScYwDrWs9"
  },
  {
    name: "Canopy HortPark",
    cuisine: "Cafe",
    address: "#01-01, 33 Hyderabad Road, HortPark, 119578",
    mapLink: "https://maps.app.goo.gl/AYvwXGu7KxZBu4Nf9"
  },
  {
    name: "Hoho Korean Restaurant ",
    cuisine: "Korean",
    address: "87 Pasir Panjang Rd, Singapore 118510",
    mapLink: "https://maps.app.goo.gl/Wac7S6JSoTybDXaS6"
  },
  {
    name: "Yuzutei Japanese Restaurant",
    cuisine: "Japanese",
    address: "100G Pasir Panjang Rd, #01-01 Interlocal Centre, Singapore 118523",
    mapLink: "https://maps.app.goo.gl/8VPcK5zyDL8FTDUFA"
  },
  {
    name: "Ma Maison",
    cuisine: "Japanese",
    address: "370 Alexandra Rd, #01-12, Singapore 159953",
    mapLink: "https://maps.app.goo.gl/1SqiXGEzLmgYcbbMA"
  },
  {
    name: "Yuzutei Japanese Restaurant",
    cuisine: "Japanese",
    address: "100G Pasir Panjang Rd, #01-01 Interlocal Centre, Singapore 118523",
    mapLink: "https://maps.app.goo.gl/8VPcK5zyDL8FTDUFA"
  },
  {
    name: "IKEA Alexandra Restaurant",
    cuisine: "Swedish-inspired food, including classic meatball & salmon dishes",
    address: "317 Alexandra Rd, Level 1, Singapore 159965",
    mapLink: "https://maps.app.goo.gl/2Grf9fZNRL1LnoRm7"
  },
  {
    name: "Master Prata",
    cuisine: "Indian",
    address: "Mall, 321 Alexandra Rd, #01-02 Alexandra Central, 159971",
    mapLink: "https://maps.app.goo.gl/WiURDvPmLeEAupuK8"
  },
  {
    name: "Otoko Ramen",
    cuisine: "Japanese",
    address: "321 Alexandra Road, #01-16, Alexandra Central Mall, 159971",
    mapLink: "https://maps.app.goo.gl/aGFiNMctjmkJgY2t6"
  },
  {
    name: "Nature Cafe",
    cuisine: "Vegeterian",
    address: "321 alexandra central mall, #02-27, Singapore 159971",
    mapLink: "https://maps.app.goo.gl/K4gS8pAEH2VuSC2R8"
  },
  {
    name: "SBCD Korean Tofu House",
    cuisine: "Korean",
    address: "460 Alexandra Rd, #02-21 Alexandra Retail Centre (ARC), Singapore 119963",
    mapLink: "https://maps.app.goo.gl/7cVVmNKSmXxozSqS8"
  },
  {
    name: "Hopscotch (Gillman Barracks)",
    cuisine: "Casual eatery specialising in oysters, seafood & meat offerings, plus unique cocktails & craft beer.",
    address: "45 Malan Rd, Singapore 109455",
    mapLink: "https://maps.app.goo.gl/e7EWfnzHa7Jux4PC6"
  },
  {
    name: "Zhang Ji Shanghai La Mian Xiao Long Bao",
    cuisine: "Chinese",
    address: "460 Alexandra Rd, #02-23, Singapore 119963",
    mapLink: "https://maps.app.goo.gl/DvKbN2JLotPMQtbN6"
  },
  
];

function randomiseLunch() {
  const spot = lunchSpots[Math.floor(Math.random() * lunchSpots.length)];
  const resultDiv = document.getElementById("lunchResult");

  resultDiv.innerHTML = `
    <h3>${spot.name}</h3>
    <p><strong>Cuisine:</strong> ${spot.cuisine}</p>
    <p><strong>Address:</strong> ${spot.address}</p>
    <p><a href="${spot.mapLink}" class="map-link" target="_blank">Open in Google Maps</a></p>
  `;

  resultDiv.style.display = "block";
}
