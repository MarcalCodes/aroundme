import express from 'express'
import * as userController from "../controllers/userController.js"

const router = express.Router();

/**
 * GET /area
 */
router.get('/', async (req, res) => {
    return // TODO Ingrid
})

/**
 * GET /area/:id
 */
router.get('/:id', async (req, res) => {
    return // TODO Ingrid
})

/**
 * POST /area
 */
router.post('/', async (req, res) => {
    return // TODO Ingrid
})

/**
 * GET /area/:id/users
 *
 * Get all the users subscribed to this area
 */
router.get('/:id/area', async (req, res) => {
    return // TODO Ingrid
})

/**
 * GET /area/:id/events
 *
 * Get all the events happening to this area
 */
router.get('/:id/area', async (req, res) => {
    return // TODO Ingrid
})




export default router;
