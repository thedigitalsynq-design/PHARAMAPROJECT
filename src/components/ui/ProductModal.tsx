import React, { useEffect } from 'react';
import { X, ShieldAlert, CheckCircle, Package, Activity, Dna, Info } from 'lucide-react';
import { Product } from '../../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-pharma-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-pharma-950 via-pharma-900 to-pharma-850 p-6 text-white border-b border-pharma-800">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  {product.category}
                </span>
                <span className="text-[11px] font-medium text-slate-300">
                  Code: <strong className="text-white">{product.codeName}</strong>
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                  {product.stage}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {product.name}
              </h3>
              <p className="text-xs text-teal-300 italic mt-0.5">
                Generic designation: {product.genericName}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-pharma-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
              <Dna className="w-4 h-4 text-teal-600" />
              Scientific Summary
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {product.summary}
            </p>
          </div>

          {/* Mechanism of Action */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-teal-600" />
              Mechanism of Action (MOA)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.mechanismOfAction}
            </p>
          </div>

          {/* Grid: Delivery & Indications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Investigational Indications
              </h4>
              <ul className="space-y-1.5">
                {product.indications.map((ind, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Formulation & Delivery
              </h4>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-500">Dosage Form:</span>
                  <span className="font-semibold text-right">{product.dosageForm}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-500">Delivery Route:</span>
                  <span className="font-semibold text-right">{product.deliveryMethod}</span>
                </div>
                <div className="flex justify-between pb-1.5">
                  <span className="text-slate-500">Therapeutic Domain:</span>
                  <span className="font-semibold text-right text-teal-700">{product.therapeuticAreaName}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Molecular Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Engineering Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {product.features.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-teal-50/60 border border-teal-100 text-xs text-slate-700">
                  {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Packaging & Storage */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-100/70 border border-slate-200 text-xs text-slate-600">
            <Package className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800">Packaging & Storage Protocol: </span>
              {product.packaging}
            </div>
          </div>

          {/* Mandatory Fictional Disclaimer */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
            <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5">FICTIONAL DEMONSTRATION NOTICE</span>
              <p className="leading-relaxed text-amber-800 text-[11px]">
                {product.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            Demonstration record for web portfolio
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
