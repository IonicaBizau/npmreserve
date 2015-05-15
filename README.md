![](http://i.imgur.com/67mKyws.png)

# npmreserve
Reserve package names on NPM.

Sometimes I hit an idea regarding to a new tool and to be sure that nobody
takes it before me I created `npmreserve` – a tool for reserving package names on NPM.

## Installation

```sh
$ npm install -g npmreserve
```

## Documentation
### `NpmReserve(options, callback)`
Reserves a package name on NPM.

#### Params
- **String|Object** `options`: The package name or the package object itself.
- **Function** `callback`: The callback function

#### Return
- **NpmReserve** The `NpmReserve` function.

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
