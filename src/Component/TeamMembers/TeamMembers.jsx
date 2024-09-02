/* eslint-disable react/no-unescaped-entities */
import photo from "./teamMembers-assets/fax.png";

const teamMembers = [
  {
    name: "Rinks Cooper",
    title: "CEO, Qwilo",
    img: photo,
  },
  {
    name: "JD Scot",
    title: "CEO, Qwilo",
    img: photo,
  },
  {
    name: "Haris Morgan",
    title: "CEO, Qwilo",
    img: photo,
  },
  {
    name: "Nik Jorden",
    title: "CEO, Qwilo",
    img: photo,
  },
];

function TeamMembers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Executive Team</h2>
      <h3 className="text-2xl font-semibold text-center mb-4">Team Members</h3>
      <p className="text-gray-600 text-center mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. It has been the industry's standard dummy text ever since the
        1500s.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="rounded-lg shadow-lg bg-white p-4 text-center transition-transform transform hover:scale-105"
          >
            <img
              src={member.img}
              alt={`${member.name}'s portrait`}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
            <p className="text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;
