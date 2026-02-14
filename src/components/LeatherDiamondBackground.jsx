import { memo } from 'react'
const LeatherDiamondBackground = memo(function LeatherDiamondBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #1a0f08 0%, #1e1209 30%, #1a0f08 100%)',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 30%, rgba(92, 58, 32, 0.12) 30%, rgba(92, 58, 32, 0.12) 32%, transparent 32%),
              linear-gradient(-45deg, transparent 30%, rgba(92, 58, 32, 0.12) 30%, rgba(92, 58, 32, 0.12) 32%, transparent 32%),
              linear-gradient(45deg, transparent 68%, rgba(92, 58, 32, 0.12) 68%, rgba(92, 58, 32, 0.12) 70%, transparent 70%),
              linear-gradient(-45deg, transparent 68%, rgba(92, 58, 32, 0.12) 68%, rgba(92, 58, 32, 0.12) 70%, transparent 70%)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 38px,
              rgba(122, 79, 43, 0.08) 38px,
              rgba(122, 79, 43, 0.08) 40px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 38px,
              rgba(122, 79, 43, 0.08) 38px,
              rgba(122, 79, 43, 0.08) 40px
            )
          `,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse 28px 28px at 40px 40px,
              rgba(201, 169, 110, 0.04) 0%,
              rgba(92, 58, 32, 0.02) 40%,
              transparent 70%
            )
          `,
          backgroundSize: '80px 80px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle 1.5px at 40px 0px, rgba(201, 169, 110, 0.15) 0%, transparent 100%),
            radial-gradient(circle 1.5px at 0px 40px, rgba(201, 169, 110, 0.15) 0%, transparent 100%),
            radial-gradient(circle 1.5px at 80px 40px, rgba(201, 169, 110, 0.15) 0%, transparent 100%),
            radial-gradient(circle 1.5px at 40px 80px, rgba(201, 169, 110, 0.15) 0%, transparent 100%)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 30%, rgba(26, 15, 8, 0.5) 100%),
            linear-gradient(180deg, rgba(26, 15, 8, 0.3) 0%, transparent 15%, transparent 85%, rgba(26, 15, 8, 0.3) 100%)
          `,
        }}
      />
    </div>
  )
})
export default LeatherDiamondBackground