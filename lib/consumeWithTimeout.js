function consumeWithTimeout(iterator, timeoutSeconds) {
  const endTime = Date.now() + timeoutSeconds * 1000;
  function nextIteration() {
    if (Date.now() >= endTime) {
      console.log("⏱ Time's up. Done.");
      return;
    }
    const { value } = iterator.next();
    console.log("🎲 Random value:", value);
    setTimeout(nextIteration, 500);
  }
  nextIteration();
}

module.exports = { consumeWithTimeout };
