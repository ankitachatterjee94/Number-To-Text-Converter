//segregating hour, minutes and seconds from a given time
import NumToWord from './numToWord.js';
import ReplaceN from './replace.js';
export default class Time{
    constructor(ref,str){
        this.str=str;
        this.hr='';
        this.min='';
        this.sec='';
        this.array=[];
        this.formedstr='';
        this.ref=ref;
    }
    arrayForm(){
        this.array=this.str.split(/[:]/);
    }
    extract(){
        if(this.str.substring(this.str.length-1).match(/[a-zA-Z]/)){
            let i=0;            
            if(this.array.length==3){
                this.hr=this.array[0];
                this.min=this.array[1];
                this.sec=this.array[2].substring(0,this.array[2].length-2);
            }
            else if(this.array.length==2){
                this.hr=this.array[0];
                this.min=this.array[1].substring(0,this.array[1].length-2);
            }
            else{
                this.hr=this.array[0].substring(0,this.array[0].length-2);
            }
        }
        else{
            if(this.array.length==3){
                this.hr=this.array[0];
                this.min=this.array[1];
                this.sec=this.array[2];
            }
            else if(this.array.length==2){
                this.hr=this.array[0];
                this.min=this.array[1];
            }
            else{
                this.hr=this.array[0];
            }
        }
        const obj1=new NumToWord(this.hr);
        if(this.min!=''){
            this.formedstr+=obj1.convert()+':';
            const obj2=new NumToWord(this.min);
            if(this.sec!=''){
                this.formedstr+=obj2.convert()+':';
                const obj3=new NumToWord(this.sec);
                this.formedstr+=obj3.convert();
            }
            else{
                this.formedstr+=obj2.convert()
            }
        }
        else{
            this.formedstr+=obj1.convert()
        }
        const obj=new ReplaceN(this.ref,this.formedstr,this.str);
        obj.compute();
    }
    output(){
        const obj1=new NumToWord(this.hr);
        this.formedstr+=obj1.convert()+':';
        const obj2=new NumToWord(this.min);
        this.formedstr+=obj2.convert()+':';
        const obj3=new NumToWord(this.sec);
        this.formedstr+=obj3.convert();
        return this.formedstr;
    }
}