import { useState } from "react";
import image from "./BlogSlider-assets/image.png";

const BlogSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Blogpost With Vimeo",
      image: image,
      content:
        "Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic",
      author: "Tom Herry",
      date: "12 Aug 2017",
      comments: 5,
    },
    {
      title: "Blogpost With Image",
      image: image,
      content:
        "Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic",
      author: "Tom Herry",
      date: "12 Aug 2017",
      comments: 5,
    },
    {
      title: "Blogpost With Audio",
      image: image,
      content:
        "Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic",
      author: "Tom Herry",
      date: "12 Aug 2017",
      comments: 5,
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="text-white p-8 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Our Blog</h2>
      <p className="mb-8 text-gray-400">
        Lorem Ipsum is simply dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries.
      </p>
      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-3 rounded-full z-10"
        >
          {"<"}
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-3 rounded-full z-10"
        >
          {">"}
        </button>

        <div className="overflow-hidden">
          <div
            className="whitespace-nowrap transition-transform duration-500"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="inline-block w-full bg-gray-800 rounded-lg shadow-md"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-t-lg w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-gray-400 mb-4">{slide.content}</p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="mr-2">{slide.author}</span>
                    <span className="mr-2">{slide.date}</span>
                    <span>{slide.comments} Comments</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
