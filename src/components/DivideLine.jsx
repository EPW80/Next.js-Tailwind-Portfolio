import { RiMoreLine } from 'react-icons/ri'

const DivideLine = () => {
  return (
    <div className="relative mx-auto flex w-4/5 items-center py-16 md:py-24">
      <div className="flex-grow border-t border-primaryText-200 dark:border-primaryText-600"></div>
      <span className="mx-4 flex-shrink text-primaryText-400 dark:border-primaryText-800">
        <RiMoreLine />
      </span>
      <div className="flex-grow border-t border-primaryText-200 dark:border-primaryText-600"></div>
    </div>
  )
}

export default DivideLine
