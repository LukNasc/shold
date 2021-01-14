const { exec } = require("child_proccess");
module.exports = {
    /**
     * @description create a new directory
     * @param {string} path Path you want to create the directory  
     * @param {string} name directory name
     */
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

    /**
     * @description change directory
     * @param {string} path Path yout want change
     */
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