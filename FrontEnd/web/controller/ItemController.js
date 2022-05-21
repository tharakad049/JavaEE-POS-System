$("#btnSaveItem").click(function () {
    var data = $("#itemForm").serialize();
    $.ajax({
        url: "item",
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
        url: "item",
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
        url: "item?iCode=" + itemCode,
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
        url: "item",
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