const inputData={ }

document.addEventListener('DOMContentLoaded', ()=>{

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
  <h2 id="eventTitle">${events.title}</h2>
  <p id="eventVenue"><span>Venue:</span>
  ${events.venue}</p>
  <p id="eventdate"> <span>Date:</span>
  ${events.date}</p>
  <p id="eventTime"> <span>Time:</span>
  ${events.time}</p>
  <p id="eventDescription"><span>Description:</span>
  ${events.description}</p>
  <button class="like-btn" id="">Like ❤️</button>
  <button>Delete</button>
    `
    listing.appendChild(container)
}



    fetch('http://localhost:3000/events')

    .then(res => res.json())
    // .then(eventData =>console.log(eventData))

    .then(eventData =>eventData.forEach(evnt => displayEvents(evnt)))

const form=document.querySelector('.eventForm')
form.addEventListener('submit', (e)=>{
     e.preventDefault()


const titleEl=document.querySelector('#title').value
const venueEl=document.querySelector('#venue').value
const dateEl=document.querySelector('#date').value
const timeEl=document.querySelector('#time').value
const descriptionEl=document.querySelector('#description').value

inputData.title=titleEl
inputData.venue=venueEl
inputData.date=dateEl
inputData.time=timeEl
inputData.description=descriptionEl

     fetch('http://localhost:3000/events',{
         method :"POST",
         headers:{
             "content-Type":"application/json",
             accept:"application/json"
         },
         body:JSON.stringify(inputData)
     })
     .then(res =>res.json())
     .then(dataEvnt =>console.log(dataEvnt))

 })
