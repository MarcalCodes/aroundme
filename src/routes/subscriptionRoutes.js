import express from 'express'

const router = express.Router();

/**
 * POST /subscriptions
 *
 * A user subscribe to an Area
 */
router.post('/', async (req, res) => {
    return // TODO Ingrid
})

/**
 * Delete /subscriptions/:id
 *
 * A user remove its subscription to an Area - "hard delete"
 */
router.delete('/:id', async (req, res) => {
    return // TODO Ingrid
})

export default router;
