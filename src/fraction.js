//segregating numerator and denominator from a fractional number

import NumToWord from './numToWord.js';
import ReplaceN from './replace.js';
/**class that extracts numerator and denominator
 * @class
 * this.str			:	stores the string
 * this.storeNum	:	stores the numerator
 * this.storeDen	:	stores the denominator
 * this.formedstr	:	stores the converted string
 * this.ref			:	stores the reference to the identifier
 */
export default class Fraction{
	/**constructor of fraction class
	 * @constructor
	 * @param {object|string}
	 */
	constructor(ref,str){
		this.str=str;
		this.storeNum='';
		this.storeDen='';
		this.formedstr='';
		this.ref=ref;
	}
	/**function to convert number
	 * @function
	 */
	extract(){
		var i=0;
		while(this.str.charAt(i)!='/'){
			i++;
		}
		this.storeNum=this.str.substring(0,i);
		this.storeDen=this.str.substring(i+1);
		const obj1=new NumToWord(this.storeNum);
		this.formedstr+=obj1.convert()+'/';
		const obj2=new NumToWord(this.storeDen);
		this.formedstr+=obj2.convert();
		const obj3=new ReplaceN(this.ref,this.formedstr,this.str);
		obj3.compute();
	}
	/**function to return the converted number
	 * @function
	 */
	output(){
		const obj1=new NumToWord(this.storeNum);
		this.formedstr+=obj1.convert()+'/';
		const obj2=new NumToWord(this.storeDen);
		this.formedstr+=obj2.convert();
		return this.formedstr;
	}
}