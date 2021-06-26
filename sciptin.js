function insert(num){
	document.form.textview.value = document.form.textview.value + num;
}
function equal(){
	var exp = document.form.textview.value;
	if(exp){
		document.form.textview.value = eval(exp);
	}
}
function cl(){
	document.form.textview.value = "";
}
function move(){
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0,exp.length-1);
}
function insert1(num){
	document.form.textview.value = document.form.textview.value * document.form.textview.value;
	
}
function insert2(num){
	document.form.textview.value = document.form.textview.value * document.form.textview.value * document.form.textview.value;
	
}
function insert3(num){
	document.form.textview.value = 1/document.form.textview.value ;
	
}
function insert5(num){
	document.form.textview.value = Math.cbrt(num);
}
function insert6(num){
	document.form.textview.value = Math.sqrt(num);
}
function factorial(num){
	var factor=1;
	for(var i=1;i<=num;i++){
		factor = factor*i;
	}
	return factor;
}
function fact(){
	document.form.textview.value = factorial(document.form.textview.value);
}
function logg(){
	document.form.textview.value = Math.log(document.form.textview.value);
}
