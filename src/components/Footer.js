import './FooterStyle.scss';
import logo from '../assets/images/logo.png';
function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='top'>
                    <a href='/'><img src={logo} alt='footer' /></a>
                </div>
                <div className='bottom'>
                    <div>
                        <h4>CHI NHÁNH</h4>
                        <p>Cửa hàng 1: 187/7 Hoàng Hoa Thám, Phường 6, Quận Bình Thạnh, TP.HCM</p>
                        <p>Cửa hàng 2: 164 Lê Quốc Hưng, Phường 13, Quận 4, TP.HCM</p>
                        <p>Hotline: 0347 525 036 (Ms.Nghi) –  0906 497 975 (Mr.Lâm)</p>
                        <p>Facebook: Út Liên – Út Liên bò viên ngon sỉ & lẻ</p>
                        <p>Kênh thương mại điện tử: Shopee, Baemin, BeFood, GrabFood, GrabMart</p>
                        <span className='social'>
                            <a href='/'><i class="fa-brands fa-facebook"></i></a>
                            <a href='/'><i class="fa-brands fa-instagram"></i></a>
                            <a href='/'><i class="fa-brands fa-youtube"></i></a>
                        </span>
                    </div>
                    <div>
                        <h4>CHỌN NGAY MENU</h4>
                        <a href='/'>Home</a>
                        <a href='/'>Liên hệ</a>
                        <a href='/'>Câu chuyện</a>
                        <a href='/'>Trở thành đại lý</a>
                        <a href='/'>Quy trình mua hàng</a>
                        <a href='/'>Chính sách đổi trả</a>
                    </div>
                    <div className='address'>
                        <h4>ĐỊA CHỈ HÀNG ÚT LIÊN</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.481218004852!2d106.706022!3d10.763718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175291e940ff18b%3A0xa1a926e9112c0f75!2zQsOyIFZpw6puIE5nb24gUXXhuq1uIDQgLSDDmnQgTGnDqm4!5e0!3m2!1sen!2s!4v1686130918931!5m2!1sen!2s"
                            width="600"
                            height="450"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;