const DBModel = require('../models/db.model');
module.exports = {
    save: function*(req,res){
        let name = req.body.name;
        let phone = req.body.phone;
        if(!name || !phone){
             return res.status(405).json({error:'error'}).end() 
        }
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
    },
    getUsersByName:function*(req,res,next){
        let name = req.params.name;
        
        if(!name){
             return res.status(405).json({error:'name required'}).end() 
        }
        try{
            let users = yield DBModel.getUsersByName(name)
            if(users.length === 0)
                return next(new Error(404))
            return res.json(users)
        }catch(e){
            return res.status(405).json({error:'error'}).end() 
        } 
    }
}