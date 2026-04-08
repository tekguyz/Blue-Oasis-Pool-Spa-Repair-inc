import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16, // Dropped from 22 to give the letters room
          background: '#141E33',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00AEEF',
          fontWeight: 800, // 900 is too heavy for a 32px icon; 800 stays cleaner
          borderRadius: '6px', // Solid pixel value looks better than % at this scale
          border: '1.5px solid #F27D26', // Thinner border so it doesn't crowd the text
          lineHeight: 1,
          paddingTop: '1px', // Fine-tuning the vertical alignment
        }}
      >
        BO
      </div>
    ),
    { ...size }
  );
}