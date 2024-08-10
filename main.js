const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const chars = ['*','/','+','-','%','=','.','POW'];
let res = '';
const calculate = (val)=>{
    if(val === '=' && res != ''){
        res = eval(res);
    } else if(val === 'AC'){
        res = '';
    } else if(val === 'DEL'){
        res = res.toString().slice(0,-1);
    }
    else{
        if(res === '' && chars.includes(val)) return;
        if(val === 'POW') val = val.replace('POW','**');
        res += val;
    }
    display.textContent = res;
};
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        const val = e.target.dataset.value;
        calculate(val);
    })
});