const passport = require("passport");
const local = require("./localStrategy");
const Admin = require("../schemas/admin");

module.exports = () => {
    //로그인 시 실행, req.session 에 저장할 메소드 생성
    passport.serializeUser((user, done) => {
        done(null, user.id); //첫번째 인수는 에러발생시, 두번째 인수는 저장하고싶은 데이터 입력
    });

    //매 페이지 요청시 실행
    //serializeUser에서 세선에 저장했던 아이디값을 받아 db의 사용자 정보를 조회
    //조회 정보를 req.user에 저장, router 에서 req.user 를 통해 사용함.
    passport.deserializeUser((id, done) => {
        Admin.findOne({ _id : id })
            .then(user => done(null, user ))
            .catch(err => done(err));
    });
    local();
}
/**
 * 로그인시
 * 1. 라우터를 통해 로그인 요청
 * 2. 라우터에서 passport.authenticate 메서드 호출
 * 3. 로그인 전략 수행
 * 4. 로그인 성공 시 사용자 정보 객체와 함께 req.login 호출
 * 5. req.login 메소드를 이용, passport.serializeUser 호출
 * 6. req.session에는 id만 저장
 * 7. 로그인 완료
 * 
 * 로그인 완료시
 * 1. 요청이 들어옴
 * 2. 라우터가 요청이 도달하기 전에 passport.session 미들웨어가 passport.deserializeUser메소드 호출
 * 3. req.session 에 저장된 id 를 이용해서 db 를 조회
 * 4. 조회된 정보는 req.user에 저장
 * 5. req.user를 이용해 라우터에서 객체 사용
*/