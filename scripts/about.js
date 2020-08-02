let users = [
    {surname: "Berger", firstname: "Whitney", age: 22},
    {surname: "John", firstname: "Dick", age: 23},
    {surname: "Dick", firstname: "Chaney", age: 12},
    {surname: "Rostás", firstname: "Márió", age: 47},
    {surname: "Fehér", firstname: "Péter", age: 20},
    {surname: "Piros", firstname: "Bitch", age: 10},
    {surname: "Kiss", firstname: "Bence", age: 45}
];

let tableBody = document.querySelector("#userTable tbody");

let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
}

let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fa fa-sync-alt"></i>';
    
    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger";
    btnDanger.innerHTML = '<i class="fa fa-sync-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
};

for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for(let value of Object.values(users[k])) {
        createTD(value, tr);
    };
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}

