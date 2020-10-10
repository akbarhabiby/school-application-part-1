const fs = require('fs')

let teachers = JSON.parse(fs.readFileSync('./json/teachers.json'))
let students = JSON.parse(fs.readFileSync('./json/students.json'))
let subjects = JSON.parse(fs.readFileSync('./json/subjects.json'))

let allTeachers = '<table style="border: 1px solid black;"><tr><th>ID</th><th>Nama Lengkap</th><th>Email</th><th>Jenis Kelamin</th><tr>'
teachers.forEach( (teacher, index) => {
    allTeachers += `<tr><td>${teacher.id}</td><td>${teacher.first_name} ${teacher.last_name}</td><td>${teacher.email}</td><td>${teacher.gender}</td></tr>`
    if (index == teachers.length - 1) {
        allTeachers += `<table>`
    }
})

let allStudents = '<table style="border: 1px solid black;"><tr><th>ID</th><th>Nama Lengkap</th><th>Email</th><th>Jenis Kelamin</th><th>Tanggal Lahir</th><tr>'
students.forEach( (student, index) => {
    allStudents += `<tr><td>${student.id}</td><td>${student.first_name} ${student.last_name}</td><td>${student.email}</td><td>${student.gender}</td><td>${student.birth_date}</td></tr>`
    if (index == students.length - 1) {
        allStudents += `<table>`
    }
})

let allSubjects = '<table style="border: 1px solid black;"><tr><th>ID</th><th>Mata Pelajaran</th><tr>'
subjects.forEach( (subject, index) => {
    allSubjects += `<tr><td>${subject.id}</td><td>${subject.subject_name}</td></tr>`
    if (index == subjects.length - 1) {
        allSubjects += `<table>`
    }
})

module.exports = {
    allTeachers,
    allStudents,
    allSubjects,
    teachers,
    students,
    subjects
}