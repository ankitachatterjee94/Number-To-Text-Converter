//replace numbers

/**class that replaces the numbers with it's corresponding string
 * @class
 * this.str			:	stores the string
 * this.formedstr	:	stores the converted string
 * this.ref			:	stores the reference to the identifier
 */
export default class ReplaceN{
	/**constructor of replace class
	 * @constructor
	 * @param {object|string}
	 */
	constructor(ref,formedstr,str){
		this.ref=ref;
		this.str=str;
		this.formedstr=formedstr;
		//this.count=0;
	}
	/**function to replace number
	 * @function
	 */
	compute(){
		this.ref.str=this.ref.str.replace(this.str,this.formedstr);
		//this.count++;
		if(this.ref.store[this.ref.store.length-1]==this.str){
			document.getElementById('answer1').innerHTML=this.ref.str;
		}    
	}
}