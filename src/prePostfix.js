//extracting time, decimal, ordinal and prefixsufix number from a given string with a sufix prefix
import Time from './time.js';
import Ordinal from './ordinal.js';
import Decimal from './decimal';
import SufixPrefix from './sufixPrefix.js';
export default class PrePostfix{
    constructor(ref,str){
        this.str=str;
        this.storeSufPre='';
        this.storeOrdinal='';
        this.storeTime='';
        this.storeDecimal='';
        this.ref=ref;
    }
    extract(){
        var s1=this.str.substring(this.str.length-2),i;
        if(s1=='st' || s1=='nd' || s1=='rd' || s1=='th'){
            this.storeOrdinal=this.str;
            const obj1=new Ordinal(this.ref,this.storeOrdinal);
            obj1.extract();
        }
        else if(s1=='am' || s1=='pm'){
            this.storeTime=this.str;
            const obj2=new Time(this.ref,this.storeTime);
            obj2.arrayForm();
            obj2.extract();
        }
        else{
            if(this.str.match(/\d+[.]\d+|\d+[\/]\d+/)){
                this.storeDecimal=this.str;
                const obj3=new Decimal(this.storeDecimal);
                obj3.extract();
            }
            else{
                this.storeSufPre=this.str;
                const obj4=new SufixPrefix(this.ref,this.storeSufPre);
                obj4.extract();
            }
        }
    }
}