# Shold

Shold is a lib node js for running linux commands with js.

## Versions
- [1.0.1](https://github.com/LukNasc/shold/tree/1.0.1)

- [1.0.3](https://github.com/LukNasc/shold/tree/1.0.3)
- 
- [1.0.4](https://github.com/LukNasc/shold/tree/1.0.4)

## Changelog
### Adding new functions
- createFile - Write your own commands
- createFile - Write your own commands with custom privileges
## Usage

Start by importing the dependency into the file you want to use it
```js
import * as shold from 'shold';

//or 

const shold = require('shold');
```

After importing, we can now use the functions that the package provides

### createDirectory (mkdir ...)

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
});
```

### changeDirectory (cd ...)
```js
    const result = await shold.changeDirectory("path");

    //or

    const result = await shold.changeDirectory({
        path: "path",
        privileges: {
            user: "user",
            password: "password"
        }
    });
```
### Create files 

```js
    const result = await shold.createFile("nome.txt");

    //or

    const result = await shold.createFile({
        fileNameWithExtension: "nome.txt",
        privileges: {
            user: 'user',
            passowrd: 'password'
        }
    });
```
## All functions below

| functions                | Args                                                 | description                                      |
| ------------------------ | ---------------------------------------------------- | ------------------------------------------------ |
| createDirectory          | paht, name                                           | create a new directory                                 |
| createDirectory          | {name, path, privileges:{user, password}}            | create a new directory with another privileges            |
| changeDirectory          | path                                                 | change directory                                 |
| changeDirectory          | {path, privileges:{user,password}}                   | change directory with another privileges        |
| createFiles              | name.txt (parse file`s name with extension)          | create a file with name passed                   |
| createFiles              | {fileNameWithExtension, privileges:{user, password}} | create a file with name with another privileges |
| rawCommand               | command                                              | write your own commands                          |
| rawCommandWithPrivileges | command, privileges:{user, password}                 | write your own commands with another privileges |
## License

MIT
## Developer
[Lucas Nascimento](https://github.com/LukNasc)