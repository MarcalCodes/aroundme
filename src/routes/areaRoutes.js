import express from 'express'
import * as areaController from "../controllers/areaController.js";

const router = express.Router();

/**
 * GET /area
 */
router.get('/', async (req, res) => {
    const areas = await areaController.getAreas()
    res.json(areas)
})

/**
 * GET /area/:id
 */
router.get('/:id', async (req, res) => {
    await areaController.getArea(req.params.id, res)
})

/**
 * POST /area
 */
router.post('/', async (req, res) => {
    await areaController.createArea(req.body, res)
})

/**
 * GET /area/:id/users
 *
 * Get all the users subscribed to this area
 */
router.get('/:id/users', async (req, res) => {
   await areaController.getAllAreasOfUser(req.params.id, res)
})

/**
 * GET /area/:id/events
 *
 * Get all the events happening to this area
 */
router.get('/:id/events', async (req, res) => {
    return // TODO Ingrid
})




export default router;
