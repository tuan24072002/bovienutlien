import './ThongTinTTStyle.scss';
import post1 from '../assets/images/kenh-mua-ban-bo-vien-pho-mai-gia-truyen-1024x683.jpg';
import post2 from '../assets/images/mua-bo-vien-quan-4-o-dau-ngon-768x1024.jpg';
import post3 from '../assets/images/mua-bo-vien-gia-si-gia-ban-le-tiem-nha-ut.jpg';
import post4 from '../assets/images/thit-bo-cho-be-an-dam-1024x683.jpg';
import post5 from '../assets/images/cha-lua-lam-mon-gi-ngon-1024x682.jpg';
import post6 from '../assets/images/than-bo-ut-lien-thit-bo-han-quoc-tphcm-1.jpg';
import post7 from '../assets/images/thit-bo-bao-nhieu-1kg-1024x683.jpg';
import post8 from '../assets/images/cha-lua-mua-o-dau-ngon-1024x683.jpg';
import post9 from '../assets/images/bo-vien-xao-thom-ngon-1024x769.jpg';
const ThongTinTT = () => {
    return (
        <>
            <div className='thongtin-container'>
                <div className='thongtinall'>
                    <div className='thongtin'>
                        <div className='post-first'>
                            <div className='poster'>
                                <img src={post1} alt='poster' />
                            </div>
                            <div className='title'>TIỆM NHÀ ÚT – KÊNH MUA BÁN BÒ VIÊN PHÔ MAI THƠM NGON GIA TRUYỀN</div><br />
                            <div className='date'>Tháng Năm 25, 2023 / <i class="fa-solid fa-eye"></i> 46 / <i class="fa-regular fa-message fa-flip-horizontal"></i> 0</div>
                            <div className='content'>Giữ trọn hương vị gia truyền trong suốt 40 năm liền, Út Liên – tiệm nhà Út là kênh mua bán bò viên phô mai...</div>
                            <div className='more'>
                                <a href='/'>Continue Reading</a>
                            </div>
                        </div>
                        <div className='post'>
                            <div className='poster'>
                                <img src={post2} alt='poster' />
                            </div>
                            <div className='title'>MUA BÒ VIÊN QUẬN 4 Ở ĐÂU? NGON BỔ DƯỠNG, KHÔNG HÀN THE</div><br />
                            <div className='date'>Tháng Năm 10, 2023 / <i class="fa-solid fa-eye"></i> 35 / <i class="fa-regular fa-message fa-flip-horizontal"></i> 0</div>
                            <div className='content'>Cùng với chả bò thì bò viên cũng là một trong những sản phẩm làm từ thịt bò được đông đảo người dùng ưa chuộng....</div>
                            <div className='more'>
                                <a href='/'>Continue Reading</a>
                            </div>
                        </div>
                        <div className='post'>
                            <div className='poster'>
                                <img src={post3} alt='poster' />
                            </div>
                            <div className='title'>CẬP NHẬT CHỖ MUA BÒ VIÊN GIÁ SỈ NGON GIÚP KHÁCH KINH DOANH QUÁN ĐẮT KHÁCH</div><br />
                            <div className='date'>Tháng Năm 5, 2023 / <i class="fa-solid fa-eye"></i> 35 / <i class="fa-regular fa-message fa-flip-horizontal"></i> 0</div>
                            <div className='content'>Bạn là chủ một nhà hàng, cơ sở kinh doanh thức ăn muốn tìm mua bò viên giá sỉ ngon. Hãy cùng chúng tôi theo...</div>
                            <div className='more'>
                                <a href='/'>Continue Reading</a>
                            </div>
                        </div>
                        <div className='post'>
                            <div className='poster'>
                                <img src={post4} alt='poster' />
                            </div>
                            <div className='title'>LỰA CHỌN THỊT BÒ CHO BÉ ĂN DẶM PHẦN NÀO NGON GIÀU DINH DƯỠNG</div><br />
                            <div className='date'>Tháng Mười Hai 14, 2022 / <i class="fa-solid fa-eye"></i> 306 / <i class="fa-regular fa-message fa-flip-horizontal"></i> 0</div>
                            <div className='content'>Thịt bò cho bé ăn dặm loại nào ngon không phải mẹ nào cũng biết. Mặc dù thịt này rất giàu đạm, sắt nhưng hàm...</div>
                            <div className='more'>
                                <a href='/'>Continue Reading</a>
                            </div>
                        </div>
                        <div className='post'>
                            <div className='poster'>
                                <img src={post5} alt='poster' />
                            </div>
                            <div className='title'>CHẢ LỤA LÀM MÓN GÌ NGON AI ĂN CŨNG THÍCH? XEM NGAY!</div><br />
                            <div className='date'>Tháng Mười Hai 14, 2022 / <i class="fa-solid fa-eye"></i> 186 / <i class="fa-regular fa-message fa-flip-horizontal"></i> 0</div>
                            <div className='content'>Chả lụa làm món gì ngon đang là thắc mắc của rất nhiều người. Bạn muốn thay đổi thực đơn cho gia đình nhưng chưa...</div>
                            <div className='more'>
                                <a href='/'>Continue Reading</a>
                            </div>
                        </div>
                        <div className='post'>
                            <div className='poster'>
                                <img src={post6} alt='poster' />
                            </div>
                            <div className='title'>THỊT BÒ HÀN QUỐC LÀM CHẢ BÒ CÓ NGON KHÔNG? KHÁM PHÁ NGAY</div><br />
                            <div className='date'>Tháng Mười Một 8, 2022 / <i class="fa-solid fa-eye"></i> 161 / <i class="fa-regular fa-message fa-flip-horizontal"></i> 0</div>
                            <div className='content'>Thịt bò Hàn Quốc nhất là giống Hanwoo được xếp vào hàng “thượng đẳng”. Loại thịt này còn đắt hơn cả Wagyu hay Kobe của...</div>
                            <div className='more'>
                                <a href='/'>Continue Reading</a>
                            </div>
                        </div>
                        <div className='post'>
                            <div className='poster'>
                                <img src={post7} alt='poster' />
                            </div>
                            <div className='title'>THỊT BÒ BAO NHIÊU 1KG? CÁCH LÀM BÒ VIÊN TỪ THỊT TƯƠI NGON CHUẨN CƠM MẸ NẤU</div><br />
                            <div className='date'>Tháng Chín 21, 2022 / <i class="fa-solid fa-eye"></i> 161 / <i class="fa-regular fa-message fa-flip-horizontal"></i> 0</div>
                            <div className='content'>Nhiều người băn khoăn thịt bò bao nhiêu 1kg? Út Liên tận tình giải đáp ngay cho bạn 1kg thịt bò bao nhiêu tiền giúp...</div>
                            <div className='more'>
                                <a href='/'>Continue Reading</a>
                            </div>
                        </div>
                        <div className='post'>
                            <div className='poster'>
                                <img src={post8} alt='poster' />
                            </div>
                            <div className='title'>CHẢ LỤA MUA Ở ĐÂU NGON? XỨNG DANH CHẤT LƯỢNG LÀM NÊN THƯƠNG HIỆU</div><br />
                            <div className='date'>Tháng Chín 19, 2022 / <i class="fa-solid fa-eye"></i> 161 / <i class="fa-regular fa-message fa-flip-horizontal"></i> 0</div>
                            <div className='content'>Chả lụa mua ở đâu ngon đang là thắc mắc của rất nhiều khách hàng. Bởi vì tìm được địa chỉ cung cấp chả lụa,...</div>
                            <div className='more'>
                                <a href='/'>Continue Reading</a>
                            </div>
                        </div>
                        <div className='post'>
                            <div className='poster'>
                                <img src={post9} alt='poster' />
                            </div>
                            <div className='title'>BÒ VIÊN XÀO – GỢI Ý 4 CÁCH LÀM THƠM NGON NỨC MŨI</div><br />
                            <div className='date'>Tháng Chín 19, 2022 / <i class="fa-solid fa-eye"></i> 161 / <i class="fa-regular fa-message fa-flip-horizontal"></i> 0</div>
                            <div className='content'>Bò viên xào là cách chế biến được nhiều người yêu thích. Mỗi miếng bò viên dai vừa, đậm vị bò thanh ngọt lại thêm...</div>
                            <div className='more'>
                                <a href='/'>Continue Reading</a>
                            </div>
                        </div>
                        <div className='line'></div>
                        <div className='page'>
                            <div className='page-info'>Showing 1–10 of 51 posts</div>
                            <div className='page-number'>
                                <a className='one' href='/thongtin'>1</a>
                                <a href='/'>2</a>
                                <a href='/'>3</a>
                                <a href='/'>></a>
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
                            <div className='group-tags'>
                                <div><a href='/'>bò thân</a><a href='/'>bò viên</a></div>
                                <div><a href='/'>bò viên gân</a></div>
                                <div><a href='/'>bò viên gân Út Liên</a></div>
                                <div><a href='/'>bò viên khủng lồ Út Liên</a></div>
                            </div>
                            <div className='group-tags'>
                                <div><a href='/'>bò viên phô mai Út Liên</a></div>
                                <div><a href='/'>bò viên thìa là</a><a href='/'>nạm</a></div>
                                <div><a href='/'>nạm bò</a><a href='/'>Phô mai</a></div>
                            </div>
                            <div className='group-tags'>
                                <div><a href='/'>Thịt bò</a><a href='/'>thịt bò nạm</a></div>
                                <div><a href='/'>Thịt bò tươi Út Liên</a></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default ThongTinTT;