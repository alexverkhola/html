class Pown{
    constructor(startPosition, color){
        
        this.startPosition = startPosition;
        this.color = color;
    }
    
    //moove figure to start position
    onStart(){
        
        
        let el = document.getElementById(this.startPosition).innerHTML;
        console.log(el);
        
        
       document.getElementById(this.startPosition).innerHTML = `<img id="black_pown${this.startPosition}" src="img/black_pawn.png">`;    
    }
    
    //moove figure on one step to forward
    stepForward(){
        
        const step = 1; // long for pown step
        
        let currentPosition = this.getCurrentPosition();
        
  //      console.log(currentPosition);
        
        let position = this.positionConvertorToNum(currentPosition);
        
  //      console.log(position);
        
        position = position.charAt(0) + '' + (parseInt(position.charAt(1)) + step);
        
        position = this.positionConvertorToString(position);
        
        this.removeFigure(currentPosition);
        
        this.moveFigure(position);
        
    //    console.log(position);
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
}

let pown = new Pown("a2", "black");

pown.onStart();

function stepForward(){
    
    pown.stepForward();
    
}


