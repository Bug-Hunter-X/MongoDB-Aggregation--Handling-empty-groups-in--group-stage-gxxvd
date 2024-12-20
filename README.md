# MongoDB Aggregation Bug: Empty Groups in $group Stage

This repository demonstrates a common error in MongoDB aggregation pipelines: unexpected behavior when the `$group` stage receives an empty input set.  The bug arises when using operators like `$avg` within the `$group` stage and the aggregation pipeline does not handle the case where no documents match the criteria in the `$match` stage.

The `bug.js` file contains the buggy code, and `bugSolution.js` provides a corrected implementation. The issue is detailed below.