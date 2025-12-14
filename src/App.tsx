import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { companyName, companyTagline } from "./data/constants";
import ChristmasTour from "./pages/ChristmasTour"
import HistoricalTour from "./pages/HistoricalTour"
import FoodCultureTour from "./pages/FoodCultureTour"
import PrivateGroupTour from "./pages/PrivateGroupTour"
import PhotographyTour from "./pages/PhotographyTour"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Index from"./pages/Index"

const queryClient = new QueryClient();

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white border-b border-border relative overflow-hidden">
            <nav className="container mx-auto px-4 py-4 relative z-10">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2 relative z-20">
                  <h1 className="text-2xl font-display font-bold text-black">{companyName}</h1>
                </Link>
            <div className="absolute bottom-0 left-0 -translate-x-8 translate-y-1/2 w-64 h-64 bg-yellow blob-shape-1 -z-0"></div>
              </div>
            </nav>
          </header>

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/christmas-tour" element={<ChristmasTour />} />
              <Route path="/historical-tour" element={<HistoricalTour />} />
              <Route path="/food-culture-tour" element={<FoodCultureTour />} />
              <Route path="/private-group-tour" element={<PrivateGroupTour />} />
              <Route path="/photography-tour" element={<PhotographyTour />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <footer className="bg-black text-white/80 py-8 mt-auto">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm">
                © {currentYear} {companyName} - {companyTagline}. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
