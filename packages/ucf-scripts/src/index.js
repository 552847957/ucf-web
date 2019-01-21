/* ucf start server
 * @Author: Kvkens(yueming@yonyou.com)
 * @Date:   2019-01-21 13:02:27
 * @Last Modified by:   Kvkens
 * @Last Modified time: 2019-01-21 13:02:35
 */

const argv = require("minimist")(process.argv.slice(2));
const commands = argv._;
const util = require('./util');

try {
    require(`./${commands[0]}`).plugin();
} catch (error) {
    util.errorLog(error, '', true);
}
