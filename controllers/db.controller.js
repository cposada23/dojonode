const DBModel = require('../models/db.model');
module.exports = {
    save: function*(req,res){
        console.log(req.body)
        let name = req.body.name;
        let phone = req.body.phone;
        try{
            yield DBModel.saveUser(name,phone)
            return res.end('ok')
        }catch(e){
            return res.status(405).json({error:'error'}).end() 
        }        
    },
    getAll:function*(req,res){
        try{
            let users = yield DBModel.getAll()
            return res.json(users).end()
        }catch(e){
            return res.status(405).json({error:'error'}).end() 
        }   
    }
}