//extracting the number part from a phone no

import NumToWord from './numToWord.js';
import ReplaceN from './replace.js';
/**class that converts phone no
 * @class
 * this.str			:	stores the string
 * this.storeCode	:	stores the state code
 * this.storeNo		:	stores the number
 * this.formedstr	:	stores the converted string
 * this.ref			:	stores the reference to the identifier
 */
export default class PhoneNo{
	constructor(ref,str){
		/**constructor of phoneno class
		 * @constructor
		 * @param {object|string}
		 */
		this.str=str;
		this.storeCode='';
		this.storeNo='';
		this.formedstr='';
		this.ref=ref;
	}
	/**function to convert number
	 * @function
	 */
	extract(){
		var i=1;
		while(this.str.charAt(i)!='-'){
			i++;
		}
		this.storeCode=this.str.substring(1,i);
		this.storeNo=this.str.substring(i+1);
		const obj1=new NumToWord(this.storeCode);
		this.formedstr='+'+obj1.convert1()+'-';
		const obj2=new NumToWord(this.storeNo);
		this.formedstr+=obj2.convert1();
		const obj=new ReplaceN(this.ref,this.formedstr,this.str);
		obj.compute();
	}
	/**function to return the converted number
	 * @function
	 */
	output(){
		const obj1=new NumToWord(this.storeCode);
		this.formedstr='+'+obj1.convert1()+'-';
		const obj2=new NumToWord(this.storeNo);
		this.formedstr+=obj2.convert1();
		return this.formedstr;
	}
}