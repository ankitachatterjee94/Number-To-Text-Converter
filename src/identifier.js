//Identifying numbers in a string

import Decider from './decider.js';
/**class that identifies numbers and stores them separately
 * @class
 * this.str			:	stores the string
 * this.array		:	stores the split string
 * this.store		:	stores the numbers
 */
export default class Identifier{
	/**constructor of identifier class
	 * @constructor
	 * @param {object|string}
	 */
	constructor(str){
		this.str=str;
		this.array=str.split(' ');
		this.store=[];
	}
	/**function to identify number
	 * @function
	 */
	identify(){
		var i,j,ref;
		for(i=0;i<this.array.length;i++){
			for(j=0;j<this.array[i].length;j++){
				if(this.array[i].charAt(j).match(/\d/)){
					this.store.push(this.array[i]);
					break;
				}
			}
		}
		for(let k=0;k<this.store.length;k++){
			ref=this;
			setTimeout(function(){
				const obj=new Decider(ref,ref.store[k]);
				obj.extract();
			},0);
		}
	}
}