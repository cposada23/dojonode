const userModel = require('mongoose').model('User');

module.exports = {
    saveUser:function*(name,phone){
        var user = new userModel({name,phone})
        try{
            yield user.save()
            return;
        }catch(e){
            throw('error')
        }
    },
    getAll:function*(){
        try{
            let users = yield userModel.find();
            return users;
        }catch(e){
            throw(e)
        }
    }
}