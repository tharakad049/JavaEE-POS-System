$("#orderCustomerName").attr('disabled', true);
$("#orderCustomerAddress").attr('disabled', true);
$("#orderCustomerSalary").attr('disabled', true);

$("#txtSelectItemName").attr('disabled', true);
$("#txtSelectItemPrice").attr('disabled', true);
$("#txtSelectQTYOnHand").attr('disabled', true);


generateOrderID();

function generateOrderID() {
    $("#txtOrderID").val("O00-001");
    $.ajax({
        url: "http://localhost:8080/pos/order?option=GenerateOid",
        method: "GET",
        success: function (response) {
            var orderId = response.getOrderId();
            var tempId = parseInt(orderId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#txtOrderID").val("O00-00" + tempId);
            } else if (tempId <= 99) {
                $("#txtOrderID").val("O00-0" + tempId);
            } else if (tempId <= 999) {
                $("#txtOrderID").val("O00-" + tempId);
            }
        },
        error: function (ob, statusText, error) {
        }
    });
}

$("#btnOrderCusSearch").click(function () {
    $.ajax({
        url: "http://localhost:8080/pos/customer?option=SelectCustomer",
        method: "GET",
        success: function (response) {
            $("#orderCustomerName").val(response.name);
            $("#orderCustomerAddress").val(response.address);
            $("#orderCustomerSalary").val(response.salary);
        },
        error: function (ob, statusText, error) {
            alert("No Such Customer");
        }
    });
});


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