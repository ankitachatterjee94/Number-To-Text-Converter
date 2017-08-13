//segregating day month year from a date string

import NumToWord from './numToWord.js';
import ReplaceN from './replace.js';
/**class to convert date to date in words
 * @class
 * this.str			:	stores the date
 * this.array		:	stores the split string
 * this.year		:	stores year
 * this.month		:	stores month
 * this.day			:	stores day
 * this.formedstr	:	stores the converted string
 * this.ref			:	stores the reference to the identifier
 */
export default class Date{
	/**constructor of date class
	 * @constructor
	 * @param {object|string}
	 */
	constructor(ref,str){
		this.str=str;
		this.array=[];
		this.year='';
		this.month='';
		this.day='';
		this.formedstr='';
		this.ref=ref;
	}
	/**function to split string
	 * @function
	 */
	arrayForm(){
		this.array=this.str.split(/[-/.]/);
	}
	/**function to convert number
	 * @function
	 */
	extract(){
		if(this.array[0].length==4){
			this.year=this.array[0];
			this.month=this.array[1];
			this.day=this.array[2];
		}
		else if(this.array[2].length==4){
			this.year=this.array[2];
			this.month=this.array[1];
			this.day=this.array[0];
		}
		const obj=new NumToWord(this.year);
		this.formedstr+=obj.convert()+'-';
		const obj1=new NumToWord(this.month);
		this.formedstr+=obj1.convert()+'-';
		const obj2=new NumToWord(this.day);
		this.formedstr+=obj2.convert();
		const obj3=new ReplaceN(this.ref,this.formedstr,this.str);
		obj3.compute();
	}
	/**function to return the converted number
	 * @function
	 */
	output(){
		const obj=new NumToWord(this.year);
		this.formedstr+=obj.convert()+'-';
		const obj1=new NumToWord(this.month);
		this.formedstr+=obj1.convert()+'-';
		const obj2=new NumToWord(this.day);
		this.formedstr+=obj2.convert();
		return this.formedstr;
	}
}