const router = require('express').Router();
const { Location, Cat, Dog, User } = require('../models');
const withAuth = require('../utils/auth');

// get all locations for homepage
router.get('/', async (req, res) => {
  try {
    const dbLocationData = await Location.findAll({
      include: [
        {
          model: Cat,
          attributes: ['filename', 'name'],
        },
      ],
    });

    const locations = dbLocationData.map((location) =>
      location.get({ plain: true })
    );

    res.render('homepage', {
      locations,
      loggedIn: req.session.loggedIn,
      userID: req.session.userID
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get one location, using the custom middleware before allowing the user to access the location
router.get('/location/:id', withAuth, async (req, res) => {
  try {
    const dbLocationData = await Location.findByPk(req.params.id, {
      include: [
        {
          model: Cat,
          attributes: [
            'name',
            'breed',
            'weight',
            'coat_color',
            'arrival_date',
            'filename',
            'id'
          ],
        },
        {
          model: Dog,
          attributes: [
            'name',
            'breed',
            'weight',
            'coat_color',
            'arrival_date',
            'filename',
            'id'
          ],
        },
      ],
    });

    const location = dbLocationData.get({ plain: true });
    res.render('location', { location, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get one cat, using the custom middleware before allowing the user to access the cat
router.get('/cat/:id', withAuth, async (req, res) => {
  try {
    const dbCatData = await Cat.findByPk(req.params.id);

    const cat = dbCatData.get({ plain: true });

    res.render('Kitties', { cat, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get one dog, using the custom middleware before allowing the user to access the dog
router.get('/dog/:id', withAuth, async (req, res) => {
    try {
      const dbDogData = await Dog.findByPk(req.params.id);
  
      const dog = dbDogData.get({ plain: true });
  
      res.render('Doggy', { dog, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // get user, using the custom middleware before allowing the user to access the profile
router.get('/user/:id', withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.params.id);

    const user = dbUserData.get({ plain: true });

    res.render('profile', { user, loggedIn: req.session.loggedIn, userID: req.session.userID });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
