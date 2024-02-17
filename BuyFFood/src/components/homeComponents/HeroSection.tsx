import {bannertea} from '../../assets/photo/index';

const HeroSection = () => {
  return (
    <div>
        <div className="w-full md:h-[100vh] min-h-[400px] h-[60vh] flex items-center md:bg-cover  bg-cover bg-center "  style={{ backgroundImage: `url(${bannertea})` }}>
                <div className=''>

                <div className='Herro-body pl-3   font-Notoserif'>
                    <h1 className='font-bold md:text-6xl font-DancingFont text-4xl' 
                    style={{textShadow: '0px 0px 0px #000000'}}>The Magic of Tea</h1>
                    <p className='md:w-3/6 w-5/6 mt-4   font-light  md:text-2xl text-base' style={{textShadow: '0px 0px 0px #000000'}} > sit amet consectetur adipisicing elit. In nostrum eos expedita unde, quam quae a voluptatibus vero tempora, qui at optio ut sapiente blanditiis fugit </p>
                </div>
                </div>
        </div>
    </div>
  )
}

export default HeroSection