const readmore = document.querySelector('#readmore');
    let currentItems = 3;
    readmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.tree-divs .tree-divs-div')];
        for (let i = currentItems; i < currentItems + 3; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
            }
        }
        currentItems += 3;

        // Load more button will be hidden after list fully loaded
        if (currentItems >= elementList.length) {
            event.target.style.display = 'none';
        }
    })