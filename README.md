# Poločas nápadu

[![Actions](https://github.com/just-paja/polocas-napadu-web/workflows/Continuous%20integration/badge.svg?branch=master)](https://github.com/just-paja/polocas-napadu-web/actions)
![Code coverage](https://img.shields.io/codeclimate/coverage/just-paja/polocas-napadu-web.svg)
![Code issues](https://img.shields.io/codeclimate/issues/just-paja/polocas-napadu-web.svg)
![Maintainability](https://img.shields.io/codeclimate/maintainability/just-paja/polocas-napadu-web.svg)
![Technical debt](https://img.shields.io/codeclimate/tech-debt/just-paja/polocas-napadu-web.svg)

Web and browser applications of Czech theatre improvisation group [Poločas nápadu](https://polocas-napadu.cz). Se [packages](https://github.com/just-paja/polocas-napadu-web/tree/master/packages) to explore the projects.

> We improve the world of theatre improvisation offline and online

## Dependencies

You will also require project [polocas-napadu-api](https://github.com/just-paja/polocas-napadu-api) to have a working database to connect to.

## Running

First install the dependencies.

```shell
npm ci
```

Then run all the projects.

```shell
npm run dev
```

## Testing

One time tests

```shell
npm test
```

TDD, watch tests

```shell
npm test -- --watch
```

