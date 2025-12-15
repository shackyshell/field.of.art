import image1 from "@/assets/1.jpg";
import image2 from "@/assets/2.jpg";
import image3 from "@/assets/3.jpg";
import christmasImage from "@/assets/christmas-tour.png";

export interface Tour {
  title: string;
  subtitle: string;
  description: string;
  pickupTime: string;
  endTime: string;
  intro: string;
  tourPath: Array<{
    location: string;
    description: string;
  }>;
  activities?: Array<{
    title: string;
    description: string;
  }>;
  workshops?: Array<{
    title: string;
    description: string;
  }>;
  workshopPolish?: {
    title: string;
    subtitle: string;
    activities: string[];
  };
  included: string[];
  highlights: string[];
  image: string;
  slug: string;
}

export const christmasTour: Tour = {
  slug: "christmas-tour",
  image: christmasImage,
  title: "Wrocław Christmas Magic Walking Tour",
  subtitle: "Discover the enchanting Christmas atmosphere of Wrocław's historic center on foot",
  description: "Experience traditional Polish holiday crafts, explore festive markets, and savor seasonal treats while learning about Silesian Christmas traditions.",
  pickupTime: "10:00 - 11:00 AM",
  endTime: "4:00 PM - 4:30 PM",
  
  intro: `Your tour guide will reach out 15 minutes before to confirm the exact time. Begin your unforgettable journey at the Main Market Square (Rynek), one of Europe's largest medieval squares, beautifully decorated for the Christmas season.`,
  
  tourPath: [
    {
      location: "Main Market Square (Rynek)",
      description: "Explore the famous Christmas Market, admiring handcrafted ornaments and local products. Walk past the Gothic Town Hall and see the traditional nativity scene."
    },
    {
      location: "Ostrów Tumski (Cathedral Island)",
      description: "Cross via picturesque Oder River bridges, stopping to admire the Lock of Love Bridge and Cathedral of St. John the Baptist illuminated with holiday lights."
    },
    {
      location: "University Quarter",
      description: "Walk along ulica Kuźnicza, passing colorful baroque townhouses and charming cafés."
    },
    {
      location: "Salt Square (Plac Solny)",
      description: "Visit the famous flower market, then walk through the Jewish Quarter discovering hidden courtyards and street art, including Wrocław's famous dwarf statues in festive attire."
    },
    {
      location: "Traditional Café Workshop",
      description: "At approximately 12:30 PM, arrive at a cozy traditional café for authentic Polish Christmas craft workshops."
    },
    {
      location: "Nadodrze District",
      description: "See the restored tenement houses, then return via Słodowa Island and the scenic Oder River promenade."
    }
  ],
  
  workshops: [
    {
      title: "Traditional Christmas Decorations",
      description: "Discover the unique atmosphere of holidays in Poland, Silesia, and Wrocław"
    },
    {
      title: "Paper Chain Making",
      description: "Create a classic Polish 'łańcuch' decoration together"
    },
    {
      title: "Ornament Crafting",
      description: "Make ornaments from salt dough or modeling clay"
    },
    {
      title: "Ornament Decorating",
      description: "Use UV nail polish, paints, and varnish to personalize your creations"
    },
    {
      title: "Silesian Traditions",
      description: "Learn about Christmas traditions and family customs"
    }
  ],
  
  included: [
    "Pickup from hotels in Wrocław city center",
    "Drop-off at Main Market Square",
    "Experienced English-speaking guide",
    "Visit to Ostrów Tumski Cathedral Island",
    "Walking tour through historic Old Town",
    "Christmas craft workshop in traditional café",
    "All materials for ornament making",
    "Take home your handmade Christmas decorations",
    "Polish lunch set menu (vegetarian options available)",
    "Traditional Christmas pastries and hot beverages",
    "Tasting of seasonal Polish treats",
    "Gingerbread and honey mead samples",
    "All entry fees",
    "Travel insurance"
  ],
  
  highlights: [
    "Photo opportunities with Wrocław's famous dwarf statues",
    "Stories about Silesian Christmas traditions",
    "Visit to local artisan shops",
    "Seasonal market browsing time"
  ],
  
  workshopPolish: {
    title: "Warsztaty robienia tradycyjnych ozdób świątecznych",
    subtitle: "Poznaj niepowtarzalny klimat świąt w Polsce, na Śląsku, we Wrocławiu",
    activities: [
      "Wspólne stworzenie łańcucha z papieru",
      "Wykonanie ornamentu z masy solnej/modeliny",
      "Ozdobienie ornamentu - lakiery UV do paznokci albo farby i werniks"
    ]
  }
};

