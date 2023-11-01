const bcrypt = require("bcrypt");
const passport = require("passport");
const Admin = require("../schemas/admin");
require('dotenv').config();

exports.join = async(req, res, next) => {
  const { userid, userpass } = req.body;
  try{
    const exAdmin = await Admin.findOne({ where: { userid }});
    if(exAdmin){
        return res.redirect("/register?error=exist");
    }
    const salt_rounds = Number(process.env.SALT_ROUNDS);
    const hash_pass = await bcrypt.hash(userpass, salt_rounds);
    await Admin.create({
        userid,
        userpass: hash_pass
    });
    return res.redirect("/");
  }catch(error){
     console.error(error);
     return next(error);
  }
}

exports.login = (req, res, next) => {
   passport.authenticate('local', (authError, user, info)=>{
      if(authError){
         console.error(authError);
         return next(authError);
      }
      if(!user){
        return res.redirect(`/?error=${info.message}`);
      }
      return req.login(user, (loginError)=>{
        if(loginError){
            console.error(loginError);
            return next(loginError);
        }
        return res.redirect("/");
      });
   })(req, res, next);  //미들웨어 안의 미들웨어는 (req, res, next)를 붙인다.
};

exports.logout = (req, res) => {
    req.logout(()=>{
        res.redirect("/");
    })
}