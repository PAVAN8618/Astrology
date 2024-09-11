const zodiacSigns = [
  { name: "Aries", date: "Mar 21 - Apr 19" },
  { name: "Taurus", date: "Apr 20 - May 20" },
  { name: "Gemini", date: "May 21 - Jun 20" },
  { name: "Cancer", date: "Jun 21 - Jul 22" },
  { name: "Leo", date: "Jul 23 - Aug 22" },
  { name: "Virgo", date: "Aug 23 - Sep 22" },
  { name: "Libra", date: "Sep 23 - Oct 22" },
  { name: "Scorpio", date: "Oct 23 - Nov 21" },
  { name: "Sagittarius", date: "Nov 22 - Dec 21" },
  { name: "Capricorn", date: "Dec 22 - Jan 19" },
  { name: "Aquarius", date: "Jan 20 - Feb 18" },
  { name: "Pisces", date: "Feb 19 - Mar 20" },
];

const ZodiacSigns = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 to-yellow-400 text-blue-900 font-sans py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Zodiac Signs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {zodiacSigns.map((sign, index) => (
            <div
              key={index}
              className="from-yellow-100 to-yellow-500 text-blue-900  p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <h2 className="text-2xl font-bold mb-4">{sign.name}</h2>
              <p className="text-xl">{sign.date}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZodiacSigns;
