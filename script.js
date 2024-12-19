let input=document.querySelector('input');
let button=document.querySelector('button');
let img=document.querySelector('img');
let message=document.querySelector('.ms');
let GQC=()=>{
    let url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    img.src=url;
}
button.addEventListener('click',()=>{
    if(input.value.length>0){
        GQC();
        message.innerText=" ";
    }
    else{
        alert("please enter url or text");
        input.classList.add('shake');
        setTimeout(()=>{
            input.classList.remove('shake');
        },1000);
    }
})