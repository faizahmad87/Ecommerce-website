const product=[
    {
        id:"price_1PE6o9SCIAiUNiAOM4edSJ6v",
        title:"Coffee",
        Price:12.50
    },
    {
        id:"price_1PE6ygSCIAiUNiAODdYTpnJV",
        title:"Tea",
        Price:10.50
    },
    {
        id:"price_1PE6z5SCIAiUNiAObdg4Qx2Z",
        title:"Wine",
        Price:50.50
    }
];

function getProduct(id){
    let productData=product.find(i=>i.id===id);
    if(productData==undefined){
        console.log("product does not exist");
        return undefined;
    }
    return productData;
}

export {product,getProduct};