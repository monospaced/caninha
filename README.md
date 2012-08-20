# Caninha

A templating engine for [twee/twine](http://gimcrackd.com/etc/src/).

Fork of [tweecode/sugarcane](https://github.com/tweecode/sugarcane) with the following adjustments:

* Uses [grunt](https://github.com/cowboy/grunt) to build header.html
* Javascript: [linted](http://www.jshint.com/) and [strict mode](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode)
* CSS: [normalize](http://necolas.github.com/normalize.css/) + custom theme

## Usage

You can try out Caninha by overwriting `header.html` in `/targets/sugarcane/` with [caninha/header.html](https://github.com/monospaced/caninha/blob/master/header.html). The Sugarcane Story Format option will then output to Caninha. In case you need to restore to Sugarcane, here’s the original [sugarcane/header.html](https://github.com/tweecode/jonah/blob/master/header.html).