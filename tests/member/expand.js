const veryVeryVeryVeryVeryVeryVeryLong = doc.expandedStates[doc.expandedStates.length - 1];
const small = doc.expandedStates[doc.expandedStates.length - 1];

const promises = [
  promise.resolve().then(console.log).catch(err => {
    console.log(err)
    return null
  }),
  redis.fetch(),
  other.fetch(),
];

const promises = [
  promise.resolve().veryLongFunctionCall().veryLongFunctionCall().then(console.log).catch(err => {
    console.log(err)
    return null
  }),
  redis.fetch(),
  other.fetch(),
];
