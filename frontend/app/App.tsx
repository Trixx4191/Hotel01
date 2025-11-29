import { Router } from "./components/Router";
import { HomePage } from "./pages/HomePage";
import { RoomsSuitesPage } from "./pages/RoomsSuitesPage";
import { DiningPage } from "./pages/DiningPage";
import { ExperiencesPage } from "./pages/ExperiencesPage";
import { MeetingsEventsPage } from "./pages/MeetingsEventsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { SpaPage } from "./pages/SpaPage";
import { OffersPage } from "./pages/OffersPage";
import { SearchPage } from "./pages/SearchPage";
import { SignInPage } from "./pages/SignInPage";
import { BookingPage } from "./pages/BookingPage";
import { ConciergePage } from "./pages/ConciergePage";
import { RoomServicePage } from "./pages/RoomServicePage";
import { ValetPage } from "./pages/ValetPage";
import { AirportTransferPage } from "./pages/AirportTransferPage";
import { BusinessCenterPage } from "./pages/BusinessCenterPage";
import { PetServicesPage } from "./pages/PetServicesPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage} from "./pages/TermsPage";
import { AccessibilityPage } from "./pages/AccessibilityPage";

export default function App() {
  const routes = [
    { path: "/", component: HomePage },
    { path: "/rooms", component: RoomsSuitesPage },
    { path: "/dining", component: DiningPage },
    { path: "/experiences", component: ExperiencesPage },
    { path: "/meetings", component: MeetingsEventsPage },
    { path: "/gallery", component: GalleryPage },
    { path: "/spa", component: SpaPage },
    { path: "/offers", component: OffersPage },
    { path: "/search", component: SearchPage },
    { path: "/signin", component: SignInPage },
    { path: "/booking", component: BookingPage },
    { path: "/concierge", component: ConciergePage },
    { path: "/room-service", component: RoomServicePage },
    { path: "/valet", component: ValetPage },
    { path: "/airport-transfer", component: AirportTransferPage },
    { path: "/business-center", component: BusinessCenterPage },
    { path: "/pet-services", component: PetServicesPage },
    { path: "/privacy", component: PrivacyPage },
    { path: "/terms", component: TermsPage },
    { path: "/accessibility", component: AccessibilityPage },
  ];

  return (
    <Router routes={routes}>
      <HomePage />
    </Router>
  );
}
