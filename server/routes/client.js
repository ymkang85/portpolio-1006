const express = require("express");
const Pageinfo = require('../schemas/pageinfo');
const Category = require('../schemas/category');
const Portfolio = require('../schemas/portfolio');
const Skills = require('../schemas/skills');
const Timeline = require('../schemas/timeline');
const router = express.Router();

router.route('/pageinfo/:pagename')
  .get( async (req, res, next) => {
   try{
      const pagename = req.params.pagename;
      const pageinfo = await Pageinfo.findOne({pagename});
      res.send(pageinfo);
   }catch(err){
      console.log(err);
      next(err);
   }
});

router.route('/category')
      .get(async (req, res, next) => {
          const row = await Category.find({});
          res.send(row);
      });
      
router.route('/portfolio')
      .get(async (req, res, next)=> {
          const row = await Portfolio.find();
          res.send(row);
      });

// router.route('/portofolio/:id')      
      
router.route('/skills')      
      .get(async (req, res, next)=>{
          const row = await Skills.find();
          res.send(row);
      });
      
router.route('/timeline')
.get(async (req, res, next)=>{
    const row = await Timeline.find();
    res.send(row);
});
      
module.exports = router;      