export const historicalTour: Tour = {
  slug: "historical-tour",
  image: image2,
  title: "Wrocław Historical Walking Tour",
  subtitle: "Journey through 1000 years of history in Poland's most beautiful city",
  description: "Discover the rich history of Wrocław from medieval times through World War II to modern day. Walk through centuries of architecture, learn about the city's multicultural past, and hear stories of resilience and rebirth.",
  pickupTime: "9:00 - 9:30 AM",
  endTime: "1:00 - 1:30 PM",
  intro: "Meet your expert guide at the Main Market Square. This comprehensive walking tour covers the most significant historical sites and monuments, revealing the fascinating layers of Wrocław's past.",
  tourPath: [
    {
      location: "Main Market Square (Rynek)",
      description: "Start at the heart of medieval Wrocław. Learn about the city's founding, the Gothic Town Hall, and how the square has evolved over centuries. See the famous Hansel and Gretel houses."
    },
    {
      location: "St. Elizabeth's Church",
      description: "Visit one of Wrocław's most important Gothic churches. Climb the tower for panoramic views and learn about the church's role in the city's religious history."
    },
    {
      location: "University of Wrocław",
      description: "Explore the Baroque Leopoldine Hall and learn about the university's 300-year history. Discover the connection to famous alumni and the university's role in Polish culture."
    },
    {
      location: "Ostrów Tumski (Cathedral Island)",
      description: "Cross to the oldest part of Wrocław. Visit the Cathedral of St. John the Baptist, see the oldest bridge in the city, and learn about the island's significance as the original settlement."
    },
    {
      location: "Jewish Quarter",
      description: "Walk through the former Jewish district, learn about the vibrant Jewish community that once thrived here, and visit the White Stork Synagogue, one of the few remaining pre-war synagogues."
    },
    {
      location: "Centennial Hall",
      description: "End at this UNESCO World Heritage site, a masterpiece of early 20th-century architecture. Learn about its construction and significance in modern Wrocław."
    }
  ],
  activities: [
    {
      title: "Historical Timeline Walk",
      description: "Follow the chronological development of Wrocław from medieval times to present"
    },
    {
      title: "Architecture Styles Discovery",
      description: "Identify and learn about Gothic, Baroque, Art Nouveau, and Modernist buildings"
    },
    {
      title: "Interactive Map Reading",
      description: "Use historical maps to understand how the city's layout has changed"
    }
  ],
  included: [
    "Professional licensed guide",
    "Walking tour of historic Old Town",
    "Entry to St. Elizabeth's Church tower",
    "Entry to University of Wrocław Leopoldine Hall",
    "Entry to White Stork Synagogue",
    "Historical maps and materials",
    "Small group size (max 15 people)",
    "All entry fees"
  ],
  highlights: [
    "UNESCO World Heritage Centennial Hall",
    "Panoramic views from St. Elizabeth's tower",
    "Baroque architecture at the University",
    "Stories of Wrocław's multicultural heritage",
    "Photo opportunities at iconic landmarks"
  ]
};

