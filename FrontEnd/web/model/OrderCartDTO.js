function OrderCart(itemCode,itemName,itemQty,itemPrice,totalItemPrice){
    var itemCode=itemCode;
    var itemName=itemName;
    var itemQty=itemQty;
    var itemPrice=itemPrice;
    var totalItemPrice=totalItemPrice;


    this.setItemCode=function (cartItemCode) {
        itemCode=cartItemCode;
    }
    this.getItemCode=function () {
        return itemCode;
    }

    this.setItemName=function (cartItemName) {
        itemName=cartItemName;
    }
    this.getItemName=function () {
        return itemName;
    }
    this.setItemQty=function (cartItemQty) {
        itemQty=cartItemQty;
    }

    this.getItemQty=function () {
        return itemQty;
    }

    this.setItemPrice=function (cartItemPrice) {
        itemPrice=cartItemPrice;
    }

    this.getItemPrice=function () {
        return itemPrice;
    }

    this.setTotalItemPrice=function (cartTotalItemPrice) {
        totalItemPrice+=cartTotalItemPrice;
    }
    this.getTotalItemPrice=function () {
        return totalItemPrice;
    }


}