let config = require("config");
let role = config.get("role");

// Checks if user is allowed to use a command only for Xgamester user
exports.hasPermsXgamester = function(msg) {
    return msg.member.roles.some(r => role.xgamester.includes(r.name));
};

// Checks if user is allowed to use a command only for Support user
exports.hasPermsSupport = function(msg) {
    return msg.member.roles.some(r => role.support.includes(r.name));
};

// Check if command was sent in dm
exports.inPrivate = function(msg) {
    return msg.channel.type == "dm";
};
