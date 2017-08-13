import SufixPrefix from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/sufixPrefix.js';
import NumToWord from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/numToWord.js';
import ReplaceN from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/replace.js';
const obj=new SufixPrefix('','2kg');
const obj1=new NumToWord(obj,'2kg');
const obj2=new ReplaceN(obj,'twokg','2kg');


describe("testing sufixprefix",function(){

    it("testing",function(){
        //expect(obj.extract()).toBe(undefined);
        //expect(obj.arrayForm()).toBe(undefined);
        obj.prefix='';
        obj.num='2';
        obj.sufix='kg';
        expect(obj.output()).toBe('twokg');
    });
    /*it("testing",function(){
        //expect(obj.extract()).toBe(undefined);
        //expect(obj.arrayForm()).toBe(undefined);
        obj2.ref='obj2';
        obj2.formedstr='twokg';
        obj2.str='2kg';
        expect(obj.extract()).toBe(undefined);
    });*/
});