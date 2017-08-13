//segregating phone no, time and date from a string with special characters

import Date from './date.js';
import Time from './time.js';
import PhoneNo from './phoneNo.js';
import DeciFrac from './deciFrac.js';
/**class that segregates time, date, phone no and decimal fraction
 * @class
 * this.str				:	stores the string
 * this.storeDate		:	stores the date
 * this.storeTime		:	stores time
 * this.storePhoneNo	:	stores phone no
 * this.decfra			:	stores decimal and fraction
 * this.ref				:	stores the reference to the identifier
 */
export default class SpecialCharNum{
	constructor(ref,str){
		/**constructor of specialcharnum class
		 * @constructor
		 * @param {object|string}
		 */
		this.str=str;
		this.storeDate='';
		this.storeTime='';
		this.storePhoneNo='';
		this.decfra='';
		this.ref=ref;
	}
	/**function to check character in a number
	 * @function
	 */
	check(){
		var i;
		if(this.str.charAt(0)=='+'){
			this.storePhoneNo=this.str;
			const obj3=new PhoneNo(this.ref,this.storePhoneNo);
			obj3.extract();            
		}
		for(i=0;i<this.str.length;i++){
			if(this.str.charAt(i)==':'){
				this.storeTime=this.str;
				const obj2=new Time(this.ref,this.storeTime);
				obj2.arrayForm();
				obj2.extract();
				break;
			}
		}
		if(this.str.match(/\d{1,4}[-]\d{1,2}[-]\d{1,4}|\d{1,4}\d{1,2}\d{1,4}/)){
			this.storeDate=this.str;
			const obj1=new Date(this.ref,this.storeDate);
			obj1.arrayForm();
			obj1.extract();
		}
		if(this.str.match(/\d+[.]\d+|\d+\d+/)){
			this.decfra=this.str;
			const obj4=new DeciFrac(this.ref,this.decfra);
			obj4.extract();
		}
	}
}