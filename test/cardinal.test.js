import Cardinal from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/cardinal.js';
import NumToWord from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/numToWord.js';
import ReplaceN from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/replace.js';
const obj=new Cardinal('','25');
const obj1=new NumToWord(obj,'25');
const obj2=new ReplaceN(obj,'twenty five');


describe("testing cardinal",function(){

    it("testing",function(){
        //expect(obj.send()).toBe(undefined);
        obj.str='25';
        expect(obj.output()).toBe('twenty five');
    });
    it("testing",function(){
        //expect(obj.extract()).toBe(undefined);
        //expect(obj.arrayForm()).toBe(undefined);
        obj2.ref='obj2';
        obj2.formedstr='twenty five';
        obj2.str='25';
        expect(obj.send()).toBe(undefined);
    });
});