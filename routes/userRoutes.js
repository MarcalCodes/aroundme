const express = require("express");

const router = express.Router();

/**
 * GET /users
 */
router.get('/', (request, response) => {
    response.send('To implement')
})

/**
 * POST /users
 */
router.post('/', (request, response) => {
    response.send('To implement')
})

module.exports = router;
