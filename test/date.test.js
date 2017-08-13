import Date from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/date.js';
import NumToWord from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/numToWord.js';
import ReplaceN from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/replace.js';
const obj=new Date('','25-08-1994');
const obj1=new NumToWord(obj,'25-08-1994');
const obj2=new ReplaceN(obj,'twenty five-eight-one thousand nine hundred ninety four');


describe('Date',function(){
    it('should check date',function(){

        expect(obj.arrayForm()).toBe(undefined);
        obj.year='1994';
        obj.month='08';
        obj.day='25';
        expect(obj.output()).toBe('one thousand nine hundred ninety four-eight-twenty five');
    });
});