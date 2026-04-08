import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: '#141E33', // Deep Navy (converted from oklch(25% 0.08 264))
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00AEEF', // Sky Blue (converted from oklch(65% 0.14 220))
          fontWeight: 900,
          borderRadius: '20%',
          border: '2px solid #F27D26', // Warm Orange border (converted from oklch(72% 0.16 50))
        }}
      >
        BO
      </div>
    ),
    { ...size }
  );
}
