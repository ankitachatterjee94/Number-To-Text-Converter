//segreegating number, prefix and sufix from a string with prefix and sufix

import NumToWord from './numToWord.js';
import ReplaceN from './replace.js';
/**class that segregates prefix sufix and number
 * @class
 * this.str			:	stores the string
 * this.sufix		:	stores the sufix
 * this.prefix		:	stores the prefix
 * this.num			:	stores the number
 * this.formedstr	:	stores the converted string
 * this.ref			:	stores the reference to the identifier
 */
export default class SufixPrefix{
	/**constructor of sufixprefix class
	 * @constructor
	 * @param {object|string}
	 */
	constructor(ref,str){
		this.str=str;
		this.sufix='';
		this.prefix='';
		this.num='';
		this.formedstr='';
		this.ref=ref;
	}
	/**function to convert number
	 * @function
	 */
	extract(){
		var i=0,j;
		while(!this.str.charAt(i).match(/\d/)){
			i++;
		}
		this.prefix=this.str.substring(0,i);
		j=i;
		while(this.str.charAt(i).match(/\d/)){
			i++;
		}
		this.num=this.str.substring(j,i);
		this.sufix=this.str.substring(i);
		const obj=new NumToWord(this.num);
		this.formedstr=this.prefix+obj.convert()+this.sufix;
		const obj3=new ReplaceN(this.ref,this.formedstr,this.str);
		obj3.compute();
	}
	/**function to return the converted number
	 * @function
	 */
	output(){
		const obj=new NumToWord(this.num);
		this.formedstr=this.prefix+obj.convert()+this.sufix;
		return this.formedstr;
	}
}