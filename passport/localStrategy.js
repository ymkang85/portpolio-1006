const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const Admin = require("../schemas/admin");

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'userid',
        passwordField: 'userpass',
        passReqToCallback: false
    }, async (userid, userpass, done) => {
        try {
            const exAdmin = await Admin.findOne({ where: { userid } });
            if (exAdmin) {
                const result = await bcrypt.compare(userpass, exAdmin.userpass);
                if (result) {
                    done(null, exAdmin);
                } else {
                    done(null, false, { message: '비밀번호가 틀렸습니다.' });
                }
            } else {
                done(null, false, { message: '아이디를 다시 확인하세요.' })
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }))
}