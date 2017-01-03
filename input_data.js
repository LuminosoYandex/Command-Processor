// input command
function inputData(){
	var form = document.command;
	var rawText = form.input.value;
	var readyText = processingCommand(rawText);
	printData(readyText);
}