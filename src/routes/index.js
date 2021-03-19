const router = require('express').Router();
const path = require('path')
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  authenticator: new IamAuthenticator({
    apikey:process.env.API_KEY,
  }),
  serviceUrl: process.env.URL,
});


router.route('/autor').get((req, res) => {
  alumno = `MMM`
  servicio = "Cloud Foundry en IBM Cloud"
  res.json({
    alumno,
    servicio
  });
})


router.route('/').post((req, res) => {
  //Content-Type: application/json
  const toneParams = {
    toneInput: { 'text': req.body.text },
    contentType: 'application/json',
  };
  toneAnalyzer.tone(toneParams)
  .then(toneAnalysis => {
    res.json(toneAnalysis.result);
  })
  .catch(err => {
    console.log('error:', err);
  });
})




module.exports = router;