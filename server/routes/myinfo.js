const express =require('express');
const Myinfo = require('../schemas/myinfo');

const router = express.Router();

router.route('/')
      .get(async (req, res, next)=>{
         try{
            const myinfo = await Myinfo.find({});
            res.json(myinfo);  
         }catch(err) {
            console.error(err);
            next(err);
         }
      });
 
router.route('/write')      
      .post(async (req, res, next)=>{
        try{
           const myinfo = await Myinfo.create({
              email: req.body.email,
              phone: req.body.phone,
              name: req.body.name,
              emailjs_id: req.body.emailjs_id,
              emailjs_template_id: req.body.emailjs_template_id,
              emailjs_api: req.body.emailjs_api
           });
           console.log(myinfo);
           //res.status(201).json(myinfo);
           res.redirect('/myinfo');
        }catch(err){
            console.error(err);
            next(err);
        }
    });

    router.route('/update')      
    .post(async (req, res, next)=>{
      try{
         const myinfo = await Myinfo.updateOne({
            _id:req.body.id
         },{
            email: req.body.email,
            phone: req.body.phone,
            name: req.body.name,
            emailjs_id: req.body.emailjs_id,
            emailjs_template_id: req.body.emailjs_template_id,
            emailjs_api: req.body.emailjs_api
         });
         console.log(myinfo);
         //res.status(201).json(myinfo);
         res.redirect('/myinfo/list');
      }catch(err){
          console.error(err);
          next(err);
      }
  });


    router.route('/list')
      .get(async (req, res, next)=>{
         try{
            const myinfo = await Myinfo.find({});
            const row = myinfo[0];
            res.render('myinfo', { row });
         }catch(err) {
            console.error(err);
           next(err);
          }
      })

    module.exports = router;