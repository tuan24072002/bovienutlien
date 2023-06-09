import './InformationStyle.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import post1 from '../assets/images/kenh-mua-ban-bo-vien-pho-mai-gia-truyen-300x300.jpg';
import post2 from '../assets/images/mua-bo-vien-quan-4-o-dau-ngon-300x300.jpg';
import post3 from '../assets/images/mua-bo-vien-gia-si-gia-ban-le-tiem-nha-ut-300x300.jpg';
import post4 from '../assets/images/thit-bo-cho-be-an-dam-300x300.jpg';
function Information() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className='information'>
                <Carousel responsive={responsive} className='carousel'>
                    <div className='post'>
                        <div className='post-image'>
                            <div className='image'>
                                <img src={post1} alt='' />
                                <div className='more'><p>Xem thêm</p></div>
                                <div className='title'>
                                    <p>TIỆM NHÀ ÚT – KÊNH MUA BÁN BÒ VIÊN PHÔ MAI THƠM NGON GIA TRUYỀN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='post'>
                        <div className='post-image'>
                            <div className='image'>
                                <img src={post2} alt='' />
                                <div className='more'><p>Xem thêm</p></div>
                                <div className='title'>
                                    <p>TIỆM NHÀ ÚT – KÊNH MUA BÁN BÒ VIÊN PHÔ MAI THƠM NGON GIA TRUYỀN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='post'>
                        <div className='post-image'>
                            <div className='image'>
                                <img src={post3} alt='' />
                                <div className='more'><p>Xem thêm</p></div>
                                <div className='title'>
                                    <p>TIỆM NHÀ ÚT – KÊNH MUA BÁN BÒ VIÊN PHÔ MAI THƠM NGON GIA TRUYỀN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='post'>
                        <div className='post-image'>
                            <div className='image'>
                                <img src={post4} alt='' />
                                <div className='more'><p>Xem thêm</p></div>
                                <div className='title'>
                                    <p>TIỆM NHÀ ÚT – KÊNH MUA BÁN BÒ VIÊN PHÔ MAI THƠM NGON GIA TRUYỀN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}
export default Information;