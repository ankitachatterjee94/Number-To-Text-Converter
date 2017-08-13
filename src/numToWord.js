//convert number to corresponding word
//import * as card from './cardinal.js';
/*import Date from 'Date';
import Time from 'Time';
import Decimal from 'Decimal';
import Fraction from 'Fraction';
import Ordinal from 'Ordinal';
import PhoneNo from 'PhoneNo';
import SufixPrefix from 'SufixPrefix';*/
export default class NumToWord{
    constructor(str){
        this.str=str;
        this.unit=['0','1','2','3','4','5','6','7','8','9'];
	    this.unit1=['','','twentieth','thirtieth','fortieth','fiftieth','sixtieth','seventieth','eightieth','ninetieth'];
	    this.tens=['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
	    this.exce=['','11','12','13','14','15','16','17','18','19'];
	    this.exc=['','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
	    this.ord=['','first','second','third'];
	    this.card=['','one','two','three','four','five','six','seven','eight','nine'];
	    this.th=['','','','hundred','thousand','thousand','thousand','million','million','million','billion','billion','billion','trillion','trillion','trillion','quadrillion','quadrillion','quadrillion','quintillion','quintillion','quintillion','sextillion','sextillion','sextillion','septillion','septillion','septillion','octillion','octillion','octillion','nonillion','nonillion','nonillion','decillion','decillion','decillion','undecillion','undecillion','undecillion'];
	    this.th1=['','','','hundreds','thousands','thousands','thousands','millions','millions','millions','billions','billions','billions','trillions','trillions','trillions','quadrillions','quadrillions','quadrillions','quintillions','quintillions','quintillions','sextillions','sextillions','sextillions','septillions','septillions','septillions','octillions','octillions','octillions','nonillions','nonillions','nonillions','decillions','decillions','decillions','undecillions','undecillions','undecillions'];
	    this.formedArray=[];
	    this.sentenceArray=[];
	    this.extract=[];
		this.w='';
	}
	sumOfDigits(n){
		var sum=0;
		while(n>0){
			sum+=n%10;
			n=Math.floor(n/10);
		}
		return sum;
	}
	convert(){
		var i,j,k,num=this.str
		this.w='';
		for(i=0;i<num.length;i++){
			if(num.length-i>2){
				if(num.length-i==5 || num.length-i==8 || num.length-i==11 || num.length-i==14 || num.length-i==17 || num.length-i==20 || num.length-i==23 || num.length-i==26 || num.length-i==29 || num.length-i==32 || num.length-i==35){
					j=4;
				}
				else if((this.sumOfDigits(num.length-i)==3 || this.sumOfDigits(num.length-i)==6 || this.sumOfDigits(num.length-i)==9) && num.length-i>3){
					j=5;
				}
				else{
					j=3;
				}
			}
			else{
				j=num.length-i;
			}
			if(num[i]!=0){
				switch(j){
					case 1:this.w+=this.card[num[i]];
						break;
					case 2:if(num[i]==1 && num[i+1]!=0){
						this.w+=this.exc[num[i+1]];
						i++;
						}
					else if(num[i+1]==0){
						this.w+=this.tens[num[i]];
						}
					else{
						this.w+=this.tens[num[i]]+' ';
						}
						break;
					case 3:this.w+=this.card[num[i]]+' '+this.th[num.length-i]+' ';
						break;
					case 4:this.w+=this.tens[num[i]]+' '+this.card[num[i+1]]+' '+this.th[num.length-i]+' ';
						i++;
						break;
					case 5:if(num[i+2]!=0){
						this.w+=this.card[num[i]]+' '+this.th[3]+' '+'and'+' ';
						}
					else{
						this.w+=this.card[num[i]]+' '+this.th[3]+' ';
						}			
					if(num[i+1]==1 && num[i+2]!=0){
						this.w+=this.exc[num[i+2]]+' '+this.th[num.length-i]+' ';
						}
					else{
						this.w+=this.tens[num[i+1]]+' '+this.card[num[i+2]]+' '+this.th[num.length-i]+' ';
						}
						i+=2;
						break;
				}
			}
		}
		//console.log(this.w);
		return this.w;
	}
	convert1(){
		var num=this.str;
		var card=['zero','one','two','three','four','five','six','seven','eight','nine'];
		var i;
		this.w='';
		for(i=0;i<num.length;i++){
			this.w+=card[num[i]]+' ';
		}
		return this.w;
	}
}