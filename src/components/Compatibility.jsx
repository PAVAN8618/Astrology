const compatibilityData = {
  Aries: {
    compatibleWith: ["Leo", "Sagittarius", "Gemini", "Aquarius"],
    description:
      "Aries are most compatible with Leo, Sagittarius, Gemini, and Aquarius.",
  },
  Taurus: {
    compatibleWith: ["Virgo", "Capricorn", "Cancer", "Pisces"],
    description:
      "Taurus are most compatible with Virgo, Capricorn, Cancer, and Pisces.",
  },
  Gemini: {
    compatibleWith: ["Libra", "Aquarius", "Aries", "Leo"],
    description:
      "Gemini are most compatible with Libra, Aquarius, Aries, and Leo.",
  },
  Cancer: {
    compatibleWith: ["Scorpio", "Pisces", "Taurus", "Virgo"],
    description:
      "Cancer are most compatible with Scorpio, Pisces, Taurus, and Virgo.",
  },
  Leo: {
    compatibleWith: ["Aries", "Sagittarius", "Gemini", "Libra"],
    description:
      "Leo are most compatible with Aries, Sagittarius, Gemini, and Libra.",
  },
  Virgo: {
    compatibleWith: ["Taurus", "Capricorn", "Cancer", "Scorpio"],
    description:
      "Virgo are most compatible with Taurus, Capricorn, Cancer, and Scorpio.",
  },
  Libra: {
    compatibleWith: ["Gemini", "Aquarius", "Leo", "Sagittarius"],
    description:
      "Libra are most compatible with Gemini, Aquarius, Leo, and Sagittarius.",
  },
  Scorpio: {
    compatibleWith: ["Cancer", "Pisces", "Virgo", "Capricorn"],
    description:
      "Scorpio are most compatible with Cancer, Pisces, Virgo, and Capricorn.",
  },
  Sagittarius: {
    compatibleWith: ["Aries", "Leo", "Libra", "Aquarius"],
    description:
      "Sagittarius are most compatible with Aries, Leo, Libra, and Aquarius.",
  },
  Capricorn: {
    compatibleWith: ["Taurus", "Virgo", "Scorpio", "Pisces"],
    description:
      "Capricorn are most compatible with Taurus, Virgo, Scorpio, and Pisces.",
  },
  Aquarius: {
    compatibleWith: ["Gemini", "Libra", "Aries", "Sagittarius"],
    description:
      "Aquarius are most compatible with Gemini, Libra, Aries, and Sagittarius.",
  },
  Pisces: {
    compatibleWith: ["Cancer", "Scorpio", "Taurus", "Capricorn"],
    description:
      "Pisces are most compatible with Cancer, Scorpio, Taurus, and Capricorn.",
  },
};

const ZodiacSigns = [
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

const Compatibility = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 to-yellow-500 text-blue-900 font-sans py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Zodiac Compatibility
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ZodiacSigns.map((sign, index) => (
            <div
              key={index}
              className=" text-blue-900 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <h2 className="text-2xl font-bold mb-4">{sign}</h2>
              <p className="text-xl mb-2">Compatible with:</p>
              <ul className="list-disc list-inside mb-4">
                {compatibilityData[sign].compatibleWith.map(
                  (compatibleSign, idx) => (
                    <li key={idx}>{compatibleSign}</li>
                  )
                )}
              </ul>
              <p>{compatibilityData[sign].description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compatibility;
