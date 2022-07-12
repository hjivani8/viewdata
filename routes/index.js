var express = require('express');
var router = express.Router();
var users = require('../model/viewschema')

/* GET home page. */
router.post('/getdata', async function(req, res, next) {

    try {

      const user = await view.create(req.body);

      res.status(201).json({
        data
      })
      
    } catch (error) {
      res.json({
        error
      })
    } 

});

router.get('/getdata', async function(req, res, next) {

  console.log(req.body);
  try {

    const user = await users.find(req.body);

    console.log(user);
    res.status(201).json({
      data:user
    })
   
    
  } catch (error) {
      res.send(error.message);
  }

});


router.get('/getdata/:id', async function(req, res, next) {

  console.log(req.params);
  try {

    const user = await users.findById(req.params.id);

    console.log(user);
    res.status(201).json({
      data:user
    })
   
    
  } catch (error) {
      res.send(error.message);
  }

});


module.exports = router;
