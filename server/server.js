/* eslint-disable eqeqeq */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(require("cookie-parser")());

const config = require("./config");
const port = config.port;
app.use(
  require("express-session")({
    secret: "somesecret",
    resave: false,
    saveUninitialized: false,
  })
);

let passport = require("passport");
let Strategy = require("passport-twitter").Strategy;
const Twit = require("twit");

var trustProxy = false;
passport.use(
  new Strategy(
    {
      consumerKey: config.twitterConsumerKey,
      consumerSecret: config.twitterConsumerKeySecret,
      callbackURL: "http://localhost:8085/twitter/callback",
      proxy: trustProxy,
    },
    function (token, tokenSecret, profile, cb) {
      profile.token = token;
      profile.tokenSecret = tokenSecret;
      return cb(null, profile);
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

app.use(passport.initialize());
app.use(passport.session({ secret: "Shhh" }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.get("/login", passport.authenticate("twitter"));

app.get(
  "/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.post("/api/tweet", (req, res) => {
  if (req.session["passport"] === undefined) {
    res.json({
      code: 404,
      message: "User not loged in",
    });
  } else {
    createTwitObject(
      req.session.passport.user.token,
      req.session.passport.user.tokenSecret
    ).post(
      "statuses/update",
      { status: req.body.status },
      (err, data, response) => {
        console.log("success (:");
      }
    );

    res.json({
      message: "Successfully tweeted",
    });
  }
});

app.get("*", (req, res) => {
  console.log(JSON.stringify(req.session), "  session");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port);

function createTwitObject(token, tokenSecret) {
  return new Twit({
    consumer_key: config.twitterConsumerKey,
    consumer_secret: config.twitterConsumerKeySecret,
    access_token: token,
    access_token_secret: tokenSecret,
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    strictSSL: false, // optional - requires SSL certificates to be valid.
  });
}
