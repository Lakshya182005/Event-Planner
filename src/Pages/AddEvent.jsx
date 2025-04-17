import React, { useRef, useState } from 'react';
import { useEvents } from "../Data";

function AddEvent(props) {
    const { addEvent } = useEvents();
    const eventRef = useRef();
    const dateRef = useRef();
    const locationRef = useRef();
    const organizerRef = useRef();
    const descriptionRef = useRef();
    const schedulingRadioRef = useRef();
    const openRadioRef = useRef();
    let [participants,setParticipants] = useState([])

    function theSubmit() {
        const newEvent = {
            event: eventRef.current.value,
            date: dateRef.current.value,
            location: locationRef.current.value,
            organizer: organizerRef.current.value,
            description: descriptionRef.current.value,
            status: schedulingRadioRef.current.checked ? "Scheduling" : "open for registration",
            participants: participants
        };

        addEvent(newEvent);
        
        eventRef.current.value = ''
        dateRef.current.value = ''
        locationRef.current.value = ''
        organizerRef.current.value = ''
        descriptionRef.current.value = ''
        schedulingRadioRef.current.checked = true
        setParticipants([])
        props.setaddmore(!props.addmore);
        
    }

    return (
        <div>
            <form>
                <input type="text" ref={eventRef} name='event' placeholder='Event Name' />
                <input type="datetime-local" ref={dateRef} name="date" placeholder='Date' />
                <input type="text" ref={locationRef} name="location" placeholder='Location' />
                
                
                <input type="radio" value='Scheduling' name='status' ref={schedulingRadioRef} defaultChecked
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
                                const newParticipants = [...participants];
                                newParticipants[ind] = e.target.value;
                                setParticipants(newParticipants);
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
            <button onClick={theSubmit}> Add Event & Go Back</button>
        </div>
    );
}

export default AddEvent;