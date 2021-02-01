const Strings = require("../../util/Strings")

import { exec } from 'child_process';
module.exports = {
    /**
     * @description create a file with name choosed
     * @param {string} nameWithExtension  name with extension ex: name.txt
     */
    async createFile(nameWithExtension) {
        return new Promise((resolve, reject) => {
            if (nameWithExtension) {
                // touch <name.txt>
                const command = `touch ${nameWithExtension}`
                exec(commadn, (error, stdout, stderr) => {
                    if (!error) {
                        resolve({
                            error: false,
                            command,
                            message: Strings.files.successful_create_file
                        })
                    } else {
                        reject({
                            error: true,
                            command,
                            message: error
                        })
                    }
                });
            } else {
                reject({
                    error: true,
                    command,
                    message: Strings.files.empty_name_file
                })
            }
        })
    },

    /**
   * @description create a file with name choosed
   * @param {{ fileNameWithExtension: string, privileges:{user: string, password: string}}} options 
   */
    async createFile(options) {
        //echo <password> | su <user> -c 'touch <name.txt>';
        // or
        // touch <name.txt>
        const command = oprions.privileges ?
            getPrivillegeCommand(options.privileges, "touch " + options.name)
            : "touch " + options.name;

        return new Promise((resolve, reject) => {
            if (options.fileNameWithExtension) {
                exec(command, (error, stdout, stderr) => {
                    if (!error) {
                        resolve({
                            error: false,
                            command,
                            message: Strings.files.successful_create_file
                        })
                    } else {
                        reject({
                            error: true,
                            command,
                            message: error
                        })
                    }
                });
            } else {
                reject({
                    error: true,
                    command,
                    message: Strings.files.empty_name_file
                })
            }
        })
    }
}