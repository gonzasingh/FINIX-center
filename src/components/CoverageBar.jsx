import { Fragment } from 'react';

const LOCATIONS = ['CASA CENTRAL TUCUMÁN', 'SALTA', 'JUJUY', 'CATAMARCA'];

// FRANJA DE COBERTURA REGIONAL
export default function CoverageBar() {
  return (
    <section className="py-6 border-y border-gold-500/20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gold-400 mb-3">
          FINIX Center en el Norte Argentino
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-80 text-xs sm:text-sm">
          {LOCATIONS.map((location, index) => (
            <Fragment key={location}>
              {index > 0 && <span className="text-gold-500">•</span>}
              <span className="font-heading font-extrabold theme-text-heading tracking-widest">{location}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
