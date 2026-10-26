import { useId, type SVGProps } from 'react';
import './EvolveIcon.css';

export interface EvolveIconProps extends Omit<SVGProps<SVGSVGElement>, 'children' | 'title'> {
  /** Set false for the static circuit ribbon and anchor dot. */
  animated?: boolean;
  /** Omit redundant announcements with aria-hidden when used beside text. */
  title?: string;
}

const circuit = 'M40 234C54 205 89 177 123 169C148 163 155 177 177 178C197 179 210 167 220 153';

/** Approved ribbon geometry. Each instance has isolated gradient/filter IDs. */
export function EvolveIcon({ animated = true, className = '', title = 'Evolve Through AI', ...props }: EvolveIconProps) {
  const id = 'evolve-' + useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const decorative = props['aria-hidden'] === true || props['aria-hidden'] === 'true';
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 320" width={28} height={32} role={decorative ? undefined : 'img'} aria-labelledby={decorative || props['aria-label'] ? undefined : id + '-title'} focusable="false" {...props} className={`evolve-icon ${className}`} data-animated={animated}>
    {!decorative && <title id={id + '-title'}>{title}</title>}
    <defs>
 <linearGradient id={`${id}-top`} x1="37" y1="161" x2="240" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#034DFF"/><stop offset=".44" stopColor="#076DFA"/><stop offset=".78" stopColor="#00B9ED"/><stop offset="1" stopColor="#00D9E6"/></linearGradient>
 <linearGradient id={`${id}-top-face`} x1="79" y1="155" x2="233" y2="58" gradientUnits="userSpaceOnUse"><stop stopColor="#0638E6"/><stop offset=".5" stopColor="#009CFF"/><stop offset="1" stopColor="#00D5ED"/></linearGradient>
 <linearGradient id={`${id}-fold`} x1="48" y1="165" x2="108" y2="152" gradientUnits="userSpaceOnUse"><stop stopColor="#0635CE"/><stop offset=".6" stopColor="#071E9C"/><stop offset="1" stopColor="#1757F6"/></linearGradient>
 <linearGradient id={`${id}-lower-fold`} x1="35" y1="221" x2="128" y2="258" gradientUnits="userSpaceOnUse"><stop stopColor="#0538DD"/><stop offset=".48" stopColor="#06258F"/><stop offset="1" stopColor="#1548F5"/></linearGradient>
 <linearGradient id={`${id}-bottom`} x1="83" y1="210" x2="243" y2="278" gradientUnits="userSpaceOnUse"><stop stopColor="#144AF4"/><stop offset=".38" stopColor="#3D3AF6"/><stop offset=".72" stopColor="#8B3DF2"/><stop offset="1" stopColor="#BE43F0"/></linearGradient>
 <linearGradient id={`${id}-bottom-face`} x1="119" y1="225" x2="233" y2="279" gradientUnits="userSpaceOnUse"><stop stopColor="#5550FC"/><stop offset=".6" stopColor="#914EF7"/><stop offset="1" stopColor="#C34EF3"/></linearGradient>
 <linearGradient id={`${id}-middle`} x1="36" y1="238" x2="232" y2="128" gradientUnits="userSpaceOnUse"><stop stopColor="#08BFE4"/><stop offset=".17" stopColor="#20D1EC"/><stop offset=".46" stopColor="#00A8EF"/><stop offset=".75" stopColor="#0479F5"/><stop offset="1" stopColor="#00CBEA"/></linearGradient>
 <linearGradient id={`${id}-edge`} x1="38" y1="235" x2="206" y2="140" gradientUnits="userSpaceOnUse"><stop stopColor="#AFF8FF"/><stop offset=".55" stopColor="#65E8FF" stopOpacity=".72"/><stop offset="1" stopColor="#C4FCFF" stopOpacity="0"/></linearGradient>
 <linearGradient id={`${id}-ai`} x1="0" y1="0" x2="1" y2="0"><stop stopColor="#2563EB"/><stop offset="1" stopColor="#8B5CF6"/></linearGradient>
 </defs><g><path fill={`url(#${id}-top)`} d="M37 174C25 158 42 117 69 82C94 49 124 29 163 28C195 27 229 33 250 18C258 12 264 21 261 35C256 64 236 84 208 91C184 97 160 92 137 100C102 112 63 143 37 174Z"/><path fill={`url(#${id}-top-face)`} opacity=".72" d="M38 169C60 125 95 91 136 77C168 66 192 77 217 65C236 56 250 40 259 25C261 52 242 79 208 90C182 97 160 93 137 101C101 115 66 143 38 169Z"/><path fill={`url(#${id}-fold)`} d="M38 173C54 153 79 133 109 121C99 139 95 158 99 181C76 190 50 186 38 173Z"/><path fill={`url(#${id}-lower-fold)`} d="M49 253C31 248 25 231 32 212C44 194 70 182 101 177C96 205 104 231 126 251C101 266 71 267 49 253Z"/><path fill={`url(#${id}-bottom)`} d="M78 203C91 191 107 185 121 183C118 206 133 220 153 224C174 229 193 219 213 228C239 239 253 257 252 276C252 291 243 300 232 296C210 289 190 302 165 303C126 307 95 287 80 261C69 241 67 220 78 203Z"/><path fill={`url(#${id}-bottom-face)`} opacity=".86" d="M120 187C119 206 134 221 154 224C174 228 192 220 213 228C237 238 251 255 252 273C239 258 219 252 197 255C168 261 141 251 126 231C117 218 114 200 120 187Z"/><path fill={`url(#${id}-middle)`} d="M45 254C22 242 24 216 41 193C62 164 98 143 132 133C171 121 203 133 236 119C247 113 255 117 252 131C247 158 229 179 204 186C179 194 159 186 134 192C98 200 62 224 45 254Z"/><path fill="none" stroke={`url(#${id}-edge)`} strokeWidth="2" strokeLinecap="round" d="M44 251C27 237 31 214 48 193C71 166 103 147 135 139C169 130 201 139 235 124"/></g>
    <defs><filter id={id + '-glow'} x="-30%" y="-40%" width="160%" height="180%" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="3" /></filter></defs>
    <path className="evolve-icon__track" d={circuit} fill="none" stroke="#FFFFFF" strokeWidth={4.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" />
    <g aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path className="evolve-icon__flash evolve-icon__halo" d={circuit} pathLength={100} stroke="#8DF5FF" strokeWidth={17} filter={`url(#${id}-glow)`} />
      <path className="evolve-icon__flash" d={circuit} pathLength={100} stroke="#FFFFFF" strokeWidth={7} />
    </g>
    <circle className="evolve-icon__anchor" cx={220} cy={153} r={8.2} fill="#FFFFFF" />
    <circle className="evolve-icon__flare" cx={220} cy={153} r={19} fill="#B9FAFF" filter={`url(#${id}-glow)`} aria-hidden="true" />
  </svg>;
}
