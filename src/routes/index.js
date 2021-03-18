const router = require('express').Router();
const path = require('path')

router.route('/revisasivivo').get((req, res) => {
    status = `estoy bien`;
    res.json({ status });
  })
  

// path con retorno directo
router.use('/', (req, res) => 
{ 
    res.sendFile(path.join(__dirname+'../../../src/html/index.html'));
}
)



module.exports = router;