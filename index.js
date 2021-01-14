const functions = require("./src/functions/")
module.exports = {
    createDirectory: functions.direcories.createDirectory,
    changeDirectory: functions.direcories.changeDirectory,
    rawCommand: functions.rawCommand,
    rawCommandWithPrivileges: functions.rawCommandWithPrivileges
}