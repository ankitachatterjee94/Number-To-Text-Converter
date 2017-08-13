import Time from '../src/time.js';
import NumToWord from '../src/numToWord.js';
import ReplaceN from '../src/replace.js';
const obj=new Time('','2:05:04');
const obj1=new NumToWord(obj,'2:05:04');
const obj2=new ReplaceN(obj,'two:five:four');


describe("testing time",function(){

    it("testing",function(){
        //expect(obj.extract()).toBe(undefined);
        //expect(obj.arrayForm()).toBe(undefined);
        obj.hr='2';
        obj.min='05';
        obj.sec='04';
        expect(obj.output()).toBe('two:five:four');
    });
});