export const foodCultureTour: Tour = {
  slug: "food-culture-tour",
  image: image3,
  title: "Wrocław Food & Culture Tour",
  subtitle: "Taste authentic Polish cuisine and discover local traditions",
  description: "Experience the flavors of Silesia and Polish cuisine while learning about local customs, traditions, and the cultural significance of food in Polish society. Visit traditional restaurants, local markets, and artisan producers.",
  pickupTime: "11:00 - 11:30 AM",
  endTime: "3:30 - 4:00 PM",
  intro: "Meet your guide at the Main Market Square. This culinary adventure takes you through Wrocław's food scene, from traditional pierogi to modern Polish cuisine, while exploring the cultural context of each dish.",
  tourPath: [
    {
      location: "Main Market Square - Food Market",
      description: "Start with a visit to the local food market. Sample fresh produce, learn about seasonal ingredients, and meet local vendors. Taste traditional Polish cheeses and cured meats."
    },
    {
      location: "Traditional Milk Bar (Bar Mleczny)",
      description: "Experience authentic Polish dining at a traditional milk bar. Learn about this unique institution from communist times and enjoy classic Polish dishes like pierogi, żurek, and bigos."
    },
    {
      location: "Artisan Bakery",
      description: "Visit a local bakery specializing in traditional Polish breads and pastries. Learn about the importance of bread in Polish culture and sample fresh-baked goods."
    },
    {
      location: "Polish Restaurant - Main Course",
      description: "Enjoy a full traditional Polish meal at a renowned local restaurant. Taste dishes like schabowy (breaded pork cutlet), gołąbki (stuffed cabbage), and traditional sides while learning about their origins."
    },
    {
      location: "Craft Beer Tasting",
      description: "Visit a local brewery or beer hall. Learn about Polish beer traditions and taste different styles of craft beer, including regional specialties."
    },
    {
      location: "Dessert & Coffee",
      description: "End at a traditional café for Polish desserts like szarlotka (apple pie), makowiec (poppy seed cake), and coffee. Learn about Polish café culture and social traditions."
    }
  ],
  activities: [
    {
      title: "Pierogi Making Workshop",
      description: "Learn to make traditional Polish dumplings with hands-on instruction"
    },
    {
      title: "Food History Stories",
      description: "Discover the stories behind iconic Polish dishes and their cultural significance"
    },
    {
      title: "Local Market Exploration",
      description: "Navigate local markets and learn to identify quality ingredients"
    }
  ],
  included: [
    "Professional food guide",
    "All food tastings (enough for a full meal)",
    "Craft beer tasting (3-4 samples)",
    "Pierogi making workshop",
    "Recipe cards to take home",
    "Visit to 5-6 food venues",
    "Cultural insights and stories",
    "Small group size (max 12 people)"
  ],
  highlights: [
    "Authentic pierogi making experience",
    "Traditional milk bar experience",
    "Local market exploration",
    "Craft beer tasting",
    "Traditional Polish desserts",
    "Cultural stories behind each dish"
  ]
};

export const privateGroupTour: Tour = {
  slug: "private-group-tour",
  image: image1,
  title: "Private Group Tours",
  subtitle: "Customized experiences for families, friends, and corporate groups",
  description: "Create your perfect Wrocław experience with a fully customizable private tour. Whether you're a family with children, a group of friends, or a corporate team, we'll design an itinerary that matches your interests, pace, and schedule.",
  pickupTime: "Flexible - your choice",
  endTime: "Flexible - your choice",
  intro: "Our private tours are completely tailored to your group. Choose your focus: history, food, architecture, art, nightlife, or a combination. Your guide will work with you to create the perfect itinerary.",
  tourPath: [
    {
      location: "Custom Starting Point",
      description: "We'll meet you at your hotel, a specific location, or a landmark of your choice. Your guide will greet you and review the personalized itinerary."
    },
    {
      location: "Your Choice of Attractions",
      description: "Visit the sites that interest you most. Options include: museums, galleries, historical sites, markets, restaurants, parks, or off-the-beaten-path locations."
    },
    {
      location: "Flexible Schedule",
      description: "Take breaks when you need them. Spend more time at places you love, skip what doesn't interest you. The pace is entirely up to your group."
    },
    {
      location: "Personalized Experiences",
      description: "Add special activities: cooking classes, art workshops, photo sessions, shopping assistance, or visits to local artisans."
    },
    {
      location: "Local Recommendations",
      description: "Get personalized recommendations for restaurants, cafes, bars, and activities for the rest of your stay in Wrocław."
    },
    {
      location: "Flexible Ending",
      description: "End where you prefer - your hotel, a restaurant, a specific location, or continue exploring on your own with your guide's recommendations."
    }
  ],
  activities: [
    {
      title: "Custom Itinerary Planning",
      description: "Work with your guide to create the perfect tour based on your interests"
    },
    {
      title: "Flexible Pace & Schedule",
      description: "Tour at your own pace with breaks and adjustments as needed"
    },
    {
      title: "Special Interest Focus",
      description: "Deep dive into topics that interest your group most"
    }
  ],
  included: [
    "Private professional guide (exclusively for your group)",
    "Fully customizable itinerary",
    "Flexible start and end times",
    "Hotel pickup and drop-off",
    "All guide's time and expertise",
    "Personalized recommendations",
    "Group size: 1-20 people",
    "Available in multiple languages"
  ],
  highlights: [
    "100% customizable experience",
    "Private guide exclusively for your group",
    "Flexible schedule and pace",
    "Special interest focus available",
    "Personalized recommendations",
    "Perfect for families, friends, or corporate groups"
  ]
};

export const photographyTour: Tour = {
  slug: "photography-tour",
  image: image2,
  title: "Wrocław Photography Tour",
  subtitle: "Capture the most Instagram-worthy spots in Wrocław",
  description: "Discover Wrocław's most photogenic locations with a photography-focused tour. Learn composition techniques, find the best lighting, and capture stunning images of architecture, street art, and hidden gems while exploring the city.",
  pickupTime: "8:00 - 8:30 AM (Golden Hour) or 4:00 - 4:30 PM",
  endTime: "12:00 PM or 8:00 PM",
  intro: "Meet your photography guide at sunrise or sunset for the best lighting conditions. This tour combines beautiful locations with photography tips and techniques to help you capture Wrocław at its most photogenic.",
  tourPath: [
    {
      location: "Main Market Square - Golden Hour",
      description: "Start with the iconic Market Square during golden hour. Learn composition techniques for architecture photography and capture the Gothic Town Hall with perfect lighting."
    },
    {
      location: "Ostrów Tumski - Cathedral Views",
      description: "Photograph the Cathedral of St. John the Baptist from multiple angles. Learn about framing, leading lines, and capturing architectural details. Cross the bridges for unique perspectives."
    },
    {
      location: "Street Art & Dwarfs",
      description: "Hunt for Wrocław's famous dwarf statues and vibrant street art. Learn macro photography techniques and how to capture small details that tell a story."
    },
    {
      location: "Hidden Courtyards",
      description: "Explore secret courtyards and passageways. Discover how to find and photograph hidden gems, work with natural light in tight spaces, and create intimate compositions."
    },
    {
      location: "Modern Architecture",
      description: "Visit contemporary buildings like the Centennial Hall and modern developments. Learn to photograph modern architecture with clean lines and geometric compositions."
    },
    {
      location: "Riverside & Bridges",
      description: "End at the Oder River with its picturesque bridges. Capture reflections, learn long exposure techniques, and photograph the city skyline from the water's edge."
    }
  ],
  activities: [
    {
      title: "Composition Techniques",
      description: "Learn rule of thirds, leading lines, framing, and other composition principles"
    },
    {
      title: "Lighting Mastery",
      description: "Understand golden hour, blue hour, and how to work with different lighting conditions"
    },
    {
      title: "Storytelling Through Photos",
      description: "Learn to capture moments and tell stories through your images"
    }
  ],
  included: [
    "Professional photography guide",
    "Photography tips and techniques",
    "Access to best photo locations",
    "Golden hour timing",
    "Composition guidance",
    "Lighting advice",
    "Post-processing tips",
    "Small group size (max 8 people)",
    "All locations and access"
  ],
  highlights: [
    "Golden hour photography sessions",
    "Access to hidden photo spots",
    "Composition and technique guidance",
    "Street art and dwarf statue hunting",
    "Riverside and bridge photography",
    "Instagram-worthy locations",
    "Professional photography tips"
  ]
};

export const allTours = [christmasTour, historicalTour, foodCultureTour, privateGroupTour, photographyTour];
