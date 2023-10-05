window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.lead__btn');
    const inp = document.querySelector('.squeeze__input');
    const leadError = document.querySelector('.lead__error');
    const leadErrorText = document.querySelector('.lead__error-text');
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/i;

    function classListAdd(elements, className) {
        elements.forEach((el) => {
            el.classList.add(className);
        });
        
    }

    function classListRemove(elements, className) {
        elements.forEach((el) => {
            el.classList.remove(className);
        });
    }

    btn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(regex.test(inp.value));
        if (regex.test(inp.value)) {
            classListAdd([leadError, leadErrorText], 'hide');
            classListRemove([inp], 'error');
        }
        else {
            classListRemove([leadError, leadErrorText], 'hide');
            classListAdd([inp], 'error');
        }

    })

})