const { exec } = require('child_process');
const { resolve } = require('path');

//Import controllers
const direcories = require("./directories");
const git = require("./git");
const security = require("./security")

/**
 * @description Write owner command
 * @param {string} command 
 */
async function rawCommand(command) {
    return new Promise((resolve, reject) => {
        if (command) {
            exec(command, (error, result, err) => {
                if (!error) {
                    resolve(command);
                } else {
                    reject(result);
                }
            })
        } else {
            reject("Command cannot is empty")
        }
    })
}


async function rawCommandWithPrivileges(cmd, privileges) {
    return new Promise((resolve, reject) => {
        if (cmd) {
            //echo <password> | su <user> -c '<command>'
            const command = security.getPrivillegeCommand(privileges, cmd);
            exec(command, (error, result, err) => {
                if (!error) {
                    resolve(command);
                } else {
                    reject(result);
                }
            })
        } else {
            reject("Command cannot is empty");
        }
    })
}

module.exports = {
    direcories,
    git,
    security,
    rawCommand,
    rawCommandWithPrivileges
}