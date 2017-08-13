//segregating identified string to specialCharNum, prePostfix and cardinal
import Cardinal from './cardinal.js';
import SpecialCharNum from './specialCharNum.js';
import PrePostfix from './prePostfix.js';
export default class Decider{
	constructor(ref,str1){
		this.str=str1;
		this.specNum='';
		this.prepost='';
		this.card='';
		this.ref=ref;
	}
	extract(){        
		if(this.str.match(/\d+[.]\d+|\d+\d+|[+]\d{12}|[0]\d{12}|\d{1,2}[:][0-5][0-9]|\d{1,4}[-]\d{1,2}[-]\d{1,4}|\d{1,4}\d{1,2}\d{1,4}/)){
			this.specNum=this.str;
			const obj2=new SpecialCharNum(this.ref,this.specNum);
			obj2.check();
		}
		else if(this.str.match(/^\d+$/)){
			this.card=this.str;
			const obj1=new Cardinal(this.ref,this.card);
			obj1.send();
		}
		else{
			this.prepost=this.str;
			const obj3=new PrePostfix(this.ref,this.prepost);
			obj3.extract();
		}
	}
}