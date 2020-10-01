// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
var result = name.toUpperCase();
window.alert(result);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
var sTrim = sentence.trim();
var result = "";
result += sTrim.charAt(0).toUpperCase();
for(var i=1; i<sTrim.length; i++){
	var prev = sTrim.charAt(i-1);
	var curr = sTrim.charAt(i);
	if (prev==" "){
		curr=curr.toUpperCase();
	}
    result+=curr;
}
window.alert(result);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
var result = "";
for (var i=0; i<money.length; i++){
	var temp = money.charAt(i);
    if(temp.match(/\d/)){
        result += temp
    }
}
window.alert(result);
