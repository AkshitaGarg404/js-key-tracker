

document.body.addEventListener('keypress',function(e){

    const container=document.querySelector('.container')
    container.removeChild(document.querySelector('#insert'))
    

    //key
    const key=document.createElement('div')
    key.className='key'
    //Adding ternary operator for space as it's key is " "
    key.textContent=e.key===' '?'Space': e.key
    const smallKey=document.createElement('small')
    smallKey.textContent='key'
    key.appendChild(smallKey)

    //keyCode
    const keyCode=document.createElement('div')
    keyCode.className='key'
    keyCode.textContent=e.keyCode
    const smallKeyCode=document.createElement('small')
    smallKeyCode.textContent='KeyCode'
    keyCode.appendChild(smallKeyCode)

    //code
    const code=document.createElement('div')
    code.className='key'
    code.textContent=e.code
    const smallcode=document.createElement('small')
    smallcode.textContent='code'
    code.appendChild(smallcode)
        
    container.appendChild(key)
    container.appendChild(keyCode)
    container.appendChild(code)
    container.style.height='30vh'
    container.style.marginTop='25vh'


    const resetcontainer=document.createElement('div')
    resetcontainer.className='reset'
    const reset= document.createElement('button')
    reset.textContent='Reset'
    reset.addEventListener('click', function(){
        //reload current page
        location.reload();
    })
    resetcontainer.appendChild(reset)
    document.body.appendChild(resetcontainer)


    //Adding an event listener to reload the page on pressing Enter
    setTimeout(()=>{
            window.addEventListener('keypress',(e)=>{
                if(e.key==="Enter"|| e.code==="Enter"|| e.keyCode===13){
                    location.reload();
                }
            })
        }, 100)
});


