mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-1'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-2'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-5'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-6'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-3'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-4'));
mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));
mdc.select.MDCSelect.attachTo(document.querySelector('.mdc-select'));
// select.listen('MDCSelect:change', () => {
// 	alert(`Selected option at index ${select.selectedIndex} with value "$select.value}"`);
// });

const dialog = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.firstbtn'));
//sign in
$('#signin').on('click',function(evt){

	dialog.open();
	evt.preventDefault();
	console.log("accepted");

});
$('.canclebtn').on('click',function(evt){
	dialog.close();

});

function getName(){
	var a = document.getElementById("userName").value;
	var b = document.getElementById("password").value;
	console.log("userName=======>" ,a);
	console.log("password=======>" ,b);
	dialog.close();
	// console.log("dsbfjkcsdfhjkhd");
}
//registration
const dialog1 = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.secondbtn'));
$('#register').on('click',function(evt){

	dialog1.open();
	console.log("accepted");

});
$('.canclebtn').on('click',function(evt){
	dialog1.close();

});


