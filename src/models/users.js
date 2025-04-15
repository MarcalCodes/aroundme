import prisma from "./prisma.js"

/**
 * Using Raw queries from Prisma.
 * See https://www.prisma.io/docs/orm/prisma-client/using-raw-sql/raw-queries
 */
const insert = async (email, name) =>
    prisma.$executeRaw`INSERT INTO User (email, name)
                       VALUES (${email},);`

const update = async (id, email, name) =>
    prisma.$executeRaw`UPDATE User
                       SET email = ${email},
                           name  = ${name}
                       WHERE id = ${id};`

const remove = async (id) =>
    prisma.$executeRaw`DELETE
                       FROM User
                       WHERE id = ${id};`

const get = (id) =>
    prisma.$queryRaw`SELECT *
                     FROM User
                     WHERE id = ${id};`

const all = () =>
    prisma.$queryRaw`SELECT *
                     FROM User;`


export {
    all,
    get,
    insert,
    update,
    remove,
};
