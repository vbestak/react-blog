function twitter(express) {
  const config = require("../../config");
  let router = express.Router();

  var consumer_key = config.twitterApiKey;
  var consumer_secret = config.twitterApiKeySecret;

  const session = require("express-session");
  app.use(
    session({
      secret: "",
      resave: true,
      saveUninitialized: true,
    })
  );

  const passport = require("passport");
  const strategy = require("passport-twitter").Strategy;

  passport.use(
    new strategy(
      {
        consumerKey: "",
        consumerSecret: "",
        callbackURL: "http://localhost:8085/twitter/return",
      },
      (token, tokenSecret, profile, callback) => {
        console.log("token " + token);
        console.log("tokenSecret " + tokenSecret);
        return callback(null, profile);
      }
    )
  );

  passport.serializeUser((user, callback) => {
    callback(null, user);
  });

  passport.deserializeUser((obj, callback) => {
    callback(null, obj);
  });

  app.use(passport.initialize());
  app.use(passport.session());

  const get = require("./api/v1/get");
  app.use("/get", get);

  app.get("/twitter/login", passport.authenticate("twitter"));
  app.get(
    "/twitter/return",
    passport.authenticate("twitter", { failureRedirect: "/get" }),
    (req, res) => {
      res.redirect("/get");
    }
  );

  return router;
}

module.exports = twitter;
