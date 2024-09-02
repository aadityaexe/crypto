/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  const footerLinks = [
    {
      title: "About Us",
      links: ["Home", "About Us", "Our Team", "Portfolio"],
    },
    {
      title: "Faqs",
      links: ["Faqs", "Blog", "Our Services", "Contact Us"],
    },
  ];

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
          {/* Logo and Description */}
          <div className="flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0">
            <div className="flex flex-col space-y-4">
              <img src="logo.svg" alt="Logo" className="w-24" />
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <nav
                key={index}
                aria-label={section.title}
                className="flex flex-col space-y-4"
              >
                <h3 className="text-xl font-bold">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col space-y-4 md:space-y-2">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-sm">
              Lorem Ipsum passages, and more recently with desktop publishing
              software.
            </p>
            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Enter your Email"
                aria-label="Email"
                className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:rounded-r-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600 md:rounded-l-none"
              >
                Go
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 text-center mt-10">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} CoinEX. Developed by iqonicdesign.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
