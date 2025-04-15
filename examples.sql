-- Get all the subscriptions for a given user ID
SELECT *
FROM Subscription
WHERE userId = ${id};

-- Get all the Areas a users is subscribed to
SELECT a.*
FROM Subscription as s, Area as a
WHERE
    s.userId = ${id}
    AND s.areaId = a.id -- joining Subscription and Area tables on Subscription::areaId and Area::id fields
;