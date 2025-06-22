import React from 'react';

interface ExperiencePostProps {
  author: string;
  title: string;
  region: string;
  story: string;
  imageUrl?: string;
}

const ExperiencePost: React.FC<ExperiencePostProps> = ({ author, title, region, story, imageUrl }) => (
  <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
    {imageUrl && (
      <img src={imageUrl} alt="Story" className="w-full max-h-[400px] object-contain rounded mb-3" />
    )}
    <h3 className="text-xl font-bold text-yellow-500">{title}</h3>
    <p className="text-sm text-gray-500 mb-1">📍 {region}</p>
    <p className="text-gray-700">{story}</p>
    <p className="text-sm text-gray-400 mt-2">— {author}</p>
  </div>
);

export default ExperiencePost;