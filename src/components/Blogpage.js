import blogImage from '../images/blogImage.svg'
import seoImage from '../images/seoImage.svg'
import uiImage from '../images/uiImage.svg'
import appdevImage from '../images/appdevImage.svg'
import aboutusImage from '../images/aboutusImage.svg'
import LetsTalk from './LetsTalk'
import gradient from '../images/gradient.png'

function Blogpage(){
const blogPosts = [
  {
    id: 1,
    title: "Top E-Commerce SEO Tips and Tricks",
    date: "May 13, 2025",
    image: seoImage,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of .",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    date: "May 13, 2025",
    image: uiImage,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of .",
  },
  {
    id: 3,
    title: "App Development",
    date: "May 13, 2025",
    image: appdevImage,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of .",
  },
  {
    id: 1,
    title: "Top E-Commerce SEO Tips and Tricks",
    date: "May 13, 2025",
    image: seoImage,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of .",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    date: "May 13, 2025",
    image: uiImage,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of .",
  },
  {
    id: 3,
    title: "App Development",
    date: "May 13, 2025",
    image: appdevImage,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of .",
  },
  {
    id: 1,
    title: "Top E-Commerce SEO Tips and Tricks",
    date: "May 13, 2025",
    image: seoImage,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of .",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    date: "May 13, 2025",
    image: uiImage,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of .",
  },
  {
    id: 3,
    title: "App Development",
    date: "May 13, 2025",
    image: appdevImage,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of .",
  },
  {
    id: 1,
    title: "Top E-Commerce SEO Tips and Tricks",
    date: "May 13, 2025",
    image: seoImage,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of .",
  }
];

const BlogCardList = () => {
  return (
    <section className="py-16 px-4 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <span className="absolute  rounded-bl-[10px] top-0 right-0 bg-white text-gray-800 text-xs px-3 py-1  shadow">
                {post.date}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{post.desc}</p>
              <button className="bg-gray-100 text-sm text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



    return(
        <div>
            <section className="w-full h-[400px] relative">
              <img
                src={blogImage}
                alt="Team working"
                className="absolute top-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 z-10" style={{ backgroundImage: `url(${gradient})`}} />
        
              <div className="absolute inset-0 z-20 flex items-center px-10 lg:px-20">
                <div className="text-white max-w-xl">
                  <h2 className="text-4xl font-bold mb-4">Blogs </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an.
                  </p>
                </div>
              </div>
            </section>
             
            <BlogCardList/>
            <LetsTalk />
            </div>
    )
}
export default Blogpage