import Fraction from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/fraction.js';
import NumToWord from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/numToWord.js';
import ReplaceN from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/replace.js';
const obj=new Fraction('','2/5');
const obj1=new NumToWord(obj,'2/5');
const obj2=new ReplaceN(obj,'two/five');


describe("testing fraction",function(){

    it("testing",function(){
        obj.storeNum='2';
        obj.storeDen='5';
        expect(obj.output()).toBe('two/five');
    });
});