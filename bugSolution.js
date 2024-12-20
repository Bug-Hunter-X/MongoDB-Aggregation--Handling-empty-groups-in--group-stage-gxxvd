```javascript
// Solution using $ifNull to handle empty groups
db.users.aggregate([
  {
    $match: {
      // Your matching criteria
      age: { $gt: 25 }
    }
  },
  {
    $group: {
      _id: "$city",
      averageAge: {
        $avg: "$age"
      },
      totalCount: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 1,
      averageAge: { $ifNull: [ "$averageAge", 0 ] },
      totalCount: 1
    }
  }
]);
```