const mongoose = require('mongoose');

require('dotenv').config();

const mongodbid = process.env.MONGODB_ID;
const mongodbpass = process.env.MONGODB_PASS;
const mongodbhost = process.env.MONGODB_HOST;
const mongodbport = process.env.MONGODB_PORT;
const mongodbDB = process.env.MONGODB_DB;

const conn = ()=> {
    if(process.env.NODE_ENV !== 'production'){
        mongoose.set('debug', true);
    }
    // mongodb://아이디:비밀번호@주소:포트번호/admin
    mongoose.connect(
        `mongodb://${mongodbid}:${mongodbpass}@${mongodbhost}:${mongodbport}/admin`,{
            dbName : `${mongodbDB}`
        }
    ).then(()=>{
        console.log('몽고db 연결 성공');
    }).catch((err)=>{
        console.error('몽고db 연결 에러',err);
    });
};

mongoose.connection.on('error',error=>{
    console.error('db연결에 실패했습니다.', error);
});

mongoose.connection.on('disconnected', ()=>{
    console.error('db 연결이 끊겼습니다, 연결을 재시도 합니다.');
    conn();
})

module.exports = conn;