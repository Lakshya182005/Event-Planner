import React, { useEffect, useRef, useState } from 'react'
import { useEvents } from '../Data';

function EditEvent(props) {

    const {updateEvent}  = useEvents()
    const {events}  = useEvents()

    let currEvent = events[props.eventIndex]
    console.log(currEvent)

    const eventRef = useRef();
    const dateRef = useRef();
    const locationRef = useRef();
    const organizerRef = useRef();
    const descriptionRef = useRef();
    const schedulingRadioRef = useRef();
    const openRadioRef = useRef();
    const [participants, setParticipants] = useState(currEvent.participants || [])

    useEffect(()=>{
        eventRef.current.value = currEvent.event
        dateRef.current.value = currEvent.date
        locationRef.current.value = currEvent.location
        organizerRef.current.value = currEvent.organizer
        descriptionRef.current.value = currEvent.description
        eventRef.current.value = currEvent.event

        if(currEvent.status === "open for registration") {
            openRadioRef.current.checked = true;
          } else {
            schedulingRadioRef.current.checked = true;
          }


    },[currEvent])

    function theSubmit() {
        updateEvent(props.eventIndex, {
            event: eventRef.current.value,
            date: dateRef.current.value,
            location: locationRef.current.value,
            organizer: organizerRef.current.value,
            description: descriptionRef.current.value,
            status: schedulingRadioRef.current.checked ? "Scheduling" : "open for registration",
            participants: participants.filter(p => p.trim() !== '')
          });
        
          props.cancelEdit();
    }


  return (
    <div>
            <form>
                <input type="text" ref={eventRef} name='event' placeholder='Event Name' />
                <input type="datetime-local" ref={dateRef} name="date" placeholder='Date' />
                <input type="text" ref={locationRef} name="location" placeholder='Location' />
                
                
                <input type="radio" value='Scheduling' name='status' ref={schedulingRadioRef} checked={currEvent?.status === "Scheduling"}
                />
                <label>Scheduling</label>
                
                <input type="radio" value='open for registration' name='status' ref={openRadioRef} />
                <label>Open for Registration</label>
                
                <input type='text' ref={organizerRef} name="organizer" placeholder="Organiser" />
                <input type = 'text' ref = {descriptionRef} name = "description" placeholder = 'Description'/>
                <section>
                <div>
                    <h4>Participants</h4>
                    {participants.map((parti, ind) => (
                        <input
                            key={ind}
                            type="text"
                            value={parti}
                            onChange={(e) => {
                                const oldParticipants = [...participants];
                                oldParticipants[ind] = e.target.value;
                                setParticipants(oldParticipants);
                            }}
                            placeholder={`Participant #${ind + 1}`}
                        />
                    ))}
                    <div>
                        <button type="button" onClick={() => setParticipants([...participants, ''])}>
                            Add Participant
                        </button>
                        <button type="button" onClick={() => {
                            if (participants.length > 1) {
                                setParticipants(participants.slice(0, -1));
                            }
                        }}>
                            Remove Participant
                        </button>
                    </div>
                </div>
                </section>
            </form>
            <button onClick={theSubmit}> Save Changes</button>
    </div>
    

  )
}

export default EditEvent;