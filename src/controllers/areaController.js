import * as Areas from "../models/areas.js"

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

export {
    getAreas,
    getArea,
    createArea,
}
