//replace numbers
export default class ReplaceN{
	constructor(ref,formedstr,str){
		this.ref=ref;
		this.str=str;
		this.formedstr=formedstr;
		this.count=0;
	}
	compute(){
		this.ref.str=this.ref.str.replace(this.str,this.formedstr);
		this.count++;
		if(this.ref.store[this.ref.store.length-1]==this.str){
			document.getElementById('answer1').innerHTML=this.ref.str;
		}    
	}
}