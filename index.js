var Checker = require('jscs');

function JSCSChecker(config) {
  this.option = config.plugins && config.plugins.JSCS || {};
}


JSCSChecker.prototype.brunchPlugin = true;
JSCSChecker.prototype.type = 'javascript';
JSCSChecker.prototype.extension = 'js';

JSCSChecker.prototype.check = function (){
  Checker.configure(this.option);
};

module.exports = JSCSChecker;
