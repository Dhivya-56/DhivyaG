import {addProduct,products}from"./modules/productModule.js" ;
import { displayList }from"./modules/listmodule.js";
let productFormContainer=document.getElementById("Product_details");
let productListContainer=document.getElementById("list");

fetch('./components/form.html').then((response)=>response.text())
.then((html)=>{
    productFormContainer.innerHTML=html
})
fetch('./components/list.html').then((response)=>response.text())
.then((html)=>{
    productListContainer.innerHTML=html
})
let form=document.getElementById('Product_details')
form.addEventListener("submit",(event)=>{
    try{
        event.preventDefault();
        let productname=document.getElementById("productname").value;
        let productprice=document.getElementById("productprice").value;
        if(productname&&productprice){
            addProduct(productname,productprice)
            console.log("products",products)
            displayList()
        }
        document.getElementById("productname").value="";
        document.getElementById("productprice").value="";

    }
    catch(error){
        alert('App Error:${error.message}')
    }
});