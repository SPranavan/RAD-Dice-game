var score_1=0
var score_2=0
document.querySelector("#point1").textContent=score_1
document.querySelector("#point2").textContent=score_2

function roll_dice_1(){
    var random_value=Math.floor(Math.random()*6+1)
    var p1=document.querySelector("#dce1")
    var image="Dice_images/dice_"+random_value+".png"
    p1.innerHTML="<img src='"+image+"' alt="+random_value+" style='width:220px;height:220px;margin:20px;'>"
    return random_value;
}

function roll_dice_2(){
    var random_value=Math.floor(Math.random()*6+1)
    var p1=document.querySelector("#dce2")
    var image="Dice_images/dice_"+random_value+".png"
    p1.innerHTML="<img src='"+image+"' alt="+random_value+" style='width:220px;height:220px;margin:20px;'>"
    return random_value;
}

var times=0
function roll_the_dice(){
    times+=1
    if(times%2==1){
        dice_1()
    }
    else{
        dice_2()
    }
}

function dice_1(){
    document.querySelector("#plr_2_text").style.border="0px"
    document.querySelector("#plr_1_text").style.border="4px solid black"

    var random_1=roll_dice_1()
    score_1+=random_1
    document.querySelector("#point1").textContent=score_1

    var random_2=roll_dice_2()
    score_1+=random_2
    document.querySelector("#point1").textContent=score_1

    if(random_1===random_2){
        if(random_1!==1){
            times=0         
        }
        else if(random_1===1){
            score_1=0
            document.querySelector("#point1").textContent=score_1
            times=1
        }
    }  
    if(score_1>=100){
        var image="Dice_images/winner.jpg"
        document.querySelector("#winner1").textContent="WINNER"
        document.querySelector("#container1").style.border="0px"
        bt.disabled=true
    }
}

function dice_2(){
    document.querySelector("#plr_1_text").style.border="0px"
    document.querySelector("#plr_2_text").style.border="4px solid black"

    var random_3=roll_dice_1()
    score_2+=random_3
    document.querySelector("#point2").textContent=score_2

    var random_4=roll_dice_2()
    score_2+=random_4
    document.querySelector("#point2").textContent=score_2

    if(random_3===random_4){
        if(random_3!==1){
            times=1         
        }
        else if(random_3===1){
            score_2=0
            document.querySelector("#point2").textContent=score_2
            times=0
        }
    }
    if(score_2>=100){
        var image="Dice_images/winner.jpg"
        document.querySelector("#winner2").textContent="WINNER"
        document.querySelector("#container2").style.border="0px"
        bt.disabled=true
    }
}

var bt=document.querySelector("#bt_1")

bt.addEventListener("click",roll_the_dice)