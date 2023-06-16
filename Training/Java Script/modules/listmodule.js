import{products} from"./productModule.js"
let totalElement=document.createElement("p")

export const displayList=()=>{
    try{
        let ul=document.getElementById("listitems");
        ul.innerHTML=""
        let total=0
        products.forEach(product=>{
            let productItem=document.createElement("li")
            productItem.textContent=`${product.productname}: $${product.productprice}`
            ul.appendChild(productItem)
            total += +product.productprice;

        })
    totalElement.textContent=`Total:${total}`
        document.body.appendChild(totalElement)

    }
    catch(error){
        alert(`listError: ${error.message}`)
    }
}