let Itens = ['Nike', 'Adidas', 'EldenRing'];
const Info = document.getElementById("P");

const Btn = document.getElementById("Btn").addEventListener('click', () => {
    const InputValue = document.getElementById("input").value;

    if(InputValue.toLowerCase() == Itens[0].toLowerCase() || InputValue.toLowerCase() == Itens[1].toLowerCase() || InputValue.toLowerCase() == Itens[2].toLowerCase())
    {
        RandomMsg();
    } else {
        Info.textContent = "Please try again, The Password is not this";
    }
})

function RandomMsg()
{
    const RandomNumber = Math.floor(Math.random() * 3);
    switch(RandomNumber) 
    {
        case 0:
            Info.textContent = "Good Boy";
            break;
        case 1:
            Info.textContent = "Nice!";
            break;
        case 2: 
            Info.textContent = "It is Cool!";
            break;
    }
}
