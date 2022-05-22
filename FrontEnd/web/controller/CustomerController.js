var cusIDRegEx = /^(C00-)[0-9]{1,3}$/;
var cusNameRegEx = /^[A-z ]{3,20}$/;
var cusAddressRegEx = /^[0-9A-Z a-z,/:]{4,50}$/;
var cusSalaryRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

$('#txtID,#txtName,#txtAddress,#txtSalary').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});
$('#txtID,#txtName,#txtAddress,#txtSalary').on('blur', function () {
    formValid();
});

$("#txtID").on('keyup', function (eventOb) {
    setButton();
});

$("#txtName").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValided();
    }
});

$("#txtAddress").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValided();
    }
});

$("#txtSalary").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValided();
    }
});

function formValid() {
    var cusID = $("#txtID").val();
    $("#txtID").css('border', '2px solid green');
    $("#lblcusid").text("");
    if (cusIDRegEx.test(cusID)) {
        var cusName = $("#txtName").val();
        if (cusNameRegEx.test(cusName)) {
            $("#txtName").css('border', '2px solid green');
            $("#lblcusname").text("");
            var cusAddress = $("#txtAddress").val();
            if (cusAddressRegEx.test(cusAddress)) {
                var cusSalary = $("#txtSalary").val();
                var sly = cusSalaryRegEx.test(cusSalary);
                $("#txtAddress").css('border', '2px solid green');
                $("#lblcusaddress").text("");
                if (sly) {
                    $("#txtSalary").css('border', '2px solid green');
                    $("#lblcussalary").text("");
                    return true;
                } else {
                    $("#txtSalary").css('border', '2px solid red');
                    $("#lblcussalary").text("Cus Salary is a required field : Pattern 100.00 or 100");
                    return false;
                }
            } else {
                $("#txtAddress").css('border', '2px solid red');
                $("#lblcusaddress").text("Cus Address is a required field : Mimum 4");
                return false;
            }
        } else {
            $("#txtName").css('border', '2px solid red');
            $("#lblcusname").text("Cus Name is a required field : Mimimum 5, Max 20, Spaces Allowed");
            return false;
        }
    } else {
        $("#txtID").css('border', '2px solid red');
        $("#lblcusid").text("Cus ID is a required field : Pattern C00");
        return false;
    }
}

function checkIfValided() {
    $("#txtName").focus();
    var cusName = $("#txtName").val();
    if (cusNameRegEx.test(cusName)) {
        $("#txtAddress").focus();
        var cusAddress = $("#txtAddress").val();
        if (cusAddressRegEx.test(cusAddress)) {
            $("#txtSalary").focus();
            var cusSalary = $("#txtSalary").val();
            var sly = cusSalaryRegEx.test(cusSalary);
            if (sly) {
                let con = confirm("Do you really need to add this Customer..?");
                if (con) {
                    clearAll();
                }
            } else {
                $("#txtSalary").focus();
            }
        } else {
            $("#txtAddress").focus();
        }
    } else {
        $("#txtName").focus();
    }
}

function setButton() {
    let b = formValid();
    if (b) {
        $("#btnSaveCustomer").attr('disabled', false);
    } else {
        $("#btnSaveCustomer").attr('disabled', true);
    }
}

$('#btnSaveCustomer').click(function () {
    checkIfValided();
    clearAll();
});

function clearAll() {
    $('#txtID,#txtName,#txtAddress,#txtSalary').val("");
    $('#txtID,#txtName,#txtAddress,#txtSalary').css('border', '2px solid red');
    $('#txtID').focus();
    $("#btnSaveCustomer").attr('disable', true);
    loadAllCustomers();
    $("#lblcusid,#lblcusname,#lblcusaddress,#lblcussalary").text("");
}

$("#btnSaveCustomer").attr('disabled', true);

$("#btnSaveCustomer").click(function () {
    var data = $("#customerForm").serialize();
    $.ajax({
        url: "http://localhost:8080/back/customer",
        method: "POST",
        data: data,
        success: function (res) {
            if (res.status == 200) {
                alert(res.message);
                loadAllCustomers();
                clearAll();
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
        url: "http://localhost:8080/back/customer?CusID=" + customerID,
        method: "DELETE",
        success: function (res) {
            console.log(res);
            if (res.status == 200) {
                alert(res.message);
                loadAllCustomers();
                clearAll();
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
        url: "http://localhost:8080/back/customer",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(cusOb),
        success: function (res) {
            if (res.status == 200) {
                alert(res.message);
                loadAllCustomers();
                clearAll();
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
        url: "http://localhost:8080/back/customer",
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