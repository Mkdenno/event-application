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

}


function fetchEvents(){

    fetch('http://localhost:3000/events')

    .then(res => res.json())

    .then(eventData =>eventData.forEach(evnt => displayEvents(evnt)))
}