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
 * POST /users
 */
router.post('/', (req, res) => {
    userController.createUser(req.body, res)
})

export default router;
