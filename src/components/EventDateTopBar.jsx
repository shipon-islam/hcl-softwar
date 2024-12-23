const dateLinks = [
  {
    id: 1,
    day: "Thusday",
    date: "December 5, 2024",
  },
  {
    id: 2,
    day: "Friday",
    date: "December 6, 2024",
  },
  {
    id: 3,
    day: "Saturday",
    date: "December 7, 2024",
  },
  {
    id: 4,
    day: "Sunday",
    date: "December 8, 2024",
  },
];

export default function EventDateTopBar() {
  return (
    <ul className="flex gap-x-8 mt-8">
      {dateLinks.map((datelink) => (
        <li
          key={datelink.id}
          className={`cursor-pointer flex flex-col text-center space-y-4 text-gray-500 datelink ${
            datelink.day.toLowerCase() == "friday" && "active"
          }`}
        >
          <button className="transition-colors duration-300 bg-white shadow-custom px-6 py-1 rounded-md">
            {datelink.day}
          </button>
          <span>{datelink.date}</span>
        </li>
      ))}
    </ul>
  );
}
