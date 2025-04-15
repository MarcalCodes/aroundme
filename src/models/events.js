import prisma from "./prisma.js"

/**
 * Using Raw queries from Prisma.
 * See https://www.prisma.io/docs/orm/prisma-client/using-raw-sql/raw-queries
 */
const insert = async (name, startsAt, endsAt, creatorId, areaId) =>
    prisma.$executeRaw`INSERT INTO Event (name, startsAt, endsAt, creatorId, areaId)
                       VALUES (${name}, ${startsAt}, ${endsAt}, ${creatorId}, ${areaId});`

const update = async (id, name, startsAt, endsAt, creatorId, areaId) =>
    prisma.$executeRaw`UPDATE Event
                       SET name  = ${name},
                           startsAt = ${startsAt},
                           endsAt = ${endsAt},
                           creatorId = ${creatorId},
                           areaId = ${areaId},
                           updatedAt = ${new Date()}
                       WHERE id = ${id};`

const softDelete = async (id) =>
    prisma.$executeRaw`UPDATE Event
                       SET deletedAt = ${new Date()},
                           updatedAt = ${new Date()}
                       WHERE id = ${id};`

const get = async(id) =>
    prisma.$queryRaw`SELECT *
                     FROM Event
                     WHERE id = ${id};`

export {
    get,
    insert,
    update,
    softDelete,
};
