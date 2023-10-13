const express = require("express");
const indexRouter = require('./routes');
const conn = require('./schemas');

const myinfoRouter = require('./routes/myinfo');
const skillsRouter = require('./routes/skills');
const pageinfoRouter = require('./routes/pageinfo');
const portfolioRouter = require('./routes/portfolio');
const timelineRouter = require('./routes/timeline');

const app = express();
app.set('port', process.env.PORT || 3001);
conn();
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use('/', indexRouter);
app.use('myinfo', myinfoRouter);
app.use('skills', skillsRouter);
app.use('pageinfo', pageinfoRouter);
app.use('portfolio', portfolioRouter);
app.use('timeline', timelineRouter);

app.use((req, res, next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터를 찾을 수 없습니다.`);
    error.statue = 404;
    next(error);
});

app.use((err, req, res, next)=>{
    res.locals.message = err.message;
    res.lcoals.error = process.env.NODE_ENV !== 'production'? err : {};
    res.status(err.status || 500);
    res.send('error');
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'), '번 포트에서 대기중...');
});