import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper";

// Sponsors import
import Commas from '../../../../public/sponsors/3commas.svg'
import Celo from '../../../../public/sponsors/celo.svg'
import Crypto from '../../../../public/sponsors/crypto.svg'
import Nexo from '../../../../public/sponsors/nexo.svg'
import Paxful from '../../../../public/sponsors/paxful.svg'
import Unstoppable from '../../../../public/sponsors/Unstoppable.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const Index = () => {
    const media = [
        {
            title: '3Commas',
            img: Commas,
            link: 'https://3commas.io/'
        },
        {
            title: 'Celo',
            img: Celo,
            link: 'https://celo.org/'
        },
        {
            title: 'Crypto Hustle',
            img: Crypto,
            link: 'https://cryptohustle.com/'
        },
        {
            title: 'Nexo',
            img: Nexo,
            link: 'https://nexo.io/'
        },
        {
            title: 'Paxful',
            img: Paxful,
            link: 'https://paxful.com/'
        },
        {
            title: 'Unstoppable Domains',
            img: Unstoppable,
            link: 'https://unstoppabledomains.com/'
        },
        {
            title: 'Paxful',
            img: Paxful,
            link: 'https://paxful.com/'
        },
        {
            title: 'Unstoppable Domains',
            img: Unstoppable,
            link: 'https://unstoppabledomains.com/'
        },
        
    ]

    return (
        <section className="text-white  py-[20px] max-md:py-[30px] max-sm:py-[10px] sponsor-swiper">
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    centeredSlides={true}
                    loop={true}
                    speed={2000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    preventInteractionOnTransition
                    modules={[Autoplay, FreeMode, Navigation]}
                    className="my-swiper-css"
                >
                    {media.map((item, i) => {
                        return (
                            <SwiperSlide key={i} className="min-w-[100px] w-[224px] h-[70px] select-none">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={223}
                                    height={100}
                                    draggable={false}
                                    className={"w-[224px] h-[70px]"} />
                            </SwiperSlide>
                        );
                    })}

                </Swiper>
            </div>
        </section>
    )
}

export default Index