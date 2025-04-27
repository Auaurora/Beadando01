var selectedIndex = null;
var array1 = new Array();
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
    formData["vnev"] = document.getElementById("vnev").value;
    formData["knev"] = document.getElementById("knev").value;
    formData["nkod"] = document.getElementById("nkod").value;
    formData["ido"] = document.getElementById("ido").value;
    return formData;
}

function insertNewRecord(data) {
    array1[array1.length]= {"vnev":data.vnev,"knev":data.knev,"nkod":data.nkod,"ido":data.ido};
    printArray();
}

function printArray(){
    var table = document.getElementById("nevsor");
    table.innerHTML="";
    var newRow;
    for (i = 0; i < array1.length; i++) {
        newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = array1[i].vnev;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = array1[i].knev;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = array1[i].nkod;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = array1[i].ido;
        cell4 = newRow.insertCell(4);
        cell4.innerHTML = '<a onClick="onEdit('+i+')">Edit |</a>' + '<a onClick="onDelete('+i+')"> Delete</a>';
    }
}

function resetForm() {
    document.getElementById("vnev").value = "";
    document.getElementById("knev").value = "";
    document.getElementById("nkod").value = "";
    document.getElementById("ido").value = "";
    selectedIndex=null;
}
function onEdit(index) {
    document.getElementById("vnev").value = array1[index].vnev;
    document.getElementById("knev").value = array1[index].knev;
    document.getElementById("nkod").value = array1[index].nkod;
    document.getElementById("ido").value = array1[index].ido;
    selectedIndex=index;
}
function updateRecord(formData) {
    array1[selectedIndex].vnev=formData.vnev;
    array1[selectedIndex].knev=formData.knev;
    array1[selectedIndex].nkod=formData.nkod;
    array1[selectedIndex].ido=formData.ido;
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
    if (document.getElementById("vnev").value.length == 0 || document.getElementById("knev").value.length == 0 
    ||document.getElementById("nkod").value.length == 0 || document.getElementById("ido").value.length == 0) {
        isValid = false;
    } else {
        isValid = true;
    }
    return isValid;
}