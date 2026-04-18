var selectedIndex = null;
var array1 = new Array();
array1.push({"az":"1","nev":"francia","felveheto":"16","min":"140"});
array1.push({"az":"2","nev":"angol","felveheto":"30","min":"150"});
printArray();
function printArray(){
    var table = document.getElementById("kepzeslista").getElementsByTagName('tbody')[0];
    table.innerHTML="";
    var newRow;
    for (i = 0; i < array1.length; i++) {
        newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = array1[i].az;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = array1[i].nev;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = array1[i].felveheto;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = array1[i].min;
        cell4 = newRow.insertCell(4);
        cell4.innerHTML = '<a onClick="onEdit('+i+')">Edit</a>' + ' | ' + '<a onClick="onDelete('+i+')">Delete</a>';
    }
}
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedIndex==null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["az"] = document.getElementById("az").value;
    formData["nev"] = document.getElementById("nev").value;
    formData["felveheto"] = document.getElementById("felveheto").value;
    formData["min"] = document.getElementById("min").value;
    return formData;
}

function insertNewRecord(data) {
    array1.push({"az":data.az,"nev":data.nev,"felveheto":data.felveheto,"min":data.min});
    printArray();
}

function resetForm() {
    document.getElementById("az").value = "";
    document.getElementById("nev").value = "";
    document.getElementById("felveheto").value = "";
    document.getElementById("min").value = "";
    selectedIndex=null;
}
function onEdit(index) {
    document.getElementById("az").value = array1[index].az;
    document.getElementById("nev").value = array1[index].nev;
    document.getElementById("felveheto").value = array1[index].felveheto;
    document.getElementById("min").value = array1[index].min;
    selectedIndex=index;
}
function updateRecord(formData) {
    array1[selectedIndex].az=formData.az;
    array1[selectedIndex].nev=formData.nev;
    array1[selectedIndex].felveheto=formData.felveheto;
    array1[selectedIndex].min=formData.min;
    printArray();
}
function onDelete(index) {
    if (confirm('Biztosan törölni kívánja?')) {
        array1.splice(index, 1);
        resetForm();
        printArray();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("az").value.length == 0 || document.getElementById("nev").value.length == 0 
    ||document.getElementById("felveheto").value.length == 0 || document.getElementById("min").value.length == 0) {
        isValid = false;
    } else {
        isValid = true;
    }
    return isValid;
}