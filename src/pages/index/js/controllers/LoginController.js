/**
 * Created by WangMing on 16/1/11.
 */
var main = require('../main');
main.controller('LoginController', LoginController);

function LoginController(doAjax) {
    this.test = "你好!";
}