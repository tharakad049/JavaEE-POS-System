function Order(orderId,cusId,date,discount,cost) {
    var orderId=orderId;
    var cusId=cusId
    var orderDate=date;
    var discount=discount;
    var orderCost=cost;
    var orderDetails=new Array();


    this.setDiscount=function(dis) {
        discount=dis;
    }
    this.getDiscount=function () {
        return discount;
    }



    this.getOrderDetails=function () {
        return orderDetails;
    }

    this.setCusId=function (customerId) {
        cusId=customerId;
    }
    this.getCusId=function () {
        return cusId;
    }



    this.setOrderId=function (id) {
        orderId=id;
    }
    this.getOrderId=function () {
        return orderId;
    }

    this.setDate=function (date) {
        orderDate=date;
    }

    this.getOrderDate=function () {
        return orderDate;
    }

    this.setOrderCost=function (cost) {
        orderCost=cost;
    }

    this.getOrderCost=function () {
        return orderCost
    }



}