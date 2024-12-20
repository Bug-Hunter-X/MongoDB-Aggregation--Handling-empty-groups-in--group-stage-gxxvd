```javascript
// Assuming you have a MongoDB collection named 'users'

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
      averageAge: { $avg: "$age" },
      totalCount: { $sum: 1 }
    }
  }
]);
```