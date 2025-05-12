import React from 'react';

export default function Home() {
  // Dummy news data
  const newsItems = [
    {
      id: 1,
      title: "BLACKPINK's Lisa Sets New Record with Solo Track",
      content: "The K-pop idol's latest release has broken streaming records across multiple platforms, becoming the fastest female K-pop solo artist to reach 100 million views.",
      image: "https://i.pinimg.com/736x/15/75/b6/1575b64146a0f52fd1db0470c180973e.jpg",
      category: "Music",
      trending: true,
      likes: 8.5
    },
    {
      id: 2,
      title: "BTS Announces World Tour Dates for 2025",
      content: "The global phenomenon has revealed dates for their upcoming world tour, with shows scheduled across Asia, North America, and Europe.",
      image: "https://i.pinimg.com/736x/1d/54/0b/1d540ba8b9b67b1858eb4df30a78339c.jpg",
      category: "Tours",
      trending: true,
      likes: 9.2
    },
    {
      id: 3,
      title: "TWICE Celebrates 10th Anniversary with Special Album",
      content: "The beloved girl group marks their decade-long journey with a commemorative album featuring new tracks and reimagined classics.",
      image: "https://i.pinimg.com/736x/3f/7c/4c/3f7c4cc56c9e1d31aedae79f385f63e6.jpg",
      category: "Albums",
      likes: 7.8
    },
    {
      id: 4,
      title: "NCT's New Sub-unit Makes Powerful Debut",
      content: "SM Entertainment's expanding boy group introduces a new sub-unit with a groundbreaking concept and unique sound.",
      image: "https://i.pinimg.com/736x/e5/76/51/e57651d5f9d3f96745e55e395a019865.jpg",
      category: "Debuts",
      likes: 7.5
    },
    {
      id: 5,
      title: "ITZY Reveals Behind-the-Scenes of Latest MV Shoot",
      content: "Members share exclusive footage and stories from the filming of their visually stunning new music video.",
      image: "https://i.pinimg.com/736x/e9/fb/57/e9fb5757670a9b230b33a97f99e0c54f.jpg",
      category: "Videos",
      likes: 6.9
    },
    {
      id: 6,
      title: "NewJeans Collaborates with International Designer",
      content: "The rising girl group partners with a renowned fashion designer for their upcoming concept photos and merchandise line.",
      image: "https://i.pinimg.com/736x/ff/fe/17/fffe173b80eb9f7849bd0d34974a1daf.jpg",
      category: "Fashion",
      likes: 8.1
    }
  ];

  // Simple icon components instead of using Lucide
  const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
  
  const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
  
  const BookmarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </svg>
  );
  
  const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
  );
  
  const StarIcon = ({ filled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
  
  const TrendingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">K-PopPulse</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="font-medium hover:text-pink-500 transition">Home</a>
            <a href="#" className="font-medium hover:text-pink-500 transition">News</a>
            <a href="#" className="font-medium hover:text-pink-500 transition">Artists</a>
            <a href="#" className="font-medium hover:text-pink-500 transition">Music</a>
            <a href="#" className="font-medium hover:text-pink-500 transition">Videos</a>
            <a href="#" className="font-medium hover:text-pink-500 transition">Events</a>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-1 rounded-full text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
              <div className="absolute left-2 top-1.5 text-gray-400">
                <SearchIcon />
              </div>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium hidden md:block hover:opacity-90 transition">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl overflow-hidden shadow-lg mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <span className="bg-white bg-opacity-20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">FEATURED</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                BLACKPINK's World Domination Continues in 2025
              </h2>
              <p className="text-white text-opacity-90 mb-6">
                With solo projects and group activities, BLACKPINK members continue to break records and expand their global influence.
              </p>
              <a href="#" className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full inline-block hover:bg-opacity-90 transition w-max">
                Read More
              </a>
            </div>
            <div className="md:w-1/2">
              <img src="https://i.pinimg.com/736x/bf/b7/58/bfb75898ec725b4e35d41cbbcb60ea00.jpg" alt="Featured" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* News Feed */}
      <div className="container mx-auto px-4 pb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Latest News</h2>
          <div className="flex space-x-2">
            <button className="bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-50 transition">All</button>
            <button className="bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-50 transition">Music</button>
            <button className="bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-50 transition">Videos</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
                <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-bold text-pink-500">
                  {item.category}
                </span>
                {item.trending && (
                  <div className="absolute top-3 right-3 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <span className="mr-1"><TrendingIcon /></span> Trending
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">
                  <a href={`#news-${item.id}`} className="hover:text-pink-500 transition">
                    {item.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.content}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-pink-500 transition">
                      <span className="mr-1"><HeartIcon /></span>
                      <span className="text-xs">{item.likes}K</span>
                    </button>
                    <button className="text-gray-500 hover:text-pink-500 transition">
                      <BookmarkIcon />
                    </button>
                    <button className="text-gray-500 hover:text-pink-500 transition">
                      <ShareIcon />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(item.likes / 2) ? 'text-yellow-400' : 'text-gray-300'}>
                          <StarIcon filled={i < Math.floor(item.likes / 2)} />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <button className="bg-white border border-pink-500 text-pink-500 font-medium px-8 py-2 rounded-full hover:bg-pink-50 transition">
            Load More News
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Candy Canvas</h3>
              <p className="text-gray-400">Your ultimate source for K-pop news, updates, and entertainment.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition">News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition">Albums</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition">Concerts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition">Interviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Artists</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition">BLACKPINK</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition">BTS</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition">TWICE</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition">More Artists</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <div className="mt-6">
                <h4 className="font-bold mb-2">Subscribe to Newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-pink-500 w-full"
                  />
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600 transition">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>© 2025 Candy Canvas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}