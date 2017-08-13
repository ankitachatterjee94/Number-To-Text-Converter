//calling fraction and decimal classes after segregation
import Decimal from './decimal.js';
import Fraction from './fraction.js';
export default class DeciFrac{
    constructor(ref,str){
        this.str=str;
        this.storeDeci='';
        this.storeFrac='';
        this.ref=ref;
    }
    extract(){
        var i;
        for(i=0;i<this.str.length;i++){
            if(this.str.charAt(i)=='/'){
                this.storeFrac=this.str;
                const obj2=new Fraction(this.ref,this.storeFrac);
                obj2.extract();
                break;
            }
        }
        if(i==this.str.length){
            this.storeDeci=this.str;
            const obj1=new Decimal(this.ref,this.storeDeci);
            obj1.extract();
        }
    }
}