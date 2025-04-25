import React, { createContext, useContext, useEffect, useState } from "react";

const initialData = [
  {
    event: "Tech Talk on Cybersecurity",
    date: "2025-04-15T09:00:00Z",
    location: "Room 202",
    organizer: "Security Club",
    description: "An informative session on modern cybersecurity practices.",
    status: "Scheduled",
    participants: ["Alice Johnson", "Bob Smith", "Charlie Davis"]
  },
  {
    event: "AI Workshop",
    date: "2025-04-15T14:00:00Z",
    location: "Room 301",
    organizer: "AI Club",
    description: "Hands-on workshop exploring the fundamentals of AI.",
    status: "Scheduled",
    participants: ["David Lee", "Eva Zhang", "Frank Moore"]
  },
  {
    event: "Book Club Meeting",
    date: "2025-04-15T17:30:00Z",
    location: "Library",
    organizer: "Literature Society",
    description: "A meeting to discuss the latest book of the month.",
    status: "Scheduled",
    participants: ["Grace Harris", "Hannah Turner", "Isaac Clarke"]
  },
  {
    event: "Hackathon 2025",
    date: "2025-04-16T09:00:00Z",
    location: "Engineering Building",
    organizer: "Tech Club",
    description: "A 24-hour coding competition with exciting prizes.",
    status: "Open for Registration",
    participants: ["Jack Wilson", "Kara Moore", "Liam Evans"]
  },
  {
    event: "Outdoor Yoga Class",
    date: "2025-04-16T07:00:00Z",
    location: "Central Park",
    organizer: "Fitness Society",
    description:
      "A morning yoga class to start your day relaxed and energized.",
    status: "Scheduled",
    participants: ["Mia Adams", "Noah Baker", "Olivia Scott"]
  },
  {
    event: "Painting Workshop",
    date: "2025-04-17T10:00:00Z",
    location: "Art Studio",
    organizer: "Creative Arts Club",
    description:
      "A hands-on workshop where participants can explore their creativity with paint.",
    status: "Scheduled",
    participants: ["Paul Green", "Quincy White", "Rachel Blue"]
  },
  {
    event: "Open Mic Night",
    date: "2025-04-17T18:00:00Z",
    location: "Student Center",
    organizer: "Music & Arts Society",
    description:
      "A night for students to showcase their musical or spoken-word talent.",
    status: "Scheduled",
    participants: ["Samantha Lee", "Tina Harris", "Victor Brown"]
  },
  {
    event: "Tech Expo 2025",
    date: "2025-04-18T09:00:00Z",
    location: "Convention Center",
    organizer: "University Innovation Hub",
    description:
      "An exhibition showcasing the latest technology and innovations in various fields.",
    status: "Open for Registration",
    participants: ["William Carter", "Xander King", "Yara Foster"]
  },
  {
    event: "Sports Day",
    date: "2025-04-18T08:00:00Z",
    location: "Campus Stadium",
    organizer: "Sports Department",
    description:
      "A day filled with various athletic events and fun competitions.",
    status: "Scheduled",
    participants: ["Zoe Evans", "Alex Taylor", "Bryan Clark"]
  },
  {
    event: "Charity Run",
    date: "2025-04-19T07:00:00Z",
    location: "River Walk",
    organizer: "Volunteer Network",
    description: "A charity run to raise funds for a local cause.",
    status: "Scheduled",
    participants: ["Caitlin Miller", "Daniel Young", "Emily Scott"]
  },
  {
    event: "Career Fair 2025",
    date: "2025-04-19T10:00:00Z",
    location: "Campus Hall",
    organizer: "Placement Cell",
    description:
      "Meet recruiters from top companies and explore career opportunities.",
    status: "Scheduled",
    participants: ["Aaron Blake", "Becca Ford", "Carl Thomas"]
  },
  {
    event: "Photography Walk",
    date: "2025-04-20T06:30:00Z",
    location: "City Gardens",
    organizer: "Photography Club",
    description:
      "A guided morning walk to capture beautiful landscapes and urban life.",
    status: "Scheduled",
    participants: ["Diana Miller", "Ethan Ross", "Fiona Grey"]
  },
  {
    event: "Environmental Awareness Rally",
    date: "2025-04-20T09:00:00Z",
    location: "Downtown Square",
    organizer: "Eco Club",
    description:
      "A rally to spread awareness on climate change and sustainable living.",
    status: "Scheduled",
    participants: ["George Hill", "Hailey Brooks", "Ivan Reed"]
  },
  {
    event: "Internship Showcase",
    date: "2025-04-21T11:00:00Z",
    location: "Auditorium B",
    organizer: "Career Services",
    description: "Students present their internship experiences and projects.",
    status: "Scheduled",
    participants: ["Jasmine White", "Kevin Long", "Lara Stone"]
  },
  {
    event: "Film Screening Night",
    date: "2025-04-21T20:00:00Z",
    location: "Open Lawn",
    organizer: "Film Society",
    description:
      "An outdoor movie screening under the stars with free popcorn.",
    status: "Scheduled",
    participants: ["Mason Gray", "Nina Blake", "Oscar Dean"]
  },
  {
    event: "Mental Health Workshop",
    date: "2025-04-22T13:00:00Z",
    location: "Wellness Center",
    organizer: "Health Committee",
    description: "A guided session on coping strategies and mental well-being.",
    status: "Scheduled",
    participants: ["Priya Kapoor", "Quinn Adams", "Riley Novak"]
  },
  {
    event: "Robotics Demo Day",
    date: "2025-04-22T15:00:00Z",
    location: "Tech Lab",
    organizer: "Robotics Club",
    description: "Live demos of student-built robots and automation projects.",
    status: "Scheduled",
    participants: ["Sam Tan", "Tanya Wu", "Umar Patel"]
  },
  {
    event: "Cooking Masterclass",
    date: "2025-04-23T12:00:00Z",
    location: "Culinary Studio",
    organizer: "Food Club",
    description: "Learn to cook a 3-course meal with a professional chef.",
    status: "Open for Registration",
    participants: ["Vera Lin", "Walter Miles", "Xenia Cruz"]
  },
  {
    event: "3v3 Basketball Tournament",
    date: "2025-04-23T16:00:00Z",
    location: "Sports Court A",
    organizer: "Sports Club",
    description:
      "Fast-paced basketball matches with small teams and fun rewards.",
    status: "Scheduled",
    participants: ["Yusuf Khan", "Zara Lane", "Aaron Yu"]
  },
  {
    event: "Startup Pitch Fest",
    date: "2025-04-24T10:00:00Z",
    location: "Innovation Hub",
    organizer: "Entrepreneurship Cell",
    description:
      "Aspiring founders pitch ideas to industry mentors and investors.",
    status: "Open for Registration",
    participants: ["Bella Shore", "Cody Wang", "Dana Ortiz"]
  },
  {
    event: "Language Exchange Meetup",
    date: "2025-04-24T17:00:00Z",
    location: "Cultural Center",
    organizer: "Language Club",
    description:
      "Practice new languages with native speakers in a fun setting.",
    status: "Scheduled",
    participants: ["Amira Suleiman", "Bruno Silva", "Chloe Nguyen"]
  },
  {
    event: "Resume Building Workshop",
    date: "2025-04-25T10:30:00Z",
    location: "Career Lab",
    organizer: "Career Development Center",
    description: "Learn how to craft a professional resume and cover letter.",
    status: "Scheduled",
    participants: ["Derek Chan", "Elena Rivera", "Farhan Ali"]
  },
  {
    event: "Indie Game Night",
    date: "2025-04-25T18:00:00Z",
    location: "Student Lounge",
    organizer: "Gaming Society",
    description: "Play and rate indie games created by student developers.",
    status: "Scheduled",
    participants: ["Grace Li", "Harvey Grant", "Isabel Santos"]
  },
  {
    event: "Public Speaking Seminar",
    date: "2025-04-26T11:00:00Z",
    location: "Seminar Room 2",
    organizer: "Toastmasters Club",
    description: "Enhance your communication skills with guided sessions.",
    status: "Scheduled",
    participants: ["Jason Patel", "Kira Thompson", "Liam Brooks"]
  },
  {
    event: "Astronomy Night",
    date: "2025-04-26T21:00:00Z",
    location: "Observatory",
    organizer: "Astronomy Club",
    description:
      "Stargazing session and a talk on constellations and space missions.",
    status: "Scheduled",
    participants: ["Mona Das", "Nate O'Brien", "Ophelia Grant"]
  },
  {
    event: "Virtual Reality Workshop",
    date: "2025-04-15T08:30:00Z",
    location: "Room 405",
    organizer: "VR Club",
    description: "An immersive workshop on VR technology and applications.",
    status: "Scheduled",
    participants: ["Aaron Lynch", "Brenda Kim", "Carl Winston"]
  },
  {
    event: "Digital Marketing Seminar",
    date: "2025-04-15T11:30:00Z",
    location: "Room 202",
    organizer: "Marketing Society",
    description: "A seminar on digital marketing strategies and trends.",
    status: "Scheduled",
    participants: ["David Bell", "Eva Mendez", "Felicity Yates"]
  },
  {
    event: "Chess Tournament",
    date: "2025-04-15T13:00:00Z",
    location: "Room 301",
    organizer: "Chess Club",
    description: "A competitive chess tournament for beginners and experts.",
    status: "Open for Registration",
    participants: ["George Brown", "Hannah Smith", "Isaac Turner"]
  },
  {
    event: "Networking Lunch",
    date: "2025-04-16T12:00:00Z",
    location: "Campus Cafeteria",
    organizer: "Alumni Relations",
    description:
      "An opportunity for students to network with alumni over lunch.",
    status: "Scheduled",
    participants: ["Jackie Parker", "Laura Cooper", "Mark Green"]
  },
  {
    event: "3D Printing Workshop",
    date: "2025-04-16T14:00:00Z",
    location: "Tech Lab",
    organizer: "Engineering Society",
    description:
      "Learn the basics of 3D printing and create your first object.",
    status: "Scheduled",
    participants: ["Nina Allen", "Oliver Reed", "Paul Woods"]
  },
  {
    event: "Creative Writing Class",
    date: "2025-04-16T16:30:00Z",
    location: "Writing Room",
    organizer: "Literature Club",
    description:
      "Explore storytelling techniques and improve your writing skills.",
    status: "Scheduled",
    participants: ["Quincy Harris", "Rachel Scott", "Sam Adams"]
  },
  {
    event: "Debate Championship",
    date: "2025-04-17T09:00:00Z",
    location: "Auditorium A",
    organizer: "Debate Club",
    description: "A championship-style debate on current global issues.",
    status: "Scheduled",
    participants: ["Tina Wong", "Umar Khan", "Vicky Lee"]
  },
  {
    event: "Cooking Demonstration",
    date: "2025-04-17T11:30:00Z",
    location: "Culinary Lab",
    organizer: "Gastronomy Society",
    description: "Watch a professional chef demonstrate the art of cooking.",
    status: "Open for Registration",
    participants: ["William Harris", "Xander Patel", "Yasmine Green"]
  },
  {
    event: "Startup Mentorship Program",
    date: "2025-04-17T14:00:00Z",
    location: "Innovation Hub",
    organizer: "Entrepreneurship Cell",
    description:
      "A session with mentors to help guide students with startup ideas.",
    status: "Scheduled",
    participants: ["Zachary Simmons", "Ava Baker", "Brandon Thompson"]
  },
  {
    event: "Film Screening: Indie Shorts",
    date: "2025-04-18T10:00:00Z",
    location: "Room 401",
    organizer: "Film Club",
    description:
      "A screening of selected indie short films from student filmmakers.",
    status: "Scheduled",
    participants: ["Caitlyn Reid", "Daniel Harper", "Emily Ford"]
  },
  {
    event: "Climate Change Symposium",
    date: "2025-04-18T12:30:00Z",
    location: "Auditorium C",
    organizer: "Environmental Society",
    description:
      "A discussion on the effects of climate change and what can be done.",
    status: "Scheduled",
    participants: ["Francesca Turner", "George Wallace", "Henry Clark"]
  },
  {
    event: "Web Development Bootcamp",
    date: "2025-04-18T15:00:00Z",
    location: "Room 205",
    organizer: "Tech Society",
    description:
      "A bootcamp to kickstart your web development journey with HTML, CSS, and JS.",
    status: "Scheduled",
    participants: ["Isabel Martinez", "Jason Walker", "Lara Scott"]
  },
  {
    event: "Public Speaking Training",
    date: "2025-04-19T08:00:00Z",
    location: "Seminar Room A",
    organizer: "Toastmasters International",
    description:
      "An interactive training session to improve public speaking skills.",
    status: "Scheduled",
    participants: ["Michael Robinson", "Nina Gomez", "Oscar Perez"]
  },
  {
    event: "Cultural Food Festival",
    date: "2025-04-19T10:30:00Z",
    location: "Campus Grounds",
    organizer: "Cultural Society",
    description:
      "A celebration of diverse cuisines and cultures with food stalls.",
    status: "Scheduled",
    participants: ["Penny Yang", "Quinn Brown", "Ravi Singh"]
  },
  {
    event: "Android Development Workshop",
    date: "2025-04-19T13:00:00Z",
    location: "Room 102",
    organizer: "Tech Club",
    description: "A hands-on workshop on building Android apps from scratch.",
    status: "Scheduled",
    participants: ["Sarah O'Neill", "Tom Blake", "Uma Patel"]
  },
  {
    event: "DIY Crafts Night",
    date: "2025-04-20T11:00:00Z",
    location: "Art Room",
    organizer: "Crafting Club",
    description: "Get creative and make your own DIY crafts to take home.",
    status: "Scheduled",
    participants: ["Vera Knight", "Willis Beck", "Xena Dean"]
  },
  {
    event: "Tech Career Panel",
    date: "2025-04-20T13:30:00Z",
    location: "Room 103",
    organizer: "Career Services",
    description: "A panel discussion with professionals in the tech industry.",
    status: "Scheduled",
    participants: ["Yara Cook", "Zachary Clark", "Aaron Williams"]
  },
  {
    event: "Poetry Reading Night",
    date: "2025-04-20T17:00:00Z",
    location: "Library",
    organizer: "Poetry Club",
    description:
      "A relaxing evening of poetry readings from students and faculty.",
    status: "Scheduled",
    participants: ["Bridget Williams", "Chad Newton", "Daniel Lee"]
  },
  {
    event: "Startup Pitch Coaching",
    date: "2025-04-21T14:00:00Z",
    location: "Entrepreneurship Lab",
    organizer: "Venture Partners",
    description:
      "Coaching session for startup founders to refine their pitches.",
    status: "Open for Registration",
    participants: ["Eve Hart", "Frank Bell", "Grace Long"]
  },
  {
    event: "VR Gaming Night",
    date: "2025-04-21T17:30:00Z",
    location: "Gaming Lounge",
    organizer: "Gamer's Guild",
    description:
      "A VR gaming night where students can experience the latest VR games.",
    status: "Scheduled",
    participants: ["Holly Reid", "Isaac Turner", "Jack Daniels"]
  },
  {
    event: "Blockchain for Beginners",
    date: "2025-04-21T19:00:00Z",
    location: "Room 301",
    organizer: "Blockchain Club",
    description:
      "An introductory session on the concepts and technologies behind blockchain.",
    status: "Scheduled",
    participants: ["Kelly Moore", "Liam Evans", "Maria Lynch"]
  },
  {
    event: "Campus Cleanup Day",
    date: "2025-04-22T08:30:00Z",
    location: "Main Quad",
    organizer: "Eco Society",
    description:
      "A day dedicated to cleaning and beautifying the campus grounds.",
    status: "Scheduled",
    participants: ["Nathan Gray", "Olivia Stone", "Paul Nixon"]
  },
  {
    event: "Community Building Workshop",
    date: "2025-04-22T10:00:00Z",
    location: "Room 202",
    organizer: "Social Impact Club",
    description:
      "A workshop to learn about community engagement and building connections.",
    status: "Scheduled",
    participants: ["Quincy Turner", "Rachel Green", "Samuel Hill"]
  },
  {
    event: "Robotics Hackathon",
    date: "2025-04-22T15:30:00Z",
    location: "Robotics Lab",
    organizer: "Robotics Club",
    description: "A weekend-long hackathon to build autonomous robots.",
    status: "Scheduled",
    participants: ["Tina Clark", "Umar Walker", "Victor Patel"]
  },
  {
    event: "DIY Home Decor Workshop",
    date: "2025-04-23T13:00:00Z",
    location: "Room 106",
    organizer: "Art & Design Society",
    description: "Create custom home decor pieces in this hands-on workshop.",
    status: "Open for Registration",
    participants: ["Willis Foster", "Xenia Clark", "Yara Peterson"]
  },
  {
    event: "Mobile App Development Workshop",
    date: "2025-04-23T15:30:00Z",
    location: "Room 209",
    organizer: "App Development Society",
    description:
      "A workshop for students interested in creating their own mobile apps.",
    status: "Scheduled",
    participants: ["Zara Lee", "Abby Moore", "Blake Tan"]
  },
  {
    event: "Game Development Hackathon",
    date: "2025-04-23T18:00:00Z",
    location: "Room 110",
    organizer: "Game Development Society",
    description: "A weekend hackathon for creating games in teams.",
    status: "Scheduled",
    participants: ["Cameron Williams", "Diana Carter", "Ella Patel"]
  }
];

const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState(() => {
    const stored = localStorage.getItem("eventData");
    return stored ? JSON.parse(stored) : initialData;
  });

  const addEvent = (newEvent) => {
    setEvents((prev) => [newEvent, ...prev]);
  };

  const updateEvent = (index, updatedData) => {
    setEvents((prev) =>
      prev.map((event, i) =>
        i === index ? { ...event, ...updatedData } : event
      )
    );
  };

  const deleteEvent = (index) => {
    setEvents((prev) => prev.filter((_, i) => i !== index));
  };

  const [isStudent, setStudent] = useState(false);

  useEffect(() => {
    localStorage.setItem("eventData", JSON.stringify(events));
  }, [events]);

  return (
    <EventContext.Provider
      value={{
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        isStudent,
        setStudent
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export const useEvents = () => useContext(EventContext);
