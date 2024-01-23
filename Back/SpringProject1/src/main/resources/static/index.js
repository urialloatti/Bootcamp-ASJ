const tableBody = document.getElementById("table-content");
const createId = document.getElementById("input-create-id");
const createName = document.getElementById("input-create-name");
const createSurname = document.getElementById("input-create-surname");
const createGrade = document.getElementById("input-create-grade");
const create = document.getElementById("button-create");
const updateId = document.getElementById("input-update-id");
const updateName = document.getElementById("input-update-name");
const updateSurname = document.getElementById("input-update-surname");
const updateGrade = document.getElementById("input-update-grade");
const update = document.getElementById("button-update");



function loadPage() {
    tableBody.innerHTML = '';
    fetch('http://localhost:8080/alumns')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        for (let alumn of json) {
            let row = document.createElement('tr');
            row.innerHTML = 
                `
                <td>${alumn.id}</td>
                <td>${alumn.name}</td>
                <td>${alumn.surname}</td>
                <td>${alumn.grade}</td>
                <td> 
                    <button class="btn btn-primary" id="update-${alumn.id}">Editar</button> 
                    <button class="btn btn-danger" id="delete-${alumn.id}">Eliminar</button> 
                </td>
                `
            tableBody.append(row);
            const deleteBtn = document.getElementById(`delete-${alumn.id}`);
            deleteBtn.addEventListener('click', () => {
                fetch(`http://localhost:8080/alumns/${alumn.id}`, {
                    method: 'DELETE'
                })
                    .then(() => {
                        loadPage();
                    })
            })
            const updatebtn = document.getElementById(`update-${alumn.id}`);
            updatebtn.addEventListener('click', () => {
                fetch(`http://localhost:8080/alumns/${alumn.id}`)
                .then((response) => response.json())
                .then((json) => {
                    updateId.value = json.id;
                    updateName.value = json.name;
                    updateSurname.value = json.surname;
                    updateGrade.value = json.grade;
                })
            })

        }
    });
}
loadPage();

create.addEventListener('click', (event) => {
    event.preventDefault();
    let alumno = {id: -1, name: createName.value, surname: createSurname.value, grade: Number(createGrade.value)};
    console.log(alumno);
    fetch(`http://localhost:8080/alumns`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(alumno)
    })
    .then((respose) => {
        loadPage();
        createName.value = '';
        createSurname.value = '';
        createGrade.value = 0;
    })
});

update.addEventListener('click', (event) => {
    event.preventDefault();
    let alumno = {id: updateId.value, name: updateName.value, surname: updateSurname.value, grade: Number(updateGrade.value)};
    console.log(alumno);
    fetch(`http://localhost:8080/alumns/${updateId.value}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(alumno)
    })
    .then(() => {
        loadPage();
        updateName.value = '';
        updateSurname.value = '';
        updateGrade.value = 0;
    })
});


