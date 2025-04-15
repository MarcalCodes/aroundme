import express from 'express'

const router = express.Router();

/**
 * GET /events/:id
 *
 * Get the details of a particular event
 */
router.get('/:id', async (req, res) => {
    return // TODO Ingrid
})

/**
 * POST /events
 *
 * Create a new event
 */
router.post('/', (req, res) => {
    return // TODO Ingrid
})

/**
 * Update /events/:id
 *
 * Update an existing event
 */
router.put('/:id', (req, res) => {
    return // TODO Ingrid
})

/**
 * Delete /events/:id
 *
 * Cancel an event - will do a "soft delete" in DB
 */
router.delete('/:id', (req, res) => {
    return // TODO Ingrid
})

export default router;
