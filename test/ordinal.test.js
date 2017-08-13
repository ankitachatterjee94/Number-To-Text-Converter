import Ordinal from '../src/ordinal.js';
import NumToWord from '../src/numToWord.js';
import ReplaceN from '../src/replace.js';
const obj=new Ordinal('','24th');
const obj1=new NumToWord(obj,'24th');
const obj2=new ReplaceN(obj,'twenty fourth');


describe("testing ordinal",function(){

    it("testing",function(){
        //expect(obj.extract()).toBe(undefined);
        obj.storeUnit='24';
        obj.storeOrd='th';
        expect(obj.output()).toBe('twenty fourth');
    });
    /*it("testing",function(){
        //expect(obj.extract()).toBe(undefined);
        //expect(obj.arrayForm()).toBe(undefined);
        obj2.ref='obj2';
        obj2.formedstr='twenty fourth';
        obj2.str='24th';
        expect(obj.extract()).toBe(undefined);
    });*/
});