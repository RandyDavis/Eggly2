(function () {
    'use strict';

    angular.module('eggly2.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['config']
    function Shell () {
        var vm = this;
        vm.title = config.appTitle;
    }
})();