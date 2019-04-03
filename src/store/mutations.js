export default {
    increment(state) {
        state.count++;
    },
    addProduct(state, newproduct) {
        //var newproduct = { productName: productName, count: 0 };
        var product={};
        product.name=newproduct.name;
        product.count=newproduct.count;
        state.products.push(product);
    }
};
