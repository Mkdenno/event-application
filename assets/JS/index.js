document.addEventListener('DOMContentLoaded', ()=>{
    fetchEvents()


})


function displayEvents(events){
    const listing=document.getElementById('eventListing')
    // const image=document.getElementById('img')
    // const eventTitle=document.getElementById('eventTitle')
    // const eventVenue=document.getElementById('eventVenue')
    // const eventDescription=document.getElementById('eventDescription')
    const container=document.createElement('div')
    container.className="container"
    container.innerHTML=`
    <img
    id="img"
    src="${events.image}"
    alt="[eventImage]"
  />
  <h2 id="eventTitle">${events.title}</h2>
  <p id="eventVenue">${events.venue}</p>
  <p id="eventVenue">${events.date}</p>
  <p id="eventTime">${events.time}</p>
  <p id="eventDescription">${events.description}</p>
  <button class="like-btn" id="">Like ❤️</button>
  <button>Delete</button>
    `
    listing.appendChild(container)
}


function fetchEvents(){

    fetch('http://localhost:3000/events')

    .then(res => res.json())
    // .then(eventData =>console.log(eventData))

    .then(eventData =>eventData.forEach(evnt => displayEvents(evnt)))
}
 const form=document.querySelector('form')
 form.addEventListener('submit', (e)=>{
     e.preventDefault()
     const titleEl=document.getElementById('title').value
     const venueEl=document.getElementById('venue').value
     const timeEl=document.getElementById('time').value
     const descriptionEl=document.getElementById('description').value
     console.log(e.target)
 })