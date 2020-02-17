document.addEventListener('DOMContentLoaded', () => {

  const formSubmit = function(event) {
    event.preventDefault();

    const newEntry = document.createElement('li');
    newEntry.innerHTML =`
    <div class = "${event.target.alignment.value} ${event.target.lightsaber_colour.value}">
    <div class = "inside-list-item">
    <h2>Name: ${event.target.name.value}</h2>
    <p>Lightsaber Colour: ${event.target.lightsaber_colour.value}</p>
    <p>Alignment: ${event.target.alignment.value}</p>
    </div>
    </div>`

    if (event.target.alignment.value === "Light"){
      const list = document.querySelector('#list-light-users');
      list.appendChild(newEntry);
    } else {
      const list = document.querySelector('#list-dark-users');
      list.appendChild(newEntry);
    }

    form.reset();
  };



  const deleteAll = function(event) {
    event.preventDefault();
    const lightList = document.querySelector('#list-light-users');
    lightList.innerHTML = '';
    const darkList = document.querySelector('#list-dark-users');
    darkList.innerHTML = '';

    form.reset();
  }

  const form = document.querySelector('#force-user-form');
  form.addEventListener('submit', formSubmit);

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('submit', deleteAll);

});
