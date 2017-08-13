//Identifying numbers in a string
import Decider from './decider.js';
export default class Identifier{
    constructor(str){
        this.str=str;
        this.array=str.split(' ');
        this.store=[];
    }
    identify(){
        var i,j,ref;
        for(i=0;i<this.array.length;i++){
            for(j=0;j<this.array[i].length;j++){
                if(this.array[i].charAt(j).match(/\d/)){
                    this.store.push(this.array[i]);
                    break;
                }
            }
        }
        for(let k=0;k<this.store.length;k++){
            var ref=this;
            setTimeout(function(){
                const obj=new Decider(ref,ref.store[k]);
                obj.extract();
            },0);
        }
    }
}