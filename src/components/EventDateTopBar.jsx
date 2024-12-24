export default function EventDateTopBar({ dateLinks }) {
  return (
    <ul className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-x-8 mt-8">
      {dateLinks.map((datelink) => (
        <li
          key={datelink.id}
          className={`cursor-pointer flex flex-col text-center space-y-4 text-gray-500 datelink ${
            datelink.id == 2 && "active"
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
