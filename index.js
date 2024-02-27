window.onload = () => {
    var button = document.getElementsByTagName("button")
    var disp = document.getElementById("display")
    var curr = ""
    var arr = []
    var all = ""

    function process(val){
        if((val >= 0 && val <=9) || val == '.'){
            all+=val;
            disp.value = ""
            console.log("Number")
            curr+=val;
            disp.value = curr;
        }else if(val == '='){
            console.log(arr)
            var lsEle = all.charAt(all.length - 1)
            var res;
            if(lsEle >= '0' && lsEle <= '9' ){
                res = all
            }else{
                res = all.slice(0, all.length - 1)
            }
            disp.value = math.evaluate(res)
            console.log(res, math.evaluate(res))
        }else if(val=='CE'){
            disp.value = ""
            curr = curr.slice(0, curr.length - 1)
            disp.value = curr
            all = all.slice(0, all.length - 1)
        }else if(val == 'AC'){
            disp.value = ""
            arr = []
            all =""
            curr =""
        }else{
            all+=val;
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