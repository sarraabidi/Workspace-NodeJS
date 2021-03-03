var express = require('express');
var router = express.Router();
var os = require('os');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
hostname: os.hostname(),
type: os.type()

  }

  );
});

router.get('/cpus', function(req,res,next){

    var cpus=os.cpus();
    res.send(cpus);
    for (var ndex = 0, len=cpus.length; ndex<len; ndex++) {
        console.log("CPU:", cpus[ndex].model);
        
    }
})
router.get('/cpus/:id',function (req,res) {
  res.json(os.cpus()[req.params.id]);  
})
module.exports = router;
