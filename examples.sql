-- Get all the subscriptions for a given user ID
SELECT *
FROM Subscription
WHERE userId = ${userId};

-- Get all the Areas a User is subscribed to
SELECT a.*
FROM Subscription as s, Area as a
WHERE
    s.userId = ${userId}
    AND s.areaId = a.id -- joining Subscription and Area tables on Subscription::areaId and Area::id fields
;

-- Get all the Events a User created
SELECT *
FROM Event
WHERE creatorId = ${userId};

-- Get all the Users subscribed to an Area
SELECT u.*
FROM Subscription as s, User as u
WHERE
    s.areaId = ${areaId}
  AND s.userId = u.id -- joining Subscription and User tables on Subscription::userId and User::id fields
;
