function num(){
    for(let i = 1; i <= 10; i++){
       console.log(i)
      }
    }
    
    function oddLoop(){
        let i  = 3;
        let arr = [];
        while (i <= 103){
            if (i % 2 != 0){
                arr.push(i);
                i++;
            }
            else{
                i++;
            }
        }
        return arr;
    
    }
    console.log(oddLoop());
    
    
    
    function arraySum(num){
        let sum = 0;
        num.map(num => sum += num)
    return sum
    }
    console.log(arraySum([1,2,3]));
    
    
    function descendLoop(){
        for(let i = 9; i >= 0; i--){
            console.log(i);
        }
    }
    descendLoop();
    
    function factorial(n){
        let product = 1;
        for(let i = 1; i >= n; i++){
            product *= i;
        }
        return product
    }
    console.log(factorial(10));
    
    
    function sum(n){
        let result = 0
        for( let i = 1; i <= n; i++){
            result += i;
        }
        return result;
    }
    console.log(sum(6));
    
   
    
    function secondLetter(str){
        let result = [];
        for (let i = 0; i < str.length; i++){
            if (i % 2 != 0){
                result.push("Z");
            }else{
                    result.push(str[i]);
                }
            }
            let string = result.join(""); 
            return string;
    }
    console.log(secondLetter("donuts"));