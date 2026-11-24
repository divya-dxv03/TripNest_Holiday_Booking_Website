const STORAGE_KEY = "tripnest_holidays_state_v3";

const DEFAULT_USERS = [
  {
    id: 1,
    name: "Aarav Menon",
    email: "guest@tripnest.demo",
    phone: "+91 98765 00000",
    password: "Demo@123"
  }
];

const DEFAULT_DESTINATIONS = [
  { id: 1, name: "Kashmir", type: "domestic", country: "India", location: "Jammu & Kashmir", bestTime: "Apr – Oct", attractions: "Dal Lake, Gulmarg, Pahalgam", desc: "Snow-kissed valleys, shikara rides, and alpine meadows.", img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80" },
  { id: 2, name: "Kerala", type: "domestic", country: "India", location: "South India", bestTime: "Sep – Mar", attractions: "Alleppey Backwaters, Munnar, Fort Kochi", desc: "Lush tea hills, palm-lined lagoons, and serene houseboats.", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80" },
  { id: 3, name: "Goa", type: "domestic", country: "India", location: "West Coast", bestTime: "Nov – Feb", attractions: "Baga & Palolem Beaches, Old Goa, Dudhsagar", desc: "Golden beaches, coastal cuisine, and vibrant sunsets.", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80" },
  { id: 4, name: "Manali", type: "domestic", country: "India", location: "Himachal Pradesh", bestTime: "Mar – Jun, Dec – Feb", attractions: "Solang Valley, Rohtang, Hadimba Temple", desc: "Mountain trails, adventure sports, and pine-scented air.", img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80" },
  { id: 5, name: "Ooty", type: "domestic", country: "India", location: "Nilgiris, Tamil Nadu", bestTime: "Oct – Jun", attractions: "Botanical Gardens, Doddabetta, Nilgiri Mountain Railway", desc: "Cool hill-station weather, eucalyptus groves, and toy train rides.", img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=80" },
  { id: 6, name: "Coorg", type: "domestic", country: "India", location: "Karnataka", bestTime: "Oct – Mar", attractions: "Abbey Falls, Coffee Estates, Dubare", desc: "Misty coffee plantations, waterfalls, and peaceful homestays.", img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=80" },
  { id: 7, name: "Andaman", type: "domestic", country: "India", location: "Bay of Bengal", bestTime: "Nov – May", attractions: "Radhanagar Beach, Havelock, Neil Island", desc: "Crystal-clear turquoise waters, coral reefs, and island calm.", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80" },
  { id: 8, name: "Lakshadweep", type: "domestic", country: "India", location: "Arabian Sea", bestTime: "Oct – May", attractions: "Agatti Lagoon, Bangaram, Kavaratti", desc: "Secluded coral atolls, lagoon snorkeling, and white sand.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80" },
  { id: 9, name: "Rajasthan", type: "domestic", country: "India", location: "Northwest India", bestTime: "Oct – Mar", attractions: "Jaipur Forts, Udaipur Lakes, Thar Dunes", desc: "Royal palaces, desert safaris, and timeless heritage.", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80" },
  { id: 10, name: "Himachal Pradesh", type: "domestic", country: "India", location: "Northern Himalayas", bestTime: "Mar – Jun, Sep – Feb", attractions: "Shimla, Spiti Valley, Dharamshala", desc: "High passes, monasteries, and scenic Himalayan valleys.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80" },
  { id: 11, name: "Thailand", type: "international", country: "Thailand", location: "Southeast Asia", bestTime: "Nov – Mar", attractions: "Bangkok Temples, Phuket, Phi Phi", desc: "Vibrant street culture, tropical islands, and warm hospitality.", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80" },
  { id: 12, name: "Bali", type: "international", country: "Indonesia", location: "Lesser Sunda Islands", bestTime: "Apr – Oct", attractions: "Ubud Terraces, Uluwatu, Nusa Penida", desc: "Sacred temples, rice paddies, beach clubs, and wellness retreats.", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80" },
  { id: 13, name: "Maldives", type: "international", country: "Maldives", location: "Indian Ocean", bestTime: "Nov – Apr", attractions: "Overwater Villas, Coral Reefs, Sandbanks", desc: "Iconic turquoise lagoons and tranquil island escapes.", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80" },
  { id: 14, name: "Singapore", type: "international", country: "Singapore", location: "Southeast Asia", bestTime: "Feb – Aug", attractions: "Marina Bay Sands, Gardens by the Bay, Sentosa", desc: "Futuristic skyline, lush city gardens, and family attractions.", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80" },
  { id: 15, name: "Malaysia", type: "international", country: "Malaysia", location: "Southeast Asia", bestTime: "Dec – Apr, Jun – Aug", attractions: "Kuala Lumpur, Langkawi, Cameron Highlands", desc: "Blend of modern cities, rainforests, and coastal islands.", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80" },
  { id: 16, name: "Dubai", type: "international", country: "UAE", location: "Middle East", bestTime: "Nov – Mar", attractions: "Burj Khalifa, Desert Safari, Dubai Marina", desc: "Desert adventures, luxury shopping, and bold modern landmarks.", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80" },
  { id: 17, name: "Switzerland", type: "international", country: "Switzerland", location: "Central Europe", bestTime: "May – Sep, Dec – Feb", attractions: "Lucerne, Jungfraujoch, Interlaken", desc: "Alpine railways, mirror lakes, and snowy mountain peaks.", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80" },
  { id: 18, name: "Paris", type: "international", country: "France", location: "Western Europe", bestTime: "Apr – Jun, Sep – Oct", attractions: "Eiffel Tower, Louvre, Seine River", desc: "Classic boulevards, art, cafes, and romantic architecture.", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80" },
  { id: 19, name: "Vietnam", type: "international", country: "Vietnam", location: "Southeast Asia", bestTime: "Feb – Apr, Aug – Oct", attractions: "Ha Long Bay, Hoi An, Da Nang", desc: "Emerald limestone bays, lantern towns, and rich culinary heritage.", img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80" },
  { id: 20, name: "Sri Lanka", type: "international", country: "Sri Lanka", location: "South Asia", bestTime: "Dec – Apr", attractions: "Ella, Sigiriya, Galle Fort", desc: "Tea hills, ancient rock fortresses, wildlife safaris, and beaches.", img: "https://images.unsplash.com/photo-1588258293635-3e15675f4447?auto=format&fit=crop&w=900&q=80" }
];

const DEFAULT_PACKAGES = [
  { id: 101, destination: "Kashmir", type: "domestic", category: "honeymoon", title: "Royal Kashmir Valley & Houseboat Escape", price: 28500, days: 6, nights: 5, slots: 14, hotel: "4★ Deluxe Hotel + Traditional Dal Lake Houseboat", transport: "Private AC Sedan Transfers", food: "Daily Breakfast & Dinner", sightseeing: "Srinagar, Gulmarg Gondola, Pahalgam", inclusions: "Accommodation, airport/station transfers, shikara ride, sightseeing.", exclusions: "Airfare, gondola tickets, personal expenses.", itinerary: "Day 1: Srinagar & Dal Lake | Day 2: Gulmarg | Day 3: Pahalgam | Day 4-5: Srinagar Leisure | Day 6: Departure", terms: "Valid ID required; weather changes may adjust mountain excursions.", img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80" },
  { id: 102, destination: "Kerala", type: "domestic", category: "family", title: "Kerala Munnar & Alleppey Backwater Tour", price: 22000, days: 5, nights: 4, slots: 18, hotel: "Hill Resort in Munnar + Private Houseboat", transport: "Private Cab Throughout", food: "Breakfast Daily + All Meals on Houseboat", sightseeing: "Munnar Tea Gardens, Thekkady, Alleppey", inclusions: "Stays, houseboat cruise, transfers, guided sightseeing.", exclusions: "Train/flight tickets, entry fees, optional Ayurvedic spa.", itinerary: "Day 1: Kochi to Munnar | Day 2: Munnar Sightseeing | Day 3: Alleppey Houseboat | Day 4: Marari/Kochi | Day 5: Departure", terms: "Standard check-in/out timings apply.", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80" },
  { id: 103, destination: "Bali", type: "international", category: "honeymoon", title: "Bali Ubud & Island Getaway", price: 68000, days: 7, nights: 6, slots: 12, hotel: "4★ Pool Villa / Resort Stays", transport: "Private Airport & Sightseeing Transfers", food: "Daily Breakfast", sightseeing: "Tegalalang, Uluwatu Cliff, Nusa Penida Day Trip", inclusions: "6 nights stay, private transfers, Nusa Penida boat tour.", exclusions: "International flights, Bali tourist levy/visa fees, lunch & dinner.", itinerary: "Day 1: Arrival Ubud | Day 2: Kintamani & Rice Terraces | Day 3: Nusa Penida | Day 4-5: Seminyak/Uluwatu | Day 6: Leisure | Day 7: Departure", terms: "Passport must have at least 6 months validity.", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80" },
  { id: 104, destination: "Switzerland", type: "international", category: "luxury", title: "Swiss Alps & Scenic Rail Odyssey", price: 185000, days: 8, nights: 7, slots: 8, hotel: "4★ Central Hotels in Lucerne & Interlaken", transport: "Swiss Travel Pass & Scenic Train Segments", food: "Daily Breakfast", sightseeing: "Jungfraujoch Top of Europe, Mt. Titlis, Lake Lucerne", inclusions: "7 nights stay, rail pass, mountain excursions.", exclusions: "Schengen visa fees, flights, city taxes, lunches & dinners.", itinerary: "Day 1: Zurich to Lucerne | Day 2: Mt. Titlis | Day 3: Interlaken | Day 4: Jungfraujoch | Day 5-6: Geneva/Montreux | Day 7: Lucerne | Day 8: Departure", terms: "Advance visa processing recommended at least 6 weeks prior.", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80" },
  { id: 105, destination: "Manali", type: "domestic", category: "adventure", title: "Solang & Atal Tunnel Himalayan Adventure", price: 16500, days: 5, nights: 4, slots: 20, hotel: "3★/4★ Mountain View Hotel", transport: "Volvo / Private Cab", food: "Breakfast & Dinner", sightseeing: "Solang Valley, Atal Tunnel, Old Manali", inclusions: "Stays, transfers, local sightseeing.", exclusions: "Paragliding/skiing gear fees, lunch, personal costs.", itinerary: "Day 1: Arrival Manali | Day 2: Solang & Atal Tunnel | Day 3: Naggar & Local | Day 4: Kullu/River | Day 5: Departure", terms: "High-altitude routes depend on local weather and road safety.", img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80" },
  { id: 106, destination: "Dubai", type: "international", category: "family", title: "Dubai Skyline & Desert Safari", price: 74000, days: 6, nights: 5, slots: 15, hotel: "4★ Hotel near Sheikh Zayed / Bur Dubai", transport: "Airport Transfers & Sightseeing Coach", food: "Daily Breakfast + Desert BBQ Dinner", sightseeing: "Burj Khalifa 124th Floor, Desert Safari, Marina Dhow Cruise", inclusions: "5 nights stay, desert safari with BBQ, Burj Khalifa tickets, transfers.", exclusions: "Flights, UAE visa, Dubai Tourism Dirham fee, lunches.", itinerary: "Day 1: Arrival & Dhow Cruise | Day 2: City Tour & Burj Khalifa | Day 3: Desert Safari | Day 4: Miracle Garden/Mall | Day 5: Leisure | Day 6: Departure", terms: "Passport valid for at least 6 months required.", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80" }
];

const DEFAULT_OFFERS = [
  { code: "TRIPNEST10", title: "10% Off Early Bird Holidays", desc: "Save 10% on bookings above ₹25,000.", discountPct: 10, minAmount: 25000, validUntil: "2027-03-31" },
  { code: "HONEYMOON5", title: "₹5,000 Off Romantic Escapes", desc: "Flat ₹5,000 discount on select honeymoon packages above ₹50,000.", discountFlat: 5000, minAmount: 50000, validUntil: "2027-06-30" }
];

const POLICIES = {
  privacy: { title: "Privacy Policy (Draft)", body: "<p>TRIPNEST HOLIDAYS collects contact and traveller details solely to process holiday enquiries, bookings, and customer support. Review and finalize legal wording before production launch.</p>" },
  terms: { title: "Terms & Conditions (Draft)", body: "<p>All holiday bookings are subject to availability, accurate traveller documentation, and applicable operator terms. Please review and approve final terms prior to going live.</p>" },
  cancellation: { title: "Cancellation Policy (Draft)", body: "<p>Cancellation charges depend on notice period prior to departure, non-refundable hotel/airline blocks, and seasonal rules. Confirm final fee slabs before publishing.</p>" },
  refund: { title: "Refund Policy (Draft)", body: "<p>Eligible refunds are returned to the original payment method within standard banking settlement timelines after deducting applicable cancellation charges.</p>" },
  payment: { title: "Payment Policy (Draft)", body: "<p>Bookings can be settled in full or via eligible advance payments. Live payment gateway integration should use tokenized checkout without storing raw card details.</p>" },
  travel: { title: "Travel Information (Draft)", body: "<p>Carry valid government ID or passport (with 6+ months validity for international trips), check weather advisories, and arrive at departure points early.</p>" }
};

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const initial = {
      users: DEFAULT_USERS,
      currentUser: null,
      destinations: DEFAULT_DESTINATIONS,
      packages: DEFAULT_PACKAGES,
      offers: DEFAULT_OFFERS,
      bookings: [],
      wishlist: [101],
      enquiries: [],
      compareIds: []
    };
    saveState(initial);
    return initial;
  }
  return JSON.parse(raw);
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();
let activeCoupon = null;
let uploadedPkgImageDataUrl = "";
let uploadedEditPkgImageDataUrl = "";

function formatINR(amount) {
  return "₹" + Number(amount || 0).toLocaleString("en-IN");
}

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&")
    .replaceAll("<", "<")
    .replaceAll(">", ">")
    .replaceAll('"', """);
}

function renderNavbarAuth() {
  const nav = document.getElementById("navAuthControls");
  if (state.currentUser) {
    nav.innerHTML = `
      <span class="small text-muted me-1">Hi, <strong>${escapeHtml(state.currentUser.name)}</strong></span>
      <button class="btn btn-outline-primary btn-sm px-3" data-bs-toggle="modal" data-bs-target="#customerModal">
        <i class="bi bi-person-circle me-1"></i>Dashboard
      </button>
      <button class="btn btn-outline-secondary btn-sm px-2" onclick="logoutUser()">Logout</button>
      <button class="btn btn-dark btn-sm px-3" data-bs-toggle="modal" data-bs-target="#adminModal">
        <i class="bi bi-shield-lock me-1"></i>Admin
      </button>
    `;
  } else {
    nav.innerHTML = `
      <a href="#login-page" class="btn btn-primary btn-sm px-3">
        <i class="bi bi-box-arrow-in-right me-1"></i>Login
      </a>
      <button class="btn btn-outline-primary btn-sm px-3" data-bs-toggle="modal" data-bs-target="#customerModal">
        <i class="bi bi-person-circle me-1"></i>My Trips
      </button>
      <button class="btn btn-dark btn-sm px-3" data-bs-toggle="modal" data-bs-target="#adminModal">
        <i class="bi bi-shield-lock me-1"></i>Admin
      </button>
    `;
  }
}

function renderLoginPageSection() {
  const box = document.getElementById("loginPageContainer");
  if (state.currentUser) {
    box.innerHTML = `
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <span class="badge text-bg-success mb-2">Signed In (Demo Session)</span>
          <h3 class="fw-bold mb-1">Welcome, ${escapeHtml(state.currentUser.name)}</h3>
          <p class="text-muted mb-0">${escapeHtml(state.currentUser.email)} • ${escapeHtml(state.currentUser.phone || "No phone saved")}</p>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#customerModal">Open Customer Dashboard</button>
          <button class="btn btn-outline-danger" onclick="logoutUser()">Logout</button>
        </div>
      </div>
    `;
    return;
  }

  box.innerHTML = `
    <div class="row g-4 align-items-start">
      <div class="col-lg-6 border-end-lg">
        <span class="text-primary fw-semibold small text-uppercase">Member Access</span>
        <h3 class="fw-bold mb-2">Login to TRIPNEST HOLIDAYS</h3>
        <p class="text-muted small mb-3">
          Demo account: <code>guest@tripnest.demo</code> / <code>Demo@123</code>
          <button type="button" class="btn btn-link btn-sm p-0 ms-1" onclick="fillDemoCredentials()">Fill Demo</button>
        </p>
        <form id="pageLoginForm" class="row g-3">
          <div class="col-12">
            <label class="form-label">Email Address *</label>
            <input type="email" id="pageLoginEmail" class="form-control" required />
          </div>
          <div class="col-12">
            <label class="form-label">Password *</label>
            <input type="password" id="pageLoginPassword" class="form-control" required />
          </div>
          <div class="col-12 d-flex justify-content-between align-items-center">
            <button type="submit" class="btn btn-primary px-4 fw-semibold">Login</button>
            <button type="button" class="btn btn-link btn-sm text-decoration-none p-0" onclick="resetDemoPassword()">Forgot / Reset Demo Password</button>
          </div>
        </form>
        <div id="pageAuthMessage" class="mt-3"></div>
      </div>

      <div class="col-lg-6">
        <span class="text-success fw-semibold small text-uppercase">New Traveller</span>
        <h3 class="fw-bold mb-2">Create an Account</h3>
        <p class="text-muted small mb-3">Register to save trips, autofill booking forms, and view your receipts.</p>
        <form id="pageRegisterForm" class="row g-3">
          <div class="col-12">
            <label class="form-label">Full Name *</label>
            <input type="text" id="pageRegName" class="form-control" required />
          </div>
          <div class="col-md-6">
            <label class="form-label">Email Address *</label>
            <input type="email" id="pageRegEmail" class="form-control" required />
          </div>
          <div class="col-md-6">
            <label class="form-label">Mobile Number *</label>
            <input type="tel" id="pageRegPhone" class="form-control" required />
          </div>
          <div class="col-md-6">
            <label class="form-label">Password *</label>
            <input type="password" id="pageRegPassword" class="form-control" minlength="6" required />
          </div>
          <div class="col-md-6">
            <label class="form-label">Confirm Password *</label>
            <input type="password" id="pageRegConfirm" class="form-control" minlength="6" required />
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-success px-4 fw-semibold">Register</button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.getElementById("pageLoginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("pageLoginEmail").value.trim().toLowerCase();
    const password = document.getElementById("pageLoginPassword").value;
    const user = state.users.find((u) => u.email.toLowerCase() === email && u.password === password);
    const msg = document.getElementById("pageAuthMessage");
    if (!user) {
      msg.innerHTML = `<div class="alert alert-danger py-2 small">Invalid credentials. Check your email or password.</div>`;
      return;
    }
    state.currentUser = { id: user.id, name: user.name, email: user.email, phone: user.phone };
    saveState(state);
    renderNavbarAuth();
    renderLoginPageSection();
  });

  document.getElementById("pageRegisterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("pageRegName").value.trim();
    const email = document.getElementById("pageRegEmail").value.trim().toLowerCase();
    const phone = document.getElementById("pageRegPhone").value.trim();
    const password = document.getElementById("pageRegPassword").value;
    const confirm = document.getElementById("pageRegConfirm").value;
    const msg = document.getElementById("pageAuthMessage");

    if (password !== confirm) {
      msg.innerHTML = `<div class="alert alert-warning py-2 small">Passwords do not match.</div>`;
      return;
    }
    if (state.users.some((u) => u.email.toLowerCase() === email)) {
      msg.innerHTML = `<div class="alert alert-warning py-2 small">An account with that email already exists.</div>`;
      return;
    }
    const created = { id: Date.now(), name, email, phone, password };
    state.users.push(created);
    state.currentUser = { id: created.id, name: created.name, email: created.email, phone: created.phone };
    saveState(state);
    renderNavbarAuth();
    renderLoginPageSection();
  });
}

function fillDemoCredentials() {
  const emailEl = document.getElementById("pageLoginEmail");
  const passEl = document.getElementById("pageLoginPassword");
  if (emailEl && passEl) {
    emailEl.value = "guest@tripnest.demo";
    passEl.value = "Demo@123";
  }
}

function resetDemoPassword() {
  const demo = state.users.find((u) => u.email === "guest@tripnest.demo");
  if (demo) {
    demo.password = "Demo@123";
    saveState(state);
  }
  fillDemoCredentials();
  document.getElementById("pageAuthMessage").innerHTML = `<div class="alert alert-info py-2 small">Demo password reset to <code>Demo@123</code> and filled in the form.</div>`;
}

function logoutUser() {
  state.currentUser = null;
  saveState(state);
  renderNavbarAuth();
  renderLoginPageSection();
}

function renderDestinations(filter = "all", query = "") {
  const grid = document.getElementById("destinationsGrid");
  const q = query.trim().toLowerCase();
  const list = state.destinations.filter((d) => {
    const typeMatch = filter === "all" || d.type === filter;
    const textMatch = !q || d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q) || d.attractions.toLowerCase().includes(q);
    return typeMatch && textMatch;
  });

  grid.innerHTML = list.map((d) => `
    <div class="col-sm-6 col-lg-3">
      <div class="card dest-card shadow-sm h-100">
        <img src="${escapeHtml(d.img)}" alt="${escapeHtml(d.name)}" class="card-img-top-fixed" loading="lazy" />
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="badge ${d.type === "domestic" ? "text-bg-success" : "text-bg-info"} text-uppercase">${d.type}</span>
            <small class="text-muted">${escapeHtml(d.country)}</small>
          </div>
          <h5 class="card-title fw-bold mb-1">${escapeHtml(d.name)}</h5>
          <p class="small text-muted mb-2">${escapeHtml(d.desc)}</p>
          <div class="small mb-2"><strong>Best time:</strong> ${escapeHtml(d.bestTime)}</div>
          <div class="small text-muted mb-3"><strong>Top spots:</strong> ${escapeHtml(d.attractions)}</div>
          <button class="btn btn-outline-primary btn-sm mt-auto" onclick="filterPackagesByDestination('${escapeHtml(d.name)}')">
            View Packages
          </button>
        </div>
      </div>
    </div>
  `).join("") || `<div class="col-12"><p class="text-muted">No destinations matched your filter.</p></div>`;
}

function populateDestinationFilter() {
  const select = document.getElementById("pkgDestFilter");
  const current = select.value;
  select.innerHTML = `<option value="all">All Destinations</option>` +
    state.destinations.map((d) => `<option value="${escapeHtml(d.name)}">${escapeHtml(d.name)}</option>`).join("");
  select.value = current || "all";
}

function renderPackages(searchQuery = "") {
  const grid = document.getElementById("packagesGrid");
  const dest = document.getElementById("pkgDestFilter").value;
  const type = document.getElementById("pkgTypeFilter").value;
  const cat = document.getElementById("pkgCategoryFilter").value;
  const dur = document.getElementById("pkgDurationFilter").value;
  const budget = document.getElementById("pkgBudgetFilter").value;
  const q = searchQuery.trim().toLowerCase();

  const filtered = state.packages.filter((p) => {
    if (dest !== "all" && p.destination !== dest) return false;
    if (type !== "all" && p.type !== type) return false;
    if (cat !== "all" && p.category !== cat) return false;
    if (dur === "short" && p.nights > 4) return false;
    if (dur === "medium" && (p.nights < 5 || p.nights > 6)) return false;
    if (dur === "long" && p.nights < 7) return false;
    if (budget !== "all" && p.price > Number(budget)) return false;
    if (q && !p.title.toLowerCase().includes(q) && !p.destination.toLowerCase().includes(q)) return false;
    return true;
  });

  grid.innerHTML = filtered.map((p) => {
    const saved = state.wishlist.includes(p.id);
    const compared = state.compareIds.includes(p.id);
    return `
      <div class="col-md-6 col-lg-4">
        <div class="card pkg-card shadow-sm h-100">
          <img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.title)}" class="card-img-top-fixed" loading="lazy" />
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge text-bg-light border text-dark text-capitalize">${escapeHtml(p.category)}</span>
              <span class="small text-muted">${p.days}D / ${p.nights}N • ${p.slots} slots</span>
            </div>
            <h5 class="card-title fw-bold">${escapeHtml(p.title)}</h5>
            <p class="text-muted small mb-2"><i class="bi bi-geo-alt me-1"></i>${escapeHtml(p.destination)} (${escapeHtml(p.type)})</p>
            <div class="small mb-1"><strong>Hotel:</strong> ${escapeHtml(p.hotel)}</div>
            <div class="small mb-1"><strong>Transport & Meals:</strong> ${escapeHtml(p.transport)} • ${escapeHtml(p.food)}</div>
            <div class="small text-muted mb-3"><strong>Sightseeing:</strong> ${escapeHtml(p.sightseeing)}</div>
            <div class="d-flex justify-content-between align-items-center mt-auto pt-2 border-top">
              <div>
                <div class="small text-muted">Starting from</div>
                <div class="fs-5 fw-bold text-primary">${formatINR(p.price)} <span class="fs-6 fw-normal text-muted">/ person</span></div>
              </div>
              <div class="d-flex gap-1">
                <button class="btn btn-sm ${saved ? "btn-danger" : "btn-outline-danger"}" title="Wishlist" onclick="toggleWishlist(${p.id})">
                  <i class="bi ${saved ? "bi-heart-fill" : "bi-heart"}"></i>
                </button>
                <button class="btn btn-sm ${compared ? "btn-dark" : "btn-outline-dark"}" title="Compare" onclick="toggleCompare(${p.id})">
                  <i class="bi bi-plus-slash-minus"></i>
                </button>
                <button class="btn btn-sm btn-primary" onclick="openPackageDetail(${p.id})">Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("") || `<div class="col-12"><p class="text-muted">No holiday packages match these filters.</p></div>`;

  document.getElementById("compareCount").textContent = state.compareIds.length;
}

function renderOffers() {
  const grid = document.getElementById("offersGrid");
  grid.innerHTML = state.offers.map((o) => `
    <div class="col-md-6">
      <div class="bg-white p-4 shadow-sm offer-banner h-100">
        <div class="d-flex justify-content-between align-items-start">
          <h5 class="fw-bold mb-1">${escapeHtml(o.title)}</h5>
          <span class="badge text-bg-primary fs-6">${escapeHtml(o.code)}</span>
        </div>
        <p class="text-muted small mb-2">${escapeHtml(o.desc)}</p>
        <div class="small text-secondary">Min booking: ${formatINR(o.minAmount)} • Valid until ${escapeHtml(o.validUntil)}</div>
      </div>
    </div>
  `).join("");
}

function filterPackagesByDestination(destName) {
  document.getElementById("pkgDestFilter").value = destName;
  renderPackages();
  document.getElementById("packages").scrollIntoView({ behavior: "smooth" });
}

function toggleWishlist(pkgId) {
  if (state.wishlist.includes(pkgId)) {
    state.wishlist = state.wishlist.filter((id) => id !== pkgId);
  } else {
    state.wishlist.push(pkgId);
  }
  saveState(state);
  renderPackages();
}

function toggleCompare(pkgId) {
  if (state.compareIds.includes(pkgId)) {
    state.compareIds = state.compareIds.filter((id) => id !== pkgId);
  } else {
    if (state.compareIds.length >= 3) {
      alert("You can compare up to 3 packages at a time.");
      return;
    }
    state.compareIds.push(pkgId);
  }
  saveState(state);
  renderPackages();
}

function renderComparison() {
  const body = document.getElementById("compareBody");
  const pkgs = state.packages.filter((p) => state.compareIds.includes(p.id));
  if (!pkgs.length) {
    body.innerHTML = `<p class="text-muted mb-0">Select up to 3 packages using the compare button on package cards to compare them here.</p>`;
    return;
  }
  body.innerHTML = `
    <div class="table-responsive">
      <table class="table table-bordered align-middle">
        <thead class="table-light">
          <tr>
            <th>Feature</th>
            ${pkgs.map((p) => `<th>${escapeHtml(p.title)}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Photo</strong></td>${pkgs.map((p) => `<td><img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.title)}" style="width:120px;height:75px;object-fit:cover;border-radius:8px;" /></td>`).join("")}</tr>
          <tr><td><strong>Destination</strong></td>${pkgs.map((p) => `<td>${escapeHtml(p.destination)} (${escapeHtml(p.type)})</td>`).join("")}</tr>
          <tr><td><strong>Duration</strong></td>${pkgs.map((p) => `<td>${p.days} Days / ${p.nights} Nights</td>`).join("")}</tr>
          <tr><td><strong>Price / Person</strong></td>${pkgs.map((p) => `<td class="fw-bold text-primary">${formatINR(p.price)}</td>`).join("")}</tr>
          <tr><td><strong>Hotel</strong></td>${pkgs.map((p) => `<td>${escapeHtml(p.hotel)}</td>`).join("")}</tr>
          <tr><td><strong>Transport</strong></td>${pkgs.map((p) => `<td>${escapeHtml(p.transport)}</td>`).join("")}</tr>
          <tr><td><strong>Food</strong></td>${pkgs.map((p) => `<td>${escapeHtml(p.food)}</td>`).join("")}</tr>
          <tr><td><strong>Action</strong></td>${pkgs.map((p) => `<td><button class="btn btn-sm btn-primary" data-bs-dismiss="modal" onclick="openBookingModal(${p.id})">Book Now</button></td>`).join("")}</tr>
        </tbody>
      </table>
    </div>
  `;
}

function openPackageDetail(pkgId) {
  const pkg = state.packages.find((p) => p.id === pkgId);
  if (!pkg) return;
  document.getElementById("pkgModalTitle").textContent = pkg.title;
  document.getElementById("pkgModalBody").innerHTML = `
    <img src="${escapeHtml(pkg.img)}" alt="${escapeHtml(pkg.title)}" class="w-100 rounded-3 mb-3" style="max-height:280px;object-fit:cover;" />
    <div class="row g-2 mb-3">
      <div class="col-sm-4"><strong>Destination:</strong> ${escapeHtml(pkg.destination)}</div>
      <div class="col-sm-4"><strong>Duration:</strong> ${pkg.days}D / ${pkg.nights}N</div>
      <div class="col-sm-4"><strong>Price:</strong> ${formatINR(pkg.price)} / person</div>
    </div>
    <p><strong>Hotel Accommodation:</strong> ${escapeHtml(pkg.hotel)}</p>
    <p><strong>Transportation:</strong> ${escapeHtml(pkg.transport)}</p>
    <p><strong>Food & Dining:</strong> ${escapeHtml(pkg.food)}</p>
    <p><strong>Sightseeing:</strong> ${escapeHtml(pkg.sightseeing)}</p>
    <p><strong>Inclusions:</strong> ${escapeHtml(pkg.inclusions)}</p>
    <p><strong>Exclusions:</strong> ${escapeHtml(pkg.exclusions)}</p>
    <p><strong>Travel Itinerary:</strong> ${escapeHtml(pkg.itinerary)}</p>
    <p class="small text-muted mb-0"><strong>Terms & Conditions:</strong> ${escapeHtml(pkg.terms)}</p>
  `;
  const bookBtn = document.getElementById("pkgModalBookBtn");
  bookBtn.onclick = () => {
    bootstrap.Modal.getInstance(document.getElementById("packageDetailModal")).hide();
    openBookingModal(pkg.id);
  };
  new bootstrap.Modal(document.getElementById("packageDetailModal")).show();
}

function renderPaymentMethodExtraField() {
  const method = document.getElementById("bookPaymentMethod").value;
  const wrap = document.getElementById("paymentMethodExtraField");
  if (method === "upi") {
    wrap.innerHTML = `<label class="form-label">UPI ID (Demo)</label><input type="text" id="payUpiId" class="form-control" placeholder="traveller@upi" />`;
  } else if (method === "net_banking") {
    wrap.innerHTML = `
      <label class="form-label">Select Bank (Demo)</label>
      <select id="payBank" class="form-select">
        <option>HDFC Bank</option>
        <option>ICICI Bank</option>
        <option>State Bank of India</option>
        <option>Axis Bank</option>
      </select>
    `;
  } else {
    wrap.innerHTML = `<label class="form-label">Demo Card Reference (Last 4 Digits Optional — Not Stored)</label><input type="text" id="payCardRef" class="form-control" maxlength="4" placeholder="e.g. 4242" />`;
  }
}

document.querySelectorAll(".pay-method-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pay-method-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("bookPaymentMethod").value = btn.dataset.method;
    renderPaymentMethodExtraField();
  });
});

function openBookingModal(selectedPkgId = null) {
  const select = document.getElementById("bookPackageSelect");
  select.innerHTML = state.packages.map((p) => `<option value="${p.id}">${escapeHtml(p.title)} (${formatINR(p.price)}/person)</option>`).join("");
  if (selectedPkgId) select.value = String(selectedPkgId);

  if (state.currentUser) {
    document.getElementById("bookName").value = state.currentUser.name || "";
    document.getElementById("bookEmail").value = state.currentUser.email || "";
    document.getElementById("bookPhone").value = state.currentUser.phone || "";
  }

  const dateInput = document.getElementById("bookDate");
  if (!dateInput.value) {
    const nextWeek = new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0];
    dateInput.value = nextWeek;
  }
  activeCoupon = null;
  document.getElementById("bookCoupon").value = "";
  document.getElementById("bookingConfirmation").innerHTML = "";
  renderPaymentMethodExtraField();
  updateBookingSummary();
  new bootstrap.Modal(document.getElementById("bookingModal")).show();
}

function calculateBookingAmounts() {
  const pkgId = Number(document.getElementById("bookPackageSelect").value);
  const travellers = Math.max(1, Number(document.getElementById("bookTravellers").value || 1));
  const settlement = document.getElementById("bookSettlementPlan").value;
  const pkg = state.packages.find((p) => p.id === pkgId) || state.packages[0];
  const baseTotal = pkg.price * travellers;
  let discount = 0;

  if (activeCoupon && baseTotal >= activeCoupon.minAmount) {
    if (activeCoupon.discountPct) discount = Math.round((baseTotal * activeCoupon.discountPct) / 100);
    if (activeCoupon.discountFlat) discount = Math.min(baseTotal, activeCoupon.discountFlat);
  }

  const finalTotal = Math.max(0, baseTotal - discount);
  const payableNow = settlement === "advance" ? Math.round(finalTotal * 0.25) : finalTotal;
  const balanceDue = Math.max(0, finalTotal - payableNow);
  return { pkg, travellers, baseTotal, discount, finalTotal, payableNow, balanceDue, settlement };
}

function updateBookingSummary() {
  const c = calculateBookingAmounts();
  document.getElementById("bookingSummaryBox").innerHTML = `
    <div class="d-flex justify-content-between"><span>Package Fare (${c.travellers} travellers)</span><strong>${formatINR(c.baseTotal)}</strong></div>
    <div class="d-flex justify-content-between text-success"><span>Coupon Discount</span><strong>- ${formatINR(c.discount)}</strong></div>
    <hr class="my-2" />
    <div class="d-flex justify-content-between fs-6"><span>Total Package Cost</span><strong>${formatINR(c.finalTotal)}</strong></div>
    <div class="d-flex justify-content-between text-primary"><span>Payable Now (Demo)</span><strong>${formatINR(c.payableNow)}</strong></div>
    <div class="d-flex justify-content-between text-muted small"><span>Remaining Balance</span><span>${formatINR(c.balanceDue)}</span></div>
  `;
}

document.getElementById("applyCouponBtn").addEventListener("click", () => {
  const code = document.getElementById("bookCoupon").value.trim().toUpperCase();
  const offer = state.offers.find((o) => o.code.toUpperCase() === code);
  if (!offer) {
    activeCoupon = null;
    alert("Invalid coupon code.");
  } else {
    activeCoupon = offer;
  }
  updateBookingSummary();
});

["bookPackageSelect", "bookTravellers", "bookSettlementPlan"].forEach((id) => {
  document.getElementById(id).addEventListener("change", updateBookingSummary);
  document.getElementById(id).addEventListener("input", updateBookingSummary);
});

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const c = calculateBookingAmounts();
  const method = document.getElementById("bookPaymentMethod").value;
  const ref = "TNH-" + Math.floor(100000 + Math.random() * 900000);
  const txn = "TXN-DEMO-" + Date.now().toString().slice(-6);
  const booking = {
    ref,
    txn,
    userId: state.currentUser ? state.currentUser.id : null,
    packageTitle: c.pkg.title,
    destination: c.pkg.destination,
    travelDate: document.getElementById("bookDate").value,
    travellers: c.travellers,
    customerName: document.getElementById("bookName").value.trim(),
    email: document.getElementById("bookEmail").value.trim(),
    phone: document.getElementById("bookPhone").value.trim(),
    totalAmount: c.finalTotal,
    paidAmount: c.payableNow,
    balanceDue: c.balanceDue,
    paymentMode: `${c.settlement.toUpperCase()} (${method.toUpperCase()})`,
    status: "confirmed",
    createdAt: new Date().toISOString().split("T")[0]
  };
  state.bookings.unshift(booking);
  saveState(state);

  document.getElementById("bookingConfirmation").innerHTML = `
    <div class="alert alert-success">
      <h6 class="fw-bold mb-1">Booking Confirmed (Simulated Demo Payment)</h6>
      <div class="small">Booking Ref: <strong>${booking.ref}</strong> • Transaction Ref: <strong>${booking.txn}</strong></div>
      <div class="small">Method: <strong>${escapeHtml(booking.paymentMode)}</strong> • Paid: <strong>${formatINR(booking.paidAmount)}</strong> • Balance Due: <strong>${formatINR(booking.balanceDue)}</strong></div>
      <button type="button" class="btn btn-sm btn-outline-dark mt-2" onclick="printBookingReceipt('${booking.ref}')">
        <i class="bi bi-printer me-1"></i>Print / Save Receipt
      </button>
    </div>
  `;
});

function printBookingReceipt(ref) {
  const b = state.bookings.find((item) => item.ref === ref);
  if (!b) return;
  const win = window.open("", "_blank", "width=700,height=600");
  win.document.write(`
    <html><head><title>Receipt ${escapeHtml(b.ref)}</title>
    <style>body{font-family:system-ui,sans-serif;padding:28px;color:#0f172a;} .box{border:1px solid #cbd5e1;border-radius:10px;padding:20px;}</style></head>
    <body>
      <div class="box">
        <h2>TRIPNEST HOLIDAYS — Demo Booking Receipt</h2>
        <p><strong>Booking Ref:</strong> ${escapeHtml(b.ref)} | <strong>Txn Ref:</strong> ${escapeHtml(b.txn)}</p>
        <p><strong>Guest:</strong> ${escapeHtml(b.customerName)} (${escapeHtml(b.email)}, ${escapeHtml(b.phone)})</p>
        <p><strong>Package:</strong> ${escapeHtml(b.packageTitle)} (${escapeHtml(b.destination)})</p>
        <p><strong>Travel Date:</strong> ${escapeHtml(b.travelDate)} | <strong>Travellers:</strong> ${b.travellers}</p>
        <p><strong>Payment Mode:</strong> ${escapeHtml(b.paymentMode)} | <strong>Status:</strong> ${escapeHtml(b.status)}</p>
        <hr/>
        <p><strong>Total Cost:</strong> ${formatINR(b.totalAmount)}</p>
        <p><strong>Paid Now (Demo):</strong> ${formatINR(b.paidAmount)}</p>
        <p><strong>Remaining Balance:</strong> ${formatINR(b.balanceDue)}</p>
      </div>
      <script>window.print();<\/script>
    </body></html>
  `);
  win.document.close();
}

document.getElementById("heroSearchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const q = document.getElementById("searchQuery").value;
  const type = document.getElementById("searchType").value;
  renderDestinations(type, q);
  renderPackages(q);
  document.getElementById("packages").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".dest-filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".dest-filter-btn").forEach((b) => {
      b.classList.remove("active", "btn-primary");
      b.classList.add("btn-outline-primary");
    });
    btn.classList.add("active", "btn-primary");
    btn.classList.remove("btn-outline-primary");
    renderDestinations(btn.dataset.filter, document.getElementById("searchQuery").value);
  });
});

["pkgDestFilter", "pkgTypeFilter", "pkgCategoryFilter", "pkgDurationFilter", "pkgBudgetFilter"].forEach((id) => {
  document.getElementById(id).addEventListener("change", () => renderPackages());
});

document.getElementById("resetPkgFilters").addEventListener("click", () => {
  ["pkgDestFilter", "pkgTypeFilter", "pkgCategoryFilter", "pkgDurationFilter", "pkgBudgetFilter"].forEach((id) => {
    document.getElementById(id).value = "all";
  });
  document.getElementById("searchQuery").value = "";
  renderPackages();
});

document.getElementById("enquiryForm").addEventListener("submit", (e) => {
  e.preventDefault();
  state.enquiries.unshift({
    id: Date.now(),
    name: document.getElementById("enqName").value.trim(),
    email: document.getElementById("enqEmail").value.trim(),
    phone: document.getElementById("enqPhone").value.trim(),
    subject: document.getElementById("enqSubject").value.trim(),
    message: document.getElementById("enqMessage").value.trim(),
    status: "open"
  });
  saveState(state);
  e.target.reset();
  alert("Thank you! Your enquiry has been recorded for TRIPNEST HOLIDAYS.");
});

document.getElementById("customerModal").addEventListener("show.bs.modal", () => {
  const wishPkgs = state.packages.filter((p) => state.wishlist.includes(p.id));
  const accountBanner = state.currentUser
    ? `<div class="alert alert-light border d-flex justify-content-between align-items-center mb-3">
         <div>Signed in as <strong>${escapeHtml(state.currentUser.name)}</strong> (${escapeHtml(state.currentUser.email)})</div>
         <button class="btn btn-sm btn-outline-secondary" onclick="logoutUser()">Logout</button>
       </div>`
    : `<div class="alert alert-warning d-flex justify-content-between align-items-center mb-3">
         <span class="small">You are viewing local guest bookings. Go to Login to sign in.</span>
         <a href="#login-page" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Go to Login</a>
       </div>`;

  document.getElementById("customerDashboardBody").innerHTML = `
    ${accountBanner}
    <h6 class="fw-bold mb-3">My Bookings & Payment History</h6>
    <div class="table-responsive mb-4">
      <table class="table table-bordered table-sm align-middle">
        <thead class="table-light">
          <tr><th>Ref</th><th>Package</th><th>Date</th><th>Travellers</th><th>Mode</th><th>Total</th><th>Paid</th><th>Balance</th><th>Receipt</th></tr>
        </thead>
        <tbody>
          ${state.bookings.map((b) => `
            <tr>
              <td><strong>${escapeHtml(b.ref)}</strong></td>
              <td>${escapeHtml(b.packageTitle)}</td>
              <td>${escapeHtml(b.travelDate)}</td>
              <td>${b.travellers}</td>
              <td class="small">${escapeHtml(b.paymentMode)}</td>
              <td>${formatINR(b.totalAmount)}</td>
              <td>${formatINR(b.paidAmount)}</td>
              <td>${formatINR(b.balanceDue)}</td>
              <td><button class="btn btn-outline-dark btn-sm py-0" onclick="printBookingReceipt('${escapeHtml(b.ref)}')">Print</button></td>
            </tr>
          `).join("") || `<tr><td colspan="9" class="text-muted">No bookings yet.</td></tr>`}
        </tbody>
      </table>
    </div>
    <h6 class="fw-bold mb-2">Saved Wishlist Packages (${wishPkgs.length})</h6>
    <div class="row g-2">
      ${wishPkgs.map((p) => `
        <div class="col-md-4">
          <div class="border rounded-3 p-3 d-flex gap-3 align-items-center">
            <img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.title)}" style="width:64px;height:64px;object-fit:cover;border-radius:8px;" />
            <div>
              <div class="fw-bold small">${escapeHtml(p.title)}</div>
              <div class="small text-muted">${escapeHtml(p.destination)} • ${formatINR(p.price)}</div>
            </div>
          </div>
        </div>
      `).join("") || `<p class="text-muted small">No packages in wishlist yet.</p>`}
    </div>
  `;
});

function readFileAsDataUrl(file, callback) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => callback(String(reader.result || ""));
  reader.readAsDataURL(file);
}

document.getElementById("adminModal").addEventListener("show.bs.modal", () => {
  uploadedPkgImageDataUrl = "";
  uploadedEditPkgImageDataUrl = "";
  renderAdmin();
});

function renderAdmin() {
  const revenue = state.bookings.reduce((sum, b) => sum + Number(b.paidAmount || 0), 0);
  document.getElementById("adminDashboardBody").innerHTML = `
    <div class="row g-3 mb-4">
      <div class="col-sm-6 col-lg-3"><div class="stat-card"><div class="small text-muted">Total Destinations</div><div class="fs-4 fw-bold">${state.destinations.length}</div></div></div>
      <div class="col-sm-6 col-lg-3"><div class="stat-card"><div class="small text-muted">Active Packages</div><div class="fs-4 fw-bold">${state.packages.length}</div></div></div>
      <div class="col-sm-6 col-lg-3"><div class="stat-card"><div class="small text-muted">Total Bookings</div><div class="fs-4 fw-bold">${state.bookings.length}</div></div></div>
      <div class="col-sm-6 col-lg-3"><div class="stat-card"><div class="small text-muted">Collected (Demo)</div><div class="fs-4 fw-bold text-success">${formatINR(revenue)}</div></div></div>
    </div>

    <div class="row g-4">
      <div class="col-lg-6">
        <div class="bg-white p-4 rounded-4 shadow-sm mb-4">
          <h6 class="fw-bold mb-3">Add New Holiday Package (With Picture & Full Info)</h6>
          <form id="adminAddPkgForm" class="row g-2">
            <div class="col-md-8"><input type="text" id="admPkgTitle" class="form-control form-control-sm" placeholder="Package Title *" required /></div>
            <div class="col-md-4">
              <select id="admPkgCategory" class="form-select form-select-sm">
                <option value="family">Family</option>
                <option value="honeymoon">Honeymoon</option>
                <option value="adventure">Adventure</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>
            <div class="col-md-6"><input type="text" id="admPkgDest" class="form-control form-control-sm" placeholder="Destination (e.g. Goa) *" required /></div>
            <div class="col-md-6">
              <select id="admPkgType" class="form-select form-select-sm">
                <option value="domestic">Domestic</option>
                <option value="international">International</option>
              </select>
            </div>
            <div class="col-md-4"><input type="number" id="admPkgPrice" class="form-control form-control-sm" placeholder="Price ₹ *" required /></div>
            <div class="col-md-4"><input type="number" id="admPkgDays" class="form-control form-control-sm" placeholder="Days *" value="5" required /></div>
            <div class="col-md-4"><input type="number" id="admPkgNights" class="form-control form-control-sm" placeholder="Nights *" value="4" required /></div>

            <div class="col-md-6"><input type="url" id="admPkgImgUrl" class="form-control form-control-sm" placeholder="Picture URL (https://...)" /></div>
            <div class="col-md-6"><input type="file" id="admPkgImgFile" class="form-control form-control-sm" accept="image/*" /></div>
            <div class="col-12" id="admNewImgPreviewWrap"></div>

            <div class="col-12"><input type="text" id="admPkgHotel" class="form-control form-control-sm" placeholder="Hotel Accommodation *" required /></div>
            <div class="col-md-6"><input type="text" id="admPkgTransport" class="form-control form-control-sm" placeholder="Transportation Facilities" value="Private Transfers Included" /></div>
            <div class="col-md-6"><input type="text" id="admPkgFood" class="form-control form-control-sm" placeholder="Food Facilities" value="Daily Breakfast" /></div>
            <div class="col-12"><input type="text" id="admPkgSightseeing" class="form-control form-control-sm" placeholder="Sightseeing Highlights" value="Guided Sightseeing Tours" /></div>
            <div class="col-md-6"><textarea id="admPkgInclusions" rows="2" class="form-control form-control-sm" placeholder="Package Inclusions">Stay, transfers, and sightseeing as per plan.</textarea></div>
            <div class="col-md-6"><textarea id="admPkgExclusions" rows="2" class="form-control form-control-sm" placeholder="Package Exclusions">Personal expenses, tips, and optional tickets.</textarea></div>
            <div class="col-12"><textarea id="admPkgItinerary" rows="2" class="form-control form-control-sm" placeholder="Day-wise Travel Itinerary">Day 1: Arrival & Check-in | Day 2: Sightseeing | Day 3: Departure</textarea></div>
            <div class="col-12"><input type="text" id="admPkgTerms" class="form-control form-control-sm" placeholder="Terms & Conditions" value="Subject to availability and valid travel ID." /></div>
            <div class="col-12"><button type="submit" class="btn btn-primary btn-sm w-100 fw-semibold">Add Package</button></div>
          </form>
        </div>

        <div class="bg-white p-4 rounded-4 shadow-sm" id="adminEditPkgPanel">
          <p class="text-muted small mb-0">Click <strong>Edit</strong> on any package to update its picture, price, hotel, itinerary, or inclusions.</p>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="bg-white p-4 rounded-4 shadow-sm mb-4">
          <h6 class="fw-bold mb-3">Manage Packages (${state.packages.length})</h6>
          <div class="table-responsive">
            <table class="table table-sm align-middle">
              <thead><tr><th>Pic</th><th>Package</th><th>Price</th><th>Actions</th></tr></thead>
              <tbody>
                ${state.packages.map((p) => `
                  <tr>
                    <td><img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.title)}" style="width:52px;height:38px;object-fit:cover;border-radius:6px;" /></td>
                    <td>
                      <div class="fw-semibold small">${escapeHtml(p.title)}</div>
                      <div class="text-muted" style="font-size:0.75rem;">${escapeHtml(p.destination)} • ${p.days}D/${p.nights}N</div>
                    </td>
                    <td class="small fw-semibold">${formatINR(p.price)}</td>
                    <td class="text-nowrap">
                      <button class="btn btn-outline-primary btn-sm py-0 px-2" onclick="openEditPackageForm(${p.id})">Edit</button>
                      <button class="btn btn-outline-danger btn-sm py-0 px-2" onclick="adminDeletePkg(${p.id})">Delete</button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <div class="bg-white p-4 rounded-4 shadow-sm">
          <h6 class="fw-bold mb-3">Customer Enquiries (${state.enquiries.length})</h6>
          ${state.enquiries.map((enq) => `
            <div class="border rounded-3 p-2 mb-2 small">
              <strong>${escapeHtml(enq.subject)}</strong> — ${escapeHtml(enq.name)} (${escapeHtml(enq.email)})
              <div class="text-muted">${escapeHtml(enq.message)}</div>
            </div>
          `).join("") || `<p class="text-muted small mb-0">No enquiries submitted yet.</p>`}
        </div>
      </div>
    </div>
  `;

  const updateNewPreview = (src) => {
    document.getElementById("admNewImgPreviewWrap").innerHTML = src
      ? `<img src="${escapeHtml(src)}" alt="Preview" class="pkg-img-preview mt-1" />`
      : "";
  };

  document.getElementById("admPkgImgUrl").addEventListener("input", (e) => {
    uploadedPkgImageDataUrl = "";
    updateNewPreview(e.target.value.trim());
  });

  document.getElementById("admPkgImgFile").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    readFileAsDataUrl(file, (dataUrl) => {
      uploadedPkgImageDataUrl = dataUrl;
      updateNewPreview(dataUrl);
    });
  });

  document.getElementById("adminAddPkgForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const urlInput = document.getElementById("admPkgImgUrl").value.trim();
    const chosenImg = uploadedPkgImageDataUrl || urlInput || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80";

    const newPkg = {
      id: Date.now(),
      title: document.getElementById("admPkgTitle").value.trim(),
      destination: document.getElementById("admPkgDest").value.trim(),
      type: document.getElementById("admPkgType").value,
      category: document.getElementById("admPkgCategory").value,
      price: Number(document.getElementById("admPkgPrice").value),
      days: Number(document.getElementById("admPkgDays").value),
      nights: Number(document.getElementById("admPkgNights").value),
      slots: 15,
      hotel: document.getElementById("admPkgHotel").value.trim(),
      transport: document.getElementById("admPkgTransport").value.trim() || "Included Transfers",
      food: document.getElementById("admPkgFood").value.trim() || "Daily Breakfast",
      sightseeing: document.getElementById("admPkgSightseeing").value.trim() || "Guided Sightseeing",
      inclusions: document.getElementById("admPkgInclusions").value.trim() || "Standard inclusions.",
      exclusions: document.getElementById("admPkgExclusions").value.trim() || "Standard exclusions.",
      itinerary: document.getElementById("admPkgItinerary").value.trim() || "Custom itinerary.",
      terms: document.getElementById("admPkgTerms").value.trim() || "Standard terms apply.",
      img: chosenImg
    };
    state.packages.unshift(newPkg);
    saveState(state);
    uploadedPkgImageDataUrl = "";
    populateDestinationFilter();
    renderPackages();
    renderAdmin();
  });
}

function openEditPackageForm(pkgId) {
  const pkg = state.packages.find((p) => p.id === pkgId);
  if (!pkg) return;
  uploadedEditPkgImageDataUrl = "";

  const panel = document.getElementById("adminEditPkgPanel");
  panel.innerHTML = `
    <h6 class="fw-bold mb-3">Edit Package: ${escapeHtml(pkg.title)}</h6>
    <form id="adminEditPkgForm" class="row g-2">
      <div class="col-md-8"><input type="text" id="editPkgTitle" class="form-control form-control-sm" value="${escapeHtml(pkg.title)}" required /></div>
      <div class="col-md-4"><input type="number" id="editPkgPrice" class="form-control form-control-sm" value="${pkg.price}" required /></div>
      <div class="col-md-6"><input type="url" id="editPkgImgUrl" class="form-control form-control-sm" value="${pkg.img.startsWith("data:") ? "" : escapeHtml(pkg.img)}" placeholder="New Image URL" /></div>
      <div class="col-md-6"><input type="file" id="editPkgImgFile" class="form-control form-control-sm" accept="image/*" /></div>
      <div class="col-12" id="editPkgImgPreview"><img src="${escapeHtml(pkg.img)}" alt="Current" class="pkg-img-preview mt-1" /></div>
      <div class="col-12"><input type="text" id="editPkgHotel" class="form-control form-control-sm" value="${escapeHtml(pkg.hotel)}" placeholder="Hotel" required /></div>
      <div class="col-md-6"><input type="text" id="editPkgTransport" class="form-control form-control-sm" value="${escapeHtml(pkg.transport)}" placeholder="Transport" /></div>
      <div class="col-md-6"><input type="text" id="editPkgFood" class="form-control form-control-sm" value="${escapeHtml(pkg.food)}" placeholder="Food" /></div>
      <div class="col-12"><input type="text" id="editPkgSightseeing" class="form-control form-control-sm" value="${escapeHtml(pkg.sightseeing)}" placeholder="Sightseeing" /></div>
      <div class="col-md-6"><textarea id="editPkgInclusions" rows="2" class="form-control form-control-sm" placeholder="Inclusions">${escapeHtml(pkg.inclusions)}</textarea></div>
      <div class="col-md-6"><textarea id="editPkgExclusions" rows="2" class="form-control form-control-sm" placeholder="Exclusions">${escapeHtml(pkg.exclusions)}</textarea></div>
      <div class="col-12"><textarea id="editPkgItinerary" rows="2" class="form-control form-control-sm" placeholder="Itinerary">${escapeHtml(pkg.itinerary)}</textarea></div>
      <div class="col-12 d-flex gap-2">
        <button type="submit" class="btn btn-success btn-sm flex-grow-1 fw-semibold">Save Changes</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" onclick="renderAdmin()">Cancel</button>
      </div>
    </form>
  `;

  const setEditPreview = (src) => {
    document.getElementById("editPkgImgPreview").innerHTML = `<img src="${escapeHtml(src)}" alt="Preview" class="pkg-img-preview mt-1" />`;
  };

  document.getElementById("editPkgImgUrl").addEventListener("input", (e) => {
    uploadedEditPkgImageDataUrl = "";
    if (e.target.value.trim()) setEditPreview(e.target.value.trim());
  });

  document.getElementById("editPkgImgFile").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    readFileAsDataUrl(file, (dataUrl) => {
      uploadedEditPkgImageDataUrl = dataUrl;
      setEditPreview(dataUrl);
    });
  });

  document.getElementById("adminEditPkgForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const urlVal = document.getElementById("editPkgImgUrl").value.trim();
    pkg.title = document.getElementById("editPkgTitle").value.trim();
    pkg.price = Number(document.getElementById("editPkgPrice").value);
    pkg.img = uploadedEditPkgImageDataUrl || urlVal || pkg.img;
    pkg.hotel = document.getElementById("editPkgHotel").value.trim();
    pkg.transport = document.getElementById("editPkgTransport").value.trim();
    pkg.food = document.getElementById("editPkgFood").value.trim();
    pkg.sightseeing = document.getElementById("editPkgSightseeing").value.trim();
    pkg.inclusions = document.getElementById("editPkgInclusions").value.trim();
    pkg.exclusions = document.getElementById("editPkgExclusions").value.trim();
    pkg.itinerary = document.getElementById("editPkgItinerary").value.trim();

    saveState(state);
    renderPackages();
    renderAdmin();
  });
}

function adminDeletePkg(id) {
  state.packages = state.packages.filter((p) => p.id !== id);
  state.wishlist = state.wishlist.filter((w) => w !== id);
  state.compareIds = state.compareIds.filter((c) => c !== id);
  saveState(state);
  renderPackages();
  renderAdmin();
}

function openPolicy(key) {
  const pol = POLICIES[key];
  if (!pol) return;
  document.getElementById("policyTitle").textContent = pol.title;
  document.getElementById("policyBody").innerHTML = pol.body;
  new bootstrap.Modal(document.getElementById("policyModal")).show();
}

document.getElementById("yearSpan").textContent = new Date().getFullYear();
renderNavbarAuth();
renderLoginPageSection();
populateDestinationFilter();
renderDestinations();
renderPackages();
renderOffers();