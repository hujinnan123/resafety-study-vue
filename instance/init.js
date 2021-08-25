import { initState } from './state.js';
export function initMixin(Vue){
    Vue.prototype._init= function(options){
        const vm = this;
        this.$options = options;

        initState(vm);


        if( vm.$options.el ){
            vm.$mount(vm.$options.el);
        }
    }

    Vue.prototype._update = function(newValue){
        const vm = this;
        document.querySelector(vm.$options.el).innerHTML = newValue;
    }
}
