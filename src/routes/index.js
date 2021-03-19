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

const text = 'Team, I know that times are tough! Product '
  + 'sales have been disappointing for the past three '
  + 'quarters. We have a competitive product, but we '
  + 'need to do a better job of selling it!';

const toneParams = {
  toneInput: { 'text': text },
  contentType: 'application/json',
};

toneAnalyzer.tone(toneParams)
  .then(toneAnalysis => {
    console.log(JSON.stringify(toneAnalysis, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
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
  console.log(req.body)
})




module.exports = router;