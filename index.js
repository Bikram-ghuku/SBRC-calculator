window.onload = () => {
    var button = document.getElementsByTagName("button")
    var disp = document.getElementById("display")
    var curr = ""
    var arr = []

    function process(val){
        if((val >= 0 && val <=9) || val == '.'){
            disp.value = ""
            console.log("Number")
            curr+=val;
            disp.value = curr;
        }else if(val == '='){
            console.log(arr)
        }else{
            arr.push(curr)
            curr=""
            disp.value = ""
            arr.push(val)
            console.log("Operator")
        }
        
    }

    for(var i = 0; i < button.length; i++){
        button[i].onclick = (e) => {
            process(e.target.value)
        }
    }
    
    
}