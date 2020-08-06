const assert = require("assert");
const _ = require("lodash");

const { calculateNotes } = require("./util.js");

const supportedDenominations = [10, 50, 100, 200, 500, 1000];

assert(_.isEqual(calculateNotes(500, supportedDenominations), { 500: 1 }));

assert(
  _.isEqual(calculateNotes(570, supportedDenominations), {
    500: 1,
    50: 1,
    10: 2,
  })
);

assert(
  _.isEqual(calculateNotes(280, supportedDenominations), {
    200: 1,
    50: 1,
    10: 3,
  })
);
