document.getElementById('out').innerHTML = result;
function plus() {
	var n1 = document.getElementById('q1').value;
	n1 = parseInt(n1);

	var n2 = document.getElementById('q2').value;
	n2 = parseInt(n2);

	result = n1 + n2;
	document.getElementById('out').innerHTML = result;
}
function minus() {
	var n1 = document.getElementById('q1').value;
	n1 = parseInt(n1);

	var n2 = document.getElementById('q2').value;
	n2 = parseInt(n2);

	result = n1 - n2;
	document.getElementById('out').innerHTML = result;
}
function delen() {
	var n1 = document.getElementById('q1').value;
	n1 = parseInt(n1);

	var n2 = document.getElementById('q2').value;
	n2 = parseInt(n2);

	result = n1 / n2;
	document.getElementById('out').innerHTML = result;
}
function mnog() {
	var n1 = document.getElementById('q1').value;
	n1 = parseInt(n1);

	var n2 = document.getElementById('q2').value;
	n2 = parseInt(n2);

	result = n1 * n2;
	document.getElementById('out').innerHTML = result;
}
function ostdelen() {
	var n1 = document.getElementById('q1').value;
	n1 = parseInt(n1);

	var n2 = document.getElementById('q2').value;
	n2 = parseInt(n2);

	result = n1 % n2;
	document.getElementById('out').innerHTML = result;
}
function obnov(){
	var n1 = document.getElementById('q1');
	var n2 = document.getElementById('q2');
	n1.value = 0;
	n2.value = 0;
	result = 0;
	document.getElementById('out').innerHTML = result;
}













