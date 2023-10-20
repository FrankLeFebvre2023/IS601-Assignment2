function reverseString(){
    var word = document.getElementById("reverseForm").elements[0].value;
    var newString = "";
    var n = word.length;
    for(var i = n; i > 0; i--){
        var letter = word.substring(i-1, i);
        newString += letter;
    }
    document.getElementById("reverseAns").innerHTML = word + " backwards is: " + newString;
}
function checkPalindrome(){
    var number = document.getElementById("palForm").elements[0].value;
    const pattern = /[^0-9]/;
    var notValid = pattern.test(number);
    if(notValid){
        alert("This is not a valid number. Please try again.");
        document.getElementById("palForm").elements[0].value = '';
        return;
    }
    var num = parseInt(number);
    var reverse = 0;
    while(num > 0){
        var digit = num % 10;
        reverse = (reverse * 10) + digit;
        num = num / 10;
        num = Math.trunc(num);
    }
    num = Number(number);
    if(reverse == num){
        document.getElementById("palAns").innerHTML = number + " is a palindrome.";
    }
    else{
        document.getElementById("palAns").innerHTML = number + " is not a palindrome.";
    }
}
function calculateBill(){
    var x = document.getElementById("tipForm");
    var subtotal = x.elements[0].value;
    var tip = x.elements[1].value;
    const pattern = /[^0-9]/;
    if(pattern.test(subtotal) || pattern.test(tip)){
        alert("Invalid subtotal and/or tip value(s). Please try again.");
        x.elements[0].value = '';
        x.elements[1].value = '';
        return;
    }
    subtotal = Number(subtotal);
    tip = Number(tip);
    tip /= 100;
    var total = subtotal + (subtotal * tip);
    document.getElementById("totalBill").innerHTML = "Your total bill is: $" + total;
}


window.onload = function() {
    var btnReverse = document.getElementById("reverse");
    btnReverse.onclick = reverseString;
    var btnPalindrome = document.getElementById("palindrome");
    btnPalindrome.onclick = checkPalindrome;
    var btnTip = document.getElementById("submitTotal");
    btnTip.onclick = calculateBill;
}