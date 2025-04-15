import * as Users from "../models/users.js"

const getUsers = async () => {
    return Users.all()
}

const getUser = async (id) => {
    return // TODO Ingrid
}

const createUser = async (data, res) => {
    await Users.insert(data.email, data.name)
    res.status(201).end();
}

const updateUser = (id, data, res) => {
    return // TODO Ingrid
}

const deleteUser = (id, res) => {
    return // TODO Ingrid
}

export {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
