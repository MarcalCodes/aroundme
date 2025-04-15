import * as Users from "../models/users.js"
import * as Areas from "../models/areas.js"

const getUsers = async () => {
    return Users.all()
}

const getUser = async (id, res) => {
    const user = await Users.get(id)
    if (user) {
        res.json(user)
    } else {
        res.status(404).end()
    }
}

const createUser = async (data, res) => {
    await Users.insert(data.email, data.name)
    res.status(201).end();
}

const updateUser = async (id, data, res) => {
    await Users.update(id, data.email, data.name)
    res.status(200).end();
}

const deleteUser = async (id, res) => {
    await Users.remove(id)
    res.status(200).end();
}

const allAreasOfUser = async (id, res) => {
    const areas = await Areas.getAllAreasOfUser(id)
    res.json(areas)
}

export {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    allAreasOfUser,
}
