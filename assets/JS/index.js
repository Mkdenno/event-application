document.addEventListener('DOMContentLoaded', ()=>{
    fetchEvents()

})



function displayEvents(events){
    const listing=document.getElementById('eventListing')

}


function fetchEvents(){

    fetch('http://localhost:3000/events')

    .then(res => res.json())

    .then(eventData =>eventData.forEach(evnt => displayEvents(evnt)))
}