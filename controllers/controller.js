var express = require('express');
var router = express.Router();

router.get('/', function (req, res){
  res.render('index');
});

router.get('/portfolio', function(req, res){
  res.render('portfolioHandle');
});

router.get('/contact', function(req, res){
  res.render('contactHandle');
});

router.get('/about', function(req, res){
  res.render('aboutHandle');
});

router.get('/work1', function(req, res){
  res.render('work1handle');
});

router.get('/work2', function(req, res){
  res.render('work2handle');
});


module.exports = router;

var nodemailer = require('nodemailer');
// create reusable transporter object using the default SMTP transport

// create reusable transport method (opens pool of SMTP connections)
var transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "gerardomestanza23@gmail.com",
        pass: ""
    }
});

router.post('/sendContact', function (req, res) {
  var mailOptions = {
    from:'gerardomestanza23@gmail.com', // sender address
    to: 'gerardomestanza23@gmail.com', // list of receivers
    subject: req.body.firstname + " || " + req.body.gmEmail2, // Subject line
    text: "", // plaintext body
    html: req.body.gmMessage // html body
};
    // burgers.create({ burger_name: req.body.newBurgers }).then(res.redirect('/'));
    transport.sendMail(mailOptions, function(error, info){
      if(error){
        return console.log(error);
      }
      console.log('Message sent: ' + info.response);
    });
    res.redirect('/contact');
});
// send mail with defined transport object
