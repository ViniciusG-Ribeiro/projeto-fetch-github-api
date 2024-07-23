import {baseUrl, eventsQuantity,eventsQuantityFetch} from "/src/scripts/variables.js"

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantityFetch}`)

    const events = await response.json()
    
    if(events.message == "Not Found"){
        return
    }

    const filteredEvents = events.filter(event =>{
        return event.type == "PushEvent" || event.type == "CreateEvent";
    });

    return filteredEvents.slice(0,eventsQuantity)

}

export {getEvents}