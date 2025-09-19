import { global } from './globals.js'

export default async function handler(req, res){
    let found = null
    if(global) found = global.teachers.find(teacher => teacher.favorite)
    if(found){
        res.status(200).json(found)
    }
    else{
        res.status(404).json({error: 'Not found'})
    }
}