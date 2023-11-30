// Ejercicio 1

function isEven(num) {
    if (input % 2 == 0) {
        console.log("El número", input, "es par.");
    }
    else console.log("El número", input, "es impar.")
}


let input = prompt("Ingrese un número: ");

isEven(input)

// Ejercicio 2

let alumnos = [
    {
        nombre: "Mariano Damian",
        apellido: "Hernandez",
        notas: [8, 7, 9, 10, 6],
      },
      {
        nombre: "Ramiro",
        apellido: "Diaz",
        notas: [1, 3, 8, 2, 1],
      },
      {
        nombre: "Ana",
        apellido: "Armella",
        notas: [5, 7, 9, 4, 2],
      },
      {
        nombre: "Romina",
        apellido: "Almeda",
        notas: [10, 6, 7, 5, 9],
      },
      {
        nombre: "Denis",
        apellido: "Tolaba",
        notas: [10, 10, 9, 9, 10],
      },
      {
        nombre: "Hugo",
        apellido: "Castellano",
        notas: [2, 3, 3, 6, 1],
      },
      {
        nombre: "Analia Daiana",
        apellido: "Fonseca",
        notas: [4, 3, 4, 5, 2],
      },
      {
        nombre: "Francisco Daniel",
        apellido: "Samir",
        notas: [5, 5, 6, 4, 2],
      },
];

function showStudents(students, condition) {
    students.forEach(student => {
        let grades = 0;
        let prom = 0
        student.notas.forEach(nota => {
            grades += nota;
        })
        if (student.notas.length > 0) {
            prom = grades/student.notas.length;
        }
        student.promedio = prom
        if (student.promedio >= 6){
            student.estado = "Aprobado" 
        }
        else student.estado = "Desaprobado" 
    });
    const finalList = students.filter((student) => student.estado == condition);
    console.log(finalList.a)
}

showStudents(alumnos, "Aprobado")