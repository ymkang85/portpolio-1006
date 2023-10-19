const express = require('express');
const Timeline = require('../schemas/timeline');
const upload = require('../upload');
const fs = require('fs-extra');

const router = express.Router();
router.route('/list')
            .get(async (req, res, next) => {
              try{
                 const row = await Timeline.find({});
                 res.render('timeline', { row , title: "나의 타임라인"}); 
              }catch(err){
                console.error(err);
                next(err);
              }
       });

router.route('/write')
         .get((req, res, next)=>{
             res.render('timeline_write', { title:"나의 타임라인"});
         })  
         .post( upload.single("img"), async (req, res, next) => {
            try{
              var fileupload = '';
              if(req.file){
                fs.moveSync('./img/'+req.file.filename, './img/timeline/'+req.file.filename);
                fileupload = {
                  orimg: req.file.originalname,
                  img: req.file.filename
                }
              }  
              const data = {
                jobtitle: req.body.jobtitle,
                where: req.body.where,
                wdate: req.body.wdate
              }
              const timeline = await Timeline.create({...data, ...fileupload});
              console.log(timeline);
              res.redirect('/timeline/list');
            }catch(err){
              console.error(err);
              next(err);
            }
         });     

module.exports = router;