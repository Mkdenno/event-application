const inputData={ }

document.addEventListener('DOMContentLoaded', ()=>{
    fetchEvents()

})

function displayEvents(events){

    const listing=document.getElementById('eventListing')

    const container=document.createElement('div')

    container.className="container"

    container.innerHTML=`
    <div id="details">
  <h2 id="eventTitle">${events.title}</h2>
  <p id="eventVenue"><span>Venue:</span>
  ${events.venue}</p>
  <p id="eventdate"> <span>Date:</span>
  ${events.date}</p>
  <p id="eventTime"> <span>Time:</span>
  ${events.time}</p>
  <p id="eventDescription"><span>Description:</span>
  ${events.description}</p>
  <div id="btns">
  <button class="likebtn" id="likebtn">❤️</button>
  <button id="deleteBtn">Delete</button>
  </div>
  </div>
  <div id="img">
  <img src="${events.image}"/>
  </div>
    `
   container.querySelector('#deleteBtn').addEventListener('click', ()=>{
       
       container.remove()
       deleteEvents(events.id)
   })

    listing.appendChild(container)
}


 function fetchEvents(){
    fetch('http://localhost:3000/events')

    .then(res => res.json())

    .then(eventData =>eventData.forEach(evnt => displayEvents(evnt)))
 }


const form=document.querySelector('.eventForm')
form.addEventListener('submit', (e)=>{
     e.preventDefault()


const titleEl=document.querySelector('#title').value
const imageEl=document.querySelector('#image').value
const venueEl=document.querySelector('#venue').value
const dateEl=document.querySelector('#date').value
const timeEl=document.querySelector('#time').value
const descriptionEl=document.querySelector('#description').value


if(titleEl=="" && venueEl=="" && dateEl=="" && timeEl=="" && descriptionEl==""){
    alert("All fields are required")
}
else{
inputData.title=titleEl
inputData.image=imageEl
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
}
window.location.reload();

 })

 const btnEl=document.querySelector('.btn').addEventListener('click', ()=>{
     form.style.display="block"
 })


 function deleteEvents(id){
     fetch(`http://localhost:3000/events/${id}`,{
         method: "DELETE",
         headers: {
             "Content-Type":"application/json"
         }
     })
     .then(res => res.json())
     .then(event => console.log(event))

 }

