/*
console.log(students)

const namesDestudents = ["Mayk", "Diego", "Fulano"]
console.log(namesDestudents)

const average0 = (students[0].grade + students[1].grade + students[2].grade) / 3

//objetos
const student1 = {
    name: 'Mayk',
    grade: 9.8,
}

const student2 = {
    name: 'Diego',
    grade: 10,
}

const student3 = {
    name: 'Fulano',
    grade: 2,
}

const average = (student1.grade + student2.grade + student3.grade) / 3

// se a average for maior que 5, parabenizar a turma

if (average > 5) {
    console.log(`A grade foi de ${average}. Parabens`)
}
else {
    console.log('A average eh menor que 5')
}
*/

//vetor
const students = [
    {
        name: "Mayk",
        grade: 1.8,
    },
    {
        name: "Diego",
        grade: 10,
    },
    {
        name: "Fulano",
        grade: 2,
    },
    {
        name: "Mais um student",
        grade: 10
    }
]

function markAsFlunked(student) {
    student.flunked = false
    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendMessageflunked(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked!`)
    }
}

function studentsflunkeds(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendMessageflunked(student)
    }
    console.table(students) //tabela para demonstrar de forma mais fluida a saida
}

studentsflunkeds(students)
