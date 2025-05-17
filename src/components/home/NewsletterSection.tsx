// Placeholder data for newsletter preview
const newsletterPreviews = [
  {
    title: "New Feature Alert! Smart Temperature Control",
    description: "Introducing our latest innovation for package preservation.",
  },
  {
    title: "Industry Insights: Future of Delivery",
    description:
      "Exploring the latest trends in contactless delivery solutions.",
  },
];

export default function NewsletterSection() {
  return (
    // Added relative positioning and overflow-hidden for potential background image
    <section className="py-20  text-white relative overflow-hidden">
      {/* Optional: Add the city skyline background image here */}
      {/* <Image src="/images/city-skyline.svg" layout="fill" objectFit="cover" objectPosition="bottom" className="absolute bottom-0 left-0 w-full h-1/3 opacity-10 z-0" alt="" /> */}

      <div className="container mx-auto px-4 relative z-10">
        {" "}
        {/* Ensure content is above background */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Info & Preview */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Connected with Ahln.
            </h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter for exclusive updates, industry
              insights, and special offers. Join our community of
              forward-thinking delivery solution enthusiasts.
            </p>
            <h3 className="text-xl font-semibold mb-4">
              Latest Newsletter Preview
            </h3>
            <ul className="space-y-4">
              {newsletterPreviews.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-cyan-400 mt-1">&#10004;</span>{" "}
                  {/* Checkmark */}
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    {/* Optional: Add description if needed */}
                    {/* <p className="text-sm text-gray-500">{item.description}</p> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Subscription Form */}
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Subscribe to Updates
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500"
                />
              </div>
              <div className="flex items-start space-x-3 pt-2">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 mt-1 rounded border-gray-500 bg-gray-700 text-cyan-600 focus:ring-cyan-500 cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm text-gray-400">
                  I agree to receive marketing communications and agree to the
                  Ahln. Box{" "}
                  <a
                    href="/privacy-policy"
                    className="text-secondary hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 mt-4"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
