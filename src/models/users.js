import prisma from "./prisma.js"

/**
 * Using Raw queries from Prisma.
 * See https://www.prisma.io/docs/orm/prisma-client/using-raw-sql/raw-queries
 */
const insert = async (email, name) =>
    prisma.$executeRaw`INSERT INTO User (email, name)
                       VALUES (${email}, ${name});`

const update = async (id, email, name) =>
    prisma.$executeRaw`UPDATE User
                       SET email = ${email},
                           name  = ${name},
                           updatedAt = ${new Date()}
                       WHERE id = ${id};`

const remove = async (id) =>
    prisma.$executeRaw`DELETE
                       FROM User
                       WHERE id = ${id};`

const get = async (id) =>
    prisma.$queryRaw`SELECT *
                     FROM User
                     WHERE id = ${id};`

const all = async () =>
    prisma.$queryRaw`SELECT *
                     FROM User;`


export {
    all,
    get,
    insert,
    update,
    remove,
};
