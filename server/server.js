const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('cookie-parser')())

const config = require('./config');
const port = config.port;
app.use(require('express-session')({ secret: 'somesecret', resave: false, saveUninitialized: false}));

let passport = require('passport');
let Strategy = require('passport-twitter').Strategy;

var trustProxy = false;
passport.use(new Strategy({
  consumerKey: config.twitterConsumerKey,
  consumerSecret: config.twitterConsumerKeySecret,
  callbackURL: 'http://localhost:8085/twitter/callback',
  proxy: trustProxy
},
function(token, tokenSecret, profile, cb) {
  console.log({...profile}, "  PROFILE------------")
  return cb(null, profile);
}));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.use(passport.initialize());
app.use(passport.session({ secret: 'Shhh'}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/login',
  passport.authenticate('twitter'));

app.get('/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/' }),
  function(req, res) {
    console.log(res, "  odgovor")
    res.redirect('/');
  });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port);