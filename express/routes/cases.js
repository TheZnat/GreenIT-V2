const express = require('express');
const router = express.Router();
const {reviews, postCase, active} = require('../controllers/cases');

/* api/cases/reviews */
router.get('/reviews', reviews);
/* api/cases/postCase */
router.get('/postCase', postCase);
/* api/cases/active/:id */
router.post('/active/:id', active);


module.exports = router;
