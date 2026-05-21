document.querySelector('.lien') .addEventlistener(click, (e)=>{
            e.preventDefault();
            const lien = e.target;
            lien.classList.add('transition-active');
            setTimeout(() =>{
                window.location.href =lien.href;
            }, 300);

        });