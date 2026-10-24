/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'maintenance' | 'body' | 'electrical';
  categoryLabel: string;
  icon: string;
  summary: string;
  checklist: string[];
  turnaround: string;
  warranty: string;
  basePrice: {
    hatchback: number;
    sedanSuv: number;
    premiumSuv: number;
  };
}

const SERVICES: ServiceItem[] = [
  {
    id: 'periodic-maintenance',
    number: '01',
    title: 'Periodic Maintenance',
    category: 'maintenance',
    categoryLabel: 'Mechanical & Fluids',
    icon: 'fa-solid fa-oil-can',
    summary: 'Engine oil change, filter replacement, and 60-point mechanical & safety inspection.',
    checklist: [
      '100% synthetic or OEM-grade engine oil replacement',
      'Oil filter, air filter & cabin AC filter replacement',
      'Brake pad thickness, rotor & fluid level inspection',
      'Coolant, power steering & windshield washer top-up'
    ],
    turnaround: '3–4 Hours',
    warranty: '10,000 km / 6 Months',
    basePrice: { hatchback: 2499, sedanSuv: 3299, premiumSuv: 4499 }
  },
  {
    id: 'denting-painting',
    number: '02',
    title: 'Denting & Painting',
    category: 'body',
    categoryLabel: 'Bodyshop & Paint Booth',
    icon: 'fa-solid fa-spray-can-sparkles',
    summary: 'Scratch repair, computerized spectrophotometric color matching, and accidental bodywork restoration.',
    checklist: [
      'Grade-A Nippon / PPG primer & 2K clear coat finish',
      'Precision sheet-metal dent pulling & panel alignment',
      'Dust-free heated paint booth curing for factory gloss',
      'Rust-proof internal panel treatment & rubbing polish'
    ],
    turnaround: '24–48 Hours',
    warranty: '2 Years Paint Guarantee',
    basePrice: { hatchback: 2200, sedanSuv: 2600, premiumSuv: 3200 }
  },
  {
    id: 'car-detailing',
    number: '03',
    title: 'Car Detailing & Wash',
    category: 'body',
    categoryLabel: 'Aesthetics & Protection',
    icon: 'fa-solid fa-wand-magic-sparkles',
    summary: 'Deep interior dry-cleaning, high-pressure snow foam wash, Teflon & 9H ceramic coating.',
    checklist: [
      'pH-neutral snow foam wash & underbody pressure clean',
      'Interior roof, seat upholstery & carpet steam sanitization',
      '3-step paint correction, compounding & swirl removal',
      'Hydrophobic Teflon or 9H Ceramic Coating application'
    ],
    turnaround: '5–8 Hours',
    warranty: '1–3 Years Coating Protection',
    basePrice: { hatchback: 1499, sedanSuv: 1999, premiumSuv: 2699 }
  },
  {
    id: 'ac-service',
    number: '04',
    title: 'AC Service & Gas Refill',
    category: 'electrical',
    categoryLabel: 'Climate & Cooling',
    icon: 'fa-solid fa-snowflake',
    summary: 'Cooling coil cleaning, nitrogen pressure leak test, compressor oil & R134a refrigerant recharge.',
    checklist: [
      'Automatic AC recovery & R134a refrigerant gas recharge',
      'Cooling coil (evaporator) & condenser fin chemical flush',
      'High-pressure nitrogen leak test & valve core check',
      'Cabin vent sanitization & blower motor airflow test'
    ],
    turnaround: '2–3 Hours',
    warranty: 'Season Cooling Assurance',
    basePrice: { hatchback: 1299, sedanSuv: 1599, premiumSuv: 1999 }
  },
  {
    id: 'wheel-alignment',
    number: '05',
    title: 'Wheel Alignment & Balancing',
    category: 'maintenance',
    categoryLabel: 'Tyres & Suspension',
    icon: 'fa-solid fa-compact-disc',
    summary: '3D computerized laser alignment, precision weight balancing, tyre rotation & suspension check.',
    checklist: [
      '3D four-wheel laser camber, caster & toe calibration',
      'Computerized dynamic alloy & steel wheel weight balancing',
      'Diagonal tyre rotation & tread wear depth measurement',
      'Tie-rod, ball joint & shock absorber play inspection'
    ],
    turnaround: '45–60 Mins',
    warranty: '2,000 km Alignment Check',
    basePrice: { hatchback: 699, sedanSuv: 899, premiumSuv: 1099 }
  },
  {
    id: 'battery-diagnostic',
    number: '06',
    title: 'Battery & Electrical Diagnostic',
    category: 'electrical',
    categoryLabel: 'ECU & Electronics',
    icon: 'fa-solid fa-car-battery',
    summary: 'Full-system OBD-II computerized ECU scanning, alternator ripple test & battery health check.',
    checklist: [
      'Multi-brand OBD-II fault code scanning (Engine, ABS, Airbag)',
      'Digital CCA battery load test & terminal anti-corrosion coat',
      'Alternator charging voltage & starter motor draw analysis',
      'Sensor calibration, wiring harness & fuse box inspection'
    ],
    turnaround: '60–90 Mins',
    warranty: 'OEM Warranty on New Batteries',
    basePrice: { hatchback: 499, sedanSuv: 699, premiumSuv: 899 }
  }
];

const POPULAR_BRANDS = [
  'Maruti Suzuki Swift / Baleno',
  'Hyundai Creta / i20',
  'Tata Nexon / Punch',
  'Mahindra Scorpio-N / XUV700',
  'Toyota Innova Crysta / Fortuner',
  'Kia Seltos / Sonet',
  'Honda City / Amaze',
  'Volkswagen Taigun / Virtus'
];

function ServiceIllustration({ id }: { id: string }) {
  switch (id) {
    case 'periodic-maintenance':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Periodic Maintenance Engine Illustration">
          <rect width="400" height="220" fill="#121215" />
          <g opacity="0.18" stroke="#3F3F46" strokeWidth="1">
            <line x1="0" y1="55" x2="400" y2="55" />
            <line x1="0" y1="110" x2="400" y2="110" />
            <line x1="0" y1="165" x2="400" y2="165" />
            <line x1="100" y1="0" x2="100" y2="220" />
            <line x1="200" y1="0" x2="200" y2="220" />
            <line x1="300" y1="0" x2="300" y2="220" />
          </g>
          {/* Engine Block Silhouette */}
          <rect x="95" y="65" width="150" height="100" rx="8" fill="#18181B" stroke="#52525B" strokeWidth="2" />
          <rect x="110" y="48" width="120" height="20" rx="4" fill="#27272A" stroke="#71717A" strokeWidth="1.5" />
          {/* Cylinders */}
          <rect x="115" y="82" width="24" height="50" rx="3" fill="#09090B" stroke="#DC2626" strokeWidth="1.5" />
          <rect x="148" y="82" width="24" height="50" rx="3" fill="#09090B" stroke="#DC2626" strokeWidth="1.5" />
          <rect x="181" y="82" width="24" height="50" rx="3" fill="#09090B" stroke="#DC2626" strokeWidth="1.5" />
          <rect x="210" y="82" width="20" height="50" rx="3" fill="#09090B" stroke="#52525B" strokeWidth="1.5" />
          {/* Synthetic Oil Pour & Filter */}
          <circle cx="295" cy="115" r="38" fill="#18181B" stroke="#DC2626" strokeWidth="2" />
          <circle cx="295" cy="115" r="24" fill="#09090B" stroke="#71717A" strokeDasharray="4 4" strokeWidth="1.5" />
          <path d="M295 98C295 98 283 113 283 121C283 127.627 288.373 133 295 133C301.627 133 307 127.627 307 121C307 113 295 98 295 98Z" fill="#DC2626" />
          <text x="24" y="198" fill="#A1A1AA" fontSize="11" fontFamily="JetBrains Mono, monospace">SYNTHETIC 5W-30 · 60-PT CHECK</text>
        </svg>
      );
    case 'denting-painting':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Denting and Painting Illustration">
          <rect width="400" height="220" fill="#121215" />
          <g opacity="0.18" stroke="#3F3F46" strokeWidth="1">
            <line x1="0" y1="55" x2="400" y2="55" />
            <line x1="0" y1="110" x2="400" y2="110" />
            <line x1="0" y1="165" x2="400" y2="165" />
          </g>
          {/* Car Aerodynamic Profile */}
          <path d="M55 140L85 100L165 82L255 82L315 112L345 140H55Z" fill="#18181B" stroke="#71717A" strokeWidth="2" />
          <path d="M165 82L255 82L315 112L345 140H210V82Z" fill="#DC2626" fillOpacity="0.22" stroke="#DC2626" strokeWidth="2" />
          <circle cx="115" cy="142" r="22" fill="#09090B" stroke="#A1A1AA" strokeWidth="3" />
          <circle cx="285" cy="142" r="22" fill="#09090B" stroke="#DC2626" strokeWidth="3" />
          {/* Spray Cone Rays */}
          <path d="M335 48L245 88M335 48L275 115M335 48L220 75" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="338" cy="46" r="8" fill="#DC2626" />
          <text x="24" y="198" fill="#A1A1AA" fontSize="11" fontFamily="JetBrains Mono, monospace">2K BOOTH FINISH · SPECTRO MATCH</text>
        </svg>
      );
    case 'car-detailing':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Car Detailing and Ceramic Coating Illustration">
          <rect width="400" height="220" fill="#121215" />
          {/* Hood Shield & Hydrophobic Grid */}
          <path d="M120 50H280L315 155H85L120 50Z" fill="#18181B" stroke="#52525B" strokeWidth="2" />
          <path d="M200 50H280L315 155H200V50Z" fill="#DC2626" fillOpacity="0.16" stroke="#DC2626" strokeWidth="2" />
          {/* Gloss Reflection Lines */}
          <line x1="225" y1="68" x2="265" y2="138" stroke="#F4F4F5" strokeWidth="2" strokeLinecap="round" />
          <line x1="245" y1="68" x2="280" y2="128" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
          {/* Ceramic Shield Hexagon */}
          <polygon points="145,82 168,95 168,121 145,134 122,121 122,95" fill="#09090B" stroke="#DC2626" strokeWidth="2" />
          <text x="135" y="113" fill="#F4F4F5" fontSize="13" fontWeight="bold" fontFamily="JetBrains Mono, monospace">9H</text>
          <text x="24" y="198" fill="#A1A1AA" fontSize="11" fontFamily="JetBrains Mono, monospace">9H CERAMIC SHIELD · DEEP FOAM WASH</text>
        </svg>
      );
    case 'ac-service':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AC Service and Gas Refill Illustration">
          <rect width="400" height="220" fill="#121215" />
          {/* Dual Manifold Gauges */}
          <circle cx="145" cy="105" r="44" fill="#18181B" stroke="#52525B" strokeWidth="2.5" />
          <circle cx="145" cy="105" r="34" fill="#09090B" stroke="#3F3F46" strokeWidth="1" />
          <line x1="145" y1="105" x2="122" y2="82" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="255" cy="105" r="44" fill="#18181B" stroke="#DC2626" strokeWidth="2.5" />
          <circle cx="255" cy="105" r="34" fill="#09090B" stroke="#3F3F46" strokeWidth="1" />
          <line x1="255" y1="105" x2="278" y2="80" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
          <text x="126" y="128" fill="#A1A1AA" fontSize="10" fontFamily="JetBrains Mono, monospace">LOW PSI</text>
          <text x="234" y="128" fill="#F4F4F5" fontSize="10" fontFamily="JetBrains Mono, monospace">R134a GAS</text>
          <text x="24" y="198" fill="#A1A1AA" fontSize="11" fontFamily="JetBrains Mono, monospace">CABIN COOLING · LEAK TEST · REFILL</text>
        </svg>
      );
    case 'wheel-alignment':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3D Wheel Alignment and Balancing Illustration">
          <rect width="400" height="220" fill="#121215" />
          {/* Laser Grid Axis */}
          <line x1="60" y1="108" x2="340" y2="108" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="5 5" />
          <line x1="200" y1="35" x2="200" y2="175" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="5 5" />
          {/* Alloy Wheel Target */}
          <circle cx="200" cy="108" r="52" fill="#18181B" stroke="#71717A" strokeWidth="4" />
          <circle cx="200" cy="108" r="36" fill="#09090B" stroke="#DC2626" strokeWidth="2" />
          <circle cx="200" cy="108" r="10" fill="#DC2626" />
          <text x="268" y="68" fill="#F4F4F5" fontSize="11" fontFamily="JetBrains Mono, monospace">0.00° TOE</text>
          <text x="268" y="84" fill="#A1A1AA" fontSize="11" fontFamily="JetBrains Mono, monospace">-0.45° CAMBER</text>
          <text x="24" y="198" fill="#A1A1AA" fontSize="11" fontFamily="JetBrains Mono, monospace">3D LASER ALIGNMENT · BALANCING</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Battery and OBD Electrical Diagnostic Illustration">
          <rect width="400" height="220" fill="#121215" />
          {/* Battery & ECU Oscilloscope */}
          <rect x="85" y="62" width="115" height="86" rx="6" fill="#18181B" stroke="#71717A" strokeWidth="2" />
          <rect x="102" y="50" width="18" height="12" rx="2" fill="#71717A" />
          <rect x="165" y="50" width="18" height="12" rx="2" fill="#DC2626" />
          <path d="M138 84L126 106H142L134 128L156 102H140L148 84H138Z" fill="#DC2626" />
          {/* OBD Diagnostic Screen */}
          <rect x="220" y="62" width="105" height="86" rx="6" fill="#09090B" stroke="#DC2626" strokeWidth="2" />
          <polyline points="232,112 248,112 256,90 266,128 276,98 286,112 312,112" stroke="#DC2626" strokeWidth="2" fill="none" />
          <text x="234" y="82" fill="#F4F4F5" fontSize="10" fontFamily="JetBrains Mono, monospace">14.2V · ECU OK</text>
          <text x="24" y="198" fill="#A1A1AA" fontSize="11" fontFamily="JetBrains Mono, monospace">OBD-II ECU SCAN · BATTERY HEALTH</text>
        </svg>
      );
  }
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'maintenance' | 'body' | 'electrical'>('all');
  const [carSegment, setCarSegment] = useState<'hatchback' | 'sedanSuv' | 'premiumSuv'>('sedanSuv');

  // Booking Form State
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [carMakeModel, setCarMakeModel] = useState('Hyundai Creta / i20');
  const [selectedServiceId, setSelectedServiceId] = useState('periodic-maintenance');
  const [preferredDate, setPreferredDate] = useState('2026-10-25');
  const [pickupRequired, setPickupRequired] = useState(true);
  const [formError, setFormError] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState<{
    referenceId: string;
    name: string;
    phone: string;
    car: string;
    serviceTitle: string;
    estimatedCost: number;
    date: string;
    pickup: boolean;
  } | null>(null);

  // Emergency Dispatch Drawer State
  const [showEmergencyPanel, setShowEmergencyPanel] = useState(false);

  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return SERVICES;
    return SERVICES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  const currentService = useMemo(
    () => SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0],
    [selectedServiceId]
  );

  const estimatedPrice = currentService.basePrice[carSegment];

  const handleSelectServiceForBooking = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setBookingConfirmed(null);
    const el = document.getElementById('book-service');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    const trimmedName = customerName.trim();
    const cleanedPhone = phoneNumber.replace(/\D/g, '');

    if (trimmedName.length < 2) {
      setFormError('Please enter your full name so our service advisor can address your job card.');
      return;
    }
    if (cleanedPhone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile or WhatsApp number.');
      return;
    }
    if (!carMakeModel.trim()) {
      setFormError('Please specify your car make and model (e.g., Maruti Swift, Hyundai Creta).');
      return;
    }

    const refDigits = Math.floor(1000 + Math.random() * 9000);
    setBookingConfirmed({
      referenceId: `AMB-${refDigits}`,
      name: trimmedName,
      phone: cleanedPhone.slice(-10),
      car: carMakeModel.trim(),
      serviceTitle: currentService.title,
      estimatedCost: estimatedPrice,
      date: preferredDate,
      pickup: pickupRequired
    });
  };

  const getWhatsAppBookingUrl = () => {
    const text = bookingConfirmed
      ? `Hello Ambica Motors, I have generated Booking Ref ${bookingConfirmed.referenceId}.\nName: ${bookingConfirmed.name}\nPhone: ${bookingConfirmed.phone}\nCar: ${bookingConfirmed.car}\nService: ${bookingConfirmed.serviceTitle} (Est. ₹${bookingConfirmed.estimatedCost.toLocaleString('en-IN')})\nPreferred Date: ${bookingConfirmed.date}\nPickup in Palanpur: ${bookingConfirmed.pickup ? 'Yes (Free Doorstep Pickup)' : 'Workshop Drop-off'}`
      : `Hello Ambica Motors, I want to book ${currentService.title} for my ${carMakeModel || 'car'} in Palanpur.`;
    return `https://wa.me/919427392688?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      {/* 1. TOP BAR CONTRACT: Strictly 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-40 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="font-display text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-red-500"
          >
            Ambica Motors
          </a>

          {/* Zone 2: 5 concise single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300" aria-label="Main Navigation">
            <a href="#home" className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
              Home
            </a>
            <a href="#services" className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#why-us" className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
              Why Us
            </a>
            <a href="#book-service" className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
              Book Service
            </a>
            <a href="#contact" className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center shrink-0">
            <a
              href="tel:9427392688"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors whitespace-nowrap shrink-0 font-mono tabular-nums"
            >
              <i className="fa-solid fa-phone text-xs" aria-hidden="true"></i>
              <span>+91 94273 92688</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <section id="home" className="relative pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-zinc-800/80 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              {/* Left Column: Proposition & Dual CTAs */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Unboxed Regional & Contact Metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-400 mb-5 font-mono tabular-nums">
                    <span className="text-red-400 font-semibold">Ambica Motors — Multi-Brand Car Care</span>
                    <span aria-hidden="true">·</span>
                    <span>Palanpur, Gujarat</span>
                    <span aria-hidden="true">·</span>
                    <span>+91 94273 92688</span>
                  </div>

                  <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.35rem] font-bold tracking-tight text-white leading-[1.08] balance-text mb-6">
                    Palanpur&apos;s Most Trusted Multi-Brand Car Service &amp; Repair Center
                  </h1>

                  <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
                    Complete car care from periodic maintenance to denting-painting &amp; detailing with genuine parts and expert technicians. Servicing Maruti Suzuki, Hyundai, Tata, Mahindra, Toyota, Kia, Honda, and luxury vehicles under one roof.
                  </p>
                </div>

                <div>
                  {/* Dual CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                    <a
                      href="#book-service"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      <i className="fa-solid fa-calendar-check" aria-hidden="true"></i>
                      <span>Book Service Now</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setShowEmergencyPanel((prev) => !prev)}
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <i className="fa-solid fa-truck-medical text-red-500" aria-hidden="true"></i>
                      <span>Emergency Breakdown Support</span>
                    </button>
                  </div>

                  {/* Interactive Emergency Breakdown Support Panel */}
                  {showEmergencyPanel && (
                    <div className="p-5 rounded-xl bg-zinc-900/95 border border-red-500/40 mb-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h2 className="text-base font-semibold text-white">
                            24/7 Palanpur &amp; NH-27 Highway Breakdown Dispatch
                          </h2>
                          <p className="text-xs text-zinc-400 mt-0.5">
                            Battery jump-start, flat tyre assistance, overheating recovery &amp; flatbed towing across Palanpur, Deesa Highway, and Abu Road corridor.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setShowEmergencyPanel(false)}
                          className="text-zinc-400 hover:text-white text-xs px-2 py-1"
                          aria-label="Close emergency support panel"
                        >
                          Close
                        </button>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <a
                          href="tel:9427392688"
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-md whitespace-nowrap shrink-0 font-mono tabular-nums"
                        >
                          <i className="fa-solid fa-phone-volume" aria-hidden="true"></i>
                          <span>Call Recovery Van: +91 94273 92688</span>
                        </a>
                        <a
                          href="https://wa.me/919427392688?text=EMERGENCY%20BREAKDOWN%3A%20Hello%20Ambica%20Motors%2C%20I%20need%20urgent%20roadside%20assistance%20near%20Palanpur."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-zinc-100 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-md whitespace-nowrap shrink-0"
                        >
                          <i className="fa-brands fa-whatsapp text-emerald-400" aria-hidden="true"></i>
                          <span>Share Breakdown Location on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Unboxed Brand Compatibility Line */}
                  <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
                    <span className="font-medium text-zinc-300">Supported Brands:</span>
                    <span>Maruti Suzuki</span>
                    <span aria-hidden="true">·</span>
                    <span>Hyundai</span>
                    <span aria-hidden="true">·</span>
                    <span>Tata</span>
                    <span aria-hidden="true">·</span>
                    <span>Mahindra</span>
                    <span aria-hidden="true">·</span>
                    <span>Toyota</span>
                    <span aria-hidden="true">·</span>
                    <span>Kia</span>
                    <span aria-hidden="true">·</span>
                    <span>Honda</span>
                    <span aria-hidden="true">·</span>
                    <span>VW &amp; Skoda</span>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Impact Workshop Diagnostic Visual & Live Bay Architecture */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="relative h-full min-h-[340px] rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col justify-between p-6">
                  {/* Architectural SVG Multi-Bay Workshop Illustration */}
                  <div className="w-full rounded-xl overflow-hidden border border-zinc-800/90 bg-zinc-950 mb-5">
                    <svg viewBox="0 0 600 340" className="w-full h-auto block" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ambica Motors Multi-Brand Service Bay">
                      <rect width="600" height="340" fill="#09090B" />
                      {/* Workshop Ceiling Trusses & LED Light Strips */}
                      <line x1="0" y1="45" x2="600" y2="45" stroke="#27272A" strokeWidth="2" />
                      <rect x="70" y="22" width="130" height="6" rx="3" fill="#F4F4F5" opacity="0.85" />
                      <rect x="380" y="22" width="130" height="6" rx="3" fill="#F4F4F5" opacity="0.85" />
                      {/* Hydraulic Two-Post Lift Columns */}
                      <rect x="105" y="65" width="22" height="215" fill="#DC2626" />
                      <rect x="473" y="65" width="22" height="215" fill="#DC2626" />
                      <rect x="95" y="275" width="410" height="8" fill="#3F3F46" />
                      {/* Lift Arms */}
                      <rect x="127" y="198" width="346" height="8" fill="#52525B" />
                      {/* Elevated SUV Silhouette on Lift */}
                      <path d="M150 185L178 130L265 112L395 112L438 148L455 185H150Z" fill="#18181B" stroke="#A1A1AA" strokeWidth="2.5" />
                      <path d="M192 134L262 120H330V152H182L192 134Z" fill="#27272A" stroke="#52525B" strokeWidth="1.5" />
                      <path d="M338 120H388L422 152H338V120Z" fill="#27272A" stroke="#52525B" strokeWidth="1.5" />
                      {/* Wheels */}
                      <circle cx="210" cy="190" r="28" fill="#09090B" stroke="#E4E4E7" strokeWidth="4" />
                      <circle cx="210" cy="190" r="12" fill="#DC2626" />
                      <circle cx="395" cy="190" r="28" fill="#09090B" stroke="#E4E4E7" strokeWidth="4" />
                      <circle cx="395" cy="190" r="12" fill="#DC2626" />
                      {/* Diagnostic Callouts */}
                      <line x1="210" y1="162" x2="175" y2="92" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="4 4" />
                      <rect x="115" y="68" width="120" height="24" rx="4" fill="#18181B" stroke="#DC2626" strokeWidth="1" />
                      <text x="125" y="84" fill="#F4F4F5" fontSize="10" fontFamily="JetBrains Mono, monospace">3D ALIGNMENT OK</text>

                      <line x1="415" y1="158" x2="435" y2="92" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="4 4" />
                      <rect x="355" y="68" width="110" height="24" rx="4" fill="#18181B" stroke="#DC2626" strokeWidth="1" />
                      <text x="365" y="84" fill="#F4F4F5" fontSize="10" fontFamily="JetBrains Mono, monospace">OBD-II ECU 100%</text>

                      {/* Workshop Tool Cabinet & Floor */}
                      <rect x="145" y="230" width="90" height="45" rx="3" fill="#DC2626" />
                      <line x1="152" y1="242" x2="228" y2="242" stroke="#09090B" strokeWidth="2" />
                      <line x1="152" y1="254" x2="228" y2="254" stroke="#09090B" strokeWidth="2" />
                      <line x1="152" y1="266" x2="228" y2="266" stroke="#09090B" strokeWidth="2" />
                      <text x="150" y="315" fill="#A1A1AA" fontSize="12" fontFamily="JetBrains Mono, monospace">AMBICA MOTORS · PALANPUR SERVICE BAY</text>
                    </svg>
                  </div>

                  {/* Workshop Quick Specifications */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800 pb-2.5">
                      <span>Workshop Coverage</span>
                      <span className="font-mono text-zinc-100 tabular-nums">All Hatchbacks, Sedans &amp; SUVs</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800 pb-2.5">
                      <span>Pick-up &amp; Drop Facility</span>
                      <span className="font-mono text-zinc-100 tabular-nums">Free Across Palanpur City</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span>Working Hours</span>
                      <span className="font-mono text-zinc-100 tabular-nums">Mon–Sun · 8:30 AM – 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. HIGHLIGHTED FEATURES STRIP (TRUST FACTORS) - Full-width 4-column row below hero */}
            <div id="why-us" className="mt-12 pt-10 border-t border-zinc-800/80">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-xl bg-zinc-900/70 border border-zinc-800/90">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-red-400 tabular-nums">01 / TRUST FACTOR</span>
                    <i className="fa-solid fa-user-gear text-zinc-400 text-base" aria-hidden="true"></i>
                  </div>
                  <h2 className="font-display text-lg font-bold text-white mb-1.5">
                    Certified Mechanics
                  </h2>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Experienced multi-brand technicians trained in BS6 diesel, petrol, CNG, and modern ECU diagnostics.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-zinc-900/70 border border-zinc-800/90">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-red-400 tabular-nums">02 / QUALITY PARTS</span>
                    <i className="fa-solid fa-gears text-zinc-400 text-base" aria-hidden="true"></i>
                  </div>
                  <h2 className="font-display text-lg font-bold text-white mb-1.5">
                    100% Genuine Spare Parts
                  </h2>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Authentic OEM and OES spares (Bosch, Valeo, Monroe, Mobil 1, Castrol) with old parts returned to you.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-zinc-900/70 border border-zinc-800/90">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-red-400 tabular-nums">03 / UPFRONT BILLING</span>
                    <i className="fa-solid fa-indian-rupee-sign text-zinc-400 text-base" aria-hidden="true"></i>
                  </div>
                  <h2 className="font-display text-lg font-bold text-white mb-1.5">
                    Transparent &amp; Affordable Pricing
                  </h2>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Save up to 40% compared to authorized dealership bills with pre-approved estimates and zero hidden charges.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-zinc-900/70 border border-zinc-800/90">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-red-400 tabular-nums">04 / CONVENIENCE</span>
                    <i className="fa-solid fa-location-dot text-zinc-400 text-base" aria-hidden="true"></i>
                  </div>
                  <h2 className="font-display text-lg font-bold text-white mb-1.5">
                    Free Pick-up &amp; Drop in Palanpur
                  </h2>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Complimentary doorstep vehicle collection and delivery across all residential and commercial areas in Palanpur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. COMPREHENSIVE SERVICES GRID (6 CARDS) */}
        <section id="services" className="py-16 lg:py-24 border-b border-zinc-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-mono text-red-400 mb-2">
                  COMPLETE MULTI-BRAND CAPABILITIES · PALANPUR WORKSHOP
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight balance-text">
                  Comprehensive Car Care &amp; Repair Services
                </h2>
              </div>

              {/* Interactive Category Filter Controls */}
              <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-zinc-900 border border-zinc-800 rounded-xl self-start lg:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-red-600 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  All 6 Services
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('maintenance')}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activeCategory === 'maintenance'
                      ? 'bg-red-600 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Maintenance &amp; Alignment
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('body')}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activeCategory === 'body'
                      ? 'bg-red-600 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Denting &amp; Detailing
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('electrical')}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activeCategory === 'electrical'
                      ? 'bg-red-600 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  AC &amp; Electrical
                </button>
              </div>
            </div>

            {/* Segment Selector for Live Pricing Reference */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-xs sm:text-sm text-zinc-300">
                <span className="font-semibold text-white">Select Vehicle Type for Instant Starting Estimates:</span>{' '}
                <span className="text-zinc-400">Final quote shared after physical inspection.</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-950 p-1 rounded-lg border border-zinc-800 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setCarSegment('hatchback')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    carSegment === 'hatchback' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Hatchback
                </button>
                <button
                  type="button"
                  onClick={() => setCarSegment('sedanSuv')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    carSegment === 'sedanSuv' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Sedan / Compact SUV
                </button>
                <button
                  type="button"
                  onClick={() => setCarSegment('premiumSuv')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    carSegment === 'premiumSuv' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  7-Seater SUV / MPV
                </button>
              </div>
            </div>

            {/* 6 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredServices.map((service) => (
                <article
                  key={service.id}
                  className="rounded-2xl bg-zinc-900/80 border border-zinc-800 overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-colors"
                >
                  <div>
                    {/* Visual Banner */}
                    <div className="h-44 w-full bg-zinc-950 border-b border-zinc-800 overflow-hidden relative">
                      <ServiceIllustration id={service.id} />
                    </div>

                    <div className="p-6">
                      {/* Unboxed Metadata Kicker (Zero-Pill Discipline) */}
                      <div className="flex items-center justify-between gap-2 text-xs text-zinc-400 font-mono tabular-nums mb-2">
                        <span>
                          {service.number}. {service.categoryLabel}
                        </span>
                        <span>{service.turnaround}</span>
                      </div>

                      {/* Card Title with Clean Icon */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <h3 className="font-display text-xl font-bold text-white">
                          {service.title}
                        </h3>
                        <i className={`${service.icon} text-red-500 text-lg shrink-0`} aria-hidden="true"></i>
                      </div>

                      <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                        {service.summary}
                      </p>

                      {/* Included Scope Checklist */}
                      <ul className="space-y-2 text-xs text-zinc-400 border-t border-zinc-800/80 pt-4">
                        {service.checklist.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-red-500 font-mono select-none">+</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer: Price & Action */}
                  <div className="px-6 py-4 bg-zinc-950/60 border-t border-zinc-800/80 flex items-center justify-between gap-4">
                    <div>
                      <span className="block text-[11px] text-zinc-400">Starting Estimate</span>
                      <span className="font-mono text-lg font-bold text-white tabular-nums">
                        ₹{service.basePrice[carSegment].toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectServiceForBooking(service.id)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Select &amp; Book
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF & WORKSHOP STANDARDS SECTION (Claim-to-Proof Adjacency) */}
        <section className="py-16 border-b border-zinc-800/80 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <p className="text-xs font-mono text-red-400 mb-2">
                  VERIFIED WORKSHOP METRICS · PALANPUR
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight balance-text mb-4">
                  Engineered for Reliability Across North Gujarat Roads
                </h2>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  Whether your vehicle commutes daily inside Palanpur city or logs high-speed highway kilometers along NH-27 toward Ahmedabad, Mount Abu, or Deesa, every job card at Ambica Motors undergoes a documented 60-point quality sign-off before delivery.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800 font-mono tabular-nums">
                  <div>
                    <div className="text-2xl font-bold text-white">4,800+</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Cars Serviced in Palanpur</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">60-Pt</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Digital Inspection Report</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Genuine OEM/OES Spares</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <blockquote className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    &ldquo;My Hyundai Creta had weak AC cooling and suspension noise before a family trip. Ambica Motors picked up the car from my home near Dairy Road, shared photos of the worn link rods and AC pressure test on WhatsApp, and delivered it the same evening at 35% less than the showroom quote.&rdquo;
                  </p>
                  <footer className="text-xs text-zinc-400 border-t border-zinc-800/80 pt-3">
                    <strong className="text-white block">Rajeshbhai Patel</strong>
                    <span>Hyundai Creta Owner · Dairy Road, Palanpur</span>
                  </footer>
                </blockquote>

                <blockquote className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    &ldquo;Got rear bumper and fender denting-painting done on my Maruti Swift along with periodic oil service. The pearl white color match is indistinguishable from factory paint, and they returned all replaced filters in the boot.&rdquo;
                  </p>
                  <footer className="text-xs text-zinc-400 border-t border-zinc-800/80 pt-3">
                    <strong className="text-white block">Dr. Mehul Joshi</strong>
                    <span>Maruti Suzuki Swift Owner · Abu Highway, Palanpur</span>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* 5. INSTANT SERVICE BOOKING & PRICE ESTIMATE FORM */}
        <section id="book-service" className="py-16 lg:py-24 border-b border-zinc-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Booking Form */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="mb-6">
                  <p className="text-xs font-mono text-red-400 mb-1.5">
                    INSTANT JOB CARD RESERVATION · FREE DOORSTEP PICK-UP
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Book Service &amp; Get Instant Price Estimate
                  </h2>
                  <p className="text-sm text-zinc-400 mt-1">
                    Fill in your vehicle details below to lock in your preferred slot or request an instant callback from our workshop advisor.
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="customerName" className="block text-xs font-medium text-zinc-300 mb-2">
                        Customer Name *
                      </label>
                      <input
                        id="customerName"
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g., Alpesh Patel"
                        className="w-full px-4 py-2.5 text-sm bg-zinc-950 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-medium text-zinc-300 mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="e.g., 98765 43210"
                        className="w-full px-4 py-2.5 text-sm bg-zinc-950 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 font-mono tabular-nums focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="carMakeModel" className="block text-xs font-medium text-zinc-300 mb-2">
                      Car Make &amp; Model (Maruti, Hyundai, Tata, Mahindra, Toyota, etc.) *
                    </label>
                    <input
                      id="carMakeModel"
                      type="text"
                      required
                      value={carMakeModel}
                      onChange={(e) => setCarMakeModel(e.target.value)}
                      placeholder="e.g., Maruti Swift Dzire / Hyundai Creta / Tata Nexon"
                      className="w-full px-4 py-2.5 text-sm bg-zinc-950 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                    />
                    {/* Quick-Select Popular Car Models */}
                    <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] text-zinc-400 mr-1">Quick select:</span>
                      {POPULAR_BRANDS.map((model) => (
                        <button
                          key={model}
                          type="button"
                          onClick={() => setCarMakeModel(model)}
                          className={`px-2.5 py-1 text-[11px] rounded border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            carMakeModel === model
                              ? 'bg-red-600/20 border-red-500 text-white'
                              : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          {model.split(' / ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="serviceRequired" className="block text-xs font-medium text-zinc-300 mb-2">
                        Service Required *
                      </label>
                      <select
                        id="serviceRequired"
                        value={selectedServiceId}
                        onChange={(e) => setSelectedServiceId(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm bg-zinc-950 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.number}. {s.title} (From ₹{s.basePrice[carSegment].toLocaleString('en-IN')})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="preferredDate" className="block text-xs font-medium text-zinc-300 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        id="preferredDate"
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm bg-zinc-950 border border-zinc-700 rounded-lg text-white font-mono tabular-nums focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  {/* Doorstep Pick-up Toggle */}
                  <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between gap-4">
                    <div>
                      <span className="block text-xs font-semibold text-white">
                        Free Doorstep Pick-up &amp; Drop in Palanpur
                      </span>
                      <span className="block text-xs text-zinc-400 mt-0.5">
                        Our driver collects your vehicle from home/office and drops it back after servicing.
                      </span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={pickupRequired}
                      onClick={() => setPickupRequired((prev) => !prev)}
                      className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        pickupRequired
                          ? 'bg-red-600 text-white'
                          : 'bg-zinc-800 text-zinc-300'
                      }`}
                    >
                      {pickupRequired ? 'Pickup Included' : 'Self Drop-off'}
                    </button>
                  </div>

                  {formError && (
                    <div className="p-3.5 rounded-lg bg-red-950/60 border border-red-500/50 text-xs text-red-200 flex items-center gap-2">
                      <i className="fa-solid fa-triangle-exclamation text-red-400" aria-hidden="true"></i>
                      <span>{formError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-sm sm:text-base font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Confirm Booking / Get Free Quote
                  </button>
                </form>

                {/* Confirmation Receipt State */}
                {bookingConfirmed && (
                  <div className="mt-6 p-5 rounded-xl bg-zinc-950 border border-emerald-500/50">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-emerald-400 font-semibold">
                        BOOKING REQUEST REGISTERED · REF {bookingConfirmed.referenceId}
                      </span>
                      <span className="text-xs font-mono text-zinc-400 tabular-nums">
                        {bookingConfirmed.date}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-200 mb-4">
                      Thank you, <strong className="text-white">{bookingConfirmed.name}</strong>. Your estimate for{' '}
                      <strong className="text-white">{bookingConfirmed.serviceTitle}</strong> on your{' '}
                      <strong className="text-white">{bookingConfirmed.car}</strong> is ready. Send your job card directly to our workshop WhatsApp desk for immediate slot confirmation:
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={getWhatsAppBookingUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
                      >
                        <i className="fa-brands fa-whatsapp text-sm" aria-hidden="true"></i>
                        <span>Send Job Card on WhatsApp (+91 94273 92688)</span>
                      </a>
                      <a
                        href="tel:9427392688"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors whitespace-nowrap shrink-0 font-mono tabular-nums"
                      >
                        <i className="fa-solid fa-phone" aria-hidden="true"></i>
                        <span>Call Workshop Advisor</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Live Price Estimate Summary Card */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-zinc-800">
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">LIVE ESTIMATE SUMMARY</span>
                    <h3 className="font-display text-xl font-bold text-white mt-0.5">
                      {currentService.title}
                    </h3>
                  </div>
                  <i className={`${currentService.icon} text-red-500 text-xl`} aria-hidden="true"></i>
                </div>

                <div className="py-5 space-y-3 border-b border-zinc-800 text-sm">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Selected Vehicle</span>
                    <span className="font-medium text-white">{carMakeModel || 'Multi-Brand Car'}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Estimated Turnaround</span>
                    <span className="font-mono text-white tabular-nums">{currentService.turnaround}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Service Warranty</span>
                    <span className="font-mono text-white tabular-nums">{currentService.warranty}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Palanpur Pick-up &amp; Drop</span>
                    <span className="font-mono text-emerald-400 tabular-nums">
                      {pickupRequired ? '₹0 (FREE)' : 'Workshop Drop-off'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>60-Point Diagnostic Check</span>
                    <span className="font-mono text-emerald-400 tabular-nums">₹0 (INCLUDED)</span>
                  </div>
                </div>

                <div className="py-5 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-zinc-400 block">Estimated Package Base Price</span>
                    <span className="text-[11px] text-zinc-500">Taxes &amp; model-specific consumables extra if applicable</span>
                  </div>
                  <div className="font-mono text-3xl font-bold text-white tabular-nums">
                    ₹{estimatedPrice.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/90 text-xs text-zinc-400 space-y-2">
                  <div className="font-semibold text-zinc-200">Included in {currentService.title}:</div>
                  {currentService.checklist.map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-red-500 font-mono">+</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CONTACT & LOCATION SECTION */}
        <section id="contact" className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div>
                  <p className="text-xs font-mono text-red-400 mb-2">
                    WORKSHOP LOCATION &amp; DIRECT HELPLINE
                  </p>
                  <h2 className="font-display text-3xl font-bold text-white mb-3">
                    Visit Ambica Motors in Palanpur, Gujarat
                  </h2>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-8">
                    Conveniently accessible across Palanpur with dedicated service bays, computerized wheel alignment rack, and an enclosed paint &amp; detailing studio.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 text-red-500">
                        <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">Workshop Address &amp; Coverage</h3>
                        <p className="text-sm text-zinc-300 mt-0.5">Palanpur, Banaskantha District, Gujarat — 385001</p>
                        <p className="text-xs font-mono text-red-400 mt-1">
                          Doorstep Pickup &amp; Drop Available across Palanpur
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 text-red-500">
                        <i className="fa-solid fa-phone" aria-hidden="true"></i>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">Direct Call &amp; WhatsApp Helpline</h3>
                        <p className="text-sm font-mono text-zinc-200 mt-0.5 tabular-nums">+91 94273 92688</p>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          Instant service quotes, periodic maintenance reminders &amp; emergency breakdown support
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 text-red-500">
                        <i className="fa-regular fa-clock" aria-hidden="true"></i>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">Service Bay Timings</h3>
                        <p className="text-sm text-zinc-300 mt-0.5 font-mono tabular-nums">
                          Monday to Sunday: 08:30 AM – 08:00 PM
                        </p>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          24/7 Emergency Highway Recovery on Call
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-zinc-800 flex flex-wrap items-center gap-4">
                  <a
                    href="tel:9427392688"
                    className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors whitespace-nowrap shrink-0 font-mono tabular-nums"
                  >
                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                    <span>Call +91 94273 92688</span>
                  </a>

                  <a
                    href="https://wa.me/919427392688?text=Hello%20Ambica%20Motors,%20I%20want%20to%20book%20a%20car%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <i className="fa-brands fa-whatsapp text-base" aria-hidden="true"></i>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Palanpur Service Corridor Map Visual */}
              <div className="lg:col-span-6 rounded-2xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs font-mono text-zinc-400 block">SERVICE CORRIDOR COVERAGE</span>
                      <h3 className="font-display text-xl font-bold text-white">
                        Palanpur Free Pick-up &amp; Highway Support Zones
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-zinc-400 tabular-nums">GJ-08 PALANPUR</span>
                  </div>

                  {/* Schematic Map SVG of Palanpur & Highway Corridors */}
                  <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 mb-6">
                    <svg viewBox="0 0 560 270" className="w-full h-auto block" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Palanpur Service Corridor Map">
                      <rect width="560" height="270" fill="#09090B" />
                      {/* Grid Lines */}
                      <g stroke="#18181B" strokeWidth="1">
                        <line x1="0" y1="65" x2="560" y2="65" />
                        <line x1="0" y1="135" x2="560" y2="135" />
                        <line x1="0" y1="205" x2="560" y2="205" />
                        <line x1="140" y1="0" x2="140" y2="270" />
                        <line x1="280" y1="0" x2="280" y2="270" />
                        <line x1="420" y1="0" x2="420" y2="270" />
                      </g>
                      {/* Pickup Radius Rings */}
                      <circle cx="280" cy="135" r="95" stroke="#DC2626" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="6 6" />
                      <circle cx="280" cy="135" r="52" fill="#DC2626" fillOpacity="0.08" stroke="#DC2626" strokeOpacity="0.45" strokeWidth="1.5" />
                      {/* Major Highway Arteries */}
                      <path d="M40 195L280 135L520 55" stroke="#52525B" strokeWidth="3.5" />
                      <path d="M210 20L280 135L335 250" stroke="#52525B" strokeWidth="3.5" />
                      {/* Zone Nodes */}
                      <circle cx="150" cy="168" r="5" fill="#A1A1AA" />
                      <text x="85" y="160" fill="#A1A1AA" fontSize="11" fontFamily="JetBrains Mono, monospace">DEESA HIGHWAY</text>

                      <circle cx="425" cy="86" r="5" fill="#A1A1AA" />
                      <text x="395" y="74" fill="#A1A1AA" fontSize="11" fontFamily="JetBrains Mono, monospace">ABU ROAD NH-27</text>

                      <circle cx="318" cy="215" r="5" fill="#A1A1AA" />
                      <text x="330" y="220" fill="#A1A1AA" fontSize="11" fontFamily="JetBrains Mono, monospace">AHMEDABAD HWY</text>

                      <circle cx="235" cy="65" r="5" fill="#A1A1AA" />
                      <text x="145" y="58" fill="#A1A1AA" fontSize="11" fontFamily="JetBrains Mono, monospace">DAIRY ROAD / CITY</text>

                      {/* Center Workshop Pin */}
                      <circle cx="280" cy="135" r="10" fill="#DC2626" />
                      <circle cx="280" cy="135" r="4" fill="#FFFFFF" />
                      <rect x="205" y="100" width="150" height="24" rx="4" fill="#18181B" stroke="#DC2626" strokeWidth="1.5" />
                      <text x="218" y="116" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono, monospace">AMBICA MOTORS HQ</text>
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-zinc-300">
                  <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80">
                    <span className="text-zinc-400 block text-[11px]">Zone 1</span>
                    <span className="font-medium text-white">Palanpur City &amp; Station</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80">
                    <span className="text-zinc-400 block text-[11px]">Zone 2</span>
                    <span className="font-medium text-white">Dairy Road &amp; Vidyamandir</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 col-span-2 sm:col-span-1">
                    <span className="text-zinc-400 block text-[11px]">Zone 3</span>
                    <span className="font-medium text-white">Abu-Deesa-Ahmedabad Hwy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* QUIET FOOTER */}
      <footer className="bg-zinc-950 border-t border-zinc-800/80 py-10 pb-24 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-display text-lg font-bold text-white">
              Ambica Motors — Multi-Brand Car Care
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Palanpur, Gujarat · Direct Call &amp; WhatsApp: <span className="font-mono tabular-nums text-zinc-300">+91 94273 92688</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
            <a href="#book-service" className="hover:text-white transition-colors">Book Service</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Ambica Motors, Palanpur. All rights reserved.
          </div>
        </div>
      </footer>

      {/* 7. STICKY FLOATING BUTTONS (Bottom Left Quick Call, Bottom Right WhatsApp) */}
      <a
        href="tel:9427392688"
        aria-label="Quick Call Ambica Motors +91 94273 92688"
        className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-lg transition-transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
      >
        <i className="fa-solid fa-phone text-sm" aria-hidden="true"></i>
        <span className="text-xs font-semibold font-mono tabular-nums">Call Now</span>
      </a>

      <a
        href="https://wa.me/919427392688?text=Hello%20Ambica%20Motors,%20I%20want%20to%20book%20a%20car%20service"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Ambica Motors +91 94273 92688"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
      >
        <i className="fa-brands fa-whatsapp text-base" aria-hidden="true"></i>
        <span className="text-xs font-semibold">WhatsApp Us</span>
      </a>
    </div>
  );
}
