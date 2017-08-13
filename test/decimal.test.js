import Decimal from '../src/decimal.js';
import NumToWord from '../src/numToWord.js';
import ReplaceN from '../src/replace.js';
const obj=new Decimal('','2.5');
const obj1=new NumToWord(obj,'2.5');
const obj2=new ReplaceN(obj,'two-five');


describe("testing decimal",function(){

    it("testing",function(){
        //expect(obj.extract()).toBe(undefined);
        obj.storeWholeNum='2';
        obj.storeFracNum='5';
        expect(obj.output()).toBe('two.five');
    });
    /*it("testing",function(){
        //expect(obj.extract()).toBe(undefined);
        //expect(obj.arrayForm()).toBe(undefined);
        obj2.ref='obj2';
        obj2.formedstr='two.five';
        obj2.str='2.5';
        expect(obj.extract()).toBe(undefined);
    });*/
});