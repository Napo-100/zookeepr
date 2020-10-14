const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zooKeeperRoutes = require('../apiRoutes/zookeeperRoutes');

router.use(animalRoutes);
router.use(zooKeeperRoutes);

module.exports = router;