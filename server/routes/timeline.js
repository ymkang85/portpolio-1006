const express = require('express');
const Timeline = require('../schemas/timeline');
const upload = require('../upload');
const fs = require('fs-extra');

const router = express.Router();
router.route('/list')
  .get(async (req, res, next) => {
    try {
      const row = await Timeline.find({});
      res.render('timeline', { row, title: "나의 타임라인" });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.route('/write')
  .get((req, res, next) => {
    res.render('timeline_write', { title: "나의 타임라인" });
  })
  .post(upload.single("img"), async (req, res, next) => {
    try {
      var fileupload = '';
      if (req.file) {
        fs.moveSync('./img/' + req.file.filename, './img/timeline/' + req.file.filename);
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
      const timeline = await Timeline.create({ ...data, ...fileupload });
      console.log(timeline);
      res.redirect('/timeline/list');
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.route('/edit/:id')
  .get(async (req, res, next) => {
    try {
      const { id } = req.params;
      const row = await Timeline.find({ _id: id });
      const rs = row[0];
      res.render('timeline_update', { rs, title: '타임라인 수정' });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.route("/edit")
  .post(upload.single("img"), async (req, res, next) => {
    const { jobtitle, where, wdate } = req.body;
    console.log(jobtitle, where, wdate);
    try {
      let fileupload = {};
      if (req.body.imgchk == 1) {
        //기존 파일 삭제
        fs.removeSync('./img/timeline/' + req.file.filename);
        //업로드된 파일 이동
        if (req.file) {
          fs.moveSync('./img/' + req.file.filename, './img/timeline/' + req.file.filename);
          //새로운 파일을 등록
          fileupload = {
            orimg: req.file.originalname,
            img: req.file.filename
          }
        } else {
          fileupload = {
            orimg: "",
            img: ""
          }
        }
        const timelines = {
          jobtitle: jobtitle,
          where: where,
          wdate: wdate
        }
        const timeline = await Timeline.updateOne({ _id: req.body.id }, {
          ...timelines,
          ...fileupload
        });
        console.log(timeline);
        res.redirect('/timeline/list');
      }
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
      if (fs.existsSync('./img/timeline/' + img)) {
        fs.removeSync('./img/timeline/' + img);
      }
      //db 삭제
      const rs = await Timeline.deleteOne({ _id: id });
      console.log(rs);
      res.send('1');
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;