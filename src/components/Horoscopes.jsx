const horoscopes = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const Horoscopes = () => {
  return (
    <div className="bg-gradient-to-r  from-yellow-100 to-yellow-500 text-blue-900 font-sans py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Horoscopes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {horoscopes.map((sign, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-yellow-100 to-yellow-400 text-blue-900 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <h2 className="text-2xl font-bold mb-4">{sign}</h2>
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

export default Horoscopes;
