$("#orderCustomerName").attr('disabled', true);
$("#orderCustomerAddress").attr('disabled', true);
$("#orderCustomerSalary").attr('disabled', true);

$("#txtSelectItemName").attr('disabled', true);
$("#txtSelectItemPrice").attr('disabled', true);
$("#txtSelectQTYOnHand").attr('disabled', true);


generateOrderID();

function generateOrderID() {

    $.ajax({
        url:"http://localhost:8080/back/order?option=GenerateOid",
        method:'GET',
        success:function (resp) {
            if (resp.status == 200) {
                $("#txtOrderID").val(resp.data.oId);
            } else {
                alert(resp.data);
            }
        }

    });
}

$("#btnOrderCusSearch").click(function () {
    $.ajax({
        url: "http://localhost:8080/back/order?option=SelectCustomer&Id="+$("#orderCustomerID").val(),
        method: "GET",
        success: function (response) {
            if (response.status==200){
                alert("Added customer to text field");
                $("#orderCustomerName").val(response.data.name);
                $("#orderCustomerAddress").val(response.data.address);
                $("#orderCustomerSalary").val(response.data.salary);
            }
        },
        error: function (ob, statusText, error) {
            alert("No Such Customer");
        }
    });
});

$("#txtSelectItemCode").on('keyup', function (e) {
    $.ajax({
        url: "http://localhost:8080/back/order?option=SelectItem&itemCode="+$("#txtSelectItemCode").val(),
        method: "GET",
        success : function (res){
            if (res.status==200){
                alert("Added item to text field");
                $("#txtSelectItemName").val(res.data.name);
                $("#txtSelectItemPrice").val(res.data.price);
                $("#txtSelectQTYOnHand").val(res.data.qty);
            }else if (res.status==400){
                alert("Item not found");
            }
        },
        error : function (res){
            alert("System Error");
        }
    })
});


/*function manageQty(qty) {
    var nowQty = parseInt(qty);
    var qtyOnHand = parseInt($("#txtQty").val());
    qtyOnHand -= nowQty;
    $("#txtQty").val(qtyOnHand);
}
function manageAddQty(qty) {
    var qtyOnHand = parseInt($("#txtQty").val());
    qtyOnHand -= parseInt(qty);
    $("#txtQty").val(qtyOnHand);
}
$("#btnAddToTable").click(function () {
    if ($("#txtSelectItemCode").text() != "" || $("#txtSelectItemName").text() != "" ||
        $("#txtSelectItemPrice").text() != "" || $("#orderCustomerName").val() == ""
        || $("#sellQty").val() == "" || $("#orderCustomerAddress").val() == "" || $("#txtDate").val() == "") {
        $("#btnAddToTable").disable();
    } else {
        let text = "Do you really want to add to cart this Item?";
        if (confirm(text) == true) {
            var itemCode = $("#txtSelectItemCode").val();
            var itemName = $("#txtSelectItemDescription").val();
            var itemPrice = $("#txtSelectItemPrice").val();
            var qty = parseInt($("#txtQty").val());
            var totalItemPrice = itemPrice * qty;
            var Oqty = parseInt($('#txtSelectQTYOnHand').val());
            if ($('#txtQty').val() != "") {
                if (Oqty < qty) {
                    alert("Not Available This QTY");

                    if (parseInt($("#txtQty").val()) >= qty || parseInt($("#txtQty").val()) < 0) {

                        manageAddQty(qty);
                        calculateGrossAmount(gross);
                        calculateNetAmount(net);

                        let raw = `<tr><td> ${itemCode} </td><td> ${kind} </td><td> ${itemName} </td><td> ${sellQty} 
                    </td><td> ${unitPrice} </td><td> ${discount} </td><td> ${net} 
                    </td><td> <input id='btnEdit' class='btn btn-success btn-sm' value='Update' 
                    style="width: 75px"/> </td><td> <input id='btnDelete' class='btn btn-danger btn-sm' value='Delete' 
                    style="width: 75px"/> </td></tr>`;
                        $("#tblOrder tbody").append(raw);

                    } else if (parseInt($("#orderQty").val()) < sellQty || parseInt($("#orderQty").val()) < 0) {
                        alert("No Enough Quantity.");
                    }

                    if (click == "clicked") {

                        if (parseInt($("#orderQty").val()) >= sellQty || parseInt($("#orderQty").val()) < 0) {

                            let newVar = parseInt(sellQty) + parseInt($(tblOrderRow).children(':nth-child(4)').text());
                            let previousGross = parseInt($(tblOrderRow).children(':nth-child(4)').text()) * unitPrice;
                            let netNew = (previousGross + parseInt(net));
                            manageQty(sellQty);
                            updateGrossAmount(gross);
                            updateNetAmount(net);

                            $(tblOrderRow).children(':nth-child(4)').text(parseInt(newVar));
                            $(tblOrderRow).children(':nth-child(7)').text(parseInt(netNew));

                        } else if (parseInt($("#orderQty").val()) < sellQty || parseInt($("#orderQty").val()) < 0) {
                            alert("No Enough Quantity");
                        }

                        clearFieldsWhenAddItem();
                        deleteRow();

                    } else if (click == "not clicked") {
                        alert("Please Select A Row.");
                    }
                }
            } else {

            }
        }
    }
    clickRow();
});*/

/*
$("#btnAddToTable").click(function () {
    alert("button wda");
    let res=confirm("Place order?");
    if (res) {
        if (generateOrderID() == $("#txtOrderId").val()) {

            var itemCode = $("#txtCode").val();
            var itemName = $("#txtName").val();
            var itemQty = $("#txtQty").val();
            var itemPrice = $("#txtPrice").val();
            var totalItemPrice = $("#txt").val();


            alert(custId);
            let order = new Order(orderId ,date, custId, discount,cost);
            let orderDetailsArray = order.getOrderDetails();
            for (var i in cartItem) {
                orderDetailsArray.push(new OrderDetails(cartItem[i].getItemCode, cartItem[i].getItemName(), cartItem[i].getItemQty, cartItem[i].getItemPrice()));
            }

            order.push(order);

            alert("order Placed Complete");
            clearAll();
            updateDate();

        } else {
            alert("Order Fail OrderId Incorrect");
            let res=confirm("Automatically reset order ID?");
            if (res){
                generateOrderId();

            }
        }
    }

    var order={
        orderId:$("#txtOrderId").val(),
        custId:$("#txtCustomerId").val(),
        date:$("#txtOrderDate").val()
    }

    $.ajax({
        url:"order",
        method:"POST",
        contentType:"application/json",

        data :Json.stringify(order),

        success : function (res) {
            if (res.status==200){
                alert(res.message);
            }else if (res.status==400){
                alert(res.message);
            }


        },
        error : function (res){

            alert("System Error");

        }
    })
})
*/

$("#btnAddToTable").click(function () {
    var itemCode= $("#txtSelectItemCode").val();
    var itemName= $("#txtSelectItemDescription").val();
    var itemPrice= $("#txtSelectItemPrice").val();
    var qty=parseInt( $("#txtQty").val());
    var totalItemPrice=itemPrice*qty;
    var Oqty=parseInt($('#txtSelectQTYOnHand').val());
    if($('#txtQty').val()!="") {
        if (Oqty < qty) {
            alert("Not Available This QTY");
        } else {
            var itemExist = 0;
            for (var i in cartItems) {
                if (cartItems[i].getItemCode() == itemCode) {

                    var oldItemQty = cartItems[i].getItemQty();
                    var newItemQty = oldItemQty + qty;

                    cartItems[i].setItemQty(newItemQty);
                    cartItems[i].setItemPrice(itemPrice);
                    cartItems[i].setTotalItemPrice(totalItemPrice);
                    itemExist = 1;
                    loadCart();
                    break;
                }
            }
            if (itemExist == 0) {
                var orderCart = new OrderCart(itemCode, itemName, qty, itemPrice, totalItemPrice);
                cartItems.push(orderCart);
                qtyUpdate();
                loadCart();

            }
        }
    }else {
        alert("Please Enter Order Qty");
    }
});

function loadCart(){
    var total=0;
    $("#orderTable").empty();
    cartItems.forEach(function (i) {
        let row = `<tr><td>${i.getItemCode()}</td><td>${i.getItemName()}</td><td>${i.getItemQty()}</td><td>${i.getItemPrice()}</td><td>${i.getTotalItemPrice()}</td></tr>`;
        total+=i.getTotalItemPrice();
        $("#orderTable").append(row);
    });

    $("#total").text('');
    $("#total").text(total);
    $("#subtotal").text('');
    $("#subtotal").text(total);

}
function qtyUpdate() {
    let item;
    var itemQty=$('#txtSelectQTYOnHand').val();
    var orderQty=$('#txtQty').val();

    var updateQty=itemQty-orderQty;
    for (var i in itemDB){
        if($('#txtSearchItemCode').val()==itemDB[i].getCode()){
            item=itemDB[i];
            item.setQty(updateQty);
            $('#txtSelectQTYOnHand').val(item.getQty());
        }
    }
}



clearAll();
function clearAll(){

    $("#txtOrderID").val('');
    $("#txtDate").val('');
    $("#orderCustomerID").val('');
    $("#orderCustomerID").css('border', '');
    $("#orderCustomerName").val('');
    $("#orderCustomerName").css('border', '');
    $("#orderCustomerTp").val('');
    $("#orderCustomerTp").css('border', '');
    $("#orderCustomerAddress").val('');
    $("#orderCustomerSalary").css('border', '');
    $("#txtSelectItemCode").val('');
    $("#txtSelectItemDescription").val('');
    $("#txtSelectItemPrice").val('');
    $("#txtSelectQTYOnHand").val('');
    $("#txtQty").val('');
    $("#total").text("00.00");
    $("#subtotal").text("00.00");
    $("#txtCash").val('');
    $("#txtDiscount").val('');
    $("#txtBalance").val('');

    $("#orderTable").empty();

}
updateDate();
function updateDate() {
    let d = new Date();
    let dd = d.toISOString().split("T")[0].split("-");
    $("#txtDate").val(dd[0]+"-"+dd[1]+"-"+dd[2]);
}
