const express = require('express')
const cors = require('cors')
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
    ]

}

app.use(cors())

app.get('/teachers', (req,res)=>{
    res.status(200).json(global.teachers)
})

app.get('/techer/:isfavorite', (req, res) => {
    let found = null

    for(let teacher of global.teachers){
        if(teacher.favorite) found = teacher
    }

    if(found){
        res.status(200).json(found)
    }
    else{
        res.sendStatus(404)
    }
})

const port = 3333
app.listen(port, ()=>{
    console.log("fut")
})