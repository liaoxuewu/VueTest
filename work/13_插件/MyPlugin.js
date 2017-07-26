(function (window) {
    const MyPlugin = {};
    MyPlugin.install = function (Vue,options) {
        //添加全局方法和属性
        Vue.myGlobalMethod = function () {
            alert('myGlobalMethod()')
        }
        //添加全局资源
        Vue.directive('my-directive', function (el, binding) {
            el.innerHTML = "MyPlugin my-directive " + binding.value
        })
        //添加实例方法
        Vue.prototype.$myMethod = function () {
            console.log('实例方法 $myMethod()');
        }
    }
    //暴露对象
    window.MyPlugin = MyPlugin;
})(window);