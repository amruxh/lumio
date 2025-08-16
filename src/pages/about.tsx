const About = () => {
  return (
    <section className="px-4 py-10 max-w-4xl min-h-screen mx-auto space-y-10">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-6">
        Lumio — Illuminate Your Shopping.
      </h2>

      <p className="text-center text-[var(--foreground-muted)] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
        Lumio isn’t just a marketplace — it’s a beacon for those who seek clarity and quality in every purchase. We believe shopping should be simple, bright, and inspiring. From handpicked collections to effortless browsing, Lumio lights the way to your next favorite find. Rooted in trust and designed for the modern shopper, our mission is to bring you products that brighten your life and elevate your everyday. Discover a shopping experience that shines as brightly as you do.
      </p>

      <section>
        <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-3">Our Vision</h3>
        <p className="text-[var(--foreground-muted)] text-base sm:text-lg leading-relaxed max-w-3xl">
          To create a timeless shopping destination where every product tells a story and every customer feels valued. We strive to bridge tradition with innovation, offering an experience that honors the past while embracing the future of retail.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-3">Our Values</h3>
        <ul className="list-disc list-inside text-[var(--foreground-muted)] text-base sm:text-lg leading-relaxed max-w-3xl space-y-2">
          <li><strong>Quality:</strong> We carefully select every item to meet high standards of durability and design.</li>
          <li><strong>Transparency:</strong> Honest product descriptions and fair pricing are the foundation of trust.</li>
          <li><strong>Customer First:</strong> Your satisfaction drives everything we do; we’re here to serve you.</li>
          <li><strong>Innovation:</strong> We embrace technology to make your shopping seamless and enjoyable.</li>
          <li><strong>Sustainability:</strong> Supporting eco-friendly products and responsible practices.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-3">Why Choose Lumio?</h3>
        <p className="text-[var(--foreground-muted)] text-base sm:text-lg leading-relaxed max-w-3xl">
          At Lumio, we don’t just sell products; we cultivate experiences. Our curated collections ensure that every purchase is meaningful, practical, and stylish. With easy navigation, secure checkout, and dedicated customer support, shopping with Lumio is as bright and effortless as our name suggests. Join a community of shoppers who value quality and clarity—because you deserve nothing less.
        </p>
      </section>
    </section>
  );
};

export default About;
