/**
 * Module dependencies.
 */
const bcrypt = require("bcrypt");
const router = require("express").Router();
const dbService = require("./db-service");

// Session-persisted message middleware

router.use(function (req, res, next) {
  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = "";
  if (err) res.locals.message = '<p class="msg error">' + err + "</p>";
  if (msg) res.locals.message = '<p class="msg success">' + msg + "</p>";
  next();
});

// Authenticate using our plain-object database of doom!

async function authenticate(name, pass, fn) {
  if (!module.parent) console.log("authenticating %s:%s", name, pass);
  const sequelize = dbInstance.init();
  const User = dbInstance.userInit(sequelize);
  // query the db for the given username
  try {
    var user = await User.findAll({
      where: {
        username: name,
      },
    });
  } catch (error) {
    return fn(error);
  } finally {
    sequelize.close();
  }
  if (user.length === 0) return fn(new Error("cannot find user"));
  // apply the same algorithm to the POSTed password, applying
  // the hash against the pass / salt, if there is a match we
  // found the user
  user = user[0];
  bcrypt.compare(pass, user.hash, function (err, result) {
    if (err) return fn(err);
    if (result) return fn(null, user);
    fn(new Error("invalid password"));
  });
}

function restrict(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = "Access denied!";
    res.send("login first");
  }
}

router.post("/login", function (req, res) {
  authenticate(req.body.username, req.body.password, function (err, user) {
    if (user) {
      // Regenerate session when signing in
      // to prevent fixation
      req.session.regenerate(function () {
        // Store the user's primary key
        // in the session store to be retrieved,
        // or in this case the entire user object
        req.session.user = user;
        req.session.success = "Authenticated as " + user.name;
        res.send({username: user.username, email: user.email});
      });
    } else {
      req.session.error = err;
      res.send(err);
    }
  });
});

router.post("/create-user", (req, res) => {
  // Instantiate a database Instance
  const sequelize = dbInstance.init();
  const User = dbInstance.userInit(sequelize);
  // Generate a hash from the password
  bcrypt.hash(req.body.password, 10 , async (err, passwordHash) => {
    if (err) throw err;
    try {
      // Check if a user with the username provided is found
      let users = await User.findAll({
        where: {
          username: req.body.username,
        },
      });

      console.log(users);
      // Insert the User data submitted
      // including the hash if the user with a unique username is not found
      if(users.length == 0){
        console.log("Creating User ...")
        await User.create({
          username: req.body.username,
          email: req.body.email,
          hash: passwordHash,
        });
        res.sendStatus(200);
      }else{
        res.sendStatus(200)
        throw new Error("Username taken")
      }
    } catch (error) {
      req.session.error = error
    } finally {
      sequelize.close();
    }
  });
});

module.exports = router;
