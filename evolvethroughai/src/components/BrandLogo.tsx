/** Approved circuit-ribbon identity; artwork lettering is outlined. */
export function BrandLogo({ tone = 'light', footer = false }: { tone?: 'light' | 'dark'; footer?: boolean }) {
  return <a className={`brand-link${footer ? ' brand-link--footer' : ''}`} href="#home" aria-label="Evolve Through AI home">
    <img className={`brand-logo ${footer ? '' : 'brand-logo--light'}`} src={`/brand/logo-${tone}.svg`} alt="Evolve Through AI" width={620} height={208} decoding="async" />
    {!footer && <img className="brand-logo brand-logo--dark" src="/brand/logo-dark.svg" alt="Evolve Through AI" width={620} height={208} decoding="async" />}
  </a>;
}
