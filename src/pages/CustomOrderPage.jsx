import { useState } from 'react';

export default function CustomOrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    garmentType: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="pt-[120px] pb-20 px-5 md:px-16 max-w-[1280px] mx-auto w-full">
      <div className="max-w-2xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="font-display text-3xl md:text-[48px] font-bold text-primary mb-4">Custom Order</h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Tell us about your vision. We'll work with you to bring it to life in thread.
          </p>
        </header>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-on-background uppercase tracking-[0.1em] mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-outline-variant bg-transparent py-3 text-base text-on-background focus:border-primary focus:outline-none transition-colors"
              placeholder="Jane Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-on-background uppercase tracking-[0.1em] mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-outline-variant bg-transparent py-3 text-base text-on-background focus:border-primary focus:outline-none transition-colors"
              placeholder="jane@example.com"
            />
          </div>

          {/* Garment Type */}
          <div>
            <label className="block text-xs font-semibold text-on-background uppercase tracking-[0.1em] mb-2">
              Garment Type
            </label>
            <select
              name="garmentType"
              value={formData.garmentType}
              onChange={handleChange}
              className="w-full border-b border-outline-variant bg-transparent py-3 text-base text-on-background focus:border-primary focus:outline-none transition-colors"
            >
              <option value="">Select a garment...</option>
              <option value="tee">T-Shirt</option>
              <option value="hoodie">Hoodie</option>
              <option value="sweatshirt">Sweatshirt</option>
              <option value="tote">Tote Bag</option>
              <option value="cap">Baseball Cap</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-on-background uppercase tracking-[0.1em] mb-2">
              Describe Your Design
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              className="w-full border-b border-outline-variant bg-transparent py-3 text-base text-on-background focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Tell us about the design you'd like — reference images, colors, placement, and any personal details you'd like to include..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary-container text-on-primary px-8 py-4 rounded text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Submit Custom Request
          </button>
        </form>
      </div>
    </main>
  );
}
