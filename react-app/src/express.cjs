const express = require('express')
const app = express()

var global = {
    teachers: [
        {
            name: 'Gipsz Jakab',
            hisClass: '9/A',
            favorite: true
        },
        {
            name: 'Kolompár Dzsoki',
            hisClass: '18/C',
            favorite: false
        }
    ],

    favoriteTeacherIdx: null

}

app.get('/teachers', (req,res)=>{
    res.sendStatus(200).json(global.teachers)
})

const port = 3333
app.listen(port, ()=>{
    console.log("fut")
})