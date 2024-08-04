const express = require('express');
const router = express.Router();
const {reviews, postCase, active, exit} = require('../controllers/cases');

/* api/cases/reviews */
router.get('/reviews', reviews);
/* api/cases/postCase */
router.get('/postCase', postCase);
/* api/cases/active/:id */
router.post('/active/:id', active);
/* api/cases/exit */
router.get('/exit', exit);


module.exports = router;
