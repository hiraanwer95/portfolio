export function KenAvatar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Portrait placeholder"
    >
      <rect x="10" y="10" width="400" height="400" rx="200" fill="#f3c6dd" />
      <path
        d="M266 311c-25 14-48 19-73 19-28 0-53-6-79-21 10-35 39-58 79-58 40 0 67 22 73 60Z"
        fill="#e45447"
        opacity="0.35"
      />
      <path
        d="M122 170c0-58 46-105 103-105 57 0 103 47 103 105 0 58-46 105-103 105-57 0-103-47-103-105Z"
        fill="#2b2929"
        opacity="0.1"
      />
      <path
        d="M145 170c0-46 36-84 80-84s80 38 80 84-36 84-80 84-80-38-80-84Z"
        fill="#d8c7b8"
      />
      <path
        d="M164 160c9-22 29-36 60-36 34 0 55 16 64 40-8-40-36-66-73-66-36 0-62 23-71 62 4 7 10 10 20 0Z"
        fill="#2b2929"
      />
      <path
        d="M190 190c10-6 21-9 34-9 13 0 25 3 35 9"
        stroke="#58595b"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M201 224c7 8 15 12 24 12 10 0 18-4 25-12"
        stroke="#58595b"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.6"
      />
      <rect
        x="10"
        y="10"
        width="400"
        height="400"
        rx="200"
        stroke="#2b2929"
        opacity="0.12"
        strokeWidth="8"
      />
    </svg>
  )
}

