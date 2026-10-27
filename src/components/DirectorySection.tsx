import React, { useState } from 'react';
import { ShieldCheck, Phone, Star, MapPin, Truck, CheckCircle2, UserCheck, Wrench, Building2, Search } from 'lucide-react';
import { INITIAL_CONTRACTORS, INITIAL_SUPPLIERS } from '../data/contractorsData';
import { Contractor, Supplier } from '../types';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface DirectorySectionProps {
  language: Language;
  onDirectQuote: (contractorName: string, trade: string) => void;
  onJoinNetwork: () => void;
}

export const DirectorySection: React.FC<DirectorySectionProps> = ({
  language,
  onDirectQuote,
  onJoinNetwork,
}) => {
  const t = TRANSLATIONS[language].directory;

  const [activeTab, setActiveTab] = useState<'contractors' | 'suppliers'>('contractors');
  const [selectedTradeFilter, setSelectedTradeFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const contractors = INITIAL_CONTRACTORS;
  const suppliers = INITIAL_SUPPLIERS;

  const trades = ['All', 'Cleaning', 'Remodeling', 'Electrical', 'Plumbing', 'Painting', 'Handyman'];

  const filteredContractors = contractors.filter((c) => {
    const matchesTrade =
      selectedTradeFilter === 'All' ||
      c.trade.toLowerCase().includes(selectedTradeFilter.toLowerCase()) ||
      c.services.some((s) => s.toLowerCase().includes(selectedTradeFilter.toLowerCase()));
    const matchesSearch =
      searchTerm === '' ||
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.neighborhood.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.services.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTrade && matchesSearch;
  });

  const filteredSuppliers = suppliers.filter((s) => {
    return (
      searchTerm === '' ||
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <section id="directory" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-t border-slate-900 pt-8 mb-12 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              <span className="w-2 h-2 rounded-sm bg-amber-500 shrink-0" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              {t.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              {t.desc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onJoinNetwork}
              className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
            >
              {t.joinBtn}
            </button>
            <a
              href="tel:2015550198"
              className="px-6 py-3 bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-100 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              {t.helpCallBtn}
            </a>
          </div>
        </div>

        {/* Tab switcher & Search */}
        <div className="bg-slate-100 p-3 sm:p-4 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('contractors')}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'contractors'
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>{t.contractorsTab} ({contractors.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('suppliers')}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'suppliers'
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{t.suppliersTab} ({suppliers.length})</span>
            </button>
          </div>

          {/* Search bar */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={activeTab === 'contractors' ? t.searchContractorPlaceholder : t.searchSupplierPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-slate-900"
            />
          </div>
        </div>

        {/* Trade quick filters for contractors */}
        {activeTab === 'contractors' && (
          <div className="flex flex-wrap items-center gap-2 mb-8 text-xs">
            <span className="font-bold text-slate-700 mr-2">{t.tradeFilterLabel}</span>
            {trades.map((trade) => (
              <button
                key={trade}
                onClick={() => setSelectedTradeFilter(trade)}
                className={`px-3 py-1.5 transition-all cursor-pointer font-medium ${
                  selectedTradeFilter === trade
                    ? 'bg-slate-900 text-white font-bold'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {trade}
              </button>
            ))}
          </div>
        )}

        {/* Tab 1: Contractors Grid */}
        {activeTab === 'contractors' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContractors.map((c) => (
              <div
                key={c.id}
                className="bg-white border-2 border-slate-200 hover:border-slate-950 transition-all p-6 sm:p-7 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Top card info */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block mb-1">
                        {c.trade}
                      </span>
                      <h3 className="text-xl font-bold text-slate-950 leading-snug group-hover:text-blue-900 transition-colors">
                        {c.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 border border-amber-200 text-amber-900 text-xs font-bold shrink-0">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{c.rating}</span>
                      <span className="text-[10px] text-slate-500 font-normal">({c.reviewsCount})</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600 mb-5">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{c.neighborhood}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{c.verifiedLicense} • {c.experienceYears} Yrs Experience</span>
                    </div>
                  </div>

                  {/* Services list */}
                  <div className="border-t border-slate-100 pt-3 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Services:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {c.services.map((s, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-slate-900 shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                  <a
                    href={`tel:${c.phone.replace(/[^0-9]/g, '')}`}
                    className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-700" />
                    <span>Call Direct</span>
                  </a>

                  <button
                    onClick={() => onDirectQuote(c.name, c.trade)}
                    className="flex-1 py-2.5 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Material Suppliers Grid */}
        {activeTab === 'suppliers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSuppliers.map((s) => (
              <div
                key={s.id}
                className="bg-white border-2 border-slate-200 hover:border-slate-950 p-6 sm:p-7 flex flex-col justify-between transition-all shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        {s.category}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-950 mt-1">
                        {s.name}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600 mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{s.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-blue-800 font-medium">
                      <Truck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{s.deliveryAvailable}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-3 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Materials In Stock:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {s.specialties.map((item, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Trade Desk & Order Line:</span>
                  <a
                    href={`tel:${s.phone.replace(/[^0-9]/g, '')}`}
                    className="font-bold text-sm text-slate-950 hover:text-blue-700 underline flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>{s.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
