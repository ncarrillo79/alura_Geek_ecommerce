// GET
const listProducts=()=>fetch("http://localhost:3000/product").then(response => response.json())

export const productServices = {
      listProducts,
}