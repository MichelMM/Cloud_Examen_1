const router = require('express').Router();
const path = require('path')

router.route('/autor').get((req, res) => {
  alumno = `MMM`
  servicio = "Cloud Foundry en IBM Cloud"
  res.json({
    alumno,
    servicio
  });
})


// path con retorno directo

router.route('/').post((req, res) => {
  //Content-Type: application/json
  console.log(req.body)
})




module.exports = router;