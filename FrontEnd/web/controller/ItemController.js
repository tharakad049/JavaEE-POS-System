/*
var itemCodeRegEx = /^(I00)[0-9]{1,3}$/;
var itemNameRegEx = /^[A-z ]{3,20}$/;
var itemQuantityRegEx = /^[0-9/A-z. ,]{1,}$/;
var itemPriceRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
*/

/*$('#txtCode,#txtItemName,#txtItemQuantity,#txtPrice').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault(); // stop execution of the button
    }
});
$('#txtCode,#txtItemName,#txtItemQuantity,#txtPrice').on('blur', function () {
    formValid();
});
$("#txtCode").on('keyup', function (eventOb) {
    setButtons();
});
$("#txtItemName").on('keyup', function (eventOb) {
    setButtons();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtItemQuantity").on('keyup', function (eventOb) {
    setButtons();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtPrice").on('keyup', function (eventOb) {
    setButtons();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#btnSaveItem").attr('disabled', true);

function Valid() {
    var itemCode = $("#txtCode").val();
    $("#txtCode").css('border', '2px solid green');
    $("#lblItemCode").text("");
    if (itemCodeRegEx.test(itemCode)) {
        var itemName = $("#txtItemName").val();
        if (itemNameRegEx.test(itemName)) {
            $("#txtItemName").css('border', '2px solid green');
            $("#lblItemName").text("");
            var itemQuantity = $("#txtItemQuantity").val();
            if (itemQuantityRegEx.test(itemQuantity)) {
                var itemPrice = $("#txtPrice").val();
                var resp = itemPriceRegEx.test(itemPrice);
                $("#txtQuantity").css('border', '2px solid green');
                $("#lblItemQuantity").text("");
                if (resp) {
                    $("#txtPrice").css('border', '2px solid green');
                    $("#lblItemPrice").text("");
                    return true;
                } else {
                    $("#txtPrice").css('border', '2px solid red');
                    $("#lblItemPrice").text("Item Price is a required field : Pattern 100.00 or 100");
                    return false;
                }
            } else {
                $("#txtItemQuantity").css('border', '2px solid red');
                $("#lblItemQuantity").text("Item Quantity is a required field : Mimum 7");
                return false;
            }
        } else {
            $("#txtItemName").css('border', '2px solid red');
            $("#lblItemName").text("Item Name is a required field : Mimimum 5, Max 20, Spaces Allowed");
            return false;
        }
    } else {
        $("#txtCode").css('border', '2px solid red');
        $("#lblItemCode").text("Item Code is a required field : Pattern I00");
        return false;
    }
}

function checkIfValid() {
    $("#txtItemName").focus();
    var itemName = $("#txtItemName").val();
    if (itemNameRegEx.test(itemName)) {
        $("#txtQuantity").focus();
        var itemQuantity = $("#txtItemQuantity").val();
        if (itemQuantityRegEx.test(itemQuantity)) {
            $("#txtPrice").focus();
            var itemPrice = $("#txtPrice").val();
            var resp = itemPriceRegEx.test(itemPrice);
            if (resp) {
                let res = confirm("Do you really need to add this Item..?");
                if (res) {
                    clearAllItems();
                }
            } else {
                $("#txtPrice").focus();
            }
        } else {
            $("#txtItemQuantity").focus();
        }
    } else {
        $("#txtItemName").focus();
    }
}

function setButtons() {
    let c = Valid();
    if (c) {
        $("#btnSaveItem").attr('disabled', false);
    } else {
        $("#btnSaveItem").attr('disabled', true);
    }
}

$('#btnSaveItem').click(function () {
    checkIfValid();
    clearAllItems();
});

function clearAllItems() {
    $('#txtCode,#txtItemName,#txtItemQuantity,#txtPrice').val("");
    $('#txtCode,#txtItemName,#txtItemQuantity,#txtPrice').css('border', '2px solid #ced4da');
    $('#txtCode').focus();
    $("#btnSaveItem").attr('disabled', true);
    loadAllItems();
    $("#lblItemCode,#lblItemName,#lblItemQuantity,#lblItemPrice").text("");
}*/

$("#btnSaveItem").click(function () {
    var data = $("#itemForm").serialize();
    $.ajax({
        url: "http://localhost:8080/back/item",
        method: "POST",
        data: data,
        success: function (res) {
            if (res.status == 200) {
                alert(res.message);
                loadAllItems();
            } else {
                alert(res.data);
            }
        },
        error: function (ob, textStatus, error) {
            console.log(ob);
            console.log(textStatus);
            console.log(error);
        }
    });
});

$("#btnUpdateItem").click(function () {
    var itemOB = {
        id: $("#txtCode").val(),
        name: $("#txtItemName").val(),
        qty: $("#txtItemQuantity").val(),
        price: $("#txtPrice").val()
    }
    $.ajax({
        url: "http://localhost:8080/back/item",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(itemOB),
        success: function (res) {
            if (res.status == 200) {
                alert(res.message);
                loadAllItems();
            } else if (res.status == 400) {
                alert(res.message);
            } else {
                alert(res.data);
            }
        },
        error: function (ob,) {
            console.log(ob);
        }
    });
});

$("#btnDeleteItem").click(function () {
    let itemCode = $("#txtCode").val();
    $.ajax({
        url: "http://localhost:8080/back/item?iCode=" + itemCode,
        method: "DELETE",
        success: function (res) {
            console.log(res);
            if (res.status == 200) {
                alert(res.message);
                loadAllItems();
            } else if (res.status == 400) {
                alert(res.data);
            } else {
                alert(res.data);
            }
        },
        error: function (ob, status, t) {
            console.log(ob);
            console.log(status);
            console.log(t);
        }
    });
});

loadAllItems();
function loadAllItems() {
    $("#tblItems").empty();
    $.ajax({
        url: "http://localhost:8080/back/item",
        method: "GET",
        success: function (resp) {
            for (const item of resp.data) {
                let row = `<tr><td>${item.code}</td><td>${item.name}</td><td>${item.qty}</td><td>${item.price}</td></tr>`;
                $("#tblItems").append(row);
            }
            ClickEvents();
        }
    });
}

function ClickEvents() {
    $("#tblItems>tr").click(function () {
        let code = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let quantity = $(this).children().eq(2).text();
        let price = $(this).children().eq(3).text();

        $("#txtCode").val(code);
        $("#txtItemName").val(name);
        $("#txtItemQuantity").val(quantity);
        $("#txtPrice").val(price);
    });
}