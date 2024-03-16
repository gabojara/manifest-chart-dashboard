interface Props {
  className?: string
  height?: number
  width?: number
}

export const SearchIcon = ({ height, width, className }: Props) => (
  <svg
    width={height?.toString() ?? '16'}
    height={width?.toString() ?? '17'}
    viewBox="0 0 16 17"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.75 15.25L10.25 10.75M11.75 7C11.75 7.68944 11.6142 8.37213 11.3504 9.00909C11.0865 9.64605 10.6998 10.2248 10.2123 10.7123C9.7248 11.1998 9.14605 11.5865 8.50909 11.8504C7.87213 12.1142 7.18944 12.25 6.5 12.25C5.81056 12.25 5.12787 12.1142 4.49091 11.8504C3.85395 11.5865 3.2752 11.1998 2.78769 10.7123C2.30018 10.2248 1.91347 9.64605 1.64963 9.00909C1.3858 8.37213 1.25 7.68944 1.25 7C1.25 5.60761 1.80312 4.27226 2.78769 3.28769C3.77226 2.30312 5.10761 1.75 6.5 1.75C7.89239 1.75 9.22774 2.30312 10.2123 3.28769C11.1969 4.27226 11.75 5.60761 11.75 7Z"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
