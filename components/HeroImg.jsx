import Image from 'next/image'

const HeroImg = ({containerStyles , imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
        <Image
            src={imgSrc}
            fill 
            alt=''
            priority

        />
    </div>
  )
}

export default HeroImg