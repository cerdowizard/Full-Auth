const User = require('../Models/UserModel')

const UserCtrl = {
    register: async(req, res)=>{
        try {
            const {name, email,password} = req.body
            if (!name || !email || !password) {
                return res.status(400).json({msg: `All fields must be provided`})
            }
            console.log(req.body)
            return res.json({msg:`Hello`})
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    }
}

module.exports = UserCtrl