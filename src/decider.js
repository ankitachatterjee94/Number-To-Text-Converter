//segregating identified string to specialCharNum, prePostfix and cardinal

import Cardinal from './cardinal.js';
import SpecialCharNum from './specialCharNum.js';
import PrePostfix from './prePostfix.js';
/**class that segregates special character, cardinal and prefix and postfix
 * @class
 * this.str			:	stores the string
 * this.specNum		:	stores the special characters with number
 * this.prepost		:	stores the cardinal number
 * this.card		:	stores the prefix and postfix numbers
 * this.ref			:	stores the reference to the identifier
 */
export default class Decider{
	constructor(ref,str1){
	/**constructor of decider class
	 * @constructor
	 * @param {object|string}
	 */
		this.str=str1;
		this.specNum='';
		this.prepost='';
		this.card='';
		this.ref=ref;
	}
	/**function to decide type of number
	 * @function
	 */
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