const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Link host : http://localhost:${PORT}`)
)

app.get('/data', (req,res) => {
    res.status(200).send({
        nim: 181402054,
        nama: 'Alvin Daeli',
        noHP: 085921336007,
        jenisKelamin: 'Laki-laki'
    })
});

app.post('/data/:id', (req,res) => {
    const { id } = req.params;
    const { nim } = req.nim;
    const { nama } = req.nama;
    const { noHP } = req.noHP;
    const { jenisKelamin } = req.jenisKelamin;

    if(!nim) {
        res.status(418).send({
            message: 'Nim required!'
        })
    } else if(!nama){
        res.status(418).send({
            message: 'Nama required!'
        })
    } else if(!noHP){
        res.status(418).send({
            message: 'No HP required!'
        })
    } else if(!jenisKelamin){
        res.status(418).send({
            message: 'Jenis Kelamin required!'
        })
    }

    res.send({
        nim: `${nim}`,
        nama: `${nama}`,
        noHP: `${noHP}`,
        jenisKelamin: `${jenisKelamin}`
    })
});