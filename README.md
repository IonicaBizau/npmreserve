![](http://i.imgur.com/67mKyws.png)

> # :warning: STOP, LOOK AND LISTEN :construction:
> This project is discontinued and deprecated. By *reserving* NPM packages
> without publishing code, you are violating the NPM terms. For more information
> please refer to [*Acceptable Package Content*](https://docs.npmjs.com/policies/conduct#acceptable-package-content)

# npmreserve
Reserve package names on NPM.

Sometimes I have ideas about new tools to build but I don't have the needed
time to implement them. To be sure that *my idea is reserved* I created this
tiny tool which reserves the name of the package on NPM. :bulb:

## Installation

```sh
$ npm install -g npmreserve
```

### Usage
```sh
$ npmreserve -h
Usage: npmreserve [options]

Options:
  -n, --name <name>          The NPM package name.
  -d, --desc <description>   The NPM package description.
  -o, --other-fields <json>  Other package.json fields you want to include. The
                             input will be parsed as JSON.
  -h, --help                 Displays this help.
  -v, --version              Displays version information.

Examples:
  npmreserve -n 'foo'
  npmreserve -n 'bar' -o "{\"author\": \"`whoami`\"}"

Use this with care. Do not abuse the things too much. Do not spam.

Documentation can be found at https://github.com/IonicaBizau/npmreserve
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
