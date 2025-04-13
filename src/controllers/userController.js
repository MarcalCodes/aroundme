import * as Users from "../models/users.js"

const getUsers = async () => {
    return Users.all()
}

const createUser = async (data, response) => {
    await Users.insert(data.email, data.name)
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
