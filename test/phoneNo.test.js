import PhoneNo from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/phoneNo.js';
import NumToWord from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/numToWord.js';
import ReplaceN from '/home/ankitachatterjee/Desktop/Number-To-Text-Converter/src/replace.js';
const obj=new PhoneNo('','+91-9051589470');
const obj1=new NumToWord(obj,'+91-9051589470');
const obj2=new ReplaceN(obj,'');


describe("testing decimal",function(){

    it("testing",function(){
        //expect(obj.extract()).toBe(undefined);
        obj.storeCode='91';
        obj.storeNo='9051589470';
        expect(obj.output()).toBe('+nine one -nine zero five one five eight nine four seven zero ');
    });
    it("testing",function(){
        //expect(obj.extract()).toBe(undefined);
        //expect(obj.arrayForm()).toBe(undefined);
        obj2.ref='obj2';
        obj2.formedstr='+nine one -nine zero five one five eight nine four seven zero ';
        obj2.str='+91-9051589470';
        expect(obj.extract()).toBe(undefined);
    });
});