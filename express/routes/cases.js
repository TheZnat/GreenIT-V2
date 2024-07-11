const express = require('express');
const router = express.Router();
const {reviews, postCase, active} = require('../controllers/cases');

/* api/cases/reviews */
router.post('/reviews', reviews);
/* api/cases/postCase */
router.post('/postCase', postCase);
/* api/cases/:id/active */
router.post('/:id/active', active);


module.exports = router;
