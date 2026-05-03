interface IsotipoProps {
  variant?: 'color' | 'white'
  size?: number
}

function Isotipo({ variant = 'color', size = 40 }: IsotipoProps) {
  const w = variant === 'white'
  const gold  = w ? '#ffffff' : '#B8903C'
  const green = w ? '#ffffff' : '#5A9B2C'
  const dark  = w ? '#ffffff' : '#1E3C1C'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Chemuyil Residencial isotipo"
    >
      {/* ── Gold feather element (top) ── */}
      <g>
        <path
          fill={gold}
          d="M615.08,315.62c-38.57-26.02-78.94-28.28-123.19-19.11-51.74,10.7-100.56,1.5-134.25-41.92,22.02-.65,41.32-5.49,61.06-13.17l40.9-19.54c53.04-26.25,109.12-28.39,161.51-.04,42.69,23.11,69.56,63.02,86.03,108.06,11.37,32.49,16.19,65.53,15.29,100.31-3.4,49.5-16.97,98.06-45.17,140.1,21.46-65.89,19.01-133.42-11.66-193.97-12.61-23.8-28.32-44.36-50.52-60.73Z"
        />
        <path
          fill={gold}
          d="M499.14,187.95c-21.93-16.8-47.18-27.04-74.76-27.91,21.88,8.15,41.84,15.78,59.39,31.65-20.41,7.75-38.62,15.97-57.5,25.45-41.84,20.99-89.45,21.75-133.24,2.55,31.48-40.34,71.11-77.71,118.81-96.54,69.02-29.26,146.3-16.96,205.38,28.09,20.98,16,39.44,34.18,54.77,55.87,20.69,29.28,36.41,60.98,44.11,96.37-9.56-23.64-21.95-44.78-39.62-63.65-16.53-16.72-35.08-30.42-56.55-40.19-38.28-16.58-79.17-21.97-120.79-11.69Z"
        />
        <path
          fill={gold}
          d="M341.22,148.91c-21.41,19.21-39.29,39.05-58.24,61.98-7.87-30.01-.31-62.38,20.31-85.54,12.48-14.02,26.67-24.6,43.95-32.13,54.71-23.85,117.58-20.64,171.78,4.52-67.93-8.91-125.88,6.42-177.8,51.18Z"
        />
      </g>

      {/* ── Bright green leaf (left) ── */}
      <path
        fill={green}
        d="M270.92,572.15c-22.26-25.74-36.88-56.98-45.43-89.96-6.1-23.52-6.97-46.68-3.92-70.79,3.29-26.44,10.41-50.93,20.05-75.65,6.69-17.16,13.45-33.16,18.97-51.4,32.88,39.21,58.84,80.94,63.48,133.2,2.63,43.83-13.77,85.41-43.98,116.89-10.37,10.24-13.15,21.82-9.16,37.7Z"
      />

      {/* ── Dark forest green element (left arc + bottom wave) ── */}
      <g>
        <path
          fill={dark}
          d="M193.25,323.2c.02-.31.04-.59.03-.8-.43-.24-.85-.36-1.23-.36.46.22.86.6,1.2,1.16Z"
        />
        <path
          fill={dark}
          d="M236.82,308.56l11.2-33.01c-26.94-37.27-49.09-77.33-38.98-126.01-59.4,49.77-100.42,115.99-109.26,193.52-10.71,93.94,45.96,180.92,136.07,207.41-13.62-27.61-22.66-53.39-29.15-81.95-9.58-42.87-15.39-85.81-17.85-128.99-1.41-1.85-.82-4.78-.82-7.63,0-19.41-2.23-37.81-.7-57.33l7.13,52.91c3.35,24.89,6.58,50.04,12.79,74.85,9.09-33.01,17.91-63.18,29.57-93.77Z"
        />
      </g>

      {/* ── Dark forest green bottom wave ── */}
      <g>
        <path
          fill={dark}
          d="M355.58,715.61c-34.04-8.52-66.21-19.4-95.04-39.98,92.23,30.79,197.15,25.92,261.78-50.47,15.04-17.77,25.93-42.88,9.57-59.18-20.96-20.87-56.58-4.57-78.91,12.15l-37.03,27.74c-33.1,24.79-97.7,56.12-137.14,54.77-13.2-.45-25.69-5.19-37.85-10.16-29.06-11.9-54.54-29.02-77.62-50.41-52.99-49.13-85.41-118.27-85.88-191.3,5.51,28.96,13.36,56.7,27.86,82.97,23.36,42.31,59.8,75.76,104.45,94.19,35.1,13.75,72.12,13.26,106.51-1.51,24.79-10.65,46.6-24.7,66.32-43.06l34.77-32.36c15.38-14.31,30.62-27.38,48.68-38.33,49.15-29.79,114.99-35.07,155.03,8.59,29.88,32.58,31.05,81.83,13.79,121.78-9.88,22.87-24.36,42.44-42.89,58.95-63.01,56.14-153.71,75.05-236.41,55.61Z"
        />
        <path
          fill={dark}
          d="M487.09,633.43c-43.42,40.51-125.8,59-181.04,40.36,39.09-12.04,74.72-27.16,107.51-49.16l27.97-20.65c14.73-10.87,38.51-18.63,48.63-6.18,8.56,10.53,6.86,26.37-3.07,35.63Z"
        />
      </g>
    </svg>
  )
}

interface LogoProps {
  variant?: 'color' | 'white'
  showIsotipo?: boolean
  showWordmark?: boolean
  isotipoSize?: number
  className?: string
  layout?: 'horizontal' | 'vertical'
}

export default function Logo({
  variant = 'color',
  showIsotipo = true,
  showWordmark = true,
  isotipoSize = 44,
  className = '',
  layout = 'horizontal',
}: LogoProps) {
  const nameColor = variant === 'white' ? 'text-white'    : 'text-forest'
  const subColor  = variant === 'white' ? 'text-white/70' : 'text-gold'
  const tagColor  = variant === 'white' ? 'text-white/50' : 'text-forest/50'
  const lineColor = variant === 'white' ? 'bg-white/30'   : 'bg-gold/50'

  const isVertical = layout === 'vertical'

  return (
    <div
      className={`flex ${isVertical ? 'flex-col items-center gap-3' : 'flex-row items-center gap-3'} ${className}`}
    >
      {showIsotipo && <Isotipo variant={variant} size={isotipoSize} />}

      {showWordmark && (
        <div className={`flex flex-col leading-none ${isVertical ? 'items-center' : 'items-start'}`}>
          <span
            className={`font-serif font-light tracking-[0.2em] uppercase ${nameColor}`}
            style={{ fontSize: isotipoSize * 0.52 }}
          >
            CHEMUYIL
          </span>
          <div className={`flex items-center gap-1.5 mt-0.5 ${isVertical ? 'justify-center' : ''}`}>
            <span className={`h-px w-4 ${lineColor}`} />
            <span
              className={`font-sans font-medium tracking-[0.35em] uppercase ${subColor}`}
              style={{ fontSize: isotipoSize * 0.22 }}
            >
              RESIDENCIAL
            </span>
            <span className={`h-px w-4 ${lineColor}`} />
          </div>
          <span
            className={`font-sans font-medium tracking-[0.3em] uppercase mt-0.5 ${tagColor}`}
            style={{ fontSize: isotipoSize * 0.17 }}
          >
            CIUDAD SUSTENTABLE
          </span>
        </div>
      )}
    </div>
  )
}

export { Isotipo }
