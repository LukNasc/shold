# Shold

Shold is a lib node js for running linux commands with js.

## Versions
- [1.0.1](https://github.com/LukNasc/shold/tree/1.0.1)

- [1.0.3](https://github.com/LukNasc/shold/tree/1.0.3)

## Changelog

### Adding new features to existing functions
- Running createDirectory function with privileges
- Running changeDirectory function with privileges

### Adding new functions
- rawCommand - Write your own commands
- rawCommandWithPrivileges - Write your own commands with custom privileges

## Usage

Start by importing the dependency into the file you want to use it
```js
import * as shold from 'shold';

//or 

const shold = require('shold');
```

After importing, we can now use the functions that the package provides

### createDirectory

```js
//Create a directory
const result = await shold.createDirectory("path", "directory name");

//or

//Create a directory with custom privileges
const result = await shold.createDirectory({
    path: "path",
    name: "directory name",
    privileges: {
        user: "User",
        password: "password"
    }
})
```
## License

MIT
## Developer
[Lucas Nascimento](https://github.com/LukNasc)