document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  //EATING THE BURGERS
    const devourBtns = document.querySelectorAll('.devoured');
  //Button
    if (devourBtns) {
      devourBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          //get id from selected bruger
          const id = e.target.getAttribute('data-id');
          const newDevour = e.target.getAttribute('data-newdevour');
          const newDevourState = {
            devoured: newDevour,
          };
          
          fetch("/api/burger/" + id, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            body: JSON.stringify(newDevourState),
            //if error alert
          }).then((response) => {
            if (response.ok) {
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // MAKING NEW BURGER
    const createBurgerBtn = document.getElementById('create-form');
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
        // Set the name of burger and make it not eaten yet
        const newBurger = {
          name: document.getElementById('ca').value.trim(),
          devoured: false,
        };
        // POST request
        fetch('/api/burger', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          // make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
          //clear form
        }).then(() => {
          document.getElementById('ca').value = '';
          //reload to see new burger
          location.reload();
        });
      });
    }
  });
  