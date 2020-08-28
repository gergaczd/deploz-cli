deploz-cli
==========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/deploz-cli.svg)](https://npmjs.org/package/deploz-cli)
[![Downloads/week](https://img.shields.io/npm/dw/deploz-cli.svg)](https://npmjs.org/package/deploz-cli)
[![License](https://img.shields.io/npm/l/deploz-cli.svg)](https://github.com/gergaczd/deploz-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g deploz-cli
$ deploz COMMAND
running command...
$ deploz (-v|--version|version)
deploz-cli/0.0.2 darwin-x64 node-v13.13.0
$ deploz --help [COMMAND]
USAGE
  $ deploz COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`deploz autocomplete [SHELL]`](#deploz-autocomplete-shell)
* [`deploz client`](#deploz-client)
* [`deploz help [COMMAND]`](#deploz-help-command)
* [`deploz repo`](#deploz-repo)
* [`deploz repo:add TYPE`](#deploz-repoadd-type)
* [`deploz repo:list`](#deploz-repolist)
* [`deploz repo:remove`](#deploz-reporemove)
* [`deploz service`](#deploz-service)
* [`deploz update [CHANNEL]`](#deploz-update-channel)

## `deploz autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ deploz autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ deploz autocomplete
  $ deploz autocomplete bash
  $ deploz autocomplete zsh
  $ deploz autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.2.0/src/commands/autocomplete/index.ts)_

## `deploz client`

Deploys a client app to production. It uses a defined branch as the state of the production app

```
USAGE
  $ deploz client

OPTIONS
  -b, --branch=branch  [default: production] Define the branch name that you want to use as your production branch
  -c, --commit         Use if you want to deploy for a specific commit, otherwise it will be the last commit
  -h, --help           show CLI help
  -l, --limit=limit    [default: 10] Define how many commits you want to choose from

  -p, --path=path      [default: /Users/dgergacz/workspace/deploz-cli] Use a path where your repository is checked out
                       that you want to deploy, otherwise it will be the current one
```

_See code: [src/commands/client.ts](https://github.com/gergaczd/deploz-cli/blob/v0.0.2/src/commands/client.ts)_

## `deploz help [COMMAND]`

display help for deploz

```
USAGE
  $ deploz help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `deploz repo`

Manages and deploys predefined repositories

```
USAGE
  $ deploz repo

OPTIONS
  -c, --commit       Use if you want to deploy for a specific commit, otherwise it will be the last commit
  -h, --help         show CLI help
  -l, --limit=limit  [default: 10] Define how many commits you want to choose from
```

_See code: [src/commands/repo/index.ts](https://github.com/gergaczd/deploz-cli/blob/v0.0.2/src/commands/repo/index.ts)_

## `deploz repo:add TYPE`

Adds a repository

```
USAGE
  $ deploz repo:add TYPE

ARGUMENTS
  TYPE  (service|client) Define the type of the repository, it specifies how it will be deployed

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/repo/add.ts](https://github.com/gergaczd/deploz-cli/blob/v0.0.2/src/commands/repo/add.ts)_

## `deploz repo:list`

Lists the added repositories

```
USAGE
  $ deploz repo:list
```

_See code: [src/commands/repo/list.ts](https://github.com/gergaczd/deploz-cli/blob/v0.0.2/src/commands/repo/list.ts)_

## `deploz repo:remove`

Removes a repository

```
USAGE
  $ deploz repo:remove

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/repo/remove.ts](https://github.com/gergaczd/deploz-cli/blob/v0.0.2/src/commands/repo/remove.ts)_

## `deploz service`

Deploys a service app to production. It creates an incremental tag for the selected commit based in the tag prefix given

```
USAGE
  $ deploz service

OPTIONS
  -c, --commit       Use if you want to deploy for a specific commit, otherwise it will be the last commit
  -h, --help         show CLI help
  -l, --limit=limit  [default: 10] Define how many commits you want to choose from

  -p, --path=path    [default: /Users/dgergacz/workspace/deploz-cli] Use a path where your repository is checked out
                     that you want to deploy, otherwise it will be the current one

  -t, --tag=tag      [default: release-production] Define the tag prefix that you want to use as the prefix for your
                     production deploys
```

_See code: [src/commands/service.ts](https://github.com/gergaczd/deploz-cli/blob/v0.0.2/src/commands/service.ts)_

## `deploz update [CHANNEL]`

update the deploz CLI

```
USAGE
  $ deploz update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.10/src/commands/update.ts)_
<!-- commandsstop -->
