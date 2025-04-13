import prisma from "./prisma.js"

/**
 * Using Raw queries from Prisma.
 * See https://www.prisma.io/docs/orm/prisma-client/using-raw-sql/raw-queries
 */
const insert = async (email, name) =>
    prisma.$executeRaw`INSERT INTO User (email, name) VALUES (${email}, ${name});`

const all = () =>
    prisma.$queryRaw`SELECT * FROM User;`

export {
    insert,
    all
};
