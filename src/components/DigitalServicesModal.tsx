import React, { useState } from 'react';
import { X, Globe, Share2, Search, Check, Phone, ArrowRight } from 'lucide-react';

interface DigitalServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage: (packageName: string) => void;
}

export const DigitalServicesModal: React.FC<DigitalServicesModalProps> = ({
  isOpen,
  onClose,
  onSelectPackage,
}) => {
  const [selectedTrade, setSelectedTrade] = useState('Cleaning Company');

  if (!isOpen) return null;

  const packages = [
    {
      id: 'website',
      title: 'Small Business Website Launch',
      price: '$299',
      sub: 'One-time setup • Fast 48h turnaround',
      icon: Globe,
      features: [
        'Clean, mobile-optimized site tailored to local businesses',
        'Direct "Click to Call" & WhatsApp/SMS quick contact buttons',
        'High-converting Booking & Estimate Request form',
        'Before & After / Service Portfolio gallery showcase',
        'Jersey City neighborhood local schema markup for SEO'
      ]
    },
    {
      id: 'google-maps',
      title: 'Google Business & Local JC SEO',
      price: '$149',
      sub: 'Local Maps Top Ranking Optimization',
      icon: Search,
      features: [
        'Google Business Profile setup and verified badge',
        'Targeted local keywords (e.g. "Jersey City Cleaning", "JC Handyman")',
        'Apple Maps and Bing Places sync',
        'Review generation cards & QR codes for your shop or vehicles',
        'Spam protection and direct call tracking'
      ]
    },
    {
      id: 'social',
      title: 'Social Media & Brand Kit',
      price: '$189',
      sub: 'Instagram, Facebook & Nextdoor',
      icon: Share2,
      features: [
        'Branded Facebook & Instagram business profiles',
        '10 custom Before/After / Promo branded graphic templates',
        'Nextdoor neighborhood business verification',
        'Vehicle magnet / decal / storefront logo vectorization',
        'Practical posting guide (takes < 5 min/week)'
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-300 shadow-2xl">
        
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-200 flex items-start justify-between bg-slate-50">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
              Service 01 • Practical Growth for Local Small Businesses
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Digital Services for Small Businesses & Service Providers
            </h3>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              We build clean websites, manage social pages, and set up local Jersey City Google search profiles for cleaning businesses, contractors, handymen, movers, salons, and all local service providers so you get steady direct client calls without paying greedy lead brokers.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-200/50 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Trade Selector */}
        <div className="px-6 sm:px-8 py-4 bg-blue-50/50 border-b border-blue-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="font-bold text-slate-800">Select your business type:</span>
          <div className="flex flex-wrap gap-2">
            {[
              'Cleaning Company',
              'Handyman & Repairs',
              'Contractor & Remodeling',
              'Painter & Finishes',
              'Electrician / Plumber',
              'Mover & Hauler',
              'Salon & Wellness',
              'Local Storefront / Shop'
            ].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTrade(t)}
                className={`px-3 py-1 font-semibold rounded transition-all cursor-pointer ${
                  selectedTrade === t
                    ? 'bg-slate-950 text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.id}
                className="bg-white border-2 border-slate-200 hover:border-slate-900 p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="w-10 h-10 bg-[#e2e8f0] flex items-center justify-center text-slate-900 mb-4 group-hover:bg-[#a8c5ff] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h4 className="text-lg font-bold text-slate-950 mb-1">
                    {pkg.title}
                  </h4>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-2xl font-extrabold text-slate-950">{pkg.price}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mb-4">{pkg.sub}</div>

                  <ul className="space-y-2 text-xs text-slate-600 mb-6">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    onSelectPackage(`${pkg.title} (${selectedTrade})`);
                    onClose();
                  }}
                  className="w-full py-2.5 bg-slate-950 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Select Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="px-6 sm:px-8 py-5 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-600" />
            <span>Need a custom solution or monthly marketing management?</span>
          </div>
          <a
            href="tel:2015550198"
            className="font-bold text-slate-900 hover:text-blue-700 underline"
          >
            Call Us Directly: (201) 555-0198
          </a>
        </div>
      </div>
    </div>
  );
};
