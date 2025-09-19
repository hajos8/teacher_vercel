import { global } from './globals.js'

export default async function handler(req, res){
    if(req.method === 'GET'){
        res.status(200).json(global.teachers)
    }
}