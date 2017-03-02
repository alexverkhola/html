class Pown{
    constructor(startPosition, color){
        
        this.startPosition = startPosition;
        this.color = color;
    }
    
    //moove figure to start position
    onStart(){
        
        
        let el = document.getElementById(this.startPosition).innerHTML;
        console.log(el);
        
        
       document.getElementById(this.startPosition).innerHTML = `<img id="black_pown${this.startPosition}" src="img/black_pawn.png" draggable="true" ondragstart="drag(event)" ondragend="dragend(event)">`;    
    }
    
    //find alowed field to step
    getAllowedField(){
        
        const step = "01"; // long for pown step
        
        let currentPosition = this.getCurrentPosition();
        
        console.log(currentPosition);
        
        let position = this.positionConvertorToNum(currentPosition);
        
        console.log(position);
        
        //Здесь нужно найти все возможные позиции для хода
        
        let allowMoove = this.pos(position, step);
                
        console.log(allowMoove);
        
        let arrayInt = []; // массив для хранения разрешённых для хода клеток в цифровом варианте     
        let arrayString = []; // массив для хранения разрешённых для хода клеток в строковом варианте  
        
        arrayInt.push(allowMoove);
        
        for(let x of arrayInt){
            
            arrayString.push(this.positionConvertorToString(x));
        }
        
        return arrayString;
    }
    
    getCurrentPosition(){
        
        return document.getElementById(`black_pown${this.startPosition}`).parentElement.id;
        
    }
    
    //convert position from board to array
    positionConvertorToNum(currentPosition){
        
        let firstSymbol;
        let lastSymbol;
        
        //convert from string to number
        switch (currentPosition.charAt(0)) {
            case 'a' : firstSymbol = 0; break;
            case 'b' : firstSymbol = 1; break;
            case 'c' : firstSymbol = 2; break;
            case 'd' : firstSymbol = 3; break;
            case 'e' : firstSymbol = 4; break;
            case 'f' : firstSymbol = 5; break;
            case 'g' : firstSymbol = 6; break;
            case 'h' : firstSymbol = 7; break;
           }
            
        switch (currentPosition.charAt(1)) {
            case  '1' : lastSymbol = 0; break;         
            case  '2' : lastSymbol = 1; break;         
            case  '3' : lastSymbol = 2; break;         
            case  '4' : lastSymbol = 3; break;         
            case  '5' : lastSymbol = 4; break;         
            case  '6' : lastSymbol = 5; break;         
            case  '7' : lastSymbol = 6; break;         
            case  '8' : lastSymbol = 7; break;         
           }
            
        return (firstSymbol + '' +  lastSymbol);
        
    }
    
    positionConvertorToString(position){
        
        let firstSymbol;
        let lastSymbol;
        
        switch(position.charAt(0)){
                
            case '0' : firstSymbol = 'a'; break;
            case '1' : firstSymbol = 'b'; break;
            case '2' : firstSymbol = 'c'; break;
            case '3' : firstSymbol = 'd'; break;
            case '4' : firstSymbol = 'e'; break;
            case '5' : firstSymbol = 'f'; break;
            case '6' : firstSymbol = 'g'; break;
            case '7' : firstSymbol = 'h'; break;
                
        }
        
        switch(position.charAt(1)){
                
            case '0' : lastSymbol = '1'; break;
            case '1' : lastSymbol = '2'; break;
            case '2' : lastSymbol = '3'; break;
            case '3' : lastSymbol = '4'; break;
            case '4' : lastSymbol = '5'; break;
            case '5' : lastSymbol = '6'; break;
            case '6' : lastSymbol = '7'; break;
            case '7' : lastSymbol = '8'; break;
        }
        
        return (firstSymbol  + '' + lastSymbol);
        
    }
    

    removeFigure(currentPosition){
        
        document.getElementById(currentPosition).innerHTML = '';
    }
    
    moveFigure(position){
    
       document.getElementById(position).innerHTML = `<img id="black_pown${this.startPosition}" src="img/black_pawn.png">`;
        
    }
    
    pos(currentPosition, step){
        
        let x = parseInt(currentPosition.charAt(0));
        let y = parseInt(currentPosition.charAt(1));
        
        x = x + parseInt(step.charAt(0));
        y = y + parseInt(step.charAt(1));
        
        return (x+''+y);
    
        
    }
}

let pow = new Pown("a2", "black");

pow.onStart();


/////
/////
///// //  there are Mistake

function drag(ev){
    ev.dataTransfer.setData("pown", ev.target.id);
    
    let arrayString = pown.getAllowedField();
    
    for(let x of arrayString){
        document.getElementById(x).style.border = '2px solid black' ;
        document.getElementById(x).setAttribute("ondrop", "drop(event)");
        document.getElementById(x).setAttribute("ondragover", "allowDrop(event)");
    }
}

//  Когда фигура отпущена убирает border-box;
function dragend(event){
      let arrayString = pown.getAllowedField();
    
    for(let x of arrayString){
        document.getElementById(x).style.border = 'none' ;
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("pown");
    event.target.appendChild(document.getElementById(data));
    
    event.target.style.border = 'none';
    event.target.removeAttribute("ondrop");
    event.target.removeAttribute("ondragover");
}




