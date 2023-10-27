const express = require('express');
const Skills = require('../schemas/skills');
const upload = require('../upload');
const fs = require('fs-extra');

const router = express.Router();
router.route('/list')
   .get(async (req, res, next) => {
      try {
         const row = await Skills.find({});
         res.render('skills', { row, title: "나의 스킬" });
      } catch (err) {
         console.error(err);
         next(err);
      }
   });

router.route('/write')
   .get((req, res, next) => {
      res.render('skills_write', { title: "나의 스킬" });
   })
   .post(upload.single("img"), async (req, res, next) => {
      try {
         fs.moveSync('./img/' + req.file.filename, './img/skills/' + req.file.filename);
         var fileupload = '';
         if (req.file) {
            fileupload = {
               orimg: req.file.originalname,
               img: req.file.filename
            }
         }
         const data = {
            name: req.body.name,
            value: req.body.value,
         }
         const datas = { ...data, ...fileupload }
         const skills = await Skills.create(datas);

         console.log(skills);
         res.redirect('/skills/list');

      } catch (err) {
         console.error(err);
         next(err);
      }
   });

router.route('/edit/:id')
   .get(async (req, res, next) => {
      try {
         const { id } = req.params;
         const row = await Skills.find({ _id: id });
         const rs = row[0];
         res.render('skills_update', { rs, title: '스킬 수정' });
      } catch (err) {
         console.error(err);
         next(err);
      }
   });

router.route('/edit')
   .post(upload.single("img"), async (req, res, next) => {
      const { name, value, id } = req.body;
      console.log(name, value, id);

      try {
         let fileupload = {};
         if (req.body.imgchk == 1) {
            //기존의 파일을 삭제
            fs.removeSync('./img/skills/' + req.body.imgname);
            //새로 업로드된 파일 이동
            fs.moveSync('./img/' + req.file.filename, './img/skills/' + req.file.filename);
            //새로운 파일을 등록
            fileupload = {
               orimg: req.file.originalname,
               img: req.file.filename
            }
         }
         const skill = {
            name: req.body.name,
            value: req.body.value,
         }
         const skills = await Skills.updateOne({ _id: req.body.id }, {
            ...skill,
            ...fileupload
         });
         console.log(skills);
         res.redirect("/skills/list");
      } catch (err) {
         console.error(err);
         next(err);
      }
   });
router.route('/del')
   .post(async (req, res, next) => {
      try {
         const id = req.body.id;
         const img = req.body.img;
         //파일 삭제
         if (fs.existsSync('./img/skills/' + img)) {
            fs.removeSync('./img/skills/' + img);
         }
         //db 삭제
         const rs = await Skills.deleteOne({ _id: id });
         console.log(rs);
         res.send('1');
      } catch (err) {
         console.error(err);
         next(err);
      }
   });

module.exports = router;