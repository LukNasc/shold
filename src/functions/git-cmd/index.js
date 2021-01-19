const dir = require('../directories')
module.exports = {
    async initRepository(repositoryName) {
        //if repository`s name so create a dir with the name
        // or only git init
        if (repositoryName) {
            const result = await dir.createDirectory("./", repositoryName);
            
        } else {

        }
    }
}