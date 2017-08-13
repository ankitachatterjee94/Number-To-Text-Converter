//extracting the number part from a phone no
import NumToWord from './numToWord.js';
import ReplaceN from './replace.js';
export default class PhoneNo{
    constructor(ref,str){
        this.str=str;
        this.storeCode='';
        this.storeNo='';
        this.formedstr='';
        this.ref=ref;
    }
    extract(){
        var i=1;
        while(this.str.charAt(i)!='-'){
            i++;
        }
        this.storeCode=this.str.substring(1,i);
        this.storeNo=this.str.substring(i+1);
        const obj1=new NumToWord(this.storeCode);
        this.formedstr='+'+obj1.convert()+'-';
        const obj2=new NumToWord(this.storeNo);
        this.formedstr+=obj2.convert();
        const obj=new ReplaceN(this.ref,this.formedstr,this.str);
        obj.compute();
    }
}