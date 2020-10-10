const { allTeachers, allStudents, allSubjects, teachers, students, subjects } = require('./data')

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`
    <html>
        <head>
        </head>
        <body>
            <h1>Selamat datang di Website Sekolah Swasta Negeri Jakarta</h1>
            <p>Sekolah Swasta Negeri Jakarta merupakan sekolah gabungan yang di bangun pada tahun 2077<br>
            Kepala Sekolah saat ini adalah Bapak Lorem Ipsum, beliau lahir di Sabang, 1 January 1970<br>
            Yuk cari tahu lebih lanjut tentang sekolah ini dengan meng-klik link di bawah ^_^</p>

            <!-- Link ke halaman -->
            <p><span><a href="./teachers">Cek data Teachers</a></span> | <a href="./students">Cek data Students</a></span> | <span><a href="./subjects">Cek data Subjects</a></span></p>
        </body>
    </html>`)
})

app.get('/teachers', (req, res) => {
  res.send(`
  <html>
        <style>
            table, th, td {
                border: 1px solid black;
            }
            th, td {
                padding: 5px;
                text-align: left;    
            }
        </style>
        <body>
            <h2>Berikut adalah semua data Guru</h2>
            ${allTeachers}
            <p><span><a href="./students">Cek data Students</a></span> | <span><a href="./subjects">Cek data Subjects</a></span></p>
            <p><a href="./">Kembali ke Beranda</a></p>
            <br><br>
            <b>Berikut adalah versi json mentah</b> (for developers)<br><br>
            ${JSON.stringify(teachers)}
        </body>
  </html>`)
})

app.get('/students', (req, res) => {
    res.send(`
    <html>
        <style>
            table, th, td {
                border: 1px solid black;
            }
            th, td {
                padding: 5px;
                text-align: left;    
            }
        </style>
        <body>
            <h2>Berikut adalah semua data Students</h2>
            ${allStudents}
            <p><span><a href="./teachers">Cek data Teachers</a></span> | <span><a href="./subjects">Cek data Subjects</a></span></p>
            <p><a href="./">Kembali ke Beranda</a></p>
            <br><br>
            <b>Berikut adalah versi json mentah</b> (for developers)<br><br>
            ${JSON.stringify(students)}
        </body>
    </html>`)
})

app.get('/subjects', (req, res) => {
    res.send(`
    <html>
        <style>
            table, th, td {
                border: 1px solid black;
            }
            th, td {
                padding: 5px;
                text-align: left;    
            }
        </style>
        <body>
            <h2>Berikut adalah semua data Subjects</h2>
            ${allSubjects}
            <p><span><a href="./teachers">Cek data Teachers</a></span> | <span><a href="./students">Cek data Students</a></span></p>
            <p><a href="./">Kembali ke Beranda</a></p>
            <br><br>
            <b>Berikut adalah versi json mentah</b> (for developers)<br><br>
            ${JSON.stringify(subjects)}
        </body>
    </html>`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})