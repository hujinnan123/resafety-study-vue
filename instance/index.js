import { initMixin } from './init.js';
function Vue(options){
    this._init(options);
}

initMixin(Vue);
renderMixin(Vue);

window.Vue = Vue;

function mountComponent(){
    let updateComponent;

    updateComponent = function () {
        vm._update(vm._render(), hydrating);
    };

    new Watcher(vm, updateComponent);
}

Vue.prototype.$mount = function ( el, hydrating ) {
    return mountComponent(
      this,
      el && query(el, this.$document),
      hydrating
    )
};

export default Vue;
