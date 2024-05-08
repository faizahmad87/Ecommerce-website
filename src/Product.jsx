const product=[
    {
        id:1,
        title:"Coffee",
        Price:12.50
    },
    {
        id:2,
        title:"Tea",
        Price:10.50
    },
    {
        id:3,
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
