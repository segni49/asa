import React, { useState, useRef, useEffect } from 'react';
import ExperiencePost from '../components/ExperiencePost';

interface Post {
  author: string;
  title: string;
  region: string;
  story: string;
  imageUrl?: string;
}

const Explore: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      author: 'Mekdes',
      title: 'Blue Nile Sunset',
      region: 'Bahir Dar',
      story: 'A peaceful lakeside evening that changed everything.',
      imageUrl: '/assets/nile.jpg',
    },
    {
      author: 'Jonas',
      title: 'Markets Above the Clouds',
      region: 'Lalibela',
      story: 'Bartered spices with villagers above the mist.',
      imageUrl: '/assets/lalibela.jpg',
    },
  ]);

  const [form, setForm] = useState({
    author: '',
    title: '',
    region: '',
    story: '',
  });

  const [image, setImage] = useState<File | null>(null);
  const feedRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const imageUrl = image ? URL.createObjectURL(image) : undefined;

    if (form.author && form.title && form.region && form.story) {
      setPosts([{ ...form, imageUrl }, ...posts]);
      setForm({ author: '', title: '', region: '', story: '' });
      setImage(null);
    }
  };

  useEffect(() => {
    feedRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [posts]);

  return (
    <section className="h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-md px-6 py-5">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">🌍 Traveler Stories</h2>
        <p className="text-center text-sm text-gray-500">Share your travel memories across Ethiopia</p>
      </div>

      {/* Scrollable Feed */}
      <div
        ref={feedRef}
        className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-6 max-w-4xl mx-auto w-full"
      >
        {posts.map((post, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg p-4">
            <ExperiencePost {...post} />
          </div>
        ))}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border-t shadow-inner px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-end"
      >
        <div className="flex flex-col w-full sm:flex-1 gap-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Your name"
              className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              name="region"
              value={form.region}
              onChange={handleChange}
              placeholder="Region"
              className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Story title"
            className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <textarea
            name="story"
            value={form.story}
            onChange={handleChange}
            placeholder="Your story (max 250 characters)"
            maxLength={250}
            rows={3}
            className="p-2 border rounded-md resize-none w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>{form.story.length}/250</span>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm text-gray-600"
            placeholder="Upload an image"
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-28 h-28 object-cover rounded-lg border shadow"
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 transition-all text-black font-semibold px-5 py-2 rounded-md shadow mt-2 sm:mt-0"
        >
          Share ✨
        </button>
      </form>
    </section>
  );
};

export default Explore;
