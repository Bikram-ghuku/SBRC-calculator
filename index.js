window.onload = () => {
    var button = document.getElementsByTagName("button")
    var disp = document.getElementById("display")
    var histDisp = document.getElementsByTagName("textarea")[0]
    var curr = ""
    var arr = []
    var all = ""

    function process(val){
        if((val >= 0 && val <=9) || val == '.' || !isNaN(parseFloat(val))){
            all+=val;
            disp.value = ""
            console.log("Number")
            curr+=val;
            disp.value = curr;
        }else if(val == '='){
            arr.push(curr)
            console.log(arr)
            var lsEle = all.charAt(all.length - 1)
            var res;
            if(lsEle >= '0' && lsEle <= '9' ){
                res = all
            }else{
                res = all.slice(0, all.length - 1)
            }
            var ans = math.evaluate(res)
            disp.value = ans
            console.log(res, ans)
            arr.push("=")
            arr.push(ans)
            arr.push('\n')
            all=ans
            curr=ans
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
            disp.value = val
            arr.push(val)
            console.log("Operator")
        }


        histDisp.innerHTML = ""
        for(var i = 0; i < arr.length; i++){
            histDisp.innerHTML+=(" "+arr[i])
        }
        
    }

    for(var i = 0; i < button.length; i++){
        button[i].onclick = (e) => {
            process(e.target.value)
        }
    }
    
    
}