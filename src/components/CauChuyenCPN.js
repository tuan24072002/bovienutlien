import './CauChuyenStyle.scss';
import poster from '../assets/images/cau-chuyen-ut-lien-khoi-nghiep.jpg';
import admin from '../assets/images/56676857a5bab4f339a0890712eccee7.png';
import post1 from '../assets/images/mua-bo-vien-gia-si-gia-ban-le-tiem-nha-ut-300x300.jpg';
import post2 from '../assets/images/thit-bo-cho-be-an-dam-300x200.jpg';
import post3 from '../assets/images/cha-lua-lam-mon-gi-ngon-300x200.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const CauChuyenCPN = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
            <div className='cauchuyen-container'>
                <div className='cauchuyenall'>
                    <div className='cauchuyen'>
                        <div className='poster'>
                            <img src={poster} alt='poster' />
                        </div>
                        <div className='title1'>CÂU CHUYỆN KHỎI NGHIỆP ÚT LIÊN</div><br />
                        <div className='date'>Tháng Năm 14, 2021 / <i class="fa-solid fa-eye"></i> 849 / <i class="fa-regular fa-message fa-flip-horizontal"></i> 0</div>
                        <div className='title2'><h2>CÂU CHUYỆN KHỞI NGHIỆP ÚT LIÊN</h2></div>
                        <div className='content'>
                            Cùng khám phá ngay câu chuyện vào nghề cũng như hành trình tạo dựng và phát triển của thương hiệu Út Liên, Cái tên quen thuộc đối với nhiều người bởi lẽ đó chính là sự kết hợp giữa “vai vế” của người ba và cái tên của người mẹ”. Út là thành viên sinh ra trong gia đình có 10 anh chị em với Nghề gia truyền bán thịt bò gia truyền.
                            <h3><li>NĂM 1980:</li></h3>
                            Bắt đầu chặn hành trình làm bò viên của Người em (Út) ra ngoài làm một mình với sự hỗ trợ của người ông quá cố.
                            <h3><li>NĂM 1981:</li></h3>
                            Út đã chế tạo thành công chiếc cối xay thịt đầu tiên (cối 32 Tiệp khắc cùng với chiếc mô-tưa tự chế).
                            <h3><li>NĂM 1982:</li></h3>
                            Được sự hướng dẫn của một người anh (thứ 3). Sau đó người em Út đã làm ra được mẻ bò viên đầu tiên cùng với anh em trong gia đình.
                            <h3><li>NĂM 1995:</li></h3>
                            Gia đình từ giai đoạn này làm ăn phát đạt. Cộng thêm nhận được nhiều sự hỗ trợ của người các anh chị em thân thuộc.
                            <h3><li>NĂM 1996:</li></h3>
                            Út Liên đã thành công vào thời điểm này và mua được một chỗ bán tại chợ Xóm Chiếu lúc bây giờ (Sạp 121).
                            <h3><li>NĂM 1997:</li></h3>
                            Dựa trên các mối khách hàng, Út Liên ước tính phân phối chuyên sỉ 100kg cho các xe cá viên, bò viên toàn thành phố.
                            <h3><li>NĂM 2021:</li></h3>
                            Cũng từ sự hài lòng và những động viên từ phía khách hàng, theo thời gian, người con kế nhiệm – chính là con trai duy nhất của người em họ Út quyết tâm đem thương hiệu nhân rộng các kênh online.
                            <br />
                            <p>— — — — — — — — — — — — — — — — — –</p>
                            <div className='contact'>
                                <h3 >THÔNG TIN LIÊN HỆ</h3>
                                <a href='https://utlien.vn/'>Website: www.utlien.vn</a><br />
                                <br />
                                <a href='https://www.facebook.com/utlienbovienchalua'>Fanpage: Út Liên</a>
                                <p>HOTLINE: (+84) <b>906 497 975</b></p>
                                <p style={{ color: "#555555" }}>Tận tâm cung cấp cho khách hàng các loại bò viên, thịt bò, chả lụa số lượng theo yêu cầu.</p>
                                <div className='facebook'><a href='https://www.facebook.com/sharer.php?u=https%3A%2F%2Futlien.vn%2Fcau-chuyen-khoi-nghiep-ut-lien%2F&images=https%3A%2F%2Futlien.vn%2Fwp-content%2Fuploads%2F2021%2F05%2Fcau-chuyen-ut-lien-khoi-nghiep.jpg' ><i class="fa-brands fa-facebook"></i></a></div>
                            </div>
                            <div className='about-author'>
                                <p>ABOUT AUTHOR</p>
                                <div style={{ display: "flex" }}>
                                    <div style={{ marginRight: "30px" }}><img src={admin} alt='admin' width={"100px"} /></div>
                                    <div style={{ marginTop: "-30px" }}>
                                        <p className='admin'>ADMIN</p>
                                        <a href='/'>Other posts by admin</a>
                                    </div>
                                </div>
                            </div>
                            <div className='related-posts'>
                                <p>RELATED POSTS</p>
                                <Carousel responsive={responsive}>

                                    <div className='post-card'>
                                        <div className='post-image'>
                                            <img src={post1} alt='' />
                                        </div>
                                        <h4>CẬP NHẬT CHỖ MUA BÒ VIÊN GIÁ SỈ NGON GIÚP KHÁCH KINH DOANH QUÁN ĐẮT KHÁCH</h4>
                                        <p className='date'>Tháng Năm 5, 2023 <i class="fa-regular fa-message fa-flip-horizontal"></i> 0</p><br />
                                        <p className='content'>Bạn là chủ một nhà hàng, cơ sở kinh doanh thức ăn muốn tìm mua bò viên giá sỉ ngon. Hãy cùng chúng tôi theo...</p>
                                        <a href='/'>Continue Reading</a>
                                    </div>
                                    <div className='post-card'>
                                        <div className='post-image'>
                                            <img src={post2} alt='' />
                                        </div>
                                        <h4>LỰA CHỌN THỊT BÒ CHO BÉ ĂN DẶM PHẦN NÀO NGON GIÀU DINH DƯỠNG</h4>
                                        <p className='date'>Tháng Mười Hai 14, 2022 <i class="fa-regular fa-message fa-flip-horizontal"></i> 0</p><br />
                                        <p className='content'>Thịt bò cho bé ăn dặm loại nào ngon không phải mẹ nào cũng biết. Mặc dù thịt này rất giàu đạm, sắt nhưng hàm...</p>
                                        <a href='/'>Continue Reading</a>
                                    </div>
                                    <div className='post-card'>
                                        <div className='post-image'>
                                            <img src={post3} alt='' />
                                        </div>
                                        <h4>CHẢ LỤA LÀM MÓN GÌ NGON AI CŨNG THÍCH? XEM NGAY!</h4>
                                        <p className='date'>Tháng Mười Hai 14, 2022 <i class="fa-regular fa-message fa-flip-horizontal"></i> 0</p><br />
                                        <p className='content'>Chả lụa làm món gì ngon đang là thắc mắc của rất nhiều người. Bạn muốn thay đổi thực đơn cho gia đình nhưng chưa...</p>
                                        <a href='/'>Continue Reading</a>
                                    </div>
                                </Carousel>
                            </div>
                            <div className='leave-a-reply'>
                                <div><h4>LEAVE A REPLY</h4></div>
                                <p>Your email address will not be published. Required fields are marked</p>
                                <textarea placeholder='Comment'></textarea>
                            </div>
                            <span>
                                <input placeholder='Your name(required)' />
                                <input placeholder='Your mail(required)' />
                                <input placeholder='Your website' />
                            </span>
                            <div className='checkbox'>
                                <input type='checkbox' id='myCheckBox' />
                                <label for='myCheckBox' >Save my name, email, and website in this browser for the next time I comment.</label>
                            </div>
                            <div>
                                <button className='btn btn-dark'>Phản hồi</button>
                            </div>


                        </div>
                    </div>
                    <div className='category'>
                        <div className='title1'>CATEGORIES</div>
                        <p>Blog</p>
                        <p>Bò viên gân</p>
                        <p>Các loại chả</p>
                        <p>Khách hàng sỉ</p>
                        <p>Thịt bò tươi</p>
                        <p>Uncategorized</p>
                        <div className='title2'>SEARCH</div>
                        <div className='search'>
                            <form className="search-form-category">
                                <input type="text" placeholder="Search..." />
                                <button type="submit">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </form>
                        </div>
                        <div className='title3'>PRODUCT TAGS</div>
                        <div className='product-tags'>
                            <div><a href='/'>bò thân</a><a href='/'>bò viên</a></div>
                            <div><a href='/'>bò viên gân</a></div>
                            <div><a href='/'>bò viên gân Út Liên</a></div>
                            <div><a href='/'>bò viên khủng lồ Út Liên</a></div>
                            <div><a href='/'>bò viên phô mai Út Liên</a></div>
                            <div><a href='/'>bò viên thìa là</a><a href='/'>nạm</a></div>
                            <div><a href='/'>nạm bò</a><a href='/'>Phô mai</a></div>
                            <div><a href='/'>Thịt bò</a><a href='/'>thịt bò nạm</a></div>
                            <div><a href='/'>Thịt bò tươi Út Liên</a></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default CauChuyenCPN;