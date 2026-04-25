const api = "api.php";
document.getElementById("kepzesform").addEventListener("submit", addKepzes);
window.onload = function() {
    fetchKepzes();
};
function fetchKepzes() {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            let rows = "";
            data.readData.forEach(user => {
                rows += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.nev}</td>
                    <td>${user.felveheto}</td>
                    <td>${user.min}</td>
                    <td>
                        <button onclick='editUser(${JSON.stringify(user)})'>Edit</button>
                        <button onclick='deleteUser(${user.id})'>Delete</button>
                    </td>
                </tr>`;
            });
            document.getElementById("kepzeslista").innerHTML = rows;
        });
}
function addKepzes(e) {
    e.preventDefault();
    const id = document.getElementById("id").value;
    const nev = document.getElementById("nev").value;
    const felveheto = document.getElementById("felveheto").value;
    const min = document.getElementById("min").value;
    const data = {
        id: id,
        nev: nev,
        felveheto: felveheto,
        min: min
    };
    const $method = id ? "PUT" : "POST";
    fetch(api, {
        method: $method,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        e.target.reset();
        document.getElementById("message").innerText = data.status;
        document.getElementById("id").value = "";
        fetchUsers();
    });
}

function editKepzes(user) {
    document.getElementById("id").value = user.id;
    document.getElementById("nev").value = user.nev;
    document.getElementById("felveheto").value = user.felveheto;
    document.getElementById("min").value = user.min;
}

function deleteUser(id) {
    if (!confirm("Biztosan törölni kívánja??")) return;
    fetch(api, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({id})
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("message").innerText = data.status;
        fetchUsers();
    });
}
