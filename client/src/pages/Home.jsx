import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [latestImages, setLatestImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const navigate = useNavigate();

  SwiperCore.use([Navigation, Autoplay]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const fetchData = async (query) => {
          const res = await fetch(query);
          return await res.json();
        };

        const offers = await fetchData("/api/listing/get?offer=true&limit=4");
        const sales = await fetchData("/api/listing/get?type=sale&limit=4");
        const rents = await fetchData("/api/listing/get?type=rent&limit=4");

        setOfferListings(offers);
        setSaleListings(sales);
        setRentListings(rents);

        // Combine and sort listings
        const allListings = [...offers, ...sales, ...rents];
        allListings.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        // Extract latest images
        const images = allListings
          .filter(
            (listing) => listing.imageUrls && listing.imageUrls.length > 0
          )
          .slice(0, 5)
          .map((listing) => listing.imageUrls[0]);

        setLatestImages(images);
      } catch (error) {
        console.log(error);
      }
    };

    fetchListings();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[500px]">
        {/* Swiper for Background Images */}
        <Swiper
          navigation
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 60000, // 1 minute
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Pause autoplay on hover
          }}
          className="absolute inset-0 z-0"
        >
          {latestImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  background: `url(${image}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 p-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-center mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-lg lg:text-xl text-center mb-8">
            Discover the perfect place to live with our wide range of
            properties.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-3xl">
            <form onSubmit={handleSearchSubmit}>
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Enter city, neighborhood..."
                  className="flex-grow p-3 bg-black/30 backdrop-blur-sm border border-gray-600 rounded focus:outline-none focus:border-blue-400 text-white placeholder-gray-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-blue-600/90 hover:bg-blue-700 text-white px-6 py-3 rounded transition-colors font-medium shadow-md hover:shadow-lg"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex gap-4 mt-8">
            <Link
              to="/search?type=sale"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Buy
            </Link>
            <Link
              to="/search?type=rent"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Rent
            </Link>
          </div>
        </div>
      </div>

      {/* Listing Results for Offer, Sale, and Rent */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
