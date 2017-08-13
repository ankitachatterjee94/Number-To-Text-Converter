//send cardinal numbers to numToWord

import NumToWord from './numToWord.js';
import ReplaceN from './replace.js';
/**class to convert cardinal numbers to word
 * @class
 * this.str		:	stores the cardinal number
 * this.answer	:	stores the converted string
 * this.ref		:	stores the reference to the identifier
 */
export default class Cardinal{
	/**constructor of cardinal class
	 * @constructor
	 * @param {object|string}
	 */
	constructor(ref,str){
		this.str=str;
		this.answer='';
		this.ref=ref;
	}
	/**function to convert number
	 * @function
	 */
	send(){
		const obj=new NumToWord(this.str);
		this.answer=obj.convert();
		const obj1=new ReplaceN(this.ref,this.answer,this.str);
		obj1.compute();
	}
	/**function to return the converted number
	 * @function
	 */
	output(){
		const obj=new NumToWord(this.str);
		this.answer=obj.convert();
		return this.answer;
	}
}