import { observe } from '../observe/index.js';

export function initData(vm){
    let data = vm.$options.data;
    data = (typeof data === 'object' ? data : getData(data, vm)) || {};

    // console.log(data);
    observe(data, true);
}

export function getData(data, vm){
    return data.call(vm, vm);
}

export function initState(vm){
    const op = vm.$options;

    if( op.data ){
        initData(vm)
    }
}
