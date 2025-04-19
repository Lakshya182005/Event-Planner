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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 overflow-y-auto max-h-screen">
            <form className="space-y-4">



                <input type="text" ref={eventRef} name='event' placeholder='Event Name' className="w-full p-2 border-2 border-[#FFB200] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"/>

                <input type="datetime-local" ref={dateRef} name="date" placeholder='Date' className="w-full p-2 border-2 border-[#FFB200] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"/>

                <input type="text" ref={locationRef} name="location" placeholder='Location' className="w-full p-2 border-2 border-[#FFB200] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"/>

                <input type='text' ref={organizerRef} name="organizer" placeholder="Organiser" className="w-full p-2 border-2 border-[#FFB200] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"/>

                <input type = 'text' ref = {descriptionRef} name = "description" placeholder = 'Description'  className="w-full p-2 border-2 border-[#FFB200] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5B00] min-h-[100px]"/>


                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <input type="radio" value='Scheduling' name='status' ref={schedulingRadioRef} className="text-[#D91656] focus:ring-[#EB5B00]"/>

                        <label className="ml-2 text-[#640D5F]">Scheduling</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" value='open for registration' name='status' ref={openRadioRef} className="text-[#D91656] focus:ring-[#EB5B00]" />

                        <label className="ml-2 text-[#640D5F]">Open for Registration</label>
                    </div>
                </div>



                <section className="border-t border-[#FFB200] pt-4">
                
                    <h4 className="text-lg font-bold text-[#640D5F] mb-2">Participants</h4>
                    <div className="space-y-2">
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
                            className="w-full p-2 border border-[#FFB200] rounded-md focus:outline-none focus:ring-1 focus:ring-[#EB5B00]"
                        />
                    ))}
                    </div>
                    <div className="flex space-x-2 mt-3">
                        <button type="button" onClick={() => setParticipants([...participants, ''])} className="bg-[#FFB200] hover:bg-[#EB5B00] text-[#640D5F] px-3 py-1 rounded-md text-sm">
                            Add Participant
                        </button>
                        <button type="button" onClick={() => {
                            if (participants.length > 1) {
                                setParticipants(participants.slice(0, -1));
                            }
                        }} className="bg-[#D91656] hover:bg-[#EB5B00] text-white px-3 py-1 rounded-md text-sm">
                            Remove Participant
                        </button>
                    </div>
                
                </section>
                <div className="flex justify-end pt-4">
                <button onClick={theSubmit} className="bg-[#640D5F] hover:bg-[#D91656] text-white font-bold py-2 px-6 rounded-md transition">
                Save Changes
                </button>
                </div>
            </form>
            
        </div>
    </div>
    

  )
}

export default EditEvent;