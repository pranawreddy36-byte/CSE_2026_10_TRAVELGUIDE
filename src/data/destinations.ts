import type { Destination } from "@/types/tourism";
import { wikimediaFile } from "@/lib/wikimedia";

// Typed structured travel repository containing 30 major Indian destinations
// with comprehensive hotels, restaurants, attractions, and algorithm coordinates.
export const destinations: Destination[] = [
  {
    "id": "tirupati",
    "slug": "tirupati",
    "name": "Tirupati",
    "state": "Andhra Pradesh",
    "city": "Tirupati",
    "regionType": "spiritual-site",
    "description": "A sacred pilgrimage city wrapped in the Seshachalam Hills, Tirupati blends devotion, ritual rhythm, and serene forest landscapes into one of India’s most iconic spiritual journeys.",
    "history": "Tirupati has flourished for centuries as the gateway to the Tirumala shrine. Dynasties including the Pallavas, Cholas, and Vijayanagara rulers contributed to its temple traditions, architecture, and pilgrim infrastructure.",
    heroImage: wikimediaFile("Tirumala tiupathi.jpg"),
    "heroImageAlt": "Sacred hills and temple-lit horizon around Tirupati at dawn",
    "galleryImages": [
      {
        src: wikimediaFile("Tirumala temple.JPG"),
        "alt": "Panoramic hill road leading toward Tirupati temple region"
      },
      {
        src: wikimediaFile("Silathoranam.jpg"),
        "alt": "Temple silhouette framed by a dramatic sunrise"
      },
      {
        src: wikimediaFile("Tirumala Hills view.jpg"),
        "alt": "Pilgrimage path through forested hills"
      }
    ],
    "openingTime": "1:30 AM",
    "closingTime": "12:00 AM",
    "entryFee": "INR 300 (special entry darshan options vary)",
    "foreignerFee": "INR 300",
    "parkingFee": "INR 50-100",
    "bestTimeToVisit": "September-February",
    "recommendedDuration": "2 days",
    "rating": 4.9,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 13.6288,
    "longitude": 79.4192,
    "nearbyAttractions": [
      {
        "name": "Sri Venkateswara Temple",
        "distance": "22 km",
        "description": "The spiritual centerpiece of Tirumala and one of the most visited temples in the world."
      },
      {
        "name": "Silathoranam",
        "distance": "24 km",
        "description": "A rare natural rock arch amid protected hill terrain."
      },
      {
        "name": "Kapila Theertham",
        "distance": "4 km",
        "description": "A temple and waterfall sanctuary at the foot of the hills."
      }
    ],
    "featuredAttractions": [
      {
        "id": "sri-venkateswara-temple",
        "name": "Sri Venkateswara Temple",
        "description": "A magnificent Dravidian temple renowned for its gold-plated sanctum and timeless rituals.",
        image: wikimediaFile("Tirumala temple.JPG"),
        "timings": "Nearly round the clock with darshan slots",
        "entryFee": "From INR 300"
      },
      {
        "id": "silathoranam",
        "name": "Silathoranam",
        "description": "A dramatic geological arch prized by pilgrims and nature lovers alike.",
        image: wikimediaFile("Silathoranam.jpg"),
        "timings": "6:00 AM - 6:00 PM",
        "entryFee": "Free"
      },
      {
        "id": "kapila-theertham",
        "name": "Kapila Theertham",
        "description": "A sacred Shiva shrine beside a seasonal cascade and rocky gorge.",
        image: wikimediaFile("Kapila theertham.jpg"),
        "timings": "5:00 AM - 8:00 PM",
        "entryFee": "Free"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Marasa Sarovar Premiere",
        "category": "premium",
        "priceRange": "INR 7,500-11,000",
        "distanceFromCenter": "5 km",
        "rating": 4.7,
        "description": "Elegant hillside stay with spacious rooms and family-friendly amenities."
      },
      {
        "name": "Pai Viceroy",
        "category": "mid-range",
        "priceRange": "INR 4,000-6,500",
        "distanceFromCenter": "1 km",
        "rating": 4.4,
        "description": "A dependable city-center base near transport links and temple transfer points."
      },
      {
        "name": "Hotel Regalia Tirupati",
        "category": "budget",
        "priceRange": "INR 2,000-3,500",
        "distanceFromCenter": "2 km",
        "rating": 4.1,
        "description": "Comfort-focused budget option suited to short pilgrim stays."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Minerva Coffee Shop",
        "cuisine": "South Indian Vegetarian",
        "priceRange": "INR 300-600",
        "rating": 4.6,
        "specialDish": "Ghee Roast Dosa & Filter Coffee",
        "distanceFromCenter": "1.2 km",
        "description": "Iconic South Indian pure vegetarian restaurant favored by pilgrims."
      },
      {
        "name": "Andhra Spice",
        "cuisine": "Andhra Traditional",
        "priceRange": "INR 450-900",
        "rating": 4.4,
        "specialDish": "Rayalaseema Ragi Mudda & Natu Kodi",
        "distanceFromCenter": "2.5 km",
        "description": "Authentic regional spicy delicacies prepared with local herbs."
      },
      {
        "name": "Devalokam Pure Veg",
        "cuisine": "Multi-Cuisine Vegetarian",
        "priceRange": "INR 250-500",
        "rating": 4.3,
        "specialDish": "South Indian Thali & Sweet Pongal",
        "distanceFromCenter": "0.8 km",
        "description": "Fast, hygienic, and wholesome traditional meals near temple gate."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Arrival & Pilgrim Orientation",
        "summary": "Settle in, arrange darshan logistics, and ease into Tirupati’s spiritual atmosphere.",
        "highlights": [
          "Check into hotel",
          "Visit Kapila Theertham",
          "Evening local food trail"
        ]
      },
      {
        "title": "Day 2: Tirumala Circuit",
        "summary": "Start before dawn for temple darshan, then explore Silathoranam and scenic viewpoints.",
        "highlights": [
          "Early darshan",
          "Silathoranam",
          "Hill viewpoints and prasadam shopping"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Book darshan slots early",
        "detail": "Festival periods and weekends can see significantly longer queue times."
      },
      {
        "title": "Start before sunrise",
        "detail": "Cooler hours make transfers smoother and allow more margin for security and queue checks."
      }
    ],
    "startingBudget": "From INR 4,500 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,000-4,500",
      "comfort": "INR 5,000-8,500",
      "premium": "INR 10,000+"
    }
  },
  {
    "id": "visakhapatnam",
    "slug": "visakhapatnam",
    "name": "Visakhapatnam",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "regionType": "city",
    "description": "Visakhapatnam pairs a curving coastline with naval history, breezy hilltop viewpoints, and an easy urban rhythm that makes it one of India’s most approachable seaside cities.",
    "history": "A historic port with roots in ancient trade routes, Visakhapatnam evolved through colonial shipping, naval significance, and post-independence industrial growth into Andhra’s leading coastal city.",
    heroImage: "/images/destinations/visakhapatnam.jpg",
    "heroImageAlt": "Golden-hour coastline and surf along Visakhapatnam",
    "galleryImages": [
      {
        src: wikimediaFile("RK Beach Visakhapatnam.jpg"),
        "alt": "Ocean waves meeting the promenade near RK Beach"
      },
      {
        src: wikimediaFile("Vizag aerial view.jpg"),
        "alt": "Drone-style coast and city skyline view"
      },
      {
        src: wikimediaFile("View of MVP Colony and Beach Rd from Kailasgiri.jpg"),
        "alt": "Hilltop outlook over sea and urban shoreline"
      }
    ],
    "openingTime": "Open city attractions vary by site",
    "closingTime": "Most attractions close by 7:00 PM",
    "entryFee": "Mixed; many promenades are free",
    "foreignerFee": "Varies by attraction",
    "parkingFee": "INR 30-80",
    "bestTimeToVisit": "November-February",
    "recommendedDuration": "2-3 days",
    "rating": 4.8,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 17.6868,
    "longitude": 83.2185,
    "nearbyAttractions": [
      {
        "name": "RK Beach",
        "distance": "3 km",
        "description": "The city’s signature waterfront promenade for sunrise walks and street food."
      },
      {
        "name": "INS Kursura Museum",
        "distance": "4 km",
        "description": "A retired submarine turned naval museum on the beachfront."
      },
      {
        "name": "Kailasagiri",
        "distance": "8 km",
        "description": "A hilltop leisure park with panoramic coast views."
      }
    ],
    "featuredAttractions": [
      {
        "id": "rk-beach",
        "name": "RK Beach",
        "description": "A lively shoreline perfect for early walks, photography, and relaxed evenings.",
        image: wikimediaFile("RK Beach Visakhapatnam.jpg"),
        "timings": "Open all day",
        "entryFee": "Free"
      },
      {
        "id": "ins-kursura-museum",
        "name": "INS Kursura Museum",
        "description": "A fascinating submarine museum that brings maritime history to life.",
        image: wikimediaFile("INS Kursura (S20).jpg"),
        "timings": "2:00 PM - 8:30 PM",
        "entryFee": "INR 70"
      },
      {
        "id": "kailasagiri",
        "name": "Kailasagiri",
        "description": "An elevated urban escape with landscaped grounds and postcard-worthy viewpoints.",
        image: wikimediaFile("Shiva and Parvati statues on Kailasagiri hill (May 2019).jpg"),
        "timings": "10:00 AM - 8:00 PM",
        "entryFee": "INR 20"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Novotel Visakhapatnam Varun Beach",
        "category": "premium",
        "priceRange": "INR 8,500-13,000",
        "distanceFromCenter": "2 km",
        "rating": 4.7,
        "description": "Iconic seafront stay with expansive Bay of Bengal views."
      },
      {
        "name": "WelcomHotel Devee Grand Bay",
        "category": "mid-range",
        "priceRange": "INR 5,000-8,000",
        "distanceFromCenter": "3 km",
        "rating": 4.5,
        "description": "Well-located business and leisure base with easy beach access."
      },
      {
        "name": "Treebo MVP Grand",
        "category": "budget",
        "priceRange": "INR 2,500-4,000",
        "distanceFromCenter": "6 km",
        "rating": 4,
        "description": "Budget-friendly stay suited to short city explorations."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "The Square at Novotel",
        "cuisine": "Coastal Seafood & Continental",
        "priceRange": "INR 1,200-2,400",
        "rating": 4.7,
        "specialDish": "Prawn Fry & Fresh Catch Grills",
        "distanceFromCenter": "2 km",
        "description": "Seaside dining overlooking the Bay of Bengal."
      },
      {
        "name": "Dhaba City Punjab",
        "cuisine": "North Indian & Tandoor",
        "priceRange": "INR 500-900",
        "rating": 4.4,
        "specialDish": "Butter Chicken & Amritsari Kulcha",
        "distanceFromCenter": "3.5 km",
        "description": "Lively Punjabi dining experience with generous portions."
      },
      {
        "name": "Subbayya Gari Hotel",
        "cuisine": "Authentic Andhra Meals",
        "priceRange": "INR 250-450",
        "rating": 4.6,
        "specialDish": "Butta Bhojanam (Plantain Leaf Feast)",
        "distanceFromCenter": "4.1 km",
        "description": "Legendary Godavari-style feast served with podis and ghee."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Coastline & Culture",
        "summary": "Explore the beach circuit, submarine museum, and evening promenade scene.",
        "highlights": [
          "RK Beach sunrise",
          "INS Kursura Museum",
          "Beach road dinner"
        ]
      },
      {
        "title": "Day 2: Scenic Elevation",
        "summary": "Spend the day around Kailasagiri and coastal viewpoints.",
        "highlights": [
          "Kailasagiri",
          "Scenic ropeway area",
          "Sunset city overlooks"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Reserve evenings for the promenade",
        "detail": "The beachfront is cooler, livelier, and more atmospheric after sunset."
      },
      {
        "title": "Carry light layers",
        "detail": "Sea breezes can make mornings and nights feel cooler than inland temperatures suggest."
      }
    ],
    "startingBudget": "From INR 5,000 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,500-5,000",
      "comfort": "INR 5,500-9,000",
      "premium": "INR 11,000+"
    }
  },
  {
    "id": "araku-valley",
    "slug": "araku-valley",
    "name": "Araku Valley",
    "state": "Andhra Pradesh",
    "city": "Araku",
    "regionType": "hill-station",
    "description": "A lush valley of coffee estates, waterfalls, caves, and tribal culture, Araku is a cinematic cool-weather escape best explored slowly and with a camera in hand.",
    "history": "Araku’s story is tied to the Eastern Ghats, indigenous communities, and the mountain railway routes that gradually opened the valley to scenic tourism without erasing its natural character.",
    heroImage: "/images/destinations/araku-valley.jpg",
    "heroImageAlt": "Mist rolling across Araku Valley hills and plantations",
    "galleryImages": [
      {
        src: wikimediaFile("Araku Valley view 44.jpg"),
        "alt": "Verdant ridgelines and valley viewpoints in Araku"
      },
      {
        src: wikimediaFile("Araku valley view from Road.jpg"),
        "alt": "Forest canopy and hiking trail in the Eastern Ghats"
      },
      {
        src: wikimediaFile("Araku Valley coffee plantations in Ananthagiri hills in Andhra Pradesh 05.jpg"),
        "alt": "Waterfall plunging through dense greenery"
      }
    ],
    "openingTime": "6:00 AM",
    "closingTime": "6:00 PM",
    "entryFee": "Area access varies by attraction",
    "foreignerFee": "Varies by attraction",
    "parkingFee": "INR 30-60",
    "bestTimeToVisit": "October-March",
    "recommendedDuration": "2 days",
    "rating": 4.8,
    "transportModes": [
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 18.3274,
    "longitude": 82.8779,
    "nearbyAttractions": [
      {
        "name": "Borra Caves",
        "distance": "36 km",
        "description": "Ancient limestone caves with dramatic chambers and natural formations."
      },
      {
        "name": "Katiki Waterfalls",
        "distance": "45 km",
        "description": "A rewarding waterfall reached via a rugged scenic approach."
      },
      {
        "name": "Padmapuram Gardens",
        "distance": "2 km",
        "description": "A manicured garden space with floral displays and family-friendly paths."
      }
    ],
    "featuredAttractions": [
      {
        "id": "borra-caves",
        "name": "Borra Caves",
        "description": "Cathedral-like caverns illuminated to reveal immense rock formations.",
        image: wikimediaFile("Borra Caves.jpg"),
        "timings": "10:00 AM - 5:00 PM",
        "entryFee": "INR 80"
      },
      {
        "id": "katiki-waterfalls",
        "name": "Katiki Waterfalls",
        "description": "A wild cascade tucked into a forested landscape beyond the main valley route.",
        image: wikimediaFile("Katiki waterfalls.jpg"),
        "timings": "7:00 AM - 5:00 PM",
        "entryFee": "INR 50 approx. local access"
      },
      {
        "id": "padmapuram-gardens",
        "name": "Padmapuram Gardens",
        "description": "A peaceful garden break featuring curated greenery and a toy-train feel.",
        image: wikimediaFile("Padmapuram gardens. Arakuvalley (21).JPG"),
        "timings": "8:30 AM - 6:00 PM",
        "entryFee": "INR 40"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Haritha Valley Resort",
        "category": "mid-range",
        "priceRange": "INR 4,500-6,500",
        "distanceFromCenter": "1 km",
        "rating": 4.3,
        "description": "A scenic base with classic valley views and easy attraction access."
      },
      {
        "name": "Casa Holiday Resorts",
        "category": "premium",
        "priceRange": "INR 6,500-9,500",
        "distanceFromCenter": "3 km",
        "rating": 4.4,
        "description": "Comfortable elevated stay suited to couples and photography-focused travelers."
      },
      {
        "name": "Krishna Tara Comforts",
        "category": "budget",
        "priceRange": "INR 2,000-3,200",
        "distanceFromCenter": "2 km",
        "rating": 3.9,
        "description": "A simple and practical stay for short itineraries."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Araku Tribal Cafe",
        "cuisine": "Organic Coffee & Tribal Snacks",
        "priceRange": "INR 150-350",
        "rating": 4.7,
        "specialDish": "Araku Arabica Coffee & Bamboo Chicken",
        "distanceFromCenter": "0.5 km",
        "description": "Locally roasted world-famous Araku valley coffee with roasted snacks."
      },
      {
        "name": "Hill View Dhaba",
        "cuisine": "Andhra Non-Veg & Veg",
        "priceRange": "INR 300-600",
        "rating": 4.2,
        "specialDish": "Spicy Country Chicken Curry",
        "distanceFromCenter": "2 km",
        "description": "Rustic roadside dhaba offering fresh country fowl and hot rice."
      },
      {
        "name": "Vasundhara Restaurant",
        "cuisine": "South Indian Thali",
        "priceRange": "INR 200-400",
        "rating": 4.1,
        "specialDish": "Gongura Pachadi Meals",
        "distanceFromCenter": "1.2 km",
        "description": "Homely meals cooked with local mountain vegetables."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Valley Arrival",
        "summary": "Travel by rail or road into Araku and spend the afternoon at gardens and viewpoints.",
        "highlights": [
          "Scenic train journey",
          "Padmapuram Gardens",
          "Coffee tasting"
        ]
      },
      {
        "title": "Day 2: Caves & Waterfalls",
        "summary": "Dedicate the day to Borra Caves and the Katiki route with a flexible pace.",
        "highlights": [
          "Borra Caves",
          "Katiki Waterfalls",
          "Sunset in the valley"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Take the morning Vistadome train",
        "detail": "The rail route through tunnels and valleys is one of the trip’s top visual highlights."
      },
      {
        "title": "Carry cash",
        "detail": "Remote viewpoints and roadside stalls often have weak digital network connectivity."
      }
    ],
    "startingBudget": "From INR 4,200 / day",
    "budgetTier": "budget",
    "costEstimate": {
      "backpacker": "INR 2,800-4,200",
      "comfort": "INR 4,500-7,500",
      "premium": "INR 9,000+"
    }
  },
  {
    "id": "gandikota",
    "slug": "gandikota",
    "name": "Gandikota",
    "state": "Andhra Pradesh",
    "city": "Kadapa",
    "regionType": "heritage-site",
    "description": "Known as India’s Grand Canyon, Gandikota commands a sheer red-granite gorge carved by the Pennar River, framed by fort ramparts, ruins, and open horizon.",
    "history": "Gandikota fort was founded in the 12th century and later held by the Pemmasani Nayaks, Qutb Shahis, and Vijayanagara allies.",
    heroImage: "/images/destinations/gandikota.jpg",
    "heroImageAlt": "Dramatic canyon view of Gandikota and the Pennar river gorge",
    "galleryImages": [
      {
        src: wikimediaFile("Gandikota Fort view.jpg"),
        "alt": "Fort ruins against canyon and open plateau"
      },
      {
        src: wikimediaFile("Gandikota canyon.jpg"),
        "alt": "Sunlight falling across red gorge strata"
      },
      {
        src: wikimediaFile("Madhavaraya Temple Gandikota.jpg"),
        "alt": "Historic temple gopuram inside Gandikota fort"
      }
    ],
    "openingTime": "Open 24 hours",
    "closingTime": "Fort interiors best visited before 6:30 PM",
    "entryFee": "Free",
    "foreignerFee": "Free",
    "parkingFee": "INR 30-50",
    "bestTimeToVisit": "October-February",
    "recommendedDuration": "1-2 days",
    "rating": 4.7,
    "transportModes": [
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 14.8144,
    "longitude": 78.2863,
    "nearbyAttractions": [
      {
        "name": "Pennar River Gorge",
        "distance": "0.5 km",
        "description": "A natural canyon outlook providing sunrise and sunset panoramas."
      },
      {
        "name": "Madhavaraya Temple",
        "distance": "0.8 km",
        "description": "A Vijayanagara-era temple complex with intricate stonework."
      },
      {
        "name": "Belum Caves",
        "distance": "60 km",
        "description": "India's second longest cave system with subterranean passages."
      }
    ],
    "featuredAttractions": [
      {
        "id": "pennar-gorge",
        "name": "Pennar River Gorge",
        "description": "The defining viewpoint of Gandikota with cliffs dropping toward the riverbed.",
        image: wikimediaFile("Gandikota gorge view.jpg"),
        "timings": "Open all hours",
        "entryFee": "Free"
      },
      {
        "id": "madhavaraya-temple",
        "name": "Madhavaraya Temple",
        "description": "Atmospheric ruins featuring carved pillars and temple architecture.",
        image: wikimediaFile("Madhavaraya Temple Gandikota.jpg"),
        "timings": "6:00 AM - 6:00 PM",
        "entryFee": "Free"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Haritha Resort Gandikota",
        "category": "mid-range",
        "priceRange": "INR 3,200-5,000",
        "distanceFromCenter": "1 km",
        "rating": 4.1,
        "description": "State tourism resort closest to the gorge viewpoint."
      },
      {
        "name": "Freakouts Adventure Camp",
        "category": "budget",
        "priceRange": "INR 1,800-3,000",
        "distanceFromCenter": "0.5 km",
        "rating": 4.2,
        "description": "Cliff-side tenting experience under starry skies."
      },
      {
        "name": "Royal County Proddatur",
        "category": "premium",
        "priceRange": "INR 5,500-8,000",
        "distanceFromCenter": "35 km",
        "rating": 4.3,
        "description": "Comfortable hotel with pool and family suites in nearby Proddatur."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Gorge View Mess",
        "cuisine": "Rayalaseema Andhra",
        "priceRange": "INR 150-350",
        "rating": 4.3,
        "specialDish": "Ragi Sankati & Pulusu",
        "distanceFromCenter": "0.5 km",
        "description": "Rustic local meals overlooking the canyon rim."
      },
      {
        "name": "Haritha Multi-Cuisine",
        "cuisine": "South & North Indian",
        "priceRange": "INR 250-500",
        "rating": 3.9,
        "specialDish": "Paneer Butter Masala & Biryani",
        "distanceFromCenter": "1 km",
        "description": "On-site restaurant at APTDC Haritha resort."
      },
      {
        "name": "Kadapa Spices Proddatur",
        "cuisine": "Rayalaseema Spicy",
        "priceRange": "INR 300-600",
        "rating": 4.4,
        "specialDish": "Kadapa Karam Dosa",
        "distanceFromCenter": "34 km",
        "description": "Renowned stop for fiery Rayalaseema spice and hot tiffins."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Canyon Sunset & Stargazing",
        "summary": "Arrive by afternoon, hike to the gorge rim, and camp under the stars.",
        "highlights": [
          "Gorge rim walk",
          "Fort explorations",
          "Canyon sunset"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Carry sufficient drinking water",
        "detail": "Summer heat is intense and walking across the rocky plateau requires hydration."
      }
    ],
    "startingBudget": "From INR 3,500 / day",
    "budgetTier": "budget",
    "costEstimate": {
      "backpacker": "INR 2,200-3,500",
      "comfort": "INR 4,000-6,000",
      "premium": "INR 7,500+"
    }
  },
  {
    "id": "vijayawada",
    "slug": "vijayawada",
    "name": "Vijayawada",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "regionType": "city",
    "description": "The commercial heart of Andhra Pradesh, Vijayawada spans the sacred Krishna River, known for Kanaka Durga Temple, ancient rock-cut caves, and Prakasam Barrage.",
    "history": "Legend tells Arjuna prayed to Lord Shiva atop Indrakeeladri hill. The city developed as a vibrant river trading hub with Buddhist, Hindu, and colonial milestones.",
    heroImage: "/images/destinations/vijayawada.jpg",
    "heroImageAlt": "Prakasam barrage glowing across Krishna river at dusk",
    "galleryImages": [
      {
        src: wikimediaFile("Kanaka Durga temple Vijayawada.jpg"),
        "alt": "Golden crest of Kanaka Durga temple"
      },
      {
        src: wikimediaFile("Undavalli caves.JPG"),
        "alt": "Four-story monolithic rock-cut cave architecture"
      },
      {
        src: wikimediaFile("Bhavani Island.jpg"),
        "alt": "River island park in Krishna river"
      }
    ],
    "openingTime": "5:00 AM",
    "closingTime": "9:00 PM",
    "entryFee": "Varies by attraction",
    "foreignerFee": "Varies by attraction",
    "parkingFee": "INR 30-70",
    "bestTimeToVisit": "October-March",
    "recommendedDuration": "2 days",
    "rating": 4.6,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 16.5062,
    "longitude": 80.648,
    "nearbyAttractions": [
      {
        "name": "Kanaka Durga Temple",
        "distance": "2 km",
        "description": "Ancient temple perched atop Indrakeeladri overlooking Krishna river."
      },
      {
        "name": "Undavalli Caves",
        "distance": "6 km",
        "description": "Monolithic rock-cut cave temples dating from the 4th-5th century."
      },
      {
        "name": "Bhavani Island",
        "distance": "4 km",
        "description": "Lush river island offering watersports and boat rides."
      }
    ],
    "featuredAttractions": [
      {
        "id": "kanaka-durga",
        "name": "Kanaka Durga Temple",
        "description": "Sacred shrine dedicated to Goddess Durga on Indrakeeladri hill.",
        image: wikimediaFile("Kanaka Durga temple Vijayawada.jpg"),
        "timings": "4:00 AM - 9:00 PM",
        "entryFee": "Free / VIP INR 300"
      },
      {
        "id": "undavalli-caves",
        "name": "Undavalli Caves",
        "description": "Gupta style sandstone rock-cut architecture with a giant reclining Vishnu.",
        image: wikimediaFile("Undavalli caves.JPG"),
        "timings": "9:00 AM - 5:30 PM",
        "entryFee": "INR 25"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Novotel Vijayawada Varun",
        "category": "premium",
        "priceRange": "INR 6,500-11,000",
        "distanceFromCenter": "3 km",
        "rating": 4.6,
        "description": "Contemporary luxury stay with rooftop infinity pool."
      },
      {
        "name": "Quality Hotel DV Manor",
        "category": "mid-range",
        "priceRange": "INR 3,500-5,500",
        "distanceFromCenter": "1.5 km",
        "rating": 4.3,
        "description": "Long-standing hospitality favorite in the commercial district."
      },
      {
        "name": "Hotel Swarna Palace",
        "category": "budget",
        "priceRange": "INR 1,800-3,000",
        "distanceFromCenter": "0.8 km",
        "rating": 4,
        "description": "Budget stay steps away from railway station."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Seven Days Restaurant",
        "cuisine": "Andhra & North Indian",
        "priceRange": "INR 400-800",
        "rating": 4.5,
        "specialDish": "Ulavacharu Biryani",
        "distanceFromCenter": "1 km",
        "description": "Famous for spicy Andhra horse-gram lentil biryani."
      },
      {
        "name": "Sweet Magic",
        "cuisine": "Tiffins & Andhra Sweets",
        "priceRange": "INR 200-450",
        "rating": 4.6,
        "specialDish": "Kakinada Kaja & MLA Dosa",
        "distanceFromCenter": "1.8 km",
        "description": "Iconic confectionary and breakfast establishment."
      },
      {
        "name": "Babai Hotel",
        "cuisine": "Traditional Tiffins",
        "priceRange": "INR 150-300",
        "rating": 4.7,
        "specialDish": "Steamed Idli with White Butter & Podi",
        "distanceFromCenter": "2.5 km",
        "description": "Historical eatery beloved since 1942 for melt-in-mouth idlis."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Indrakeeladri & River Vista",
        "summary": "Morning darshan at Kanaka Durga, afternoon Krishna river cruise to Bhavani Island.",
        "highlights": [
          "Kanaka Durga",
          "Prakasam Barrage",
          "Bhavani Island"
        ]
      },
      {
        "title": "Day 2: Undavalli & Heritage",
        "summary": "Explore rock-cut cave art at Undavalli followed by Andhra culinary trail.",
        "highlights": [
          "Undavalli Caves",
          "Kondapalli Fort handicrafts",
          "Local sweet tasting"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Visit Durga temple early morning",
        "detail": "Avoid mid-day queues and catch cool river breezes from the hill top."
      }
    ],
    "startingBudget": "From INR 4,000 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 2,800-4,000",
      "comfort": "INR 4,500-7,500",
      "premium": "INR 9,500+"
    }
  },
  {
    "id": "rajahmundry",
    "slug": "rajahmundry",
    "name": "Rajahmundry",
    "state": "Andhra Pradesh",
    "city": "Rajahmundry",
    "regionType": "spiritual-site",
    "description": "The cultural capital of Andhra Pradesh, resting on the scenic banks of the Godavari River, renowned for river ghats, iconic rail bridges, and lush paddy deltas.",
    "history": "Founded by Raja Raja Narendra in the 11th century, Rajahmundry gave birth to modern Telugu literature through poet Nannayya.",
    heroImage: "/images/destinations/rajahmundry.jpg",
    "heroImageAlt": "Sunset over the massive Godavari arch bridge",
    "galleryImages": [
      {
        src: wikimediaFile("Kotilingeswara temple Rajahmundry.jpg"),
        "alt": "Ancient Shiva temple on the river bank"
      },
      {
        src: wikimediaFile("Godavari river ghats.jpg"),
        "alt": "Pilgrims performing rituals at sunset"
      }
    ],
    "openingTime": "5:00 AM",
    "closingTime": "9:00 PM",
    "entryFee": "Free",
    "foreignerFee": "Free",
    "parkingFee": "INR 20-50",
    "bestTimeToVisit": "October-March",
    "recommendedDuration": "1-2 days",
    "rating": 4.6,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 17.0005,
    "longitude": 81.804,
    "nearbyAttractions": [
      {
        "name": "Godavari River Ghats",
        "distance": "1 km",
        "description": "Bustling sacred ghats for evening harati and morning holy dips."
      },
      {
        "name": "Papikondalu River Cruise",
        "distance": "30 km",
        "description": "Breathtaking boat journey through towering gorge hills."
      }
    ],
    "featuredAttractions": [
      {
        "id": "godavari-bridges",
        "name": "Godavari Arch Bridge",
        "description": "One of the longest arch rail bridges in Asia spanning the grand river.",
        image: wikimediaFile("Godavari arch bridge, Rajahmundry.jpg"),
        "timings": "Open all day",
        "entryFee": "Free"
      }
    ],
    "nearbyHotels": [
      {
        "name": "River Bay Resort",
        "category": "premium",
        "priceRange": "INR 5,500-8,500",
        "distanceFromCenter": "3 km",
        "rating": 4.4,
        "description": "Riverside luxury resort with waterpark and Godavari views."
      },
      {
        "name": "Hotel Shelton Rajahmundry",
        "category": "mid-range",
        "priceRange": "INR 3,200-5,000",
        "distanceFromCenter": "1.2 km",
        "rating": 4.2,
        "description": "Central hotel known for comfort and business facilities."
      },
      {
        "name": "Grand Palace Hotel",
        "category": "budget",
        "priceRange": "INR 1,600-2,800",
        "distanceFromCenter": "0.8 km",
        "rating": 4,
        "description": "Convenient location near railway station."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Rose Milk Centre",
        "cuisine": "Beverages & Desserts",
        "priceRange": "INR 50-150",
        "rating": 4.9,
        "specialDish": "Famous Rajahmundry Rose Milk",
        "distanceFromCenter": "0.5 km",
        "description": "Iconic parlor serving rich cooling rose milk since 1950."
      },
      {
        "name": "Sri Kanya Comfort",
        "cuisine": "Godavari Andhra Meals",
        "priceRange": "INR 350-700",
        "rating": 4.5,
        "specialDish": "Pithapuram Kaja & Royyala Pulao",
        "distanceFromCenter": "1.5 km",
        "description": "Prawn pulao and traditional spicy delta dishes."
      },
      {
        "name": "Udupi Akshaya",
        "cuisine": "Pure Veg South Indian",
        "priceRange": "INR 150-300",
        "rating": 4.3,
        "specialDish": "Pesarattu Upma",
        "distanceFromCenter": "0.7 km",
        "description": "Crisp moong bean crepe topped with fragrant rava upma."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: River Ghats & Ghat Aarti",
        "summary": "Morning walk on Pushkar Ghat, afternoon museum visit, sunset river boat ride.",
        "highlights": [
          "Pushkar Ghat",
          "Godavari Aarti",
          "Rose Milk tasting"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Papikondalu boat booking",
        "detail": "Reserve the day-long Godavari boat tour in advance during winter months."
      }
    ],
    "startingBudget": "From INR 3,800 / day",
    "budgetTier": "budget",
    "costEstimate": {
      "backpacker": "INR 2,400-3,800",
      "comfort": "INR 4,200-6,800",
      "premium": "INR 8,500+"
    }
  },
  {
    "id": "srisailam",
    "slug": "srisailam",
    "name": "Srisailam",
    "state": "Andhra Pradesh",
    "city": "Kurnool",
    "regionType": "spiritual-site",
    "description": "Perched atop the verdant Nallamala Hills, Srisailam houses the revered Mallikarjuna Swamy Jyotirlinga and Bhramaramba Devi Shakti Peeth, beside a massive Krishna river dam.",
    "history": "Mentioned in the Mahabharata and Puranas, the complex was patronized by Satavahanas, Ikshvakus, Chalukyas, and Chhatrapati Shivaji Maharaj.",
    heroImage: wikimediaFile("Mallikarjuna Temple, Sri Sailam.jpg"),
    "heroImageAlt": "Srisailam dam crest gates releasing Krishna river waters",
    "galleryImages": [
      {
        src: wikimediaFile("Mallikarjuna Swamy temple gopuram.jpg"),
        "alt": "Intricately carved temple tower against green hills"
      },
      {
        src: wikimediaFile("Srisailam ropeway view.jpg"),
        "alt": "Ropeway gliding down to river Krishna"
      }
    ],
    "openingTime": "4:30 AM",
    "closingTime": "10:00 PM",
    "entryFee": "Free / Special Darshan INR 150-500",
    "foreignerFee": "Same as domestic",
    "parkingFee": "INR 50-100",
    "bestTimeToVisit": "September-March",
    "recommendedDuration": "1-2 days",
    "rating": 4.8,
    "transportModes": [
      "Buses",
      "Taxi"
    ],
    "latitude": 16.0734,
    "longitude": 78.8688,
    "nearbyAttractions": [
      {
        "name": "Mallikarjuna Jyotirlinga",
        "distance": "0.5 km",
        "description": "One of the 12 sacred Jyotirlingas in India."
      },
      {
        "name": "Srisailam Dam",
        "distance": "12 km",
        "description": "Massive hydroelectric dam built in a deep gorge on river Krishna."
      },
      {
        "name": "Patala Ganga",
        "distance": "3 km",
        "description": "River bank reached by ropeway or steps for holy bathing."
      }
    ],
    "featuredAttractions": [
      {
        "id": "mallikarjuna-temple",
        "name": "Mallikarjuna Swamy Temple",
        "description": "Ancient fortified temple sanctum with Vijayanagara architecture.",
        image: wikimediaFile("Mallikarjuna Swamy temple gopuram.jpg"),
        "timings": "4:30 AM - 10:00 PM",
        "entryFee": "Free / VIP INR 300"
      }
    ],
    "nearbyHotels": [
      {
        "name": "APTDC Haritha Srisailam",
        "category": "mid-range",
        "priceRange": "INR 2,800-4,500",
        "distanceFromCenter": "1 km",
        "rating": 4.1,
        "description": "Official tourism department hotel close to the temple."
      },
      {
        "name": "Ganga Sadan",
        "category": "budget",
        "priceRange": "INR 1,500-2,500",
        "distanceFromCenter": "0.5 km",
        "rating": 4,
        "description": "Clean pilgrim accommodation run by temple trust."
      },
      {
        "name": "Grand Akka Mahadevi",
        "category": "mid-range",
        "priceRange": "INR 3,500-5,500",
        "distanceFromCenter": "1.5 km",
        "rating": 4.2,
        "description": "Modern family rooms with vegetarian restaurant."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Annadanam Complex",
        "cuisine": "Sacred Temple Prasadam",
        "priceRange": "Free",
        "rating": 4.9,
        "specialDish": "Temple Mahaprasadam Meals",
        "distanceFromCenter": "0.2 km",
        "description": "Divinely prepared wholesome satvik meals provided to all pilgrims."
      },
      {
        "name": "Trishul Vegetarian",
        "cuisine": "South Indian Pure Veg",
        "priceRange": "INR 150-350",
        "rating": 4.2,
        "specialDish": "Ghee Pongal & Vada",
        "distanceFromCenter": "0.8 km",
        "description": "Crisp morning tiffins and hot filter coffee."
      },
      {
        "name": "Nallamala Spice",
        "cuisine": "Andhra Vegetarian",
        "priceRange": "INR 200-400",
        "rating": 4.1,
        "specialDish": "Andhra Meals with Gutti Vankaya",
        "distanceFromCenter": "1 km",
        "description": "Stuffed brinjal curry and steamed rice feast."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Darshan & Dam Panorama",
        "summary": "Morning Jyotirlinga darshan, ropeway ride to Patala Ganga, afternoon dam visit.",
        "highlights": [
          "Mallikarjuna Darshan",
          "Ropeway to Patala Ganga",
          "Srisailam Dam Viewpoint"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Forest ghat entry timings",
        "detail": "The Nallamala tiger reserve forest checkposts close entry at 9:00 PM."
      }
    ],
    "startingBudget": "From INR 3,200 / day",
    "budgetTier": "budget",
    "costEstimate": {
      "backpacker": "INR 2,200-3,200",
      "comfort": "INR 3,800-6,000",
      "premium": "INR 7,500+"
    }
  },
  {
    "id": "hyderabad",
    "slug": "hyderabad",
    "name": "Hyderabad",
    "state": "Telangana",
    "city": "Hyderabad",
    "regionType": "city",
    "description": "The City of Pearls blends 400 years of Qutb Shahi and Asaf Jahi heritage with buzzing tech corridors, world-famous biryanis, and grand fortresses.",
    "history": "Founded in 1591 by Muhammad Quli Qutb Shah along the Musi River, Hyderabad rose under the Nizams to become one of the wealthiest princely states in the world.",
    heroImage: wikimediaFile("Charminar of Hyderabad Telangana.jpg"),
    "heroImageAlt": "The illuminated four minarets of Charminar in Hyderabad at dusk",
    "galleryImages": [
      {
        src: wikimediaFile("Golconda Fort overview.jpg"),
        "alt": "Ancient Golconda fortress walls and acoustic arches"
      },
      {
        src: wikimediaFile("Hussain Sagar Buddha statue.jpg"),
        "alt": "Monolithic Buddha in the center of Hussain Sagar lake"
      },
      {
        src: wikimediaFile("Chowmahalla Palace Hyderabad.jpg"),
        "alt": "Grand chandeliers of Nizam palace"
      }
    ],
    "openingTime": "City open 24 hours",
    "closingTime": "Monuments close 5:30 - 8:00 PM",
    "entryFee": "Varies by monument",
    "foreignerFee": "Varies by monument",
    "parkingFee": "INR 50-100",
    "bestTimeToVisit": "October-March",
    "recommendedDuration": "3-4 days",
    "rating": 4.9,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 17.385,
    "longitude": 78.4867,
    "nearbyAttractions": [
      {
        "name": "Charminar",
        "distance": "3 km",
        "description": "Signature 1591 monument with four towering minarets and bustling bazaars."
      },
      {
        "name": "Golconda Fort",
        "distance": "11 km",
        "description": "Impregnable citadel famous for acoustic marvels and diamond vaults."
      },
      {
        "name": "Chowmahalla Palace",
        "distance": "4 km",
        "description": "Magnificent seat of the Asaf Jahi dynasty with royal courtrooms."
      }
    ],
    "featuredAttractions": [
      {
        "id": "charminar",
        "name": "Charminar",
        "description": "Iconic arch structure surrounded by Laad Bazaar bangle markets.",
        image: wikimediaFile("Charminar at dusk, Hyderabad.jpg"),
        "timings": "9:30 AM - 5:30 PM",
        "entryFee": "INR 25"
      },
      {
        "id": "golconda-fort",
        "name": "Golconda Fort",
        "description": "Spectacular medieval granite fortress with sound-and-light shows.",
        image: wikimediaFile("Golconda Fort overview.jpg"),
        "timings": "9:00 AM - 5:30 PM",
        "entryFee": "INR 25"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Taj Falaknuma Palace",
        "category": "premium",
        "priceRange": "INR 35,000-65,000",
        "distanceFromCenter": "6 km",
        "rating": 4.9,
        "description": "A converted 1894 royal palace with scorpion design and carriage arrival."
      },
      {
        "name": "ITC Kakatiya Hyderabad",
        "category": "premium",
        "priceRange": "INR 9,500-15,000",
        "distanceFromCenter": "4 km",
        "rating": 4.7,
        "description": "Luxury hotel celebrating Kakatiya art and regal dining."
      },
      {
        "name": "Courtyard by Marriott",
        "category": "mid-range",
        "priceRange": "INR 5,500-8,500",
        "distanceFromCenter": "3 km",
        "rating": 4.4,
        "description": "Comfortable central base overlooking Hussain Sagar."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Paradise Biryani",
        "cuisine": "Hyderabadi Mughlai",
        "priceRange": "INR 400-850",
        "rating": 4.6,
        "specialDish": "World-Famous Hyderabadi Mutton Dum Biryani",
        "distanceFromCenter": "4 km",
        "description": "Legendary restaurant serving slow-cooked aromatic basmati rice and tender meat."
      },
      {
        "name": "Bawarchi",
        "cuisine": "Hyderabadi & Mughlai",
        "priceRange": "INR 350-700",
        "rating": 4.7,
        "specialDish": "Special Chicken Biryani & Boti Kebab",
        "distanceFromCenter": "3.2 km",
        "description": "Consistently celebrated for bold spice and authentic wood-fired dum style."
      },
      {
        "name": "Karachi Bakery & Cafe",
        "cuisine": "Bakery & Irani Chai",
        "priceRange": "INR 150-350",
        "rating": 4.8,
        "specialDish": "Fruit Biscuits & Irani Chai with Osmania Biscuits",
        "distanceFromCenter": "2 km",
        "description": "Heritage baker beloved for buttery melt-in-mouth Osmania biscuits."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Old City Heritage",
        "summary": "Explore Charminar, Laad Bazaar, Chowmahalla Palace, and dine on authentic biryani.",
        "highlights": [
          "Charminar climb",
          "Bangle shopping",
          "Chowmahalla Palace",
          "Dinner at Paradise"
        ]
      },
      {
        "title": "Day 2: Fortresses & Acoustics",
        "summary": "Spend morning hiking Golconda Fort, visit Qutb Shahi Tombs, evening boat ride on Hussain Sagar.",
        "highlights": [
          "Golconda acoustics",
          "Qutb Shahi Tombs",
          "Buddha Statue boat ride"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Take Metro to beat city traffic",
        "detail": "The Hyderabad Metro connects HITEC City, Secunderabad, and Old City efficiently."
      }
    ],
    "startingBudget": "From INR 5,500 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,500-5,500",
      "comfort": "INR 6,500-11,000",
      "premium": "INR 15,000+"
    }
  },
  {
    "id": "warangal",
    "slug": "warangal",
    "name": "Warangal",
    "state": "Telangana",
    "city": "Warangal",
    "regionType": "heritage-site",
    "description": "The ancient Kakatiya kingdom capital, adorned with monolithic stone gateways, thousand-pillar sanctuaries, and a stone fort in concentric rings.",
    "history": "Ruled by iconic monarchs like Rani Rudrama Devi and Prataparudra, Warangal flourished in the 12th-14th centuries as a center of sculpture and hydraulic engineering.",
    heroImage: "/images/destinations/warangal.jpg",
    "heroImageAlt": "Iconic Kakatiya Kala Thoranam gateway in Warangal Fort",
    "galleryImages": [
      {
        src: wikimediaFile("Thousand pillar temple hall.jpg"),
        "alt": "Star-shaped Thousand Pillar Temple pillars"
      },
      {
        src: wikimediaFile("Bhadrakali temple Warangal lake.jpg"),
        "alt": "Lakeside temple of Goddess Bhadrakali"
      }
    ],
    "openingTime": "6:00 AM",
    "closingTime": "6:30 PM",
    "entryFee": "INR 25 for fort / Temple free",
    "foreignerFee": "INR 300 for fort",
    "parkingFee": "INR 30-50",
    "bestTimeToVisit": "October-March",
    "recommendedDuration": "1-2 days",
    "rating": 4.7,
    "transportModes": [
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 17.9689,
    "longitude": 79.5941,
    "nearbyAttractions": [
      {
        "name": "Warangal Fort",
        "distance": "2 km",
        "description": "13th-century fort ruins featuring the emblem gateway of Telangana."
      },
      {
        "name": "Thousand Pillar Temple",
        "distance": "4 km",
        "description": "Star-shaped Chalukya-Kakatiya masterpiece with 1,000 intricately carved pillars."
      },
      {
        "name": "Bhadrakali Lake",
        "distance": "3 km",
        "description": "Historic 7th-century shrine beside a tranquil artificial reservoir."
      }
    ],
    "featuredAttractions": [
      {
        "id": "thousand-pillar-temple",
        "name": "Thousand Pillar Temple",
        "description": "Architectural wonder dedicated to Shiva, Vishnu, and Surya.",
        image: wikimediaFile("Thousand pillar temple hall.jpg"),
        "timings": "6:00 AM - 8:00 PM",
        "entryFee": "Free"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Hotel Suprabha",
        "category": "mid-range",
        "priceRange": "INR 3,200-4,800",
        "distanceFromCenter": "1.5 km",
        "rating": 4.2,
        "description": "Comfortable hospitality choice in Hanamkonda."
      },
      {
        "name": "Haritha Kakatiya Warangal",
        "category": "mid-range",
        "priceRange": "INR 2,800-4,200",
        "distanceFromCenter": "2 km",
        "rating": 4.1,
        "description": "Spacious government tourism hotel with gardens."
      },
      {
        "name": "City Grand Hotel",
        "category": "budget",
        "priceRange": "INR 1,600-2,600",
        "distanceFromCenter": "0.8 km",
        "rating": 3.9,
        "description": "Value stay close to Warangal railway junction."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Kakatiya Deluxe Mess",
        "cuisine": "Telangana Traditional",
        "priceRange": "INR 180-350",
        "rating": 4.6,
        "specialDish": "Sarva Pindi & Natu Kodi Kura",
        "distanceFromCenter": "1 km",
        "description": "Crisp sesame flatbread and fiery country chicken curry."
      },
      {
        "name": "Prakruthi Restaurant",
        "cuisine": "South & North Indian",
        "priceRange": "INR 250-500",
        "rating": 4.2,
        "specialDish": "Gongura Mutton & Biryani",
        "distanceFromCenter": "1.8 km",
        "description": "Family restaurant celebrated for tangy gongura delicacies."
      },
      {
        "name": "Geetha Bhavan",
        "cuisine": "Pure Veg Tiffins",
        "priceRange": "INR 120-250",
        "rating": 4.4,
        "specialDish": "Butter Masala Dosa",
        "distanceFromCenter": "0.5 km",
        "description": "Classic breakfast hub near the Thousand Pillar Temple."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Kakatiya Heritage Circuit",
        "summary": "Visit Thousand Pillar Temple, Warangal Fort Kala Thoranam, and evening at Bhadrakali lake.",
        "highlights": [
          "Thousand Pillar Temple",
          "Warangal Fort",
          "Sunset by Bhadrakali lake"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Combine with Ramappa visit",
        "detail": "UNESCO World Heritage site Ramappa Temple is located just 65 km away."
      }
    ],
    "startingBudget": "From INR 3,600 / day",
    "budgetTier": "budget",
    "costEstimate": {
      "backpacker": "INR 2,500-3,600",
      "comfort": "INR 4,000-6,000",
      "premium": "INR 8,000+"
    }
  },
  {
    "id": "ramappa",
    "slug": "ramappa-temple",
    "name": "Ramappa Temple",
    "state": "Telangana",
    "city": "Palampet",
    "regionType": "heritage-site",
    "description": "UNESCO World Heritage site revered as the 'brightest star in the galaxy of medieval temples', built with floating bricks and earthquake-resistant sandbox technology.",
    "history": "Commissioned in 1213 CE by Kakatiya general Recherla Rudra and constructed over 40 years by master sculptor Ramappa, after whom the temple is uniquely named.",
    heroImage: "/images/destinations/ramappa-temple.jpg",
    "heroImageAlt": "Intricately carved brackets and sanctum of Ramappa Temple",
    "galleryImages": [
      {
        src: wikimediaFile("Ramappa Temple bracket figures.jpg"),
        "alt": "Black basalt dancing celestial maiden brackets"
      },
      {
        src: wikimediaFile("Ramappa Lake sunset.jpg"),
        "alt": "Serene Ramappa lake nearby built during Kakatiya era"
      }
    ],
    "openingTime": "6:00 AM",
    "closingTime": "6:00 PM",
    "entryFee": "INR 25",
    "foreignerFee": "INR 300",
    "parkingFee": "INR 30",
    "bestTimeToVisit": "October-March",
    "recommendedDuration": "1 day",
    "rating": 4.9,
    "transportModes": [
      "Buses",
      "Taxi"
    ],
    "latitude": 18.2604,
    "longitude": 79.943,
    "nearbyAttractions": [
      {
        "name": "Ramappa Lake",
        "distance": "1 km",
        "description": "Stunning 13th-century Kakatiya engineering marvel reservoir with boating."
      },
      {
        "name": "Laknavaram Lake",
        "distance": "28 km",
        "description": "Expansive forest lake with hanging rope bridge and island cottages."
      }
    ],
    "featuredAttractions": [
      {
        "id": "ramappa-sanctum",
        "name": "Ramappa Temple Complex",
        "description": "Intricate black basalt carvings of Madanikas and floating lightweight roof bricks.",
        image: wikimediaFile("Ramappa Temple Palampet.jpg"),
        "timings": "6:00 AM - 6:00 PM",
        "entryFee": "INR 25"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Haritha Lake View Resort Ramappa",
        "category": "budget",
        "priceRange": "INR 2,200-3,500",
        "distanceFromCenter": "1 km",
        "rating": 4.1,
        "description": "Peaceful cottages overlooking Ramappa Lake."
      },
      {
        "name": "Laknavaram Island Resort",
        "category": "mid-range",
        "priceRange": "INR 3,800-6,000",
        "distanceFromCenter": "28 km",
        "rating": 4.4,
        "description": "Island stay connected via scenic pedestrian suspension bridge."
      },
      {
        "name": "Warangal Grand City",
        "category": "mid-range",
        "priceRange": "INR 3,500-5,000",
        "distanceFromCenter": "65 km",
        "rating": 4.2,
        "description": "Full amenities base in nearby city of Warangal."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Haritha Restaurant Ramappa",
        "cuisine": "Telangana Home Style",
        "priceRange": "INR 200-400",
        "rating": 4,
        "specialDish": "Rice with Sambar & Pulusu",
        "distanceFromCenter": "0.8 km",
        "description": "Convenient dining near temple entrance."
      },
      {
        "name": "Laknavaram Lakefront Eatery",
        "cuisine": "Freshwater Fish & Snacks",
        "priceRange": "INR 250-450",
        "rating": 4.3,
        "specialDish": "Crispy Fried Lake Carp",
        "distanceFromCenter": "28 km",
        "description": "Fresh river catch prepared spicy with lakeside breezes."
      },
      {
        "name": "Palampet Village Dhaba",
        "cuisine": "Local Country Style",
        "priceRange": "INR 150-300",
        "rating": 4.1,
        "specialDish": "Jowar Roti with Tomato Chutney",
        "distanceFromCenter": "0.5 km",
        "description": "Wholesome millet rotis freshly baked on mud stoves."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: UNESCO Marvel & Lake Boating",
        "summary": "Study the architectural bas-reliefs of Ramappa Temple, followed by boating on Ramappa and Laknavaram lakes.",
        "highlights": [
          "Sandbox foundation tour",
          "Bracket figure photography",
          "Laknavaram suspension bridge"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Hire a licensed ASI guide",
        "detail": "A guide explains the acoustic pillars and floating brick demonstration that make Ramappa unique."
      }
    ],
    "startingBudget": "From INR 3,000 / day",
    "budgetTier": "budget",
    "costEstimate": {
      "backpacker": "INR 2,000-3,000",
      "comfort": "INR 3,500-5,500",
      "premium": "INR 7,000+"
    }
  },
  {
    "id": "nagarjuna-sagar",
    "slug": "nagarjuna-sagar",
    "name": "Nagarjuna Sagar",
    "state": "Telangana",
    "city": "Nalgonda",
    "regionType": "heritage-site",
    "description": "Home to one of the world's largest masonry dams and the island museum of Nagarjunakonda, preserving profound 2nd-century Mahayana Buddhist relics.",
    "history": "Named after Buddhist master Acharya Nagarjuna who founded an ancient university here. The modern dam was inaugurated in 1967.",
    heroImage: "/images/destinations/nagarjuna-sagar.jpg",
    "heroImageAlt": "Crest gates of Nagarjuna Sagar releasing emerald waters",
    "galleryImages": [
      {
        src: wikimediaFile("Nagarjunakonda island museum.jpg"),
        "alt": "Island museum surrounded by waters of the reservoir"
      },
      {
        src: wikimediaFile("Ethipothala waterfalls.jpg"),
        "alt": "Cascading Ethipothala waterfall in rocky woods"
      }
    ],
    "openingTime": "6:00 AM",
    "closingTime": "6:00 PM",
    "entryFee": "Boat INR 150 / Dam viewpoint free",
    "foreignerFee": "Boat INR 300",
    "parkingFee": "INR 30-50",
    "bestTimeToVisit": "October-February",
    "recommendedDuration": "1-2 days",
    "rating": 4.6,
    "transportModes": [
      "Buses",
      "Taxi"
    ],
    "latitude": 16.5746,
    "longitude": 79.3126,
    "nearbyAttractions": [
      {
        "name": "Nagarjunakonda Island",
        "distance": "10 km boat",
        "description": "Island housing reconstructed Buddhist stupas and ancient university ruins."
      },
      {
        "name": "Ethipothala Falls",
        "distance": "11 km",
        "description": "Gleaming 70-foot mountain waterfall and crocodile breeding center."
      }
    ],
    "featuredAttractions": [
      {
        "id": "nagarjunakonda",
        "name": "Nagarjunakonda Island Museum",
        "description": "Reconstructed stone monasteries rescued before the dam valley flooded.",
        image: wikimediaFile("Nagarjunakonda island museum.jpg"),
        "timings": "9:00 AM - 5:00 PM (Closed Fridays)",
        "entryFee": "INR 20"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Vijay Vihar Resort",
        "category": "mid-range",
        "priceRange": "INR 3,000-4,800",
        "distanceFromCenter": "2 km",
        "rating": 4.1,
        "description": "Cliff-edge resort with expansive views of the reservoir lake."
      },
      {
        "name": "Nagarjuna Resort Hill Colony",
        "category": "budget",
        "priceRange": "INR 1,600-2,800",
        "distanceFromCenter": "3 km",
        "rating": 3.8,
        "description": "Simple rooms catering to weekend travelers."
      },
      {
        "name": "Ethipothala Haritha",
        "category": "budget",
        "priceRange": "INR 2,000-3,200",
        "distanceFromCenter": "11 km",
        "rating": 4,
        "description": "Peaceful stay beside the illuminated cascading waterfall."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Vijay Vihar Restaurant",
        "cuisine": "South & North Indian",
        "priceRange": "INR 250-500",
        "rating": 4.1,
        "specialDish": "Krishna Freshwater Fish Curry",
        "distanceFromCenter": "2 km",
        "description": "Spicy river fish cooked fresh with steamed rice."
      },
      {
        "name": "Dam View Cafe",
        "cuisine": "Tea & Quick Bites",
        "priceRange": "INR 100-250",
        "rating": 3.9,
        "specialDish": "Mirchi Bajji & Chai",
        "distanceFromCenter": "0.5 km",
        "description": "Evening tea and snacks overlooking the water discharge."
      },
      {
        "name": "Highway Green Dhaba",
        "cuisine": "Dhaba Style",
        "priceRange": "INR 200-400",
        "rating": 4,
        "specialDish": "Egg Curry & Roti",
        "distanceFromCenter": "4 km",
        "description": "Homely roadside food for travelers en route to Hyderabad."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Island Boat Cruise & Falls",
        "summary": "Morning launch boat to Nagarjunakonda museum, afternoon trip to Ethipothala waterfalls.",
        "highlights": [
          "Krishna river boat launch",
          "Nagarjunakonda stupas",
          "Ethipothala crocodile park"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Check boat timings",
        "detail": "Boats to Nagarjunakonda operate at fixed slots and don't run on Fridays."
      }
    ],
    "startingBudget": "From INR 3,400 / day",
    "budgetTier": "budget",
    "costEstimate": {
      "backpacker": "INR 2,200-3,400",
      "comfort": "INR 3,800-6,000",
      "premium": "INR 7,500+"
    }
  },
  {
    "id": "delhi",
    "slug": "delhi",
    "name": "Delhi",
    "state": "Delhi",
    "city": "New Delhi",
    "regionType": "city",
    "description": "India's sprawling capital where medieval Mughal monuments, British colonial boulevards, and cutting-edge urban dining fuse in vibrant harmony.",
    "history": "Seven historical cities have risen here, from Indraprastha to Shahjahanabad and Lutyens' New Delhi, leaving behind a wealth of world-class monuments.",
    heroImage: "/images/destinations/delhi.jpg",
    "heroImageAlt": "India Gate illuminated with tri-color lights at twilight",
    "galleryImages": [
      {
        src: wikimediaFile("Red Fort Delhi overview.jpg"),
        "alt": "Grand sandstone ramparts of Red Fort"
      },
      {
        src: wikimediaFile("Humayun Tomb Delhi.jpg"),
        "alt": "Persian-influenced dome and gardens of Humayun's Tomb"
      },
      {
        src: wikimediaFile("Qutb Minar minaret.jpg"),
        "alt": "Towering 73-meter fluted minaret of Qutb Minar"
      }
    ],
    "openingTime": "Monuments 6:00 AM - 6:00 PM",
    "closingTime": "City open 24 hours",
    "entryFee": "Varies by monument (INR 35-50)",
    "foreignerFee": "INR 550-600",
    "parkingFee": "INR 50-100",
    "bestTimeToVisit": "October-March",
    "recommendedDuration": "3-4 days",
    "rating": 4.9,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 28.6139,
    "longitude": 77.209,
    "nearbyAttractions": [
      {
        "name": "Qutb Minar",
        "distance": "14 km",
        "description": "UNESCO World Heritage brick minaret begun in 1192 CE."
      },
      {
        "name": "Humayun's Tomb",
        "distance": "6 km",
        "description": "First garden-tomb on the Indian subcontinent, inspiration for the Taj Mahal."
      },
      {
        "name": "Red Fort",
        "distance": "7 km",
        "description": "Mughal imperial residence of Shah Jahan with Diwan-i-Khas."
      }
    ],
    "featuredAttractions": [
      {
        "id": "qutb-minar",
        "name": "Qutb Minar",
        "description": "Victory tower standing 73 meters tall adorned with Quranic calligraphy.",
        image: wikimediaFile("Qutb Minar minaret.jpg"),
        "timings": "7:00 AM - 5:00 PM",
        "entryFee": "INR 35"
      },
      {
        "id": "humayun-tomb",
        "name": "Humayun's Tomb",
        "description": "Exquisite red sandstone charbagh garden tomb complex.",
        image: wikimediaFile("Humayun Tomb Delhi.jpg"),
        "timings": "6:00 AM - 6:00 PM",
        "entryFee": "INR 35"
      }
    ],
    "nearbyHotels": [
      {
        "name": "The Imperial New Delhi",
        "category": "premium",
        "priceRange": "INR 18,000-32,000",
        "distanceFromCenter": "1 km",
        "rating": 4.9,
        "description": "Legendary 1930s art deco heritage hotel on Janpath."
      },
      {
        "name": "The Claridges New Delhi",
        "category": "premium",
        "priceRange": "INR 12,000-20,000",
        "distanceFromCenter": "3 km",
        "rating": 4.7,
        "description": "Classic colonial luxury near Lodi Gardens."
      },
      {
        "name": "Bloomrooms @ Janpath",
        "category": "mid-range",
        "priceRange": "INR 4,500-7,000",
        "distanceFromCenter": "1.2 km",
        "rating": 4.4,
        "description": "Bright, clean, design-led hotel in central Delhi."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Karim's Old Delhi",
        "cuisine": "Mughlai & Kebab",
        "priceRange": "INR 450-900",
        "rating": 4.8,
        "specialDish": "Mutton Korma & Seekh Kebab",
        "distanceFromCenter": "6 km",
        "description": "Historic royal culinary institution established in 1913 near Jama Masjid."
      },
      {
        "name": "Bukhara at ITC Maurya",
        "cuisine": "North-West Frontier",
        "priceRange": "INR 3,500-6,000",
        "rating": 4.9,
        "specialDish": "Dal Bukhara & Sikandari Raan",
        "distanceFromCenter": "7 km",
        "description": "Internationally renowned clay-oven dining visited by global leaders."
      },
      {
        "name": "Saravana Bhavan Connaught Place",
        "cuisine": "South Indian Pure Veg",
        "priceRange": "INR 250-500",
        "rating": 4.6,
        "specialDish": "Ghee Mini Idlis & Filter Coffee",
        "distanceFromCenter": "0.5 km",
        "description": "Beloved hub for crisp dosas and authentic South Indian filter coffee."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Mughal Heritage",
        "summary": "Old Delhi walking tour, Jama Masjid, Red Fort, and lunch at Karim's.",
        "highlights": [
          "Chandni Chowk rickshaw ride",
          "Jama Masjid",
          "Karim's dinner"
        ]
      },
      {
        "title": "Day 2: Imperial & Garden Tombs",
        "summary": "Humayun's Tomb, India Gate promenade, and evening at Qutb Minar complex.",
        "highlights": [
          "Humayun's Tomb",
          "India Gate",
          "Qutb Minar"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Delhi Metro is the fastest transit",
        "detail": "Avoid rush-hour road jams by using the clean and punctual Metro network."
      }
    ],
    "startingBudget": "From INR 5,500 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,500-5,500",
      "comfort": "INR 6,500-12,000",
      "premium": "INR 18,000+"
    }
  },
  {
    "id": "mumbai",
    "slug": "mumbai",
    "name": "Mumbai",
    "state": "Maharashtra",
    "city": "Mumbai",
    "regionType": "city",
    "description": "India’s financial dynamo on the Arabian Sea, famous for Victorian Gothic architecture, Bollywood cinema, Marine Drive’s Queen's Necklace, and street food.",
    "history": "Originally seven islands inhabited by Koli fisherfolk, Mumbai transformed through Portuguese rule, British reclamation, and textile mills into India’s commercial capital.",
    heroImage: "/images/destinations/mumbai.jpg",
    "heroImageAlt": "Gateway of India arch overlooking Mumbai harbor at sunrise",
    "galleryImages": [
      {
        src: wikimediaFile("Marine Drive Queen Necklace Mumbai.jpg"),
        "alt": "Marine Drive glittering along the curved Arabian sea coast"
      },
      {
        src: wikimediaFile("Chhatrapati Shivaji Terminus Mumbai.jpg"),
        "alt": "Victorian Gothic facade of CSMT railway station"
      }
    ],
    "openingTime": "City open 24 hours",
    "closingTime": "24/7 city",
    "entryFee": "Varies",
    "foreignerFee": "Varies",
    "parkingFee": "INR 60-150",
    "bestTimeToVisit": "November-February",
    "recommendedDuration": "3-4 days",
    "rating": 4.9,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 18.922,
    "longitude": 72.8347,
    "nearbyAttractions": [
      {
        "name": "Gateway of India",
        "distance": "1 km",
        "description": "Colonial ceremonial arch erected in 1924 overlooking the Arabian Sea."
      },
      {
        "name": "Elephanta Caves",
        "distance": "10 km ferry",
        "description": "UNESCO island cave temples featuring the colossal Trimurti Shiva."
      },
      {
        "name": "Marine Drive",
        "distance": "3 km",
        "description": "Iconic 3-kilometer curved coastal promenade."
      }
    ],
    "featuredAttractions": [
      {
        "id": "gateway-of-india",
        "name": "Gateway of India",
        "description": "Historic waterfront monument and boarding point for Elephanta ferries.",
        image: wikimediaFile("Gateway of India Mumbai.jpg"),
        "timings": "Open 24 hours",
        "entryFee": "Free"
      }
    ],
    "nearbyHotels": [
      {
        "name": "The Taj Mahal Palace",
        "category": "premium",
        "priceRange": "INR 22,000-45,000",
        "distanceFromCenter": "0.5 km",
        "rating": 4.9,
        "description": "Landmark 1903 heritage palace overlooking the Gateway of India."
      },
      {
        "name": "Trident Nariman Point",
        "category": "premium",
        "priceRange": "INR 14,000-24,000",
        "distanceFromCenter": "2 km",
        "rating": 4.7,
        "description": "High-rise luxury offering sweeping views of Marine Drive."
      },
      {
        "name": "Residency Hotel Fort",
        "category": "budget",
        "priceRange": "INR 3,800-6,000",
        "distanceFromCenter": "1.5 km",
        "rating": 4.3,
        "description": "Charming boutique hotel in the historic Fort heritage quarter."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Britannia & Co.",
        "cuisine": "Parsi & Irani",
        "priceRange": "INR 450-900",
        "rating": 4.7,
        "specialDish": "Berry Pulao & Caramel Custard",
        "distanceFromCenter": "2 km",
        "description": "Beloved 1923 colonial cafe in Ballard Estate."
      },
      {
        "name": "Trishna",
        "cuisine": "Mangalorean Seafood",
        "priceRange": "INR 1,200-2,500",
        "rating": 4.8,
        "specialDish": "Butter Pepper Garlic Crab & Koliwada Prawns",
        "distanceFromCenter": "1.2 km",
        "description": "World-famous seafood institution hidden in Fort lanes."
      },
      {
        "name": "Sardar Refreshments",
        "cuisine": "Street Food & Pav Bhaji",
        "priceRange": "INR 200-400",
        "rating": 4.6,
        "specialDish": "Amul Butter Loaded Pav Bhaji",
        "distanceFromCenter": "8 km",
        "description": "Legendary joint serving the richest, most decadent pav bhaji."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Colonial Fort & Gateway",
        "summary": "Gateway of India, ferry to Elephanta Caves, evening stroll along Marine Drive.",
        "highlights": [
          "Elephanta Caves",
          "Gateway sunset",
          "Marine Drive night view"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Ride the local train off-peak",
        "detail": "Avoid 8:00-11:00 AM and 5:00-8:30 PM peak rush on the local train lines."
      }
    ],
    "startingBudget": "From INR 6,000 / day",
    "budgetTier": "premium",
    "costEstimate": {
      "backpacker": "INR 4,000-6,000",
      "comfort": "INR 7,500-14,000",
      "premium": "INR 22,000+"
    }
  },
  {
    "id": "jaipur",
    "slug": "jaipur",
    "name": "Jaipur",
    "state": "Rajasthan",
    "city": "Jaipur",
    "regionType": "heritage-site",
    "description": "The Pink City of Rajasthan, famous for hilltop Amber Fort, honeycombed Hawa Mahal, royal palaces, and gemstone bazaars.",
    "history": "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was planned according to ancient Vastu Shastra principles and painted terracotta pink in 1876.",
    heroImage: "/images/destinations/jaipur.jpg",
    "heroImageAlt": "Intricate pink sandstone jharokha facade of Hawa Mahal",
    "galleryImages": [
      {
        src: wikimediaFile("Amber Fort Jaipur overview.jpg"),
        "alt": "Amber fort reflected in Maota lake waters"
      },
      {
        src: wikimediaFile("City Palace Jaipur courtyard.jpg"),
        "alt": "Peacock gate in the courtyards of City Palace"
      }
    ],
    "openingTime": "9:00 AM",
    "closingTime": "5:30 PM",
    "entryFee": "Composite ticket INR 100-300",
    "foreignerFee": "Composite ticket INR 1000",
    "parkingFee": "INR 50-100",
    "bestTimeToVisit": "October-March",
    "recommendedDuration": "2-3 days",
    "rating": 4.9,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 26.9124,
    "longitude": 75.7873,
    "nearbyAttractions": [
      {
        "name": "Amber Fort",
        "distance": "11 km",
        "description": "Magnificent hilltop palace fortress featuring Sheesh Mahal mirror palace."
      },
      {
        "name": "Hawa Mahal",
        "distance": "2 km",
        "description": "Five-story Palace of Winds built with 953 honeycomb windows."
      },
      {
        "name": "City Palace",
        "distance": "2 km",
        "description": "Royal palace museum showcasing royal costumes, weapons, and courtyards."
      }
    ],
    "featuredAttractions": [
      {
        "id": "amber-fort",
        "name": "Amber Fort",
        "description": "Imposing Rajput fortress overlooking Maota Lake with grand courtyards.",
        image: wikimediaFile("Amber Fort Jaipur overview.jpg"),
        "timings": "8:00 AM - 5:30 PM",
        "entryFee": "INR 100"
      },
      {
        "id": "hawa-mahal",
        "name": "Hawa Mahal",
        "description": "Iconic facade designed for royal ladies to view street processions unseen.",
        image: wikimediaFile("Hawa Mahal Jaipur facade.jpg"),
        "timings": "9:00 AM - 5:00 PM",
        "entryFee": "INR 50"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Rambagh Palace Jaipur",
        "category": "premium",
        "priceRange": "INR 35,000-75,000",
        "distanceFromCenter": "4 km",
        "rating": 4.9,
        "description": "Former residence of the Maharaja of Jaipur set in 47 acres of gardens."
      },
      {
        "name": "Alsisar Haveli",
        "category": "mid-range",
        "priceRange": "INR 6,500-11,000",
        "distanceFromCenter": "1.5 km",
        "rating": 4.6,
        "description": "Atmospheric heritage haveli with traditional frescoes and courtyard pool."
      },
      {
        "name": "Umaid Bhawan Heritage House",
        "category": "budget",
        "priceRange": "INR 2,800-4,500",
        "distanceFromCenter": "2.5 km",
        "rating": 4.4,
        "description": "Colorful Rajput-style budget hotel with rooftop restaurant."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Laxmi Mishthan Bhandar (LMB)",
        "cuisine": "Rajasthani Vegetarian",
        "priceRange": "INR 350-700",
        "rating": 4.6,
        "specialDish": "Rajasthani Dal Baati Churma & Ghewar",
        "distanceFromCenter": "1.5 km",
        "description": "Johari Bazaar sweet and dining landmark since 1727."
      },
      {
        "name": "Handi Restaurant",
        "cuisine": "North Indian & Mughlai",
        "priceRange": "INR 600-1,200",
        "rating": 4.5,
        "specialDish": "Handi Meat & Lal Maas",
        "distanceFromCenter": "1 km",
        "description": "Celebrated for fiery red-chili Rajasthani mutton curries."
      },
      {
        "name": "Rawat Mishthan Bhandar",
        "cuisine": "Snacks & Sweets",
        "priceRange": "INR 150-300",
        "rating": 4.7,
        "specialDish": "Crispy Pyaaz Kachori & Mawa Kachori",
        "distanceFromCenter": "2 km",
        "description": "The definitive destination for famous Jaipur onion kachoris."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Amber Fort & Royal Bazaars",
        "summary": "Morning visit to Amber Fort, photo stop at Jal Mahal, afternoon Johari Bazaar shopping.",
        "highlights": [
          "Amber Fort Sheesh Mahal",
          "Jal Mahal",
          "LMB Dal Baati dinner"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Get the composite ticket",
        "detail": "Saves money and skip-the-line time across Amber, Hawa Mahal, and Albert Hall."
      }
    ],
    "startingBudget": "From INR 4,800 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,200-4,800",
      "comfort": "INR 5,500-9,500",
      "premium": "INR 16,000+"
    }
  },
  {
    "id": "udaipur",
    "slug": "udaipur",
    "name": "Udaipur",
    "state": "Rajasthan",
    "city": "Udaipur",
    "regionType": "city",
    "description": "The City of Lakes and Venice of the East, famed for whitewashed palaces reflected in Lake Pichola and the Aravalli hills.",
    "history": "Founded in 1559 by Maharana Udai Singh II as the romantic new capital of Mewar, resisting repeated Mughal conquests.",
    heroImage: "/images/destinations/udaipur.jpg",
    "heroImageAlt": "White marble Lake Palace floating on Lake Pichola at sunset",
    "galleryImages": [
      {
        src: wikimediaFile("City Palace Udaipur lake view.jpg"),
        "alt": "Massive City Palace walls above Lake Pichola"
      },
      {
        src: wikimediaFile("Jag Mandir island palace.jpg"),
        "alt": "Island palace Jag Mandir lit up across the lake"
      }
    ],
    "openingTime": "9:00 AM",
    "closingTime": "6:00 PM",
    "entryFee": "INR 30-300",
    "foreignerFee": "INR 300",
    "parkingFee": "INR 40-80",
    "bestTimeToVisit": "September-March",
    "recommendedDuration": "2-3 days",
    "rating": 4.9,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 24.5854,
    "longitude": 73.7125,
    "nearbyAttractions": [
      {
        "name": "City Palace Udaipur",
        "distance": "1 km",
        "description": "Rajasthan's largest palace complex overlooking Lake Pichola."
      },
      {
        "name": "Lake Pichola Boat Cruise",
        "distance": "0.5 km",
        "description": "Scenic sunset cruise gliding past floating palaces."
      },
      {
        "name": "Saheliyon-ki-Bari",
        "distance": "4 km",
        "description": "Historic royal garden of fountains, marble kiosks, and lotus pools."
      }
    ],
    "featuredAttractions": [
      {
        "id": "city-palace-udaipur",
        "name": "City Palace",
        "description": "Magnificent marble and granite fortress with mirror galleries and lake balconies.",
        image: wikimediaFile("City Palace Udaipur lake view.jpg"),
        "timings": "9:00 AM - 5:30 PM",
        "entryFee": "INR 300"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Taj Lake Palace",
        "category": "premium",
        "priceRange": "INR 40,000-85,000",
        "distanceFromCenter": "1 km boat",
        "rating": 4.9,
        "description": "Floating 18th-century white marble palace in the middle of Lake Pichola."
      },
      {
        "name": "Fateh Garh Udaipur",
        "category": "premium",
        "priceRange": "INR 9,500-18,000",
        "distanceFromCenter": "6 km",
        "rating": 4.7,
        "description": "Heritage hilltop retreat overlooking the entire lake valley."
      },
      {
        "name": "Jagdish Niwas Haveli",
        "category": "budget",
        "priceRange": "INR 2,400-3,800",
        "distanceFromCenter": "0.4 km",
        "rating": 4.3,
        "description": "Atmospheric traditional haveli steps away from Jagdish Temple."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Ambrai Restaurant",
        "cuisine": "North Indian & Mewari",
        "priceRange": "INR 1,200-2,400",
        "rating": 4.8,
        "specialDish": "Mewari Laal Maas & Murgh Tikka",
        "distanceFromCenter": "1.2 km",
        "description": "Waterside dining with unbeatable views of the illuminated City Palace."
      },
      {
        "name": "Tribute Restaurant",
        "cuisine": "Rajasthani & Continental",
        "priceRange": "INR 700-1,400",
        "rating": 4.6,
        "specialDish": "Ker Sangri & Gatta Curry",
        "distanceFromCenter": "3 km",
        "description": "Lakeside tribute to Maharana Pratap's legendary horse Chetak."
      },
      {
        "name": "Millets of Mewar",
        "cuisine": "Healthy Organic Rajasthani",
        "priceRange": "INR 300-650",
        "rating": 4.7,
        "specialDish": "Bajra Khichdi & Millet Pancakes",
        "distanceFromCenter": "0.8 km",
        "description": "Dedicated to local whole grains, vegan options, and clean cuisine."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Palace & Sunset Cruise",
        "summary": "Explore City Palace museum, take sunset boat to Jag Mandir, dinner at Ambrai.",
        "highlights": [
          "City Palace galleries",
          "Lake Pichola boat",
          "Ambrai waterfront dinner"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Book sunset boat slots early",
        "detail": "The 5:00 PM sunset boat on Lake Pichola fills up very quickly."
      }
    ],
    "startingBudget": "From INR 5,200 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,500-5,200",
      "comfort": "INR 6,000-11,000",
      "premium": "INR 18,000+"
    }
  },
  {
    "id": "agra",
    "slug": "agra",
    "name": "Agra",
    "state": "Uttar Pradesh",
    "city": "Agra",
    "regionType": "heritage-site",
    "description": "Home to the sublime white marble Taj Mahal, Agra Fort, and nearby Fatehpur Sikri, representing the peak of Mughal architectural genius.",
    "history": "Capital of the Mughal Empire under Akbar, Jahangir, and Shah Jahan, situated along the sacred Yamuna River.",
    heroImage: "/images/destinations/agra.jpg",
    "heroImageAlt": "The white marble Taj Mahal glowing in morning sunlight",
    "galleryImages": [
      {
        src: wikimediaFile("Agra Fort red sandstone walls.jpg"),
        "alt": "Massive red sandstone ramparts of Agra Fort"
      },
      {
        src: wikimediaFile("Fatehpur Sikri Buland Darwaza.jpg"),
        "alt": "Towering 54-meter Buland Darwaza gateway"
      }
    ],
    "openingTime": "Sunrise to Sunset",
    "closingTime": "Closed Fridays (Taj Mahal)",
    "entryFee": "INR 50 (Domestic) / Foreigner INR 1100",
    "foreignerFee": "INR 1100",
    "parkingFee": "INR 50-100",
    "bestTimeToVisit": "October-March",
    "recommendedDuration": "1-2 days",
    "rating": 4.9,
    "transportModes": [
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 27.1751,
    "longitude": 78.0421,
    "nearbyAttractions": [
      {
        "name": "Taj Mahal",
        "distance": "1 km",
        "description": "UNESCO World Wonder mausoleum built by Shah Jahan in memory of Mumtaz Mahal."
      },
      {
        "name": "Agra Fort",
        "distance": "2.5 km",
        "description": "16th-century Mughal imperial residence with views of the Taj across the Yamuna."
      },
      {
        "name": "Mehtab Bagh",
        "distance": "6 km",
        "description": "Moonlight garden directly across the river for postcard sunset views."
      }
    ],
    "featuredAttractions": [
      {
        "id": "taj-mahal",
        "name": "Taj Mahal",
        "description": "The jewel of Muslim art in India and universally admired masterpiece of world heritage.",
        image: wikimediaFile("Taj Mahal Agra sunrise.jpg"),
        "timings": "Sunrise - Sunset (Closed Fridays)",
        "entryFee": "INR 50 / Mausoleum INR 200"
      }
    ],
    "nearbyHotels": [
      {
        "name": "The Oberoi Amarvilas",
        "category": "premium",
        "priceRange": "INR 38,000-75,000",
        "distanceFromCenter": "0.6 km",
        "rating": 4.9,
        "description": "Ultra-luxury hotel where every room offers an uninterrupted view of the Taj Mahal."
      },
      {
        "name": "ITC Mughal Resort & Spa",
        "category": "premium",
        "priceRange": "INR 8,500-14,000",
        "distanceFromCenter": "3 km",
        "rating": 4.6,
        "description": "Sprawling luxury resort inspired by Mughal gardens."
      },
      {
        "name": "Hotel Taj Resorts",
        "category": "budget",
        "priceRange": "INR 2,800-4,200",
        "distanceFromCenter": "0.8 km",
        "rating": 4.3,
        "description": "Rooftop pool hotel within walking distance of the Taj East Gate."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Pinch of Spice",
        "cuisine": "North Indian Mughlai",
        "priceRange": "INR 600-1,200",
        "rating": 4.7,
        "specialDish": "Murg Boti Masala & Dal Makhani",
        "distanceFromCenter": "3 km",
        "description": "Top-rated family dining on Fatehabad Road."
      },
      {
        "name": "Petha Junction (Panchi Petha)",
        "cuisine": "Traditional Agra Confection",
        "priceRange": "INR 100-300",
        "rating": 4.8,
        "specialDish": "Angoori Petha & Kesar Petha",
        "distanceFromCenter": "1.5 km",
        "description": "The original confectioner of Agra’s famous candied ash-gourd sweet."
      },
      {
        "name": "Dasaprakash Agra",
        "cuisine": "Pure Veg South Indian",
        "priceRange": "INR 300-600",
        "rating": 4.4,
        "specialDish": "Mysore Masala Dosa",
        "distanceFromCenter": "2 km",
        "description": "Reliable South Indian comfort food for vegetarian travelers."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Sunrise at Taj & Imperial Fort",
        "summary": "Enter Taj Mahal at sunrise for ethereal light, afternoon at Agra Fort, sunset at Mehtab Bagh.",
        "highlights": [
          "Sunrise Taj Mahal",
          "Agra Fort royal chambers",
          "Mehtab Bagh sunset"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Taj Mahal is closed on Fridays",
        "detail": "Plan your itinerary to avoid visiting Agra on a Friday if Taj is your main goal."
      }
    ],
    "startingBudget": "From INR 4,500 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,000-4,500",
      "comfort": "INR 5,500-9,500",
      "premium": "INR 18,000+"
    }
  },
  {
    "id": "varanasi",
    "slug": "varanasi",
    "name": "Varanasi",
    "state": "Uttar Pradesh",
    "city": "Varanasi",
    "regionType": "spiritual-site",
    "description": "One of the world’s oldest continuously inhabited cities, Varanasi pulses with sacred river ghats, ancient temples, morning boat chants, and the evening Ganga Aarti.",
    "history": "Known as Kashi ('City of Light') and Benares, Varanasi has been the heart of Hindu philosophy, music, and spirituality for over three millennia.",
    heroImage: wikimediaFile("Ganga Aarti Varanasi.jpg"),
    "heroImageAlt": "Pujaris performing the grand evening Ganga Aarti at Dashashwamedh Ghat",
    "galleryImages": [
      {
        src: wikimediaFile("Varanasi river ghats morning boat.jpg"),
        "alt": "Dawn boat cruising past ancient riverside palatial ghats"
      },
      {
        src: wikimediaFile("Kashi Vishwanath temple corridor.jpg"),
        "alt": "Golden spires of Kashi Vishwanath temple corridor"
      }
    ],
    "openingTime": "Open 24 hours",
    "closingTime": "Temple aarti slots vary",
    "entryFee": "Ghats free / Temple special darshan INR 300-500",
    "foreignerFee": "Same",
    "parkingFee": "INR 40-80",
    "bestTimeToVisit": "October-March",
    "recommendedDuration": "2-3 days",
    "rating": 4.9,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 25.3176,
    "longitude": 82.9739,
    "nearbyAttractions": [
      {
        "name": "Dashashwamedh Ghat",
        "distance": "1 km",
        "description": "The central and liveliest ghat, site of the mesmerizing daily evening Ganga Aarti."
      },
      {
        "name": "Kashi Vishwanath Temple",
        "distance": "1.2 km",
        "description": "One of the 12 Jyotirlingas, recently revitalized with a grand river corridor."
      },
      {
        "name": "Sarnath",
        "distance": "10 km",
        "description": "Sacred deer park where Lord Buddha delivered his first sermon after enlightenment."
      }
    ],
    "featuredAttractions": [
      {
        "id": "dashashwamedh-ghat",
        "name": "Dashashwamedh Ghat",
        "description": "Epicenter of river life, spiritual rituals, and synchronization of bells and lamps.",
        image: wikimediaFile("Ganga Aarti Dashashwamedh Ghat Varanasi.jpg"),
        "timings": "Aarti at 6:45 PM daily",
        "entryFee": "Free"
      }
    ],
    "nearbyHotels": [
      {
        "name": "BrijRama Palace",
        "category": "premium",
        "priceRange": "INR 22,000-38,000",
        "distanceFromCenter": "0.2 km river",
        "rating": 4.9,
        "description": "18th-century Maratha palace directly on Darbhanga Ghat accessible by private boat."
      },
      {
        "name": "Taj Ganges Varanasi",
        "category": "premium",
        "priceRange": "INR 11,000-18,000",
        "distanceFromCenter": "5 km",
        "rating": 4.7,
        "description": "Set in 40 acres of lush gardens in the Cantonment area."
      },
      {
        "name": "Scindhia Guest House",
        "category": "budget",
        "priceRange": "INR 2,000-3,500",
        "distanceFromCenter": "0.1 km river",
        "rating": 4.2,
        "description": "Atmospheric budget stay with balcony views of Manikarnika Ghat."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Kashi Chaat Bhandar",
        "cuisine": "Varanasi Street Food",
        "priceRange": "INR 100-250",
        "rating": 4.9,
        "specialDish": "Tamatar Chaat & Palak Chaat",
        "distanceFromCenter": "1 km",
        "description": "World-renowned street food stall serving fiery spiced warm tomato mash."
      },
      {
        "name": "Blue Lassi Shop",
        "cuisine": "Artisanal Lassi",
        "priceRange": "INR 80-200",
        "rating": 4.7,
        "specialDish": "Pomegranate & Pistachio Lassi",
        "distanceFromCenter": "0.8 km",
        "description": "Venerable shop blending fresh clay-cup lassis with natural fruits."
      },
      {
        "name": "Ram Bhandar Thatheri Bazar",
        "cuisine": "Breakfast Tiffins",
        "priceRange": "INR 80-180",
        "rating": 4.8,
        "specialDish": "Kachori Jalebi with Chana Sabzi",
        "distanceFromCenter": "1.2 km",
        "description": "The authentic Banaras morning ritual: crisp kachori and hot syrupy jalebis."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Dawn Boat & Evening Aarti",
        "summary": "Sunrise boat ride along 84 ghats, explore old alleyways, evening boat for Dashashwamedh Aarti.",
        "highlights": [
          "Sunrise rowboat",
          "Kashi Vishwanath Corridor",
          "Evening Ganga Aarti"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Take an unmotorized rowboat at dawn",
        "detail": "Silent wooden rowboats offer a peaceful experience to absorb morning chants."
      }
    ],
    "startingBudget": "From INR 4,000 / day",
    "budgetTier": "budget",
    "costEstimate": {
      "backpacker": "INR 2,800-4,000",
      "comfort": "INR 5,000-8,500",
      "premium": "INR 15,000+"
    }
  },
  {
    "id": "goa",
    "slug": "goa",
    "name": "Goa",
    "state": "Goa",
    "city": "Panaji",
    "regionType": "city",
    "description": "Sun-kissed Arabian Sea beaches, Portuguese colonial churches, spice plantations, and laid-back susegad lifestyle.",
    "history": "A Portuguese colony for over 450 years until 1961, Goa developed a unique Indo-Portuguese culture, architecture, and cuisine.",
    heroImage: "/images/destinations/goa.jpg",
    "heroImageAlt": "Golden sunset through coconut palms on a Goa beach",
    "galleryImages": [
      {
        src: wikimediaFile("Basilica of Bom Jesus Goa.jpg"),
        "alt": "Baroque facade of Basilica of Bom Jesus"
      },
      {
        src: wikimediaFile("Fontainhas Latin Quarter Goa.jpg"),
        "alt": "Colorful Portuguese villas in Fontainhas Panaji"
      }
    ],
    "openingTime": "Beaches open 24 hours",
    "closingTime": "Churches 9:00 AM - 5:30 PM",
    "entryFee": "Churches free",
    "foreignerFee": "Free",
    "parkingFee": "INR 50-100",
    "bestTimeToVisit": "November-February",
    "recommendedDuration": "3-5 days",
    "rating": 4.9,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 15.2993,
    "longitude": 74.124,
    "nearbyAttractions": [
      {
        "name": "Basilica of Bom Jesus",
        "distance": "9 km",
        "description": "UNESCO site holding the mortal remains of St. Francis Xavier."
      },
      {
        "name": "Palolem Beach",
        "distance": "35 km",
        "description": "Crescent-shaped white sand beach in South Goa flanked by palm headlands."
      },
      {
        "name": "Fontainhas",
        "distance": "1 km",
        "description": "Asia's only preserved Latin Quarter with vibrant ochre and azure homes."
      }
    ],
    "featuredAttractions": [
      {
        "id": "basilica-bom-jesus",
        "name": "Basilica of Bom Jesus",
        "description": "Triumph of Baroque architecture and historic pilgrim destination.",
        image: wikimediaFile("Basilica of Bom Jesus Goa.jpg"),
        "timings": "9:00 AM - 5:30 PM",
        "entryFee": "Free"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Taj Exotica Resort & Spa Benaulim",
        "category": "premium",
        "priceRange": "INR 24,000-48,000",
        "distanceFromCenter": "30 km",
        "rating": 4.9,
        "description": "Mediterranean-style beachfront luxury in tranquil South Goa."
      },
      {
        "name": "The Postcard Velha",
        "category": "premium",
        "priceRange": "INR 14,000-22,000",
        "distanceFromCenter": "10 km",
        "rating": 4.8,
        "description": "Secluded boutique retreat amid forest hills of Old Goa."
      },
      {
        "name": "Panjim Inn Heritage Hotel",
        "category": "budget",
        "priceRange": "INR 3,500-6,000",
        "distanceFromCenter": "0.5 km",
        "rating": 4.4,
        "description": "300-year-old family mansion in the heart of Fontainhas."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Fisherman's Wharf",
        "cuisine": "Goan Seafood",
        "priceRange": "INR 800-1,600",
        "rating": 4.8,
        "specialDish": "Goan Fish Curry Rice & Prawn Balchao",
        "distanceFromCenter": "12 km",
        "description": "Riverside dining celebrating traditional coconut-vinegar curries."
      },
      {
        "name": "Vinayak Family Restaurant",
        "cuisine": "Local Goan Thali",
        "priceRange": "INR 250-500",
        "rating": 4.7,
        "specialDish": "Authentic Goan Fish Thali",
        "distanceFromCenter": "8 km",
        "description": "Assagao's favorite unfussy spot for the freshest rava-fried fish."
      },
      {
        "name": "Confeitaria 31 De Janeiro",
        "cuisine": "Portuguese Bakery",
        "priceRange": "INR 100-300",
        "rating": 4.8,
        "specialDish": "Bebinca & Traditional Pastis de Nata",
        "distanceFromCenter": "0.6 km",
        "description": "Historic bakery baking wood-fired traditional Goan layer cakes since 1930."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Latin Quarter & Sunset Cruise",
        "summary": "Walking tour of Fontainhas Latin Quarter, Old Goa churches, evening river cruise.",
        "highlights": [
          "Fontainhas photography",
          "Basilica of Bom Jesus",
          "Mandovi sunset cruise"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Rent a scooter or self-drive car",
        "detail": "Goa is spread out and renting a two-wheeler is the most convenient way to explore."
      }
    ],
    "startingBudget": "From INR 5,500 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,500-5,500",
      "comfort": "INR 6,500-12,000",
      "premium": "INR 20,000+"
    }
  },
  {
    "id": "bengaluru",
    "slug": "bengaluru",
    "name": "Bengaluru",
    "state": "Karnataka",
    "city": "Bengaluru",
    "regionType": "city",
    "description": "The Garden City and Silicon Valley of India, known for tree-lined parks, craft microbreweries, Victorian botanical gardens, and tech culture.",
    "history": "Founded in 1537 by Kempe Gowda I, Bengaluru served as a stronghold of Hyder Ali and Tipu Sultan before expanding into India's premier high-tech hub.",
    heroImage: "/images/destinations/bengaluru.jpg",
    "heroImageAlt": "Tudor-style stone towers of Bangalore Palace",
    "galleryImages": [
      {
        src: wikimediaFile("Lalbagh Glass House Bangalore.jpg"),
        "alt": "Victorian cast-iron Glass House in Lalbagh Botanical Garden"
      },
      {
        src: wikimediaFile("Vidhana Soudha Bangalore illuminated.jpg"),
        "alt": "Neo-Dravidian architecture of Vidhana Soudha at night"
      }
    ],
    "openingTime": "Parks 6:00 AM - 7:00 PM",
    "closingTime": "City open 24 hours",
    "entryFee": "Parks INR 25-50",
    "foreignerFee": "Same",
    "parkingFee": "INR 40-100",
    "bestTimeToVisit": "All year round / September-March",
    "recommendedDuration": "2-3 days",
    "rating": 4.8,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 12.9716,
    "longitude": 77.5946,
    "nearbyAttractions": [
      {
        "name": "Lalbagh Botanical Garden",
        "distance": "3 km",
        "description": "240-acre botanical garden home to century-old trees and a famous Glass House."
      },
      {
        "name": "Bangalore Palace",
        "distance": "4 km",
        "description": "19th-century royal palace built in Tudor-revival architectural style."
      },
      {
        "name": "Cubbon Park",
        "distance": "1 km",
        "description": "Historic 300-acre green lung in the heart of the city."
      }
    ],
    "featuredAttractions": [
      {
        "id": "lalbagh",
        "name": "Lalbagh Botanical Garden",
        "description": "Commissioned by Hyder Ali in 1760 with rare tropical species.",
        image: wikimediaFile("Lalbagh Glass House Bangalore.jpg"),
        "timings": "6:00 AM - 7:00 PM",
        "entryFee": "INR 30"
      }
    ],
    "nearbyHotels": [
      {
        "name": "The Leela Palace Bengaluru",
        "category": "premium",
        "priceRange": "INR 18,000-34,000",
        "distanceFromCenter": "6 km",
        "rating": 4.9,
        "description": "Palatial luxury inspired by the royal architectural grandeur of Mysuru."
      },
      {
        "name": "The Oberoi Bengaluru",
        "category": "premium",
        "priceRange": "INR 14,000-24,000",
        "distanceFromCenter": "2 km",
        "rating": 4.8,
        "description": "Serene garden resort anchored around a 120-year-old rain tree on MG Road."
      },
      {
        "name": "St. Mark's Hotel",
        "category": "mid-range",
        "priceRange": "INR 4,500-7,500",
        "distanceFromCenter": "1 km",
        "rating": 4.4,
        "description": "Boutique central stay close to Brigade Road and Cubbon Park."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Mavalli Tiffin Room (MTR)",
        "cuisine": "Karnataka Heritage Tiffins",
        "priceRange": "INR 200-450",
        "rating": 4.8,
        "specialDish": "Rava Idli & Bisibelebath",
        "distanceFromCenter": "3 km",
        "description": "Legendary 1924 vegetarian institution that invented the rava idli."
      },
      {
        "name": "Vidyarthi Bhavan",
        "cuisine": "South Indian Breakfast",
        "priceRange": "INR 120-250",
        "rating": 4.9,
        "specialDish": "Crispy Golden Masala Dosa",
        "distanceFromCenter": "5 km",
        "description": "Gandhi Bazaar favorite famous for thick, buttery, super-crisp dosas since 1943."
      },
      {
        "name": "Toit Brewpub",
        "cuisine": "Craft Beer & Pub Fare",
        "priceRange": "INR 800-1,600",
        "rating": 4.8,
        "specialDish": "Tint-in-Wit Craft Beer & Wood-Fired Pizza",
        "distanceFromCenter": "4 km",
        "description": "Pioneer of Bengaluru's microbrewery revolution in Indiranagar."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Garden City & Heritage",
        "summary": "Morning walk in Cubbon Park, visit Bangalore Palace, evening craft beer in Indiranagar.",
        "highlights": [
          "Cubbon Park greenery",
          "Bangalore Palace",
          "Indiranagar brewery crawl"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Use Namma Metro",
        "detail": "Purple and Green lines save hours of road traffic across major hubs."
      }
    ],
    "startingBudget": "From INR 5,000 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,200-5,000",
      "comfort": "INR 6,000-11,000",
      "premium": "INR 18,000+"
    }
  },
  {
    "id": "mysuru",
    "slug": "mysuru",
    "name": "Mysuru",
    "state": "Karnataka",
    "city": "Mysuru",
    "regionType": "heritage-site",
    "description": "The royal heritage city of Karnataka, renowned for the magnificent illuminated Mysore Palace, sandalwood craft, Ashtanga yoga, and silk sarees.",
    "history": "Capital of the Kingdom of Mysore under the Wadiyar dynasty from 1399 to 1950, famous for art, culture, and royal Dasara celebrations.",
    heroImage: "/images/destinations/mysuru.jpg",
    "heroImageAlt": "Mysore Palace blazing with nearly 100,000 golden incandescent bulbs",
    "galleryImages": [
      {
        src: wikimediaFile("Chamundeshwari temple Nandi bull.jpg"),
        "alt": "Gigantic monolithic Nandi bull on Chamundi Hill"
      },
      {
        src: wikimediaFile("Brindavan Gardens fountains.jpg"),
        "alt": "Terraced musical water fountains at Brindavan Gardens"
      }
    ],
    "openingTime": "10:00 AM",
    "closingTime": "5:30 PM (Illumination Sundays 7-8 PM)",
    "entryFee": "INR 100",
    "foreignerFee": "INR 100",
    "parkingFee": "INR 40-80",
    "bestTimeToVisit": "September-March",
    "recommendedDuration": "2 days",
    "rating": 4.9,
    "transportModes": [
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 12.2958,
    "longitude": 76.6394,
    "nearbyAttractions": [
      {
        "name": "Mysore Palace",
        "distance": "0.5 km",
        "description": "Indo-Saracenic royal masterpiece with stained glass domes and carved mahogany ceilings."
      },
      {
        "name": "Chamundi Hill",
        "distance": "11 km",
        "description": "Sacred hilltop temple overlooking Mysuru with a 16-foot monolithic Nandi."
      },
      {
        "name": "Brindavan Gardens",
        "distance": "18 km",
        "description": "Terraced gardens laid below the Krishna Raja Sagara dam."
      }
    ],
    "featuredAttractions": [
      {
        "id": "mysore-palace",
        "name": "Mysore Palace",
        "description": "Official residence of the Wadiyars, lit by 97,000 bulbs on Sundays.",
        image: wikimediaFile("Mysore Palace illuminated night.jpg"),
        "timings": "10:00 AM - 5:30 PM",
        "entryFee": "INR 100"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Lalitha Mahal Palace Hotel",
        "category": "premium",
        "priceRange": "INR 7,500-14,000",
        "distanceFromCenter": "5 km",
        "rating": 4.5,
        "description": "Italian Renaissance palace built in 1921 for the Viceroy of India."
      },
      {
        "name": "Royal Orchid Metropole",
        "category": "mid-range",
        "priceRange": "INR 4,500-7,500",
        "distanceFromCenter": "1.2 km",
        "rating": 4.4,
        "description": "Colonial heritage stay with lush courtyards and antique furnishings."
      },
      {
        "name": "Hotel Dasaprakash",
        "category": "budget",
        "priceRange": "INR 1,800-3,200",
        "distanceFromCenter": "0.8 km",
        "rating": 4.1,
        "description": "Trusted traditional vegetarian hotel near the palace."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Guru Sweet Mart",
        "cuisine": "Mysore Sweets",
        "priceRange": "INR 100-300",
        "rating": 4.9,
        "specialDish": "Original Mysore Pak (Ghee-Dripping)",
        "distanceFromCenter": "0.6 km",
        "description": "Owned by the descendants of Kakasura Madappa, the royal chef who invented Mysore Pak."
      },
      {
        "name": "Mylari Hotel (Vinayaka)",
        "cuisine": "Mysore Breakfast",
        "priceRange": "INR 100-220",
        "rating": 4.9,
        "specialDish": "Mylari Butter Dosa & Sagu",
        "distanceFromCenter": "1.5 km",
        "description": "Melt-in-your-mouth cloud-soft dosas with fresh homemade white butter."
      },
      {
        "name": "RRR Restaurant",
        "cuisine": "Andhra & Karnataka Meals",
        "priceRange": "INR 250-550",
        "rating": 4.5,
        "specialDish": "Mutton Biryani on Banana Leaf",
        "distanceFromCenter": "0.7 km",
        "description": "Hearty, spicy lunches served rapidly on fresh plantain leaves."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Royal Grandeur",
        "summary": "Morning visit to Mysore Palace interior, afternoon silk shopping, evening palace illumination.",
        "highlights": [
          "Mysore Palace tour",
          "Mylari dosa breakfast",
          "Palace illumination"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Catch the Sunday illumination",
        "detail": "The palace lights up on Sundays and holidays from 7:00 PM to 7:45 PM."
      }
    ],
    "startingBudget": "From INR 4,200 / day",
    "budgetTier": "budget",
    "costEstimate": {
      "backpacker": "INR 2,800-4,200",
      "comfort": "INR 4,800-8,000",
      "premium": "INR 12,000+"
    }
  },
  {
    "id": "hampi",
    "slug": "hampi",
    "name": "Hampi",
    "state": "Karnataka",
    "city": "Hampi",
    "regionType": "heritage-site",
    "description": "A surreal UNESCO World Heritage landscape of giant boulder hills, riverside ruins, monolithic statues, and grand stone temples of the Vijayanagara Empire.",
    "history": "The magnificent 14th-century capital of the Vijayanagara Empire, described by medieval Persian and European visitors as one of the largest and richest cities in the world.",
    heroImage: wikimediaFile("Hampi 2.jpg"),
    "heroImageAlt": "Iconic stone chariot shrine in the courtyard of Vittala Temple in Hampi",
    "galleryImages": [
      {
        src: wikimediaFile("Virupaksha Temple Hampi gopuram.jpg"),
        "alt": "Towering gopuram of Virupaksha Temple against boulder landscape"
      },
      {
        src: wikimediaFile("Matanga Hill sunrise Hampi.jpg"),
        "alt": "Golden sunrise across Tungabhadra river and boulder plains"
      }
    ],
    "openingTime": "Sunrise to Sunset",
    "closingTime": "6:00 PM",
    "entryFee": "INR 40",
    "foreignerFee": "INR 600",
    "parkingFee": "INR 30-50",
    "bestTimeToVisit": "October-March",
    "recommendedDuration": "2-3 days",
    "rating": 4.9,
    "transportModes": [
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 15.335,
    "longitude": 76.46,
    "nearbyAttractions": [
      {
        "name": "Vittala Temple Complex",
        "distance": "2 km",
        "description": "Home of the famous Stone Chariot and musical pillars."
      },
      {
        "name": "Virupaksha Temple",
        "distance": "0.5 km",
        "description": "Living 7th-century Shiva temple that has operated uninterrupted since Vijayanagara days."
      },
      {
        "name": "Matanga Hill",
        "distance": "1 km",
        "description": "Highest point in Hampi providing 360-degree sunrise and sunset panoramas."
      }
    ],
    "featuredAttractions": [
      {
        "id": "vittala-temple",
        "name": "Vittala Temple & Stone Chariot",
        "description": "Pinnacle of Vijayanagara architectural art with stone rotating wheels.",
        image: wikimediaFile("Stone Chariot Hampi Vittala Temple.jpg"),
        "timings": "8:30 AM - 5:30 PM",
        "entryFee": "INR 40"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Evolve Back Kamalapura Palace",
        "category": "premium",
        "priceRange": "INR 28,000-48,000",
        "distanceFromCenter": "4 km",
        "rating": 4.9,
        "description": "Ultra-luxury fortress resort styled after Vijayanagara palaces."
      },
      {
        "name": "Heritage Resort Hampi",
        "category": "mid-range",
        "priceRange": "INR 6,500-11,000",
        "distanceFromCenter": "6 km",
        "rating": 4.5,
        "description": "Eco-friendly cottages set amid organic farms and greenery."
      },
      {
        "name": "Gopi Guest House",
        "category": "budget",
        "priceRange": "INR 1,800-3,200",
        "distanceFromCenter": "0.2 km",
        "rating": 4.2,
        "description": "Popular backpacker stay right in Hampi bazaar."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Mango Tree Restaurant",
        "cuisine": "Multi-Cuisine & Thali",
        "priceRange": "INR 250-550",
        "rating": 4.7,
        "specialDish": "South Indian Special Thali & Banana Lassi",
        "distanceFromCenter": "0.5 km",
        "description": "Legendary Hampi chill-out restaurant with floor seating."
      },
      {
        "name": "Laughing Buddha Cafe",
        "cuisine": "Middle Eastern & Indian",
        "priceRange": "INR 250-500",
        "rating": 4.4,
        "specialDish": "Hummus Falafel Platter & Shakshuka",
        "distanceFromCenter": "1.5 km across river",
        "description": "Riverside hippie cafe with sunset views of boulder banks."
      },
      {
        "name": "Taste of Brahmins",
        "cuisine": "Traditional Karnataka Veg",
        "priceRange": "INR 120-250",
        "rating": 4.6,
        "specialDish": "Paddu with Coconut Chutney",
        "distanceFromCenter": "0.3 km",
        "description": "Crispy rice dumplings prepared hot on iron griddles."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Sacred & Royal Centers",
        "summary": "Sunrise at Matanga Hill, Virupaksha Temple, Queens Bath, and Royal Enclosure.",
        "highlights": [
          "Matanga Hill sunrise",
          "Virupaksha blessing",
          "Royal enclosure stepwell"
        ]
      },
      {
        "title": "Day 2: Vittala & River Coracle",
        "summary": "Vittala Temple stone chariot, coracle round-boat ride on Tungabhadra, Anjanadri sunset.",
        "highlights": [
          "Stone Chariot",
          "Coracle ride",
          "Anjanadri hill"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Rent a bicycle or moped",
        "detail": "The monuments are spread over 26 square kilometers of scenic rocky roads."
      }
    ],
    "startingBudget": "From INR 4,000 / day",
    "budgetTier": "budget",
    "costEstimate": {
      "backpacker": "INR 2,800-4,000",
      "comfort": "INR 4,800-8,500",
      "premium": "INR 16,000+"
    }
  },
  {
    "id": "chennai",
    "slug": "chennai",
    "name": "Chennai",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "regionType": "city",
    "description": "The cultural gateway of South India, celebrating classical Carnatic music, Dravidian temples, long Marina beach promenades, and filter coffee.",
    "history": "Grew around the English East India Company's Fort St. George in 1639, incorporating ancient coastal settlements like Mylapore with Roman trade roots.",
    heroImage: wikimediaFile("Marina Beach, Chennai.jpg"),
    "heroImageAlt": "Vibrant rainbow sculptures of Kapaleeshwarar temple gopuram in Chennai",
    "galleryImages": [
      {
        src: wikimediaFile("Marina Beach Chennai shoreline.jpg"),
        "alt": "Expansive sandy shoreline of Marina Beach at sunset"
      },
      {
        src: wikimediaFile("San Thome Basilica Chennai.jpg"),
        "alt": "Gothic white spires of San Thome Cathedral"
      }
    ],
    "openingTime": "Temples 6:00 AM - 12:30 PM, 4:00 PM - 9:00 PM",
    "closingTime": "Beaches open 24 hours",
    "entryFee": "Temples free",
    "foreignerFee": "Free",
    "parkingFee": "INR 30-80",
    "bestTimeToVisit": "November-February",
    "recommendedDuration": "2-3 days",
    "rating": 4.7,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 13.0827,
    "longitude": 80.2707,
    "nearbyAttractions": [
      {
        "name": "Kapaleeshwarar Temple",
        "distance": "4 km",
        "description": "7th-century Dravidian temple dedicated to Lord Shiva in Mylapore."
      },
      {
        "name": "Marina Beach",
        "distance": "3 km",
        "description": "India's longest natural urban beach stretching 13 km along the Bay of Bengal."
      },
      {
        "name": "San Thome Basilica",
        "distance": "4 km",
        "description": "Built over the tomb of St. Thomas the Apostle in neo-Gothic style."
      }
    ],
    "featuredAttractions": [
      {
        "id": "kapaleeshwarar",
        "name": "Kapaleeshwarar Temple",
        "description": "Classic Dravidian temple tank and soaring rainbow gopuram.",
        image: wikimediaFile("Kapaleeshwarar temple Mylapore gopuram.jpg"),
        "timings": "6:00 AM - 12:30 PM, 4:00 PM - 9:00 PM",
        "entryFee": "Free"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Taj Coromandel",
        "category": "premium",
        "priceRange": "INR 12,000-24,000",
        "distanceFromCenter": "2 km",
        "rating": 4.8,
        "description": "Timeless luxury hotel renowned for South Indian fine dining."
      },
      {
        "name": "The Leela Palace Chennai",
        "category": "premium",
        "priceRange": "INR 16,000-30,000",
        "distanceFromCenter": "5 km",
        "rating": 4.9,
        "description": "Modern seafront palace overlooking the Bay of Bengal."
      },
      {
        "name": "The Residency Towers",
        "category": "mid-range",
        "priceRange": "INR 4,500-7,500",
        "distanceFromCenter": "3 km",
        "rating": 4.4,
        "description": "Dependable hospitality hub in buzzing T. Nagar."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Murugan Idli Shop",
        "cuisine": "Tamil Tiffins",
        "priceRange": "INR 150-350",
        "rating": 4.8,
        "specialDish": "Soft Ghee Podi Idlis & Four Chutneys",
        "distanceFromCenter": "3 km",
        "description": "Fluffy steamed rice cakes sprinkled with spicy gun powder and melted ghee."
      },
      {
        "name": "Dakshin at Crowne Plaza",
        "cuisine": "Fine South Indian",
        "priceRange": "INR 1,800-3,500",
        "rating": 4.9,
        "specialDish": "Banana Dosa & Meen Moilee",
        "distanceFromCenter": "4 km",
        "description": "Award-winning celebration of South Indian royal recipes."
      },
      {
        "name": "Rayar's Mess",
        "cuisine": "Authentic Mylapore Breakfast",
        "priceRange": "INR 80-180",
        "rating": 4.9,
        "specialDish": "Crisp Medu Vada & Degree Filter Coffee",
        "distanceFromCenter": "4.2 km",
        "description": "Mylapore institution operating since the 1930s with unpretentious perfection."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Mylapore Heritage & Marina Beach",
        "summary": "Morning Kapaleeshwarar temple walk, filter coffee at Rayar's, evening sunset at Marina Beach.",
        "highlights": [
          "Mylapore walk",
          "Filter coffee tasting",
          "Marina Beach street food"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Dress code in temples",
        "detail": "Traditional attire (dhoti/kurta, saree/salwar) is mandatory in Tamil Nadu temples."
      }
    ],
    "startingBudget": "From INR 4,800 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,200-4,800",
      "comfort": "INR 5,500-9,500",
      "premium": "INR 15,000+"
    }
  },
  {
    "id": "madurai",
    "slug": "madurai",
    "name": "Madurai",
    "state": "Tamil Nadu",
    "city": "Madurai",
    "regionType": "spiritual-site",
    "description": "The Athens of the East, centered on the immense Meenakshi Amman Temple with twelve towering gopurams encrusted with thousands of colorful mythological figures.",
    "history": "Over 2,500 years old, Madurai was the ancient seat of the Pandya kings and the Tamil Sangam academies of classical poetry.",
    heroImage: wikimediaFile("Madurai Meenakshi Amman Temple Gopuram.jpg"),
    "heroImageAlt": "Soaring multicolored sculptures on Meenakshi Temple gopuram",
    "galleryImages": [
      {
        src: wikimediaFile("Thirumalai Nayakkar Mahal Madurai.jpg"),
        "alt": "Immense whitewashed stucco pillars of Nayak Palace"
      },
      {
        src: wikimediaFile("Vandiyur Mariamman Teppakulam.jpg"),
        "alt": "Vast temple tank reservoir with central mandapa"
      }
    ],
    "openingTime": "5:00 AM - 12:30 PM, 4:00 PM - 10:00 PM",
    "closingTime": "Night ceremony at 9:30 PM",
    "entryFee": "Temple free / Museum INR 50",
    "foreignerFee": "Same",
    "parkingFee": "INR 30-60",
    "bestTimeToVisit": "October-March",
    "recommendedDuration": "1-2 days",
    "rating": 4.9,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 9.9252,
    "longitude": 78.1198,
    "nearbyAttractions": [
      {
        "name": "Meenakshi Amman Temple",
        "distance": "0.2 km",
        "description": "Spiritual epicenter with Hall of Thousand Pillars and sacred lotus tank."
      },
      {
        "name": "Thirumalai Nayakkar Palace",
        "distance": "2 km",
        "description": "17th-century palace blending Dravidian and Islamic architecture."
      }
    ],
    "featuredAttractions": [
      {
        "id": "meenakshi-temple",
        "name": "Meenakshi Amman Temple",
        "description": "Dravidian masterwork with 14 towering gopurams and 33,000 stone sculptures.",
        image: wikimediaFile("Meenakshi Amman Temple Madurai gopuram.jpg"),
        "timings": "5:00 AM - 12:30 PM, 4:00 PM - 10:00 PM",
        "entryFee": "Free"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Heritage Madurai",
        "category": "premium",
        "priceRange": "INR 7,500-14,000",
        "distanceFromCenter": "4 km",
        "rating": 4.7,
        "description": "Resort designed by Geoffrey Bawa set amid 17 acres of banyan groves."
      },
      {
        "name": "Courtyard by Marriott Madurai",
        "category": "mid-range",
        "priceRange": "INR 4,500-7,500",
        "distanceFromCenter": "3 km",
        "rating": 4.5,
        "description": "Modern business hotel with swimming pool and buffet."
      },
      {
        "name": "Hotel Supreme",
        "category": "budget",
        "priceRange": "INR 1,800-3,200",
        "distanceFromCenter": "0.8 km",
        "rating": 4.1,
        "description": "Rooftop dining with views of the Meenakshi temple towers."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Murugan Idli Shop Madurai",
        "cuisine": "Traditional Tiffins",
        "priceRange": "INR 120-280",
        "rating": 4.9,
        "specialDish": "Original Madurai Idli with Podi",
        "distanceFromCenter": "0.5 km",
        "description": "The flagship outlet where the world-renowned chain was born."
      },
      {
        "name": "Amma Mess",
        "cuisine": "Chettinad Non-Veg",
        "priceRange": "INR 300-650",
        "rating": 4.8,
        "specialDish": "Kari Dosa (Minced Meat Dosa)",
        "distanceFromCenter": "2 km",
        "description": "Famous for three-layered thick dosa topped with spicy omelette and mutton keema."
      },
      {
        "name": "Famous Jigarthanda",
        "cuisine": "Traditional Coolers",
        "priceRange": "INR 50-150",
        "rating": 4.9,
        "specialDish": "Special Jigarthanda with Ice Cream",
        "distanceFromCenter": "0.4 km",
        "description": "Madurai's signature cooling drink made of almond gum, reduced milk, and sarsaparilla."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Temple Wonders & Night Ceremony",
        "summary": "Morning Meenakshi temple exploration, afternoon Nayak palace, evening wedding procession ceremony.",
        "highlights": [
          "Hall of 1000 Pillars",
          "Jigarthanda tasting",
          "Night temple procession"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "No mobile phones inside Meenakshi Temple",
        "detail": "Mobile phones are strictly prohibited inside; use official cloakrooms outside."
      }
    ],
    "startingBudget": "From INR 3,800 / day",
    "budgetTier": "budget",
    "costEstimate": {
      "backpacker": "INR 2,500-3,800",
      "comfort": "INR 4,200-7,000",
      "premium": "INR 11,000+"
    }
  },
  {
    "id": "kochi",
    "slug": "kochi",
    "name": "Kochi",
    "state": "Kerala",
    "city": "Kochi",
    "regionType": "city",
    "description": "The Queen of the Arabian Sea, blending Chinese fishing nets, Portuguese churches, Jewish synagogues, spice bazaars, and Kathakali performances.",
    "history": "A premier spice trading port for centuries, Kochi welcomed Arabs, Chinese, Portuguese, Dutch, and British merchants.",
    heroImage: "/images/destinations/kochi.jpg",
    "heroImageAlt": "Iconic cantilevered Chinese fishing nets silhouetted against Kochi sunset",
    "galleryImages": [
      {
        src: wikimediaFile("Mattancherry Dutch Palace Kochi.jpg"),
        "alt": "Dutch Palace murals and timber ceilings in Mattancherry"
      },
      {
        src: wikimediaFile("Paradesi Synagogue Jew Town Kochi.jpg"),
        "alt": "Belgian chandeliers in 1568 Paradesi Synagogue"
      }
    ],
    "openingTime": "Sites 9:00 AM - 5:00 PM",
    "closingTime": "Waterfront open 24 hours",
    "entryFee": "INR 10-50",
    "foreignerFee": "INR 50-200",
    "parkingFee": "INR 40-70",
    "bestTimeToVisit": "October-March",
    "recommendedDuration": "2-3 days",
    "rating": 4.9,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 9.9312,
    "longitude": 76.2673,
    "nearbyAttractions": [
      {
        "name": "Chinese Fishing Nets",
        "distance": "0.5 km",
        "description": "Fixed cantilevered shore nets introduced by Chinese explorer Zheng He."
      },
      {
        "name": "Mattancherry Palace",
        "distance": "3 km",
        "description": "Portuguese palace featuring Hindu mythological murals."
      },
      {
        "name": "Jew Town & Synagogue",
        "distance": "3.5 km",
        "description": "Historic 1568 Jewish house of prayer surrounded by antique spice shops."
      }
    ],
    "featuredAttractions": [
      {
        "id": "chinese-nets",
        "name": "Chinese Fishing Nets",
        "description": "Mechanical bamboo cantilever nets operating along the harbor entrance.",
        image: wikimediaFile("Chinese fishing nets Fort Kochi sunset.jpg"),
        "timings": "Sunrise to Sunset",
        "entryFee": "Free"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Brunton Boatyard - CGH Earth",
        "category": "premium",
        "priceRange": "INR 16,000-28,000",
        "distanceFromCenter": "0.2 km",
        "rating": 4.8,
        "description": "Restored Victorian shipyard hotel facing the harbor."
      },
      {
        "name": "Old Harbour Hotel",
        "category": "premium",
        "priceRange": "INR 12,000-20,000",
        "distanceFromCenter": "0.3 km",
        "rating": 4.7,
        "description": "300-year-old Dutch boutique residence with garden pool."
      },
      {
        "name": "Koder House",
        "category": "mid-range",
        "priceRange": "INR 4,500-7,500",
        "distanceFromCenter": "0.5 km",
        "rating": 4.3,
        "description": "Heritage Jewish mansion overlooking the beach promenade."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Fort Kochi Seafood Catch",
        "cuisine": "Kerala Seafood",
        "priceRange": "INR 600-1,400",
        "rating": 4.7,
        "specialDish": "Karimeen Pollichathu (Pearl Spot in Banana Leaf)",
        "distanceFromCenter": "0.5 km",
        "description": "Fresh fish marinated in red spices and steamed in banana leaves."
      },
      {
        "name": "Kashi Art Cafe",
        "cuisine": "Continental & Organic",
        "priceRange": "INR 350-700",
        "rating": 4.8,
        "specialDish": "Hot Chocolate Cake & Cold Brew Coffee",
        "distanceFromCenter": "0.4 km",
        "description": "Famous art gallery cafe in a breezy colonial courtyard."
      },
      {
        "name": "Dhe Puttu",
        "cuisine": "Traditional Kerala",
        "priceRange": "INR 250-500",
        "rating": 4.5,
        "specialDish": "Erachi Puttu (Layered Steamed Rice Cake with Meat)",
        "distanceFromCenter": "6 km",
        "description": "Celebrates Kerala’s traditional cylindrical steamed delicacy."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Fort Kochi Art & Nets",
        "summary": "Walk Fort Kochi, photograph Chinese fishing nets, visit Jew Town and spice warehouses.",
        "highlights": [
          "Chinese fishing nets",
          "Paradesi Synagogue",
          "Kathakali evening dance show"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Use Kochi Water Metro",
        "detail": "India's first electric ferry network connects islands quickly and cheaply."
      }
    ],
    "startingBudget": "From INR 4,800 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,200-4,800",
      "comfort": "INR 5,500-10,000",
      "premium": "INR 18,000+"
    }
  },
  {
    "id": "munnar",
    "slug": "munnar",
    "name": "Munnar",
    "state": "Kerala",
    "city": "Munnar",
    "regionType": "hill-station",
    "description": "Rolling emerald tea plantations, misty mountain peaks, tumbling waterfalls, and cool Western Ghats air.",
    "history": "Former summer resort of the British Raj, developed into South India's largest tea-growing district.",
    heroImage: "/images/destinations/munnar.jpg",
    "heroImageAlt": "Manicured green tea bushes carpeting misty Munnar mountains",
    "galleryImages": [
      {
        src: wikimediaFile("Eravikulam National Park Nilgiri Tahr.jpg"),
        "alt": "Endangered Nilgiri Tahr grazing on Anamudi slopes"
      },
      {
        src: wikimediaFile("Mattupetty Dam lake Munnar.jpg"),
        "alt": "Reflective storage lake framed by eucalyptus forests"
      }
    ],
    "openingTime": "National Park 7:30 AM - 4:00 PM",
    "closingTime": "Viewpoints close 6:00 PM",
    "entryFee": "INR 200 for Eravikulam",
    "foreignerFee": "INR 500",
    "parkingFee": "INR 50-80",
    "bestTimeToVisit": "September-March",
    "recommendedDuration": "2-3 days",
    "rating": 4.9,
    "transportModes": [
      "Buses",
      "Taxi"
    ],
    "latitude": 10.0889,
    "longitude": 77.0595,
    "nearbyAttractions": [
      {
        "name": "Eravikulam National Park",
        "distance": "13 km",
        "description": "Home to the largest surviving population of endangered Nilgiri Tahr and Anamudi peak."
      },
      {
        "name": "Tea Museum",
        "distance": "2 km",
        "description": "Centuries-old tea factory showcasing roller machines and processing history."
      },
      {
        "name": "Mattupetty Dam",
        "distance": "12 km",
        "description": "Picturesque dam with speed boating and tea hill surroundings."
      }
    ],
    "featuredAttractions": [
      {
        "id": "eravikulam",
        "name": "Eravikulam National Park",
        "description": "High-altitude shola-grassland sanctuary below South India's highest peak Anamudi.",
        image: wikimediaFile("Eravikulam National Park Nilgiri Tahr.jpg"),
        "timings": "7:30 AM - 4:00 PM",
        "entryFee": "INR 200"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Windermere Estate",
        "category": "premium",
        "priceRange": "INR 14,000-24,000",
        "distanceFromCenter": "4 km",
        "rating": 4.8,
        "description": "Boutique coffee and cardamom plantation retreat."
      },
      {
        "name": "Tea County Munnar (KTDC)",
        "category": "mid-range",
        "priceRange": "INR 5,500-9,000",
        "distanceFromCenter": "1 km",
        "rating": 4.4,
        "description": "Charming hillside resort with panoramic valley vistas."
      },
      {
        "name": "Green View Holiday Inn",
        "category": "budget",
        "priceRange": "INR 2,200-3,800",
        "distanceFromCenter": "0.8 km",
        "rating": 4.2,
        "description": "Budget base popular for tea trekking tours."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Rapsy Restaurant",
        "cuisine": "Kerala Comfort & Biryani",
        "priceRange": "INR 180-400",
        "rating": 4.5,
        "specialDish": "Spanish Omelette & Beef/Chicken Biryani",
        "distanceFromCenter": "0.3 km",
        "description": "Beloved backpacker and traveler cafe in Munnar town."
      },
      {
        "name": "Saravana Bhavan Munnar",
        "cuisine": "South Indian Pure Veg",
        "priceRange": "INR 150-350",
        "rating": 4.3,
        "specialDish": "Ghee Roast Dosa & Hot Tea",
        "distanceFromCenter": "0.2 km",
        "description": "Crisp dosas paired with freshly brewed estate tea."
      },
      {
        "name": "Hill Spice Restaurant",
        "cuisine": "Kerala Traditional",
        "priceRange": "INR 300-600",
        "rating": 4.4,
        "specialDish": "Appam with Vegetable Stew & Duck Roast",
        "distanceFromCenter": "1.5 km",
        "description": "Fluffy fermented rice pancakes with coconut milk stew."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Tea Plantations & Wildlife",
        "summary": "Morning safari at Eravikulam National Park, tea processing tour at KDHP museum.",
        "highlights": [
          "Nilgiri Tahr spotting",
          "Tea Museum",
          "Echo Point"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Carry light woolens",
        "detail": "Even in summer, evenings and mornings can be chilly in Munnar hills."
      }
    ],
    "startingBudget": "From INR 4,500 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,000-4,500",
      "comfort": "INR 5,500-9,500",
      "premium": "INR 16,000+"
    }
  },
  {
    "id": "kolkata",
    "slug": "kolkata",
    "name": "Kolkata",
    "state": "West Bengal",
    "city": "Kolkata",
    "regionType": "city",
    "description": "The Cultural Capital of India, celebrated for grand colonial monuments like Victoria Memorial, yellow taxis, tramways, Howrah Bridge, and mishti sweets.",
    "history": "Capital of British India until 1911, Kolkata was the cradle of the 19th-century Bengal Renaissance and literary legacy of Rabindranath Tagore.",
    heroImage: "/images/destinations/kolkata.jpg",
    "heroImageAlt": "White Makrana marble dome of Victoria Memorial in Kolkata",
    "galleryImages": [
      {
        src: wikimediaFile("Howrah Bridge cantilever Kolkata.jpg"),
        "alt": "Iconic cantilever steel framework of Howrah Bridge"
      },
      {
        src: wikimediaFile("College Street coffee house Kolkata.jpg"),
        "alt": "Historic Indian Coffee House intellectual gathering"
      }
    ],
    "openingTime": "Victoria Memorial 10:00 AM - 5:00 PM",
    "closingTime": "City open 24 hours",
    "entryFee": "INR 50 for Victoria Memorial",
    "foreignerFee": "INR 500",
    "parkingFee": "INR 40-80",
    "bestTimeToVisit": "October-March",
    "recommendedDuration": "3 days",
    "rating": 4.8,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 22.5726,
    "longitude": 88.3639,
    "nearbyAttractions": [
      {
        "name": "Victoria Memorial",
        "distance": "2 km",
        "description": "Grand white marble memorial dedicated to Queen Victoria, now an art museum."
      },
      {
        "name": "Howrah Bridge",
        "distance": "4 km",
        "description": "Massive balanced cantilever bridge spanning the Hooghly River."
      },
      {
        "name": "Indian Museum",
        "distance": "1.5 km",
        "description": "India's oldest and ninth oldest museum in the world, founded in 1814."
      }
    ],
    "featuredAttractions": [
      {
        "id": "victoria-memorial",
        "name": "Victoria Memorial",
        "description": "Monumental white marble palace surrounded by 64 acres of gardens.",
        image: wikimediaFile("Victoria Memorial Kolkata sunset.jpg"),
        "timings": "10:00 AM - 5:00 PM",
        "entryFee": "INR 50"
      }
    ],
    "nearbyHotels": [
      {
        "name": "The Oberoi Grand Kolkata",
        "category": "premium",
        "priceRange": "INR 14,000-26,000",
        "distanceFromCenter": "0.5 km",
        "rating": 4.9,
        "description": "The Grand Dame of Chowringhee, colonial palace operating since the 1880s."
      },
      {
        "name": "ITC Sonar Kolkata",
        "category": "premium",
        "priceRange": "INR 9,500-16,000",
        "distanceFromCenter": "6 km",
        "rating": 4.7,
        "description": "Luxury resort featuring lily ponds and historic dining."
      },
      {
        "name": "The Broadway Hotel",
        "category": "budget",
        "priceRange": "INR 2,200-3,800",
        "distanceFromCenter": "1 km",
        "rating": 4.1,
        "description": "Authentic 1930s art deco heritage hotel in central Kolkata."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Peter Cat",
        "cuisine": "Continental & Mughlai",
        "priceRange": "INR 600-1,200",
        "rating": 4.8,
        "specialDish": "Chelo Kebab Platter",
        "distanceFromCenter": "1 km",
        "description": "Park Street legendary institution famed for rice, poached egg, and buttered kebabs."
      },
      {
        "name": "K.C. Das Sweets",
        "cuisine": "Bengali Confectionery",
        "priceRange": "INR 100-300",
        "rating": 4.9,
        "specialDish": "Original Sponge Rasgulla & Sandesh",
        "distanceFromCenter": "1.5 km",
        "description": "Founded by Nobin Chandra Das, the inventor of the spongy white rasgulla."
      },
      {
        "name": "Kasturi Restaurant",
        "cuisine": "Dhakai Bengali Cuisine",
        "priceRange": "INR 350-700",
        "rating": 4.7,
        "specialDish": "Kochu Pata Diye Ilish & Bhetki Paturi",
        "distanceFromCenter": "2 km",
        "description": "Hilsa fish and mustard baked in fresh banana leaves."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Colonial Grandeur & Sweets",
        "summary": "Victoria Memorial, St. Paul's Cathedral, heritage tram ride, evening dinner on Park Street.",
        "highlights": [
          "Victoria Memorial",
          "Park Street nightlife",
          "Rasgulla tasting at KC Das"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Hop on the historic tram",
        "detail": "Kolkata operates the oldest operating electric tram network in Asia."
      }
    ],
    "startingBudget": "From INR 4,800 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,000-4,800",
      "comfort": "INR 5,500-10,000",
      "premium": "INR 16,000+"
    }
  },
  {
    "id": "darjeeling",
    "slug": "darjeeling",
    "name": "Darjeeling",
    "state": "West Bengal",
    "city": "Darjeeling",
    "regionType": "hill-station",
    "description": "Queen of the Hills in the Eastern Himalayas, famous for the UNESCO Toy Train, Champagne of Teas, and sunrise over Mt. Kanchenjunga.",
    "history": "Developed as a British hill sanatorium in the mid-19th century, renowned for world-famous muscatel tea gardens.",
    heroImage: "/images/destinations/darjeeling.jpg",
    "heroImageAlt": "Morning sun turning the snowy peaks of Mt. Kanchenjunga golden orange",
    "galleryImages": [
      {
        src: wikimediaFile("Darjeeling Himalayan Railway toy train.jpg"),
        "alt": "Narrow-gauge steam engine chugging around Batasia Loop"
      },
      {
        src: wikimediaFile("Happy Valley Tea Estate Darjeeling.jpg"),
        "alt": "Terraced mountain tea gardens in Happy Valley"
      }
    ],
    "openingTime": "Tiger Hill 4:00 AM",
    "closingTime": "Most shops close 8:00 PM",
    "entryFee": "INR 20-50",
    "foreignerFee": "Same",
    "parkingFee": "INR 40-70",
    "bestTimeToVisit": "March-May & October-December",
    "recommendedDuration": "2-3 days",
    "rating": 4.9,
    "transportModes": [
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 27.041,
    "longitude": 88.2663,
    "nearbyAttractions": [
      {
        "name": "Tiger Hill",
        "distance": "11 km",
        "description": "Famed sunrise viewpoint over Mt. Kanchenjunga and Mt. Everest."
      },
      {
        "name": "Batasia Loop",
        "distance": "5 km",
        "description": "Spiraling railway loop with panoramic mountain vistas and war memorial."
      },
      {
        "name": "Himalayan Mountaineering Institute",
        "distance": "2 km",
        "description": "Legendary mountaineering museum founded by Tenzing Norgay."
      }
    ],
    "featuredAttractions": [
      {
        "id": "tiger-hill",
        "name": "Tiger Hill Sunrise",
        "description": "Spectacular early morning view as first light hits the world's third highest peak.",
        image: wikimediaFile("Kanchenjunga sunrise Darjeeling.jpg"),
        "timings": "4:00 AM - 6:30 AM",
        "entryFee": "INR 50"
      }
    ],
    "nearbyHotels": [
      {
        "name": "The Windamere Hotel",
        "category": "premium",
        "priceRange": "INR 14,000-24,000",
        "distanceFromCenter": "0.5 km",
        "rating": 4.8,
        "description": "Colonial boarding-house heritage hotel perched on Observatory Hill."
      },
      {
        "name": "Cedar Inn Darjeeling",
        "category": "mid-range",
        "priceRange": "INR 5,500-9,500",
        "distanceFromCenter": "1.2 km",
        "rating": 4.4,
        "description": "Timber-lined luxury hotel with panoramic Kanchenjunga balconies."
      },
      {
        "name": "Dekeling Hotel",
        "category": "budget",
        "priceRange": "INR 2,400-4,000",
        "distanceFromCenter": "0.3 km",
        "rating": 4.3,
        "description": "Tibetan family-run hotel overlooking the valley."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Glenary's Bakery & Pub",
        "cuisine": "Bakery, Continental & Bar",
        "priceRange": "INR 350-800",
        "rating": 4.9,
        "specialDish": "Apple Pie, Roast Chicken & Darjeeling First Flush Tea",
        "distanceFromCenter": "0.2 km",
        "description": "Iconic 130-year-old Mall Road establishment with live music."
      },
      {
        "name": "Keventer's Darjeeling",
        "cuisine": "Traditional British Breakfast",
        "priceRange": "INR 250-500",
        "rating": 4.7,
        "specialDish": "Full English Platter & Hot Cocoa",
        "distanceFromCenter": "0.3 km",
        "description": "Open rooftop terrace breakfast gazing directly at mountain peaks."
      },
      {
        "name": "Kunga Restaurant",
        "cuisine": "Tibetan & Himalayan",
        "priceRange": "INR 180-350",
        "rating": 4.8,
        "specialDish": "Steamed Pork/Veg Momos & Thukpa Soup",
        "distanceFromCenter": "0.1 km",
        "description": "Cozy Tibetan spot serving the best hot steaming noodle soups in town."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Tiger Hill & Toy Train",
        "summary": "4:00 AM wake-up for Tiger Hill sunrise, Batasia Loop toy train joyride, evening tea at Glenary's.",
        "highlights": [
          "Tiger Hill dawn",
          "Batasia Loop steam train",
          "Glenary's live music"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Book Toy Train tickets on IRCTC",
        "detail": "The steam joyride from Darjeeling to Ghum sells out weeks in advance."
      }
    ],
    "startingBudget": "From INR 4,500 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,000-4,500",
      "comfort": "INR 5,500-9,500",
      "premium": "INR 15,000+"
    }
  },
  {
    "id": "amritsar",
    "slug": "amritsar",
    "name": "Amritsar",
    "state": "Punjab",
    "city": "Amritsar",
    "regionType": "spiritual-site",
    "description": "The spiritual heart of Sikhism, home to the breathtaking Golden Temple (Harmandir Sahib), patriotic Wagah Border ceremony, and rich Punjabi cuisine.",
    "history": "Founded in 1577 by Guru Ram Das, the fourth Sikh Guru, around the sacred Amrit Sarovar (Pool of Nectar).",
    heroImage: "/images/destinations/amritsar.jpg",
    "heroImageAlt": "Golden Temple gleaming across the sacred pool under nighttime lights",
    "galleryImages": [
      {
        src: wikimediaFile("Wagah Border flag lowering ceremony.jpg"),
        "alt": "Marching soldiers during Wagah Border Beating Retreat"
      },
      {
        src: wikimediaFile("Jallianwala Bagh memorial Amritsar.jpg"),
        "alt": "Eternal flame memorial at Jallianwala Bagh"
      }
    ],
    "openingTime": "Golden Temple open 24 hours",
    "closingTime": "24/7",
    "entryFee": "Free",
    "foreignerFee": "Free",
    "parkingFee": "INR 30-60",
    "bestTimeToVisit": "October-March",
    "recommendedDuration": "2 days",
    "rating": 4.9,
    "transportModes": [
      "Flights",
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 31.62,
    "longitude": 74.8765,
    "nearbyAttractions": [
      {
        "name": "Golden Temple (Harmandir Sahib)",
        "distance": "0.2 km",
        "description": "Gilded sanctum open to all humanity, serving over 100,000 meals daily in Guru-ka-Langar."
      },
      {
        "name": "Jallianwala Bagh",
        "distance": "0.5 km",
        "description": "Historic public garden memorializing the 1919 massacre victims."
      },
      {
        "name": "Wagah Border",
        "distance": "28 km",
        "description": "Daily military beating retreat and flag-lowering ceremony at the India-Pakistan border."
      }
    ],
    "featuredAttractions": [
      {
        "id": "golden-temple",
        "name": "Harmandir Sahib (Golden Temple)",
        "description": "Spiritual center of Sikhism with gold leaf dome and sacred pool of nectar.",
        image: wikimediaFile("Golden Temple Amritsar night illuminated.jpg"),
        "timings": "Open 24 hours",
        "entryFee": "Free"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Taj Swarna Amritsar",
        "category": "premium",
        "priceRange": "INR 8,500-16,000",
        "distanceFromCenter": "4 km",
        "rating": 4.8,
        "description": "Contemporary luxury hotel with Punjabi hospitality and fine dining."
      },
      {
        "name": "Radisson Blu Amritsar",
        "category": "mid-range",
        "priceRange": "INR 4,500-8,000",
        "distanceFromCenter": "7 km",
        "rating": 4.5,
        "description": "Tranquil setting near the airport with shuttle service."
      },
      {
        "name": "Hotel City Park",
        "category": "budget",
        "priceRange": "INR 2,200-3,800",
        "distanceFromCenter": "0.4 km",
        "rating": 4.2,
        "description": "Walking distance to the Golden Temple heritage street."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Guru-ka-Langar",
        "cuisine": "Free Community Kitchen",
        "priceRange": "Free",
        "rating": 5,
        "specialDish": "Dal, Roti, Kheer & Karah Parshad",
        "distanceFromCenter": "0.1 km",
        "description": "The world's largest community kitchen where thousands volunteer and eat together as equals."
      },
      {
        "name": "Kesar Da Dhaba",
        "cuisine": "Authentic Punjabi Dhaba",
        "priceRange": "INR 250-550",
        "rating": 4.9,
        "specialDish": "Slow-Cooked Dal Makhani & Laccha Paratha",
        "distanceFromCenter": "1 km",
        "description": "Operating since 1916; dal is simmered in brass pots for 12 hours."
      },
      {
        "name": "Bhai Kulwant Singh Kulchian Wale",
        "cuisine": "Amritsari Kulchas",
        "priceRange": "INR 120-250",
        "rating": 4.9,
        "specialDish": "Amritsari Aloo Pyaaz Chur Chur Kulcha with Chole",
        "distanceFromCenter": "0.3 km",
        "description": "Crisp flaky clay-oven baked bread crushed by hand with butter."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Golden Temple & Wagah Border",
        "summary": "Morning visit to Golden Temple, Jallianwala Bagh, afternoon drive to Wagah Border ceremony, night view of illuminated temple.",
        "highlights": [
          "Harmandir Sahib prayer",
          "Wagah Border ceremony",
          "Kesar Da Dhaba dinner"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Cover your head",
        "detail": "All visitors must cover their heads and remove shoes before entering the Golden Temple complex."
      }
    ],
    "startingBudget": "From INR 3,800 / day",
    "budgetTier": "budget",
    "costEstimate": {
      "backpacker": "INR 2,500-3,800",
      "comfort": "INR 4,500-7,500",
      "premium": "INR 12,000+"
    }
  },
  {
    "id": "shimla",
    "slug": "shimla",
    "name": "Shimla",
    "state": "Himachal Pradesh",
    "city": "Shimla",
    "regionType": "hill-station",
    "description": "The erstwhile summer capital of British India, perched along a scenic Himalayan mountain ridge, famed for colonial Mall Road, Christ Church, and pine forests.",
    "history": "Chosen in 1864 as the official summer capital of the British Empire in India, where government functioned from grand baronial mansions.",
    heroImage: "/images/destinations/shimla.jpg",
    "heroImageAlt": "Neo-Gothic yellow Christ Church on The Ridge in Shimla",
    "galleryImages": [
      {
        src: wikimediaFile("Viceregal Lodge Shimla.jpg"),
        "alt": "Grand Scottish-baronial stone facade of Viceregal Lodge"
      },
      {
        src: wikimediaFile("Kalka Shimla toy train mountain tunnel.jpg"),
        "alt": "UNESCO mountain railway snaking through pine hills"
      }
    ],
    "openingTime": "Mall Road open 24 hours",
    "closingTime": "Shops close 9:00 PM",
    "entryFee": "INR 20-50 for monuments",
    "foreignerFee": "Same",
    "parkingFee": "INR 50-100",
    "bestTimeToVisit": "March-June & December-February (for snow)",
    "recommendedDuration": "2-3 days",
    "rating": 4.7,
    "transportModes": [
      "Trains",
      "Buses",
      "Taxi"
    ],
    "latitude": 31.1048,
    "longitude": 77.1734,
    "nearbyAttractions": [
      {
        "name": "The Ridge & Mall Road",
        "distance": "0.2 km",
        "description": "Pedestrian-only open promenade with panoramic mountain vistas."
      },
      {
        "name": "Viceregal Lodge",
        "distance": "3 km",
        "description": "Magnificent estate where historic partition and independence decisions were made."
      },
      {
        "name": "Jakhoo Temple",
        "distance": "2 km",
        "description": "Highest hill peak featuring a 108-foot colossal statue of Lord Hanuman."
      }
    ],
    "featuredAttractions": [
      {
        "id": "the-ridge",
        "name": "The Ridge & Christ Church",
        "description": "Heart of Shimla culture and festivals overlooking Himalayan valley rifts.",
        image: wikimediaFile("Christ Church Shimla Ridge.jpg"),
        "timings": "Open 24 hours",
        "entryFee": "Free"
      }
    ],
    "nearbyHotels": [
      {
        "name": "Wildflower Hall, An Oberoi Resort",
        "category": "premium",
        "priceRange": "INR 28,000-55,000",
        "distanceFromCenter": "12 km",
        "rating": 4.9,
        "description": "Former residence of Lord Kitchener set amidst 23 acres of cedar forests."
      },
      {
        "name": "The Oberoi Cecil Shimla",
        "category": "premium",
        "priceRange": "INR 16,000-28,000",
        "distanceFromCenter": "1.5 km",
        "rating": 4.8,
        "description": "Historic 1884 grand hotel with ballroom and mountain terraces."
      },
      {
        "name": "Hotel Combermere",
        "category": "mid-range",
        "priceRange": "INR 5,500-9,000",
        "distanceFromCenter": "0.2 km",
        "rating": 4.3,
        "description": "Conveniently located beside passenger elevator to Mall Road."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Cafe Sol",
        "cuisine": "Continental & Italian",
        "priceRange": "INR 450-900",
        "rating": 4.6,
        "specialDish": "Thin Crust Pizza & Greek Salad",
        "distanceFromCenter": "0.2 km",
        "description": "Lively Mall Road rooftop cafe with views of the valley."
      },
      {
        "name": "Wake & Bake Cafe",
        "cuisine": "Crepes, Waffles & Coffee",
        "priceRange": "INR 250-550",
        "rating": 4.7,
        "specialDish": "Nutella Banana Crepe & Fresh Ground Coffee",
        "distanceFromCenter": "0.3 km",
        "description": "Cozy upstairs cafe painted with murals overlooking the town hall."
      },
      {
        "name": "Himachali Rasoi",
        "cuisine": "Traditional Pahadi Dham",
        "priceRange": "INR 200-450",
        "rating": 4.8,
        "specialDish": "Kangri Dham Thali & Siddu with Ghee",
        "distanceFromCenter": "0.4 km",
        "description": "Steamed wheat flour bun stuffed with lentils served with pure desi ghee."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: The Ridge & Viceregal Heritage",
        "summary": "Morning walk on The Ridge, tour the Viceregal Lodge, afternoon ropeway to Jakhoo Temple.",
        "highlights": [
          "Christ Church",
          "Viceregal Lodge tour",
          "Jakhoo hill ropeway"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "No vehicles allowed on Mall Road",
        "detail": "Mall Road is pedestrian-only; use public elevators from the circular road below."
      }
    ],
    "startingBudget": "From INR 4,800 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,200-4,800",
      "comfort": "INR 6,000-10,500",
      "premium": "INR 18,000+"
    }
  },
  {
    "id": "manali",
    "slug": "manali",
    "name": "Manali",
    "state": "Himachal Pradesh",
    "city": "Manali",
    "regionType": "hill-station",
    "description": "Gateway to high-altitude Himalayan passes, surrounded by towering snow peaks, cedar forests, gushing Beas River rapids, and apple orchards.",
    "history": "Named after sage Manu who is said to have stepped off his ark here to recreate human life after the great flood.",
    heroImage: wikimediaFile("Snow clad mountains at Rohtang pass.jpg"),
    "heroImageAlt": "Snow-capped peaks and paragliders soaring over Solang Valley Manali",
    "galleryImages": [
      {
        src: wikimediaFile("Hadimba Temple Manali wooden pagoda.jpg"),
        "alt": "Ancient 1553 wooden pagoda temple nestled in cedar forest"
      },
      {
        src: wikimediaFile("Rohtang Pass Himalayan vista.jpg"),
        "alt": "13,058-foot Rohtang Pass framed by glaciers"
      }
    ],
    "openingTime": "Temples 8:00 AM - 6:00 PM",
    "closingTime": "Pass access seasonal",
    "entryFee": "INR 20-50",
    "foreignerFee": "Same",
    "parkingFee": "INR 50-100",
    "bestTimeToVisit": "March-June (Pleasant) & December-February (Snow)",
    "recommendedDuration": "3-4 days",
    "rating": 4.8,
    "transportModes": [
      "Buses",
      "Taxi"
    ],
    "latitude": 32.2432,
    "longitude": 77.1892,
    "nearbyAttractions": [
      {
        "name": "Hadimba Temple",
        "distance": "2 km",
        "description": "Four-tiered wooden pagoda sanctuary built in 1553 amid towering deodars."
      },
      {
        "name": "Solang Valley",
        "distance": "13 km",
        "description": "Adventure hub for skiing, paragliding, zorbing, and ropeways."
      },
      {
        "name": "Atal Tunnel & Sissu",
        "distance": "28 km",
        "description": "World's longest highway tunnel above 10,000 feet opening into Lahaul valley."
      }
    ],
    "featuredAttractions": [
      {
        "id": "hadimba-temple",
        "name": "Hadimba Temple",
        "description": "Architectural masterpiece surrounded by sacred cedar forest.",
        image: wikimediaFile("Hadimba Temple Manali wooden pagoda.jpg"),
        "timings": "8:00 AM - 6:00 PM",
        "entryFee": "Free"
      }
    ],
    "nearbyHotels": [
      {
        "name": "The Himalayan Resort & Spa",
        "category": "premium",
        "priceRange": "INR 14,000-26,000",
        "distanceFromCenter": "1.5 km",
        "rating": 4.8,
        "description": "Victorian Gothic castle resort with apple orchards and mountain views."
      },
      {
        "name": "Span Resort & Spa",
        "category": "premium",
        "priceRange": "INR 12,000-22,000",
        "distanceFromCenter": "14 km",
        "rating": 4.7,
        "description": "Luxury riverside retreat right along the rushing Beas River."
      },
      {
        "name": "Drifters' Inn & Cafe",
        "category": "budget",
        "priceRange": "INR 2,200-3,800",
        "distanceFromCenter": "2 km (Old Manali)",
        "rating": 4.4,
        "description": "Beloved backpacker inn in peaceful Old Manali village."
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Cafe 1947",
        "cuisine": "Italian & European",
        "priceRange": "INR 450-900",
        "rating": 4.8,
        "specialDish": "Wood-Fired Trout Pizza & Pasta Fresca",
        "distanceFromCenter": "2.5 km (Old Manali)",
        "description": "Riverside deck cafe right beside rushing mountain waters."
      },
      {
        "name": "Johnson's Cafe",
        "cuisine": "European & Trout Specialties",
        "priceRange": "INR 600-1,200",
        "rating": 4.7,
        "specialDish": "Pan-Fried Himalayan Trout with Almond Butter",
        "distanceFromCenter": "1 km",
        "description": "Famous for fresh catch rainbow trout and lawn seating with fire pits."
      },
      {
        "name": "Chopsticks Restaurant",
        "cuisine": "Tibetan & Asian",
        "priceRange": "INR 250-550",
        "rating": 4.6,
        "specialDish": "Gyathuk Noodle Soup & Mutton Momos",
        "distanceFromCenter": "0.2 km",
        "description": "Bustling Mall Road eatery loved for hearty winter soups and momos."
      }
    ],
    "suggestedItinerary": [
      {
        "title": "Day 1: Hadimba & Old Manali",
        "summary": "Morning walk through Dhungri forest to Hadimba Temple, afternoon exploring Old Manali cafes.",
        "highlights": [
          "Hadimba Temple",
          "Old Manali streets",
          "Riverside dining at Cafe 1947"
        ]
      },
      {
        "title": "Day 2: Solang Valley & Atal Tunnel",
        "summary": "Drive through Atal Tunnel into Lahaul valley, paragliding at Solang Valley.",
        "highlights": [
          "Atal Tunnel crossing",
          "Sissu waterfall",
          "Solang snow sports"
        ]
      }
    ],
    "travelTips": [
      {
        "title": "Rohtang Pass requires permit",
        "detail": "Daily tourist vehicle permits are limited to protect the fragile glacier ecology."
      }
    ],
    "startingBudget": "From INR 4,500 / day",
    "budgetTier": "mid-range",
    "costEstimate": {
      "backpacker": "INR 3,000-4,500",
      "comfort": "INR 5,500-9,500",
      "premium": "INR 16,000+"
    }
  }
];

export const destinationMapData = destinations.map((destination) => ({
  slug: destination.slug,
  name: destination.name,
  latitude: destination.latitude,
  longitude: destination.longitude,
  image: destination.heroImage,
  description: destination.description,
  openingTime: destination.openingTime,
  closingTime: destination.closingTime,
  bestTimeToVisit: destination.bestTimeToVisit,
}));

export const states = [
  "Andhra Pradesh",
  "Telangana",
  "Delhi",
  "Maharashtra",
  "Rajasthan",
  "Uttar Pradesh",
  "Goa",
  "Karnataka",
  "Tamil Nadu",
  "Kerala",
  "West Bengal",
  "Punjab",
  "Himachal Pradesh",
] as const;

export const seasons = [
  "September-February",
  "November-February",
  "October-March",
  "October-February",
  "All year round / September-March",
  "March-May & October-December",
  "March-June (Pleasant) & December-February (Snow)",
] as const;

export function getDestinationBySlug(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}
