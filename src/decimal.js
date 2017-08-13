//segregating whole number and fractional part of a decimal number
import NumToWord from './numToWord.js';
import ReplaceN from './replace.js';
export default class Decimal{
	constructor(ref,str){
		this.str=str;
		this.storeWholeNum='';
		this.storeFracNum='';
		this.formedstr='';
		this.ref=ref;
	}
	extract(){
		var i=0;
		while(this.str.charAt(i)!='.'){
			i++;
		}
		this.storeWholeNum=this.str.substring(0,i);
		this.storeFracNum=this.str.substring(i+1);
		if(!this.storeFracNum.charAt(this.storeFracNum.length-1).match(/\d/)){
			i=0;
			while(this.storeFracNum.charAt(i).match(/\d/)){
				i++;
			}
		}
		const obj1=new NumToWord(this.storeWholeNum);
		this.formedstr+=obj1.convert()+'.';
		const obj2=new NumToWord(this.storeFracNum.substring(0,i));
		this.formedstr+=obj2.convert()+this.storeFracNum.substring(i);
		const obj3=new ReplaceN(this.ref,this.formedstr,this.str);
		obj3.compute();
	}
	output(){
		const obj1=new NumToWord(this.storeWholeNum);
		this.formedstr+=obj1.convert()+'.';
		const obj2=new NumToWord(this.storeFracNum);
		this.formedstr+=obj2.convert();
		return this.formedstr;
	}
}