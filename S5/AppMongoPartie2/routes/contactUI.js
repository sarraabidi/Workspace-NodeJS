var express = require('express');
var router = express.Router();
var Contact = require('../models/contact');

/* GET all contacts. */
router.get('/', function(req, res, next) {
  Contact.find(
	  function(err, data){
      if (err){
      console.log(err)
	  }else {
	  res.render('show',{users: data})
	  }
      })
   
});


//get 1 contact
router.get('/:id', function(req, res, next){
	Contact.findById(req.params.id, 
		function(err, data){
		if (err){
		console.log(err)
		}else {
		res.render('detail' , {user: data})
		}
		})
	 
  });

      
/* POST */
router.post('/', function(req,res,next) {
	var user = new Contact(
		{FullName:"Sarra slimen", Phone:230000}
		);
	user.save();
	res.send("Added");
});
/* POST 2*/
router.post('/add', function(req,res,next) {
	new Contact(
		{FullName:req.body.FullName, 
		 Phone:req.body.Phone}
		).save();
	res.send("Added");
});

/* modifier contact*/
router.put('edit/contact/:id', function(req,res,next){
	Contact.findById(req.params.id, 
		function(err, data){
		if (err){
		console.log(err)
		}else {
		res.render('editContact' , {user: data})
		}
		})
	 
  });

/* Delete contact*/
router.post('/delete/:id', function(req,res,next){
	Contact.findById(req.params.id, 
		function(err, data){
		if (err){
		console.log(err)
		}else {
		res.render('detail' , {user: data})
		}
		})
	 
  })


module.exports = router;