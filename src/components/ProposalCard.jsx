import React from "react";
import { useEvents } from "../Data";
import { useProposal } from "../Proposed";

function ProposalCard(props) {
  const { isStudent,addEvent } = useEvents();
  const { deleteProps } = useProposal()
  const formattedDate = new Date(props.data.date).toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });

  

  return (
    <div
      className={`bg-white p-4 rounded-lg min-w-[300px] shadow-md border-l-4 hover:shadow-lg transition ${
        props.data.status == "Scheduled"
          ? "border-[#D91656]"
          : "border-[#00F604]"
      }`}
    >
      <h1 className="text-xl font-bold text-[#640D5F]">{props.data.event}</h1>
      <h4 className="text-[#EB5B00]">{formattedDate}</h4>
      <h3 className="text-[#FFB200]">{props.data.location}</h3>
      <p className="text-gray-600 my-2">{props.data.description}</p>
      <button
        onClick={() => {
          alert(props.data.participants);
        }}
        className="bg-[#640D5F] hover:bg-[#D91656] text-white px-3 py-1 text-sm rounded"
      >
        Participants
      </button>

      {isStudent
      ?<button
      onClick={() => {deleteProps(props.index)}}
      className="bg-[#FFB200] hover:bg-[#EB5B00] text-[#640D5F] px-3 py-1 text-sm rounded"
    >
      Delete Proposal
    </button>
      :<div>
      <button
        onClick={() => {deleteProps(props.index)}}
        className="bg-[#FFB200] hover:bg-[#EB5B00] text-[#640D5F] px-3 py-1 text-sm rounded"
      >
        Reject Proposal
      </button>
      <button
        onClick={() => {
          addEvent(props.index);
          deleteProps(props.index)

        }}
        className="bg-[#D91656] hover:bg-[#EB5B00] text-white px-3 py-1 text-sm rounded"
      >
        Accept Proposal
      </button>
    </div>
      }
    </div>
  );
}

export default ProposalCard;
