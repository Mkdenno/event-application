document.addEventListener('DOMContentLoaded', ()=>{
    fetchEvents()

})



function displayEvents(events){

}


function fetchEvents(){

    fetch('http://localhost:3000/events')

    .then(res => res.json())

    .then(eventData =>eventData.forEach(evnt => displayEvents(evnt)))
}