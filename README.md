@iterativa/cli
=================

The cli manager of the Iterativa ecosystem


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@iterativa/cli.svg)](https://npmjs.org/package/@iterativa/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@iterativa/cli.svg)](https://npmjs.org/package/@iterativa/cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @iterativa/cli
$ iterativa COMMAND
running command...
$ iterativa (--version)
@iterativa/cli/0.0.1 linux-x64 node-v20.18.0
$ iterativa --help [COMMAND]
USAGE
  $ iterativa COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`iterativa hello PERSON`](#iterativa-hello-person)
* [`iterativa hello world`](#iterativa-hello-world)
* [`iterativa help [COMMAND]`](#iterativa-help-command)
* [`iterativa plugins`](#iterativa-plugins)
* [`iterativa plugins add PLUGIN`](#iterativa-plugins-add-plugin)
* [`iterativa plugins:inspect PLUGIN...`](#iterativa-pluginsinspect-plugin)
* [`iterativa plugins install PLUGIN`](#iterativa-plugins-install-plugin)
* [`iterativa plugins link PATH`](#iterativa-plugins-link-path)
* [`iterativa plugins remove [PLUGIN]`](#iterativa-plugins-remove-plugin)
* [`iterativa plugins reset`](#iterativa-plugins-reset)
* [`iterativa plugins uninstall [PLUGIN]`](#iterativa-plugins-uninstall-plugin)
* [`iterativa plugins unlink [PLUGIN]`](#iterativa-plugins-unlink-plugin)
* [`iterativa plugins update`](#iterativa-plugins-update)

## `iterativa hello PERSON`

Say hello

```
USAGE
  $ iterativa hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ iterativa hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/emadridm/iterativa-cli/blob/v0.0.1/src/commands/hello/index.ts)_

## `iterativa hello world`

Say hello world

```
USAGE
  $ iterativa hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ iterativa hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/emadridm/iterativa-cli/blob/v0.0.1/src/commands/hello/world.ts)_

## `iterativa help [COMMAND]`

Display help for iterativa.

```
USAGE
  $ iterativa help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for iterativa.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.18/src/commands/help.ts)_

## `iterativa plugins`

List installed plugins.

```
USAGE
  $ iterativa plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ iterativa plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.21/src/commands/plugins/index.ts)_

## `iterativa plugins add PLUGIN`

Installs a plugin into iterativa.

```
USAGE
  $ iterativa plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into iterativa.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ITERATIVA_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ITERATIVA_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ iterativa plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ iterativa plugins add myplugin

  Install a plugin from a github url.

    $ iterativa plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ iterativa plugins add someuser/someplugin
```

## `iterativa plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ iterativa plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ iterativa plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.21/src/commands/plugins/inspect.ts)_

## `iterativa plugins install PLUGIN`

Installs a plugin into iterativa.

```
USAGE
  $ iterativa plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into iterativa.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ITERATIVA_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ITERATIVA_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ iterativa plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ iterativa plugins install myplugin

  Install a plugin from a github url.

    $ iterativa plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ iterativa plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.21/src/commands/plugins/install.ts)_

## `iterativa plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ iterativa plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ iterativa plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.21/src/commands/plugins/link.ts)_

## `iterativa plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ iterativa plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ iterativa plugins unlink
  $ iterativa plugins remove

EXAMPLES
  $ iterativa plugins remove myplugin
```

## `iterativa plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ iterativa plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.21/src/commands/plugins/reset.ts)_

## `iterativa plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ iterativa plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ iterativa plugins unlink
  $ iterativa plugins remove

EXAMPLES
  $ iterativa plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.21/src/commands/plugins/uninstall.ts)_

## `iterativa plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ iterativa plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ iterativa plugins unlink
  $ iterativa plugins remove

EXAMPLES
  $ iterativa plugins unlink myplugin
```

## `iterativa plugins update`

Update installed plugins.

```
USAGE
  $ iterativa plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.21/src/commands/plugins/update.ts)_
<!-- commandsstop -->
