import { EvolveIcon } from './EvolveIcon';
/** Original outlined lettering and symbol placement; only the circuit animates. */
export function BrandLogo({ tone = 'light', footer = false, tagline = false }: { tone?: 'light' | 'dark'; footer?: boolean; tagline?: boolean }) {
  return <a className={`brand-link${footer ? ' brand-link--footer' : ''}${tagline ? ' brand-link--tagline' : ''}`} href="#home" aria-label={tagline ? 'Evolve Through AI home — Learn. Build. Evolve.' : 'Evolve Through AI home'}><span className="brand-artwork">
    <img className={`brand-logo ${footer ? '' : 'brand-logo--light'}`} src={`/brand/logo-type-${tone}.svg`} alt="" width={620} height={208} decoding="async" />
    {!footer && <img className="brand-logo brand-logo--dark" src="/brand/logo-type-dark.svg" alt="" width={620} height={208} decoding="async" />}
    <EvolveIcon className="brand-artwork-icon" animated aria-hidden="true" />
  </span>{tagline && <span className="brand-tagline">Learn. Build. Evolve.</span>}</a>;
}
