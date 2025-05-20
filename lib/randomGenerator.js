function* randomNumberGenerator(type = "float", min = 0, max = 100) {
  while (true) {
    if (type === "int") {
      yield Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      yield Math.random() * (max - min) + min;
    }
  }
}

module.exports = { randomNumberGenerator };
