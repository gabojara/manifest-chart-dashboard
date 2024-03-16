interface Props {
  className?: string
  isBadged?: boolean
}

export const ChatIcon = ({ className, isBadged }: Props) => {
  return isBadged === true ? (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_1223)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.6319 19.5699C16.5758 22.6263 12.0503 23.2867 8.34696 21.574C7.80025 21.3539 7.35203 21.176 6.92592 21.176C5.73904 21.183 4.26171 22.3339 3.49391 21.567C2.7261 20.7991 3.87781 19.3206 3.87781 18.1266C3.87781 17.7004 3.70696 17.2602 3.48687 16.7124C1.77338 13.0096 2.43466 8.48269 5.49081 5.42721C9.39214 1.52443 15.7306 1.52443 19.6319 5.4262C23.5403 9.33501 23.5332 15.6681 19.6319 19.5699Z"
          stroke="#6F7274"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.4999 12.913H16.5089"
          stroke="#6F7274"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.4909 12.913H12.4999"
          stroke="#6F7274"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.48193 12.913H8.49093"
          stroke="#6F7274"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20.2753" cy="4.78528" r="4.28528" fill="#EF0B0B" />
      </g>
      <defs>
        <clipPath id="clip0_1_1223">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.560547 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6319 17.5699C14.5758 20.6263 10.0503 21.2867 6.34696 19.574C5.80025 19.3539 5.35203 19.176 4.92592 19.176C3.73904 19.183 2.26171 20.3339 1.49391 19.567C0.7261 18.7991 1.87781 17.3206 1.87781 16.1266C1.87781 15.7004 1.70696 15.2602 1.48687 14.7124C-0.226622 11.0096 0.434656 6.48269 3.49081 3.42721C7.39214 -0.475568 13.7306 -0.475568 17.6319 3.4262C21.5403 7.33501 21.5332 13.6681 17.6319 17.5699Z"
        stroke="#6F7274"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4999 10.913H14.5089"
        stroke="#6F7274"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4909 10.913H10.4999"
        stroke="#6F7274"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.48193 10.913H6.49093"
        stroke="#6F7274"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
