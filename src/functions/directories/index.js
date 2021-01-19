const { exec } = require("child_process");
const Strings = require("../../util/Strings");
const { getPrivillegeCommand } = require("../security");
module.exports = {
    /**
     * @description create a new directory
     * @param {string} path Path you want to create the directory  
     * @param {string} name directory name
     */
    async createDirectory(path = "./", name) {
        //mkdir <path>/<name>
        const command = "mkdir " + path + "/" + name;
        return new Promise((resolve, reject) => {
            if (name) {
                exec(command, (error, result, err) => {
                    if (!error) {
                        resolve({
                            error: true,
                            command,
                            message: Strings.directory.successful_created_directory
                        });
                    } else {
                        reject({
                            error: true,
                            command,
                            message: error
                        });
                    }
                })
            } else {
                reject({
                    error: true,
                    command,
                    message: Strings.directory.empty_directory_name
                })
            }
        })
    },

    /**
    * @description create a new directory
    * @param {{path: string, name: string, privileges:{user: string, password: string}}} options 
    */
    async createDirectory(options) {
        //echo <password> | su <user> -c 'mkdir <path>/<name>';
        // or
        // mkdir <path>/<name>
        const command = oprions.privileges ?
            getPrivillegeCommand(options.privileges, "mkdir " + options.path + "/" + options.name)
            : "mkdir " + options.path + "/" + options.name;

        return new Promise((resolve, reject) => {
            if (options.name) {
                exec(command, (error, result, err) => {
                    if (!error) {
                        resolve({
                            error: false,
                            command,
                            message: Strings.directory.successful_created_directory
                        });
                    } else {
                        reject({
                            error: true,
                            command,
                            message: error
                        });
                    }
                })
            } else {
                reject({
                    error: true,
                    command,
                    message: Strings.directory.empty_directory_name
                })
            }
        })
    },

    /**
     * @description change directory
     * @param {string} path Path you want change
     */
    async changeDirectory(path) {
        //cd <path>
        const command = "cd " + path;
        return new Promise((resolve, reject) => {
            if (path) {
                exec(command, (error, result, err) => {
                    if (!error) {
                        resolve({
                            error: false,
                            command,
                            message: Strings.directory.successful_change_directory
                        });
                    } else {
                        reject({
                            error: true,
                            command,
                            message: error
                        });
                    }
                })
            } else {
                reject({
                    error: true,
                    command,
                    message: Strings.directory.empty_directory_path
                })
            }
        })
    },

    /**
     * @description change directory
     * @param {{path, privileges:{user: string, password:string}}} options 
     */
    async changeDirectory(options) {
        //echo <password> | su <user> -c 'cd <path>';
        // or
        // cd <path>
        const command = options.privileges ?
            getPrivillegeCommand(options.privileges, "cd " + options.path)
            : "cd " + options.path;

        return new Promise((resolve, reject) => {
            if (options.path) {
                exec(command, (error, result, err) => {
                    if (!error) {
                        resolve({
                            error: false,
                            command,
                            message: Strings.directory.successful_change_directory
                        });
                    } else {
                        reject({
                            error: true,
                            command,
                            message: error
                        });
                    }
                })
            } else {
                reject({
                    error: true,
                    command,
                    message: Strings.directory.empty_directory_path
                })
            }
        })
    },

}