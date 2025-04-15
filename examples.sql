-- Get all the subscriptions for a given user ID
SELECT *
FROM Subscription
WHERE userId = ${userId};

-- Get all the Areas a user is subscribed to
SELECT a.*
FROM Subscription as s, Area as a
WHERE
    s.userId = ${userId}
    AND s.areaId = a.id -- joining Subscription and Area tables on Subscription::areaId and Area::id fields
;

-- Get all the Events a user created
SELECT *
FROM Event
WHERE creatorId = ${userId}
