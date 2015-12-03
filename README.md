[![npmreserve](http://i.imgur.com/67mKyws.png)](#)

# `$ npmreserve` [![Support this project][donate-now]][paypal-donations]

Reserve package names on NPM.

> # :warning: STOP, LOOK AND LISTEN :construction:
> This project is discontinued and deprecated. By *reserving* NPM packages
> without publishing code, you are violating the NPM terms. For more information
> please refer to [*Acceptable Package Content*](https://docs.npmjs.com/policies/conduct#acceptable-package-content)

Sometimes I have ideas about new tools to build but I don't have the needed
time to implement them. To be sure that *my idea is reserved* I created this
tiny tool which reserves the name of the package on NPM. :bulb:

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g npmreserve
```

Then, run `npmreserve --help` and see what the CLI tool can do.

```sh
$ npmreserve --help
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

## Example

Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save npmreserve
```

```js
// Dependencies
var NpmReserve = require("npmreserve");

console.log("Reserving...");
NpmReserve("aaaaa", function (err) {
    console.log(err || "Reserved.");
});
```

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md