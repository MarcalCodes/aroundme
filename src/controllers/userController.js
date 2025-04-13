import { insertUser, selectAllUsers } from "../models/user.js"

const getUsers = async () => {
    return selectAllUsers()
}

const createUser = async (data, response) => {
    await insertUser(data.email, data.name)
    response.status(201).end();
}

const updateUser = (req, response) => {
    return
}

const deleteUser = (req, response) => {
    return
}

export {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}
