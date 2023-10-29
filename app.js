const listiteminput = document.querySelector('#listiteminput');
const myUnOrderedList=document.querySelector('ul');
const submitBtn=document.querySelector('submit');

console.log(myUnOrderedList.innerHTML);

function submitHandler(){

    let val= listiteminput.value
    const li =`
    
    <li id=${val}>
    <h1>${val}</h1>
    <div>
        <span class="listButton" id="edit" onclick="editHandler('${val}')">edit</span>
        <span class="listButton" id="delete" onclick="deleteHandler('${val}')">delete</span>
    </div>
</li>

`

myUnOrderedList.innerHTML += li;
listiteminput.value ='';
    
    
}

function editHandler(val){
    const li=document.getElementById(val);
    listiteminput.value=li.children[0].textContent;
    submitBtn.textContent='Edit';
    submitBtn.setAttribute('onclick',`newEditHandler('${val}')`);



}

function deleteHandler(val){

    const li =document.getElementById(val);
    myUnOrderedList.removeChild(li);
}
function newEditHandler(val){


    const li= document.getElementById(val);
    li.children[0].innerHTML=listiteminput.value;
    submitBtn.textContent='submit'
    submitBtn.setAttribute('onclick',`submitHandler()`);
    listiteminput.value=''

}