import IconStar from '../assets/star.png'
import IconStarHalf from '../assets/starHalf.png'
import itemTemp from '../assets/itemTemp.jpg'
import itemPlay from '../assets/itemPlay.png'

const Baner = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
        items.push(<div key={i}>
            <img src={IconStar} alt="rating" className='w-8 h-8' />
        </div>);
    }

    return (
        <div className="w-full h-[600px] bg-banner bg-center
         bg-no-repeat bg-cover relative">
            <div className="w-full h-full flex items-center 
            justify-center space-x-[30px] p-4 relative z-20">
                <div className='w-[50%] flex flex-col space-y-5 space-x-5 items-baseline'>
                    <p className="text-white bg-gradient-to-r from-pink-600
                     to-pink-300 text-lg py-2 px-3 rounded-md">TV Show</p>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-white text-[40px] font-bold">Nghe Nói Em Thích Tôi</h2>
                        <div className="flex items-center space-x-3">
                            {items}
                            <img src={IconStarHalf} alt="rating" className='w-8 h-8' />
                        </div>
                        <p className='text-white'>The plot of Heard You Like Me brings a unique and new twist compared to familiar love stories,
                            revolving around the broken-mirror love story between the male and female leads. After 6 years of divorce, they reunited and gradually began to rebuild their relationship,
                            gradually healing old wounds and becoming better versions of themselves.</p>
                        <div className='flex items-center space-x-4'>
                            <button className='p-3 text-white bg-black 
                            font-bold text-lg rounded-md' >Details</button>
                            <button className='p-3 text-white bg-pink-600 font-bold text-lg rounded-md' >Watch</button>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] flex items-center justify-center'>s
                    <div className='w-[300px] h-[400px] relative group cursor-pointer'>
                        <img src={itemTemp}
                            alt='temp'
                            className='w-full h-full object-cover' />
                        <div className='w-full h-full absolute top-0 left-0 
                        flex items-center justify-center 
                        backdrop-blur-sm opacity-0 group-hover:opacity-100 
                        transition-opacity ease-in-out'>
                            <img src={itemPlay} alt="play" className='w-16 h-16' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baner;