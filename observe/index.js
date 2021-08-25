import Dep from './dep.js';

export function defineReactive(obj, key, val){
    const dep = new Dep();
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,

        get(){
            let value = val;
            if( Dep.target ){
                dep.depend();
            }
            return value;
        },

        set(newValue){
            if( newValue === val ) return;

            val = newValue;
            observe(newVal);
            dep.notify();
        }
    })
}


class Observe {
    constructor(value){
        this.value = value;
        if( Array.isArray(value) ){
            observeArray(value);
        }else{
            this.walk(value);
        }
    }

    walk(value){
        const keys = Object.keys(value);
        for( let i = 0; i < keys.length; i++ ){
            defineReactive(value, keys[i])
        }
    }

    observeArray(value){

    }
}


export function observe(value, b){
    if( typeof value !== 'object' ){
        return;
    }
    let ob;

    ob = new Observe(value);

    return ob;
}
