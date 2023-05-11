const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');    //parent (i.e. "container")
const sectBtn = document.querySelectorAll('.control');      //child (i.e. each individual button)
const allSelections = document.querySelector('.main-content');

function changePage()
{
    //button click active class:
    for (let i = 0; i < sectBtn.length; i++)
    {
        //when clicking on new icon button, clear current button
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';

        })
    }

    //sections active class:
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

    })
}
changePage();