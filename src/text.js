//getting user input
import Identifier from './identifier.js';
/**function to input number
 * @function
 */

let inputNum = () => {
	var i=document.getElementById('input1').value;
	const obj=new Identifier(i);
	obj.identify();
};
var e=document.getElementById('b1');
if(e){
	addEventListener('click', inputNum);
}