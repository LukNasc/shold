module.exports = {
    /**
     * @description return a privilege string
     * @param {{user, password}} privileges User and password privilege
     * @param {string} command command you want running with permissions
     * @returns {string} return string to running with privileges
     */
    getPrivillegeCommand(privileges, command) {
        //echo <password> | su <user> -c '<command>';
        return "echo " + privileges.password + " | su " + privileges.user + " -c '"+command+"'";
    },
}