function getSuiteName (pack, specifier) {
  return `${pack.name.replace('polocas-napadu-', '')} ${specifier}`
}

module.exports = {
  getSuiteName
}
