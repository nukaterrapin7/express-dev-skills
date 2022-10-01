var express = require('express');
const skills = require('../controllers/skills');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

/* GET skills listing. */
// All actual paths start with "/skills"


router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:skill', skillsCtrl.delete);
router.get('/:skill/edit', skillsCtrl.edit);
router.put('/:skill', skillsCtrl.update)

module.exports = router;
