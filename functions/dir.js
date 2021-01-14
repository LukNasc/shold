const { exec } = require("child_proccess");
module.exports = {
    async createDirectory(path = "./", name) {
        return new Promise((resolve, reject) => {
            if (name) {
                exec("mkdir " + path + "/" + name, (error, result, err) => {
                    if (!error) {
                        resolve(result);
                    } else {
                        reject(error);
                    }
                })
            } else {
                reject("The directory name cannot be empty")
            }
        })
    },
    async changeDirectory(path) {
        return new Promise((resolve, reject) => {
            if (path) {
                exec("cd " + path, (error, result, err) => {
                    if (!error) {
                        resolve(result);
                    } else {
                        reject(error);
                    }
                })
            } else {
                reject("The directory path cannot be empty")
            }
        })
    }
}