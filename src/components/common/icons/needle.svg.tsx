interface Props {
  className?: string
  height?: number
  width?: number
}

export const Needle = ({ className, height, width }: Props) => (
  <svg
    width={width ?? '76'}
    height={height ?? '19'}
    viewBox="0 0 76 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M75.3474 8.39047L15.2207 16.1683L14.9127 3.55727L75.3474 8.39047Z"
      fill="#6F7274"
    />
    <circle
      cx="9.45509"
      cy="9.53365"
      r="6.7644"
      transform="rotate(49.0087 9.45509 9.53365)"
      fill="#242328"
      stroke="#6F7274"
      strokeWidth="5"
    />
  </svg>
)
