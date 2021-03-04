const inputBox=document.querySelector('.inpts');

const cardContainer=document.querySelector('.cards-body');

const accordionDiv=document.querySelector('.accordion');

const accordionValue=accordionDiv.querySelectorAll('.paragraph');


//inputing a value
inputBox.addEventListener('keyup',(e)=>{

    console.log(e.target.value);
    let cardText=document.querySelector('.cards-text').textContent;
    // console.log(cardText)

    const divHeader=document.querySelector('.cards-value');

    let kg='kilograms';
    
    if(cardText.toLowerCase().includes('kilograms')){
        divHeader.innerText=e.target.value/1000;

    }else if (cardText.toLowerCase().includes('meters')) {
        divHeader.innerText=e.target.value/1000;
    }
});


// displaying accordion
cardContainer.addEventListener('click',(e)=>{

    const accordionDiv=document.querySelector('.accordion');
    

    if(e.target.classList.contains('fa-caret-down')){

        accordionDiv.classList.toggle('active');
        e.target.classList.toggle('fa-caret-up');

    }
    
});


//getting the pararaph text to show in the h3 element tag
accordionValue.forEach(item=>{

    item.addEventListener('click',(e)=>{

        const pararaphSelect=e.target.parentElement.previousElementSibling;

        const paraGraph=pararaphSelect.children[0].firstElementChild;

        if(paraGraph.classList.contains('cards-text')){
            
            paraGraph.innerText=e.target.innerText;
        }

    });

});
