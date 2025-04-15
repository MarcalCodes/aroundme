import * as Areas from "../models/areas.js"
import * as Users from "../models/users.js"

const getAreas = async () => {
    return Areas.all()
}

const getArea = async (id, res) => {
    const area = await Areas.get(id)
    if (area) {
        res.json(area)
    } else {
        res.status(404).end()
    }
}

const createArea = async (data, res) => {
    await Areas.insert(data.postcode)
    res.status(201).end();
}

const getAllAreasOfUser = async (id, res) => {
    const users = await Users.getUsersByAreaSubscription(id)
    res.json(users)
}

export {
    getAreas,
    getArea,
    createArea,
    getAllAreasOfUser,
}
