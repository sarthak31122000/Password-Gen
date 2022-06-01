let alphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','$','!','+','*','/','/','/','/','/','$','$','$','$','$','$','$'];
let length=alphabets.length;
let cardBtn=document.querySelector('.card-btn')
let box1=document.getElementById('box-1');
let box2=document.getElementById('box-2');
let box3=document.getElementById('box-3');
let box4=document.getElementById('box-4');
let boxes=[box1,box2,box3,box4];
console.log(length);

function generatePassword(){
    let string=''
    for(let i=0;i<8;i++){
        let index=Math.floor(Math.random()*length)
        // console.log(index)
        string+=alphabets[index]
    }

    return string
}


cardBtn.addEventListener('click',()=>{
    for(let i=0;i<4;i++){
        let newString=generatePassword();
        // console.log(newString)
        boxes[i].textContent=newString;
    }
})
