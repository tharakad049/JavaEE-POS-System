function ItemDTO(code, iName, quantity, price, discount ) {
    var code=code;
    var iName=iName;
    var quantity=quantity;
    var price=price;
    var discount=discount;


    this.setDiscount=function (itemDiscount) {
        discount=itemDiscount;
    }

    this.getDiscount=function () {
        return discount;
    }
    this.setCode=function(ItemCode){
        code=ItemCode;
    }

    this.getCode=function () {
        return code;
    }

    this.setName=function (ItemName) {
        iName=ItemName;
    }

    this.getName=function () {
        return iName;
    }

    this.setQty=function (ItemQty) {
        quantity=ItemQty;
    }

    this.getQty=function () {
        return quantity;
    }

    this.setPrice=function (ItemPrice) {
        price=ItemPrice;
    }

    this.getPrice=function () {
        return price;
    }
}