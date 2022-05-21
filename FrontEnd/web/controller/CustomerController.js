$("#btnSaveCustomer").click(function () {
    var data = $("#customerForm").serialize();
    $.ajax({
        url: "customer",
        method: "POST",
        data: data,
        success: function (res) {
            if (res.status == 200) {
                alert(res.message);
                loadAllCustomers();
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

$("#btnDeleteCustomer").click(function () {
    let customerID = $("#txtID").val();
    $.ajax({
        url: "customer?CusID=" + customerID,
        method: "DELETE",
        success: function (res) {
            console.log(res);
            if (res.status == 200) {
                alert(res.message);
                loadAllCustomers();
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

$("#btnUpdateCustomer").click(function () {
    var cusOb = {
        id: $("#txtID").val(),
        name: $("#txtName").val(),
        address: $("#txtAddress").val(),
        salary: $("#txtSalary").val()
    }
    $.ajax({
        url: "customer",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(cusOb),
        success: function (res) {
            if (res.status == 200) {
                alert(res.message);
                loadAllCustomers();
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

loadAllCustomers();
function loadAllCustomers() {
    $("#tblCustomer").empty();
    $.ajax({
        url: "customer",
        method: "GET",
        success: function (resp) {
            for (const customer of resp.data) {
                let row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;
                $("#tblCustomer").append(row);
            }
            bindClickEvents();
        }
    });
}

function bindClickEvents() {
    $("#tblCustomer>tr").click(function () {
        let id = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let address = $(this).children().eq(2).text();
        let salary = $(this).children().eq(3).text();

        $("#txtID").val(id);
        $("#txtName").val(name);
        $("#txtAddress").val(address);
        $("#txtSalary").val(salary);
    });
}