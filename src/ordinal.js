//segregating number and it's ordinal sufix from an ordinal numbers
import NumToWord from './numToWord.js';
import ReplaceN from './replace.js';
export default class Ordinal{
	constructor(ref,str){
		this.str=str;
		this.storeUnit='';
		this.storeOrd='';
		this.formedstr='';
		this.ref=ref;
	}
	extract(){
		var tens=['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
		var tensord=['twentieth','thirtieth','fortieth','fiftieth','sixtieth','seventieth','eightieth','ninetieth'];
		this.storeUnit=this.str.substring(0,this.str.length-2);
		this.storeOrd=this.str.substring(this.str.length-2);
		const obj=new NumToWord(this.storeUnit);
		this.formedstr+=obj.convert();
		let arr=this.formedstr.split(' ');
		if(arr[arr.length-1]=='three'){
			arr[arr.length]='third';
		}
		else if(arr[arr.length-1]=='one'){
			arr[arr.length-1]='first';
			this.formedstr=arr.join(' ');
		}
		else if(arr[arr.length-1]=='two'){
			arr[arr.length-1]='second';
			this.formedstr=arr.join(' ');
		}
		else if(arr[arr.length-1]=='eight'){
			arr[arr.length-1]='eighth';
			this.formedstr=arr.join(' ');
		}
		else if(arr[arr.length-1]=='five'){
			arr[arr.length-1]='fifth';
			this.formedstr=arr.join(' ');
		}
		else if(arr[arr.length-1]=='nine'){
			arr[arr.length-1]='ninth';
			this.formedstr=arr.join(' ');
		}
		else if(tens.includes(arr[arr.length-1])){
			let i=0;
			while(tens[i]!=arr[arr.length-1]){
				i++;
			}
			arr[arr.length-1]=tensord[i];
		}
		else{
			this.formedstr+=this.storeOrd;
		}
		const obj3=new ReplaceN(this.ref,this.formedstr,this.str);
		obj3.compute();
	}
	output(){
		const obj1=new NumToWord(this.storeUnit);
		this.formedstr+=obj1.convert()+this.storeOrd;
		return this.formedstr;
	}
}