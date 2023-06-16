export const products=[]
export const addProduct=(productname,productprice) =>{
    try{
        let productobj={

            productname,
            productprice
        }
        products.push(productobj)
    }catch(error){
        alert('productModule error:${error.message}')
    }
}
