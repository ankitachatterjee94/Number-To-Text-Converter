//segregating day month year from a date string
import NumToWord from './numToWord.js';
import ReplaceN from './replace.js';
export default class Date{
    constructor(ref,str){
        this.str=str;
        this.array=[];
        this.year='';
        this.month='';
        this.day='';
        this.formedstr='';
        this.ref=ref;
    }
    arrayForm(){
        this.array=this.str.split(/[-/.]/);
    }
    extract(){
        if(this.array[0].length==4){
            this.year=this.array[0];
            this.month=this.array[1];
            this.day=this.array[2];
        }
        else if(this.array[2].length==4){
            this.year=this.array[2];
            this.month=this.array[1];
            this.day=this.array[0];
        }
        const obj=new NumToWord(this.year);
        this.formedstr+=obj.convert()+'-';
        const obj1=new NumToWord(this.month);
        this.formedstr+=obj1.convert()+'-';
        const obj2=new NumToWord(this.day);
        this.formedstr+=obj2.convert();
        const obj3=new ReplaceN(this.ref,this.formedstr,this.str);
        obj3.compute();
    }
    output(){
        const obj=new NumToWord(this.year);
        this.formedstr+=obj.convert()+'-';
        const obj1=new NumToWord(this.month);
        this.formedstr+=obj1.convert()+'-';
        const obj2=new NumToWord(this.day);
        this.formedstr+=obj2.convert();
        return this.formedstr;
    }
}