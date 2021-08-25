let uid = 0;

export default class Dep {
    constructor(){
        this.id = uid ++;

        this.subs = [];
    }

    depend(){
        if(Dep.target){
            Dep.target.addDep(this)
        }
    }   

    notify(){
        const subs = this.subs.slice();

        subs.sort((a, b) => a.id - b.id);
        
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }
}
