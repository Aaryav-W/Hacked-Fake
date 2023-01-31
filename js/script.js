
console.log(2+5," its the result of 2+5")

document.getElementById("Get_Hacked").style.display="none"
function changeText() {
    document.getElementById('text').innerHTML='You are Hacked now for 3 seconds !! Welcome to my Secret Lab';
    document.getElementById("Get_Hacked").style.display="block"
    
    setInterval(() => {
        document.getElementById('text').innerHTML='You are unhacked now stay in my secret lab';
    
        document.getElementById("Get_Hacked").style.display="none"
    
    }, 3000);
        
}