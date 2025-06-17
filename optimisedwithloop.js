window.addEventListener('keydown',(e)=>{
    const container=document.querySelector('.container')
    //Make window empty for new cards... no need for reset button... it also removes insert div in first reload
    container.innerHTML='';

    const keyDetails={
        key: e.key===' '?"Space": e.key,
        keyCode :e.keyCode,
        code:e.code,
    }

    for(detail in keyDetails){
        const div=document.createElement('div')
        div.className='key'
        const small=document.createElement('small')

        const text=document.createTextNode(detail)
        const value=document.createTextNode(keyDetails[detail])
        
        small.appendChild(text)
        div.appendChild(value)
        div.appendChild(small)

        container.appendChild(div)
    }

    //Thus whenever you what to create same html and css cards or elements with different text you can simpply use arrays and object with loops
    // increases code readability and reusability
})