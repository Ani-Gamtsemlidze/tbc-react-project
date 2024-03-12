function Footer() {
  return (
    <footer className="flex justify-between bg-green-800">
      <div className="flex flex-col m-8">
        <a href="#" className="text-white text-sm">
          წესები და პირობები
        </a>
        <a href="#" className="text-white text-sm mt-2">
          კონფიდენციალურობის პოლიტიკა
        </a>
      </div>
      <form action="/submit" className="m-8">
        <label htmlFor="subscribe" className="text-white">
          Subscribe to our Newsletter:
        </label>
        <div className="mt-2">
          <input
            className="pl-2 rounded-md outline-none"
            type="text"
            id="subscribe"
            name="subscribe"
            placeholder="Email address"
          />
          <button className="text-white text-sm ml-2" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </footer>
  );
}

export default Footer;
