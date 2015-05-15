// Dependencies
var Tmp = require("tmp")
  , Fs = require("fs")
  , Ul = require("ul")
  , ExecLimiter = require("exec-limiter")
  ;


// Create the exec limiter
var exl = new ExecLimiter(10);

/**
 * NpmReserve
 * Reserves a package name on NPM.
 *
 * @name NpmReserve
 * @function
 * @param {String|Object} options The package name or the package object itself.
 * @param {Function} callback The callback function
 * @return {NpmReserve} The `NpmReserve` function.
 */
function NpmReserve(options, callback) {

    if (typeof options === "string") {
        options = {
            name: options
        };
    }

    options = Ul.merge(options, {
        version: "0.0.0"
      , description: "This package name is reserved."
    });

    // Create a temp dir
    Tmp.dir(function (err, path) {
        if (err) { return callback(err); }

        // Create the package.json file
        Fs.writeFile(path + "/package.json", JSON.stringify(options, null, 2), function (err) {
            if (err) { return callback(err); }

            // Write the readme file
            Fs.writeFile(
                path + "/README.md"
              , "# " + options.name
              + "\n" + options.description
              + "\n\nThis was generated using [`npmreserve`](https://github.com/IonicaBizau/npmreserve)"
              , function (err) {
                if (err) { return callback(err); }
                exl.add("npm publish", { cwd: path }, callback);
            });
        });
    });
}

module.exports = NpmReserve;
