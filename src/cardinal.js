//send cardinal numbers to numToWord

import NumToWord from './numToWord.js';
import ReplaceN from './replace.js';
export default class Cardinal{
    constructor(ref,str){
        this.str=str;
        this.answer='';
        this.ref=ref;
    }
    send(){
        const obj=new NumToWord(this.str);
        this.answer=obj.convert();
        const obj1=new ReplaceN(this.ref,this.answer,this.str);
        obj1.compute();
    }
    output(){
        const obj=new NumToWord(this.str);
        this.answer=obj.convert();
        return this.answer;
    }
}