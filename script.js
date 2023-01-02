function btn_press(a) {
    console.log(a); 
    display.value+=a;
}
function equals() {
    expression=display.value;
    output=eval(expression)
    result.value=output;
}
function wipe() {
   display.value="";
   result.value="";

}
function back() {
    a=display.value;
    display.value=a.slice(0,-1);
    // slice 
}