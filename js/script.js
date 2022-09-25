const priceInfoBlock1 = document.querySelector('#price-info-block-1');
const blockInfo1 = document.querySelector("#block-info-1");
const priceInfoBlock2 = document.querySelector('#price-info-block-2');
const blockInfo2 = document.querySelector("#block-info-2");
const priceInfoBlock3 = document.querySelector('#price-info-block-3');
const blockInfo3 = document.querySelector("#block-info-3");

const okSvg1 = document.querySelectorAll('[data-card-number="ok1"')
const notOkSvg1 = document.querySelectorAll('[data-card-number="not-ok1"')

const okSvg2 = document.querySelectorAll('[data-card-number="ok2"')
const notOkSvg2 = document.querySelectorAll('[data-card-number="not-ok2"')

const okSvg3 = document.querySelectorAll('[data-card-number="ok3"')
const notOkSvg3 = document.querySelectorAll('[data-card-number="not-ok3"')

priceInfoBlock1.addEventListener("mouseover", (event)=>{
    //Делаю светлым блок "Быстрый старт"
    if(!blockInfo1.classList.contains("text-dark")){
        blockInfo1.classList.add("text-dark");
    }
    //Крестики меняю на галочки в блоке "Быстрый старт"
    for(let i = 0; i < notOkSvg1.length; i++){
        if(!notOkSvg1[i].classList.contains("d-none")){
            notOkSvg1[i].classList.add("d-none");
        }
        if(okSvg1[i].classList.contains("d-none")){
            okSvg1[i].classList.remove("d-none");
        }
    }
})

priceInfoBlock1.addEventListener("mouseout", (event)=>{
    //затемняю блок "Быстрый старт"
    if(blockInfo1.classList.contains("text-dark")){
        blockInfo1.classList.remove("text-dark");
    }
    //галочки меняю на крестики в блоке "Быстрый старт"
    for(let i = 0; i < notOkSvg1.length; i++){
        if(notOkSvg1[i].classList.contains("d-none")){
            notOkSvg1[i].classList.remove("d-none");
        }
        if(!okSvg1[i].classList.contains("d-none")){
            okSvg1[i].classList.add("d-none");
        }
    }
})

priceInfoBlock2.addEventListener("mouseover", (event)=>{
    //Делаю светлым блок "Быстрый старт"
    if(!blockInfo1.classList.contains("text-dark")){
        blockInfo1.classList.add("text-dark");
    }
    for(let i = 0; i < notOkSvg1.length; i++){
        if(!notOkSvg1[i].classList.contains("d-none")){
            notOkSvg1[i].classList.add("d-none");
        }
        if(okSvg1[i].classList.contains("d-none")){
            okSvg1[i].classList.remove("d-none");
        }
    }

    //Делаю светлым блок "Всё включено"
    if(!blockInfo2.classList.contains("text-dark")){
        blockInfo2.classList.add("text-dark");
    }
    for(let i = 0; i < notOkSvg2.length; i++){
        if(!notOkSvg2[i].classList.contains("d-none")){
            notOkSvg2[i].classList.add("d-none");
        }
        if(okSvg2[i].classList.contains("d-none")){
            okSvg2[i].classList.remove("d-none");
        }
    }
})

priceInfoBlock2.addEventListener("mouseout", (event)=>{
    //Затемняю блок "Быстрый старт"
    if(blockInfo1.classList.contains("text-dark")){
        blockInfo1.classList.remove("text-dark");
    }
    //галочки меняю на крестики в блоке "Быстрый старт"
    for(let i = 0; i < notOkSvg1.length; i++){
        if(notOkSvg1[i].classList.contains("d-none")){
            notOkSvg1[i].classList.remove("d-none");
        }
        if(!okSvg1[i].classList.contains("d-none")){
            okSvg1[i].classList.add("d-none");
        }
    }
    //Затемняю блок "Всё включено"
    if(blockInfo2.classList.contains("text-dark")){
        blockInfo2.classList.remove("text-dark");
    }
    //галочки меняю на крестики в блоке "Всё ключено"
    for(let i = 0; i < notOkSvg2.length; i++){
        if(notOkSvg2[i].classList.contains("d-none")){
            notOkSvg2[i].classList.remove("d-none");
        }
        if(!okSvg2[i].classList.contains("d-none")){
            okSvg2[i].classList.add("d-none");
        }
    }
})

priceInfoBlock3.addEventListener("mouseover", (event)=>{
    //Делаю светлым блок "Быстрый старт"
    if(!blockInfo1.classList.contains("text-dark")){
        blockInfo1.classList.add("text-dark");
    }
    //Крестики меняю на галочки в блоке "Быстрый старт"
    for(let i = 0; i < notOkSvg1.length; i++){
        if(!notOkSvg1[i].classList.contains("d-none")){
            notOkSvg1[i].classList.add("d-none");
        }
        if(okSvg1[i].classList.contains("d-none")){
            okSvg1[i].classList.remove("d-none");
        }
    }

    //Делаю светлым блок "Всё включено"
    if(!blockInfo2.classList.contains("text-dark")){
        blockInfo2.classList.add("text-dark");
    }
    //Крестики меняю на галочки в блоке "Всё включено"
    for(let i = 0; i < notOkSvg2.length; i++){
        if(!notOkSvg2[i].classList.contains("d-none")){
            notOkSvg2[i].classList.add("d-none");
        }
        if(okSvg2[i].classList.contains("d-none")){
            okSvg2[i].classList.remove("d-none");
        }
    }

    //Делаю светлым блок "Ultra всё включено"
    if(!blockInfo3.classList.contains("text-dark")){
        blockInfo3.classList.add("text-dark");
    }
    //Крестики меняю на галочки в блоке "Ultra всё включено"
    for(let i = 0; i < notOkSvg3.length; i++){
        if(!notOkSvg3[i].classList.contains("d-none")){
            notOkSvg3[i].classList.add("d-none");
        }
        if(okSvg3[i].classList.contains("d-none")){
            okSvg3[i].classList.remove("d-none");
        }
    }
})

priceInfoBlock3.addEventListener("mouseout", (event)=>{
    //Затемняю блок "Быстрый старт"
    if(blockInfo1.classList.contains("text-dark")){
        blockInfo1.classList.remove("text-dark");
    }
    //галочки меняю на крестики в блоке "Быстрый старт"
    for(let i = 0; i < notOkSvg1.length; i++){
        if(notOkSvg1[i].classList.contains("d-none")){
            notOkSvg1[i].classList.remove("d-none");
        }
        if(!okSvg1[i].classList.contains("d-none")){
            okSvg1[i].classList.add("d-none");
        }
    }
    //Затемняю блок "Всё включено"
    if(blockInfo2.classList.contains("text-dark")){
        blockInfo2.classList.remove("text-dark");
    }
    //галочки меняю на крестики в блоке "Всё ключено"
    for(let i = 0; i < notOkSvg2.length; i++){
        if(notOkSvg2[i].classList.contains("d-none")){
            notOkSvg2[i].classList.remove("d-none");
        }
        if(!okSvg2[i].classList.contains("d-none")){
            okSvg2[i].classList.add("d-none");
        }
    }
    //Затемняю блок "Ultra всё включено"
    if(blockInfo3.classList.contains("text-dark")){
        blockInfo3.classList.remove("text-dark");
    }
    //галочки меняю на крестики в блоке "Ultra всё включено"
    for(let i = 0; i < notOkSvg3.length; i++){
        if(notOkSvg3[i].classList.contains("d-none")){
            notOkSvg3[i].classList.remove("d-none");
        }
        if(!okSvg3[i].classList.contains("d-none")){
            okSvg3[i].classList.add("d-none");
        }
    }
})

