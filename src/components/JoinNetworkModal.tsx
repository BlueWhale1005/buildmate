import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Wrench, Building2 } from 'lucide-react';

interface JoinNetworkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinNetworkModal: React.FC<JoinNetworkModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState<'contractor' | 'supplier'>('contractor');
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [tradeOrProducts, setTradeOrProducts] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${contactName} (${businessName})`,
          phone,
          email,
          serviceCategory: 'Join Network as Contractor / Supplier',
          userType: role,
          urgency: 'routine',
          message: `Network application: ${role.toUpperCase()}. Trade/Products: ${tradeOrProducts}. NJ License/Reg: ${licenseNumber || 'Pending verification'}`,
        }),
      });
      setSuccess(true);
    } catch {
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white max-w-xl w-full max-h-[92vh] overflow-y-auto border border-slate-300 shadow-2xl">
        
        {/* Header */}
        <div className="bg-slate-950 text-white p-6 sm:p-7 flex items-start justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              Join the BuildMate Pro Network
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Cleaner & Contractor Registration
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Zero upfront fees. Homeowners and commercial clients hire and pay you directly.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {success ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-slate-950">
              Application Received!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thanks for applying to BuildMate, <strong>{businessName}</strong>. Our onboarding team will call {phone} to verify details and activate your profile.
            </p>
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-slate-950 text-white font-bold text-xs uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            {/* Role switch */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                Register as a Service Business or Supplier?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole('contractor')}
                  className={`py-3 px-3 text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    role === 'contractor'
                      ? 'bg-slate-950 text-white border-slate-950'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <Wrench className="w-4 h-4" />
                  <span>Service Business / Cleaner / Pro</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole('supplier')}
                  className={`py-3 px-3 text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    role === 'supplier'
                      ? 'bg-slate-950 text-white border-slate-950'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>Supplier / Vendor Depot</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Heights Tile & Plaster"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anthony Ramos"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                  Direct Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(201) 555-0199"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="contact@business.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                {role === 'contractor' ? 'Primary Service Category & Specialties' : 'Products & Materials Supplied'}
              </label>
              <input
                type="text"
                required
                placeholder={role === 'contractor' ? 'e.g. Commercial Cleaning, Move-In/Out, Handyman, Remodeling, Electrician' : 'e.g. Janitorial supplies, packaging, hardware, lumber, fixtures'}
                value={tradeOrProducts}
                onChange={(e) => setTradeOrProducts(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                Business Registration, Insurance or License (Optional / As Applicable)
              </label>
              <input
                type="text"
                placeholder="e.g. NJ Business Registration, Insured, or Trade Lic #"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
              />
            </div>

            <div className="bg-slate-50 p-3 text-[11px] text-slate-600 border border-slate-200 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>We verify business credentials before referring direct customer leads.</span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer disabled:opacity-50"
              >
                {submitting ? 'Submitting Application...' : 'Submit Network Application'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
