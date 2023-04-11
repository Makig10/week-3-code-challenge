fetch('db.json')
  .then(response => response.json())
  .then(data => {
    const films = data.films[0];
    const posterElement = document.getElementById('poster');
    const titleElement = document.getElementById('title');
    const runtimeElement = document.getElementById('runtime');
    const showtimeElement = document.getElementById('showtime');
    const availableTicketsElement = document.getElementById('availableTickets');

    
    posterElement.src = films.poster;
    titleElement.textContent += films.title;
    runtimeElement.textContent += films.runtime;
    showtimeElement.textContent += films.showtime;
    const availableTickets = films.capacity - films.tickets_sold;
    availableTicketsElement.textContent += availableTickets;
  })
  


  fetch('./db.json')
  .then(response => response.json())
  .then(data => {
    
    const films = data.films;
    const filmsElement = document.getElementById('films');

    
    films.forEach(film => {
      const li = document.createElement('li');
      li.textContent = films.title;
      li.classList.add('film', 'item'); 
      filmsElement.appendChild(li);
    });
  })
  
  fetch('./db.json')
  .then(response => response.json())
  .then(data => {

    const films = data.films;
    const filmsElement = document.getElementById('films');

    
    films.forEach(film => {
      const li = document.createElement('li');
      li.textContent = film.title;
      li.classList.add('film', 'item');
      filmsElement.appendChild(li);

      
      const buyTicketBtn = document.createElement('button');
      buyTicketBtn.textContent = 'Buy Ticket';
      buyTicketBtn.addEventListener('click', () => {
        
        if (films.tickets_sold < films.capacity) {
          films.tickets_sold++; 
          films.available_tickets--; 
          document.getElementById('availableTickets').textContent = `Available Tickets: ${films.available_tickets}`;
        } else {
          alert('This film is sold out.'); 
        }
      });
      li.appendChild(buyTicketBtn); 
    });
  })
  


