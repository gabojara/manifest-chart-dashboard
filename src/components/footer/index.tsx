import cx from 'classnames'

interface Props {
  className?: string
}
export const Footer = ({ className }: Props) => {
  return (
    <div
      className={cx(
        'flex w-full items-center gap-12 tablet:justify-between bg-white px-32 py-12 mobile:py-16 tablet:py-24 text-[16px] leading-[120%] tablet:flex-row flex-col shadow-sdSoft',
        className
      )}
    >
      <span>Manifest, Transcend Labs Inc. 2024</span>
      <div className="flex gap-16">
        <span>Home</span>
        <span>About</span>
        <span>Waitlist</span>
        <span>Instagram</span>
        <span>Contact</span>
      </div>
    </div>
  )
}
