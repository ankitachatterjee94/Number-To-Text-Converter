import Cardinal from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/cardinal.js';
import NumToWord from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/numToWord.js';
import ReplaceN from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/replace.js';
const obj=new Cardinal('','25');
const obj1=new NumToWord(obj,'25');
const obj2=new ReplaceN(obj,'twenty five');


describe("testing cardinal",function(){

    it("testing",function(){
        obj.str='25';
        expect(obj.output()).toBe('twenty five');
    });
});