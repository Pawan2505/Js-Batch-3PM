let product = [];

async function fetchData() {
  let response = await fetch("db.json");
  product = await response.json(); 
  console.log(product);
}


fetchData();