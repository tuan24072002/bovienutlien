import './IndexStyle.scss';
import logoindex from '../assets/images/san-pham-ut-lien-1554-476-1-1024x314.png';
import product1 from '../assets/images/bo-vien-frame-1.jpg';
import product2 from '../assets/images/ut-lien-thit-bo.jpg';
import product3 from '../assets/images/ut-lien-cha-lua-da-dang.jpg';
import product4 from '../assets/images/cau-chuyen-ut-lien-khoi-nghiep.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NewProducts from './NewProducts';
import Information from './Information';
function Index() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className='index'>
                <div className='background-second'>
                    <div className='image-logo-index'>
                        <div className='logo-index'>
                            <img src={logoindex} alt='logoindex' />
                        </div>
                        <div className='product-index'>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product1} alt='' />
                                </div>
                                <p>BÒ VIÊN GÂN</p>
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product2} alt='' />
                                </div>
                                <p>THỊT BÒ TƯƠI</p>
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product3} alt='' />
                                </div>
                                <p>CHẢ LỤA - CHẢ BÒ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='background-third'>
                    <Carousel responsive={responsive} className='carousel'>
                        <div className='product'>
                            <img src={product4} alt='' />
                        </div>
                        <div className='product'>
                            <img src={product1} alt='' />
                        </div>
                        <div className='product'>
                            <img src={product1} alt='' />
                        </div>
                    </Carousel>
                    <div className='story'>
                        <div className='title'>
                            <p >GIA TRUYỀN BÒ VIÊN ÚT LIÊN</p>
                        </div>
                        <div className='content'>
                            <p>Ở Út Liên cũng vậy, suốt 40 năm ròng rã tạo thành sản phẩm và tạo dựng thương hiệu. Đến nay, bò viên Út Liên nổi tiếng 3 không, “đi vào lòng” những ai từng một lần trải nghiệm, dù chỉ là nếm thử. Giữ nguyên một hương vị nhưng chúng tôi chắc chắn rằng thời nào cũng vậy, bò viên gân Út Liên vẫn là món ăn đậm vị truyền thống nhưng vẫn hợp thời. Hãy cùng tìm hiểu ưu điểm bò viên 3 không có tại Út Liên.</p>
                        </div>
                        <div className='button'>
                            <a href='/cauchuyen'>Xem thêm</a>
                        </div>
                    </div>
                </div>
                <div className='background-second'>
                    <div className='title'>
                        <a href='/'>SẢN PHẨM MỚI</a>
                    </div>
                    <NewProducts />
                    <div className='title'>
                        <a href='/'>THÔNG TIN VÀ CHƯƠNG TRÌNH KHUYẾN MÃI</a>
                    </div>
                    <Information />
                    <div className='title'>
                        <a href='/'>QUY TRÌNH MUA HÀNG ONLINE</a>
                    </div>
                    <div style={{ paddingBottom: "3%" }}>
                        <div className='procedure'></div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default Index;