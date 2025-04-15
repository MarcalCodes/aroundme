import express from 'express'
import * as userController from "../controllers/userController.js"

const router = express.Router();

/**
 * GET /users
 */
router.get('/', async (req, res) => {
    const users = await userController.getUsers()
    res.json(users)
})

/**
 * GET /users/:id
 */
router.get('/:id', async (req, res) => {
    const user = await userController.getUser(req.params.id)
    if (user) {
        res.json(user)
    } else {
        res.status(404).end()
    }
})

/**
 * POST /users
 */
router.post('/', (req, res) => {
    userController.createUser(req.body, res)
})

/**
 * Update /users/:id
 */
router.put('/:id', (req, res) => {
    userController.updateUser(req.params.id, req.body, res)
})

/**
 * Delete /users/:id
 *
 * "hard delete"
 */
router.delete('/:id', (req, res) => {
    userController.deleteUser(req.params.id, res)
})

/**
 * GET /users/:id/areas
 *
 * Get all area the user is subscribed to
 */
router.get('/:id/areas', (req, res) => {
    return // TODO Ingrid
})

/**
 * GET /users/:id/events
 *
 * Get all events created by the user
 */
router.get('/:id/events', (req, res) => {
    return // TODO Ingrid
})




export default router;
