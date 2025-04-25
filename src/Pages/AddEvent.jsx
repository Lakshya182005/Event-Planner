import React, { useRef, useState } from "react";
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
  let [participants, setParticipants] = useState([]);

  function theSubmit() {
    const newEvent = {
      event: eventRef.current.value,
      date: dateRef.current.value,
      location: locationRef.current.value,
      organizer: organizerRef.current.value,
      description: descriptionRef.current.value,
      status: schedulingRadioRef.current.checked
        ? "Scheduling"
        : "open for registration",
      participants: participants
    };

    addEvent(newEvent);
    alert(`EVENT ${eventRef.current.value} ADDED SUCCESSFULLY!!`);
    eventRef.current.value = "";
    dateRef.current.value = "";
    locationRef.current.value = "";
    organizerRef.current.value = "";
    descriptionRef.current.value = "";
    schedulingRadioRef.current.checked = true;
    setParticipants([]);
    props.setaddmore(!props.addmore);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 overflow-y-auto max-h-screen">
        <h2 className="text-2xl font-bold text-[#640D5F] mb-6">
          Add New Event
        </h2>
        <form className="space-y-4" onSubmit={theSubmit}>
          <input
            type="text"
            ref={eventRef}
            name="event"
            placeholder="Event Name"
            required
            className="w-full p-2 border-2 border-[#FFB200] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
          />

          <input
            type="datetime-local"
            ref={dateRef}
            name="date"
            required
            className="w-full p-2 border-2 border-[#FFB200] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
          />

          <input
            type="text"
            ref={locationRef}
            name="location"
            placeholder="Location"
            required
            className="w-full p-2 border-2 border-[#FFB200] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
          />

          <input
            type="text"
            ref={organizerRef}
            name="organizer"
            placeholder="Organiser"
            required
            className="w-full p-2 border-2 border-[#FFB200] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
          />

          <textarea
            ref={descriptionRef}
            name="description"
            placeholder="Description"
            required
            className="w-full p-2 border-2 border-[#FFB200] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5B00] min-h-[100px]"
          />

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                value="Scheduling"
                name="status"
                ref={schedulingRadioRef}
                defaultChecked
                className="text-[#D91656] focus:ring-[#EB5B00]"
              />

              <label className="ml-2 text-[#640D5F]">Scheduling</label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                value="open for registration"
                name="status"
                ref={openRadioRef}
                className="text-[#D91656] focus:ring-[#EB5B00]"
              />

              <label className="ml-2 text-[#640D5F]">
                Open for Registration
              </label>
            </div>
          </div>

          <section className="border-t border-[#FFB200] pt-4">
            <h4 className="text-lg font-bold text-[#640D5F] mb-2">
              Participants
            </h4>

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
                  required
                  className="w-full p-2 border border-[#FFB200] rounded-md focus:outline-none focus:ring-1 focus:ring-[#EB5B00]"
                />
              ))}
            </div>

            <div className="flex space-x-2 mt-3">
              <button
                type="button"
                onClick={() => setParticipants([...participants, ""])}
                className="bg-[#FFB200] hover:bg-[#EB5B00] text-[#640D5F] px-3 py-1 rounded-md text-sm"
              >
                Add Participant
              </button>

              <button
                type="button"
                onClick={() => {
                  if (participants.length > 1) {
                    setParticipants(participants.slice(0, -1));
                  }
                }}
                className="bg-[#D91656] hover:bg-[#EB5B00] text-white px-3 py-1 rounded-md text-sm"
              >
                Remove Participant
              </button>
            </div>
          </section>

          <div className="flex justify-end pt-4">
            <button
              onClick={() => {
                props.setaddmore(!props.addmore);
              }}
              className="text-[#640D5F] hover:text-[#D91656] font-medium mr-4"
            >
              Go Back
            </button>
            <input
              type="submit"
              className="bg-[#640D5F] hover:bg-[#D91656] text-white font-bold py-2 px-6 rounded-md transition"
              value="Add Event"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;
