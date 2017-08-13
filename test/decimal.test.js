import Decimal from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/decimal.js';
import NumToWord from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/numToWord.js';
import ReplaceN from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/replace.js';
const obj=new Decimal('','2.5');
const obj1=new NumToWord(obj,'2.5');
const obj2=new ReplaceN(obj,'two-five');


describe("testing decimal",function(){

    it("testing",function(){
        obj.storeWholeNum='2';
        obj.storeFracNum='5';
        expect(obj.output()).toBe('two.five');
    });
});