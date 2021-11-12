let button=document.getElementById("button");
var numberInTheShape=1;
var oldValue=0;
button.onclick=()=>{
    let n=document.getElementById("number").value;
    const circle=document.getElementById("circle");
    const square=document.getElementById("square");
    const rectangle=document.getElementById("rectangle");
    const ellipse=document.getElementById("ellipse");
    const $box =document.getElementById("box");
   
    n=Number(oldValue)+Number(n);
    for(let j=numberInTheShape;j<=n;j++){
        var shape=document.createElement("div");
        shape.innerHTML+=numberInTheShape;
        if(square.checked){
            shape.classList.add("square");
        }
        else if(rectangle.checked){
            shape.classList.add("rectangle");
        }
        else if(ellipse.checked){
            shape.classList.add("ellipse");
        }
         else if(circle.checked){
            shape.classList.add("circle");
        }
        else{
            document.write("invalid input");
        }
        $box.appendChild(shape);
        numberInTheShape++;
        oldValue=document.getElementById("box").lastElementChild.innerHTML;

    }
}
//    <div class="square">   1  </div>