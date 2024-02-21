const divContainer = document.querySelector('#workingelem');

let isClicked = true;

let showOrHide = function(){    
    if(isClicked){    
        divContainer.style.display = 'block';
        isClicked = false;
    }else{
        divContainer.style.display='none';
        isClicked=true;
    }
}