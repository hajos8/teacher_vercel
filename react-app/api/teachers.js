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

export default async function handler(req, res){
    if(req.method === 'GET'){
        res.status(200).json(global.teachers)
    }
}