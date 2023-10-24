const express = require('express');
const Category = require('../schemas/category');
const Portfolio = require('../schemas/portfolio');
const upload = require('../upload');
const fs = require('fs-extra');

const router = express.Router();
router.route('/list')
            .get(async (req, res, next) => {
              try{
                 let show = '';
                 show = req.query.show;
                 let maxNum = 0;
                 const row = await Portfolio.find({});
                 const rs = await Category.find().sort({"num": "desc"});
                 if(rs.length>0) maxNum = rs[0].num;
                 res.render('portfolio', { row , rs, maxNum, title: "나의 포트폴리오", show: show}); 
              }catch(err){
                console.error(err);
                next(err);
              }
         });
       
router.route('/write')
      .get(async (req, res, next)=>{
         try{
           const row = await Category.find().sort({"num":"desc"}); 
           res.render('portfolio_write', { title: "포트폴리오", row});
         }catch(err){
            console.error(err);
            next(err);
         }
      })
         
router.route('/category/write')
      .get((req, res, next)=>{
         res.render('portfolio_write');
      })
      .post(upload.array("img"),async(req, res, next ) => {
       try{
         let fileupload;
         if(!req.files || req.files.length === 0){
            fileupload = '';
         } else {
            fileupload = {
               orimg: req.files.map(file => file.originalname),
               img: req.files.map(file => file.filename)               
            }
         }

         const portfolio = await Portfolio.create({
            ...fileupload,
            category: req.body.category,
            title: req.body.title,
            content: req.body.content,
            link: req.body.link
         });
         console.log(portfolio);
         res.redirect('/portfolio/list');
      }catch(err){
         console.error(err);
         res.send('0');
         next(err);
      }  
    });      

 router.route('/category/update')
      .post(async(req, res, next ) => {
         try{
            const formData = req.body;
            //console.log(formData);
            //배열을 역순으로 바꾸어야 함
            let cate = formData['category[]'].reverse();
            let id = formData['cate_id[]'].reverse();

            for(let i=0; i<id.length; i++) {
               let updateNum = i + 1;
               try{
                 let rs = await Category.updateOne({_id: id[i]},{
                    name: cate[i],
                    num: updateNum
                 });
                 console.log(rs);
               }catch(error){
                  console.error(error);
               }
            }
           return res.send('1');
      }catch(err){
         console.error(err);
         next(err);
         return res.send('0');
      }  
    });

   router.route('/category/del')
    .post(async(req, res, next ) => {
      try{
         const id = req.body.id;
         const rs = await Category.deleteOne({ _id: id });
         console.log(rs);
         res.send('1');
      }catch(err){
         console.error(err);
         res.send('0');
         next(err);
      }  
    });    


module.exports = router;         