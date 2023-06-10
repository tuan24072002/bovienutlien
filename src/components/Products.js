import './ProductsStyle.scss';
import React, { useState } from 'react';
import product5 from '../assets/images/bo-vien-trung-muoi-ut-lien-tiem-nha-ut-300x300.jpg';
import product6 from '../assets/images/cha-lua-trung-bac-thao-tiem-nha-ut-300x300.jpg';
import product7 from '../assets/images/thit-bo-gan-dai-ngon-ut-lien-300x300.jpg';
import product8 from '../assets/images/ut-lien-thit-nam-bo-300x300.jpg';
import product9 from '../assets/images/mua-thit-bo-tuoi-ut-lien-300x300.jpg';
import product10 from '../assets/images/bo-vien-gan-ut-lien-ngon-quan-4-an-lien-1-300x300.jpg';
import product11 from '../assets/images/ut-lien-bo-vien-khong-lo-quan-4-CTA-300x300.jpg';
import product12 from '../assets/images/ut-lien-bo-vien-pho-mai-CTA-300x300.jpg';
import product13 from '../assets/images/bo-vien-thia-la-quan-4-CTA-300x300.jpg';
import product14 from '../assets/images/cha-lua-tu-chon-ngon-quan-4-300x300.jpg';
import product15 from '../assets/images/cha-lua-200gram-thom-ngon-nhieu-huong-vi-300x300.jpg';

function QuantityInput({ index }) {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        setQuantity(quantity + 1);
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="number-input">
            <button onClick={decrement}>-</button>
            <input type="number" min="0" value={quantity} readOnly />
            <button onClick={increment}>+</button>
            <div className="add-to-cart">
                <i className="fa-solid fa-cart-shopping fa-beat"></i>
            </div>
        </div>
    );
}
class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked });
    }
    render() {
        return (
            <div className='products-all'>
                <div className='category'>
                    <div className='title'><p>CATEGORY</p></div>
                    <div className='catalog'>
                        <p>Bài viết</p>
                        <p>Bò viên</p>
                        <p>Chả các loai</p>
                        <p>Sản phẩm</p>
                        <p>Thịt bò</p>
                    </div>
                </div>
                <div className='product-all' >
                    <div className='dropdown-and-sort'>
                        <div className='dropdownlist'>
                            <select id="dropdown">
                                <option value="">Thứ tự mặc định</option>
                                <option value="option1">Thứ tự theo mức độ phổ biến</option>
                                <option value="option2">Thứ tự theo điểm đánh giá</option>
                                <option value="option3">Mới nhất</option>
                                <option value="option4">Thứ tự theo giá: thấp đến cao</option>
                                <option value="option5">Thứ tự theo giá: cao xuống thấp</option>
                            </select>
                        </div>
                        <div className='icon-sort'>
                            <div className={this.state.clicked ? "list-active" : "grid-active"} onClick={this.handleClick}>
                                <div className='grid'>
                                    <span class="material-icons">
                                        apps
                                        {/* {this.state.clicked ? "view_list" : "apps"} */}
                                    </span>
                                </div>
                                <div className='list'>
                                    <span class="material-icons">
                                        view_list
                                        {/* {this.state.clicked ? "view_list" : "apps"} */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.clicked ? 'grid-hidden' : 'grid'}>
                        <div className='products'>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product5} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='catalog'><a href='/'>Bò viên, Sản phẩm</a></div>
                                <div className='product-name'><a href='/'>BÒ VIÊN TRỨNG MUỐI</a></div>
                                <p>265.000đ</p>
                                <QuantityInput index={0} />
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product6} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='catalog'><a href='/'>Chả các loại, Sản phẩm</a></div>
                                <div className='product-name'><a href='/'>CHẢ LỤA BẮC THẢO</a></div>
                                <p>130.000đ</p>
                                <QuantityInput index={1} />
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product7} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='catalog'><a href='/'>Sản phẩm, Thịt bò</a></div>
                                <div className='product-name'><a href='/'>THỊT BÒ GÂN</a></div>
                                <p>180.000đ</p>
                                <QuantityInput index={2} />
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product8} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='catalog'><a href='/'>Sản phẩm, Thịt bò</a></div>
                                <div className='product-name'><a href='/'>THỊT BÒ NẠM</a></div>
                                <p>200.000đ</p>
                                <QuantityInput index={3} />
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product9} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='catalog'><a href='/'>Sản phẩm, Thịt bò</a></div>
                                <div className='product-name'><a href='/'>THỊT THĂN BÒ</a></div>
                                <div className='discount'>
                                    <div className='old'>
                                        <p>280.000đ</p>
                                    </div>
                                    <div className='new'>
                                        <b>265.000đ</b>
                                    </div>
                                </div>
                                <QuantityInput index={4} />
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product10} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='catalog'><a href='/'>Bò viên, Sản phẩm</a></div>
                                <div className='product-name'><a href='/'>BÒ VIÊN GÂN</a></div>
                                <div className='discount'>
                                    <div className='old'>
                                        <p>230.000đ</p>
                                    </div>
                                    <div className='new'>
                                        <b>220.000đ</b>
                                    </div>
                                </div>
                                <QuantityInput index={5} />
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product11} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='catalog'><a href='/'>Bò viên, Sản phẩm</a></div>
                                <div className='product-name'><a href='/'>BÒ VIÊN KHỔNG LỒ</a></div>
                                <p>85.000đ</p>
                                <QuantityInput index={6} />
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product12} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='catalog'><a href='/'>Bò viên, Sản phẩm</a></div>
                                <div className='product-name'><a href='/'>BÒ VIÊN PHÔ MAI</a></div>
                                <div className='discount'>
                                    <div className='old'>
                                        <p>280.000đ</p>
                                    </div>
                                    <div className='new'>
                                        <b>265.000đ</b>
                                    </div>
                                </div>
                                <QuantityInput index={7} />
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product13} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='catalog'><a href='/'>Bò viên, Sản phẩm</a></div>
                                <div className='product-name'><a href='/'>BÒ VIÊN THÌA LÀ</a></div>
                                <p>245.000đ</p>
                                <QuantityInput index={8} />
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product14} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='catalog'><a href='/'>Chả các loại, Sản phẩm</a></div>
                                <div className='product-name'><a href='/'>CHẢ LỤA (500 GRAMS)</a></div>
                                <p>120.000đ</p>
                                <QuantityInput index={9} />
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product15} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='catalog'><a href='/'>Chả các loại, Sản phẩm</a></div>
                                <div className='product-name'><a href='/'>CHẢ LỤA (200 GRAMS)</a></div>
                                <div className='discount'>
                                    <div className='old'>
                                        <p>60.000đ</p>
                                    </div>
                                    <div className='new'>
                                        <b>55.000đ</b>
                                    </div>
                                </div>
                                <QuantityInput index={10} />
                            </div>
                        </div>
                    </div>
                    <div className={this.state.clicked ? 'list' : 'list-hidden'}>
                        <div className='products'>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product5} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='product-info'>
                                    <div className='catalog'><a href='/'>Bò viên, Sản phẩm</a></div>
                                    <div className='product-name'><a href='/'>BÒ VIÊN TRỨNG MUỐI</a></div>
                                    <p>265.000đ</p>
                                    <div className='info'>Mệnh danh là sản phẩm “cháy hàng” ngay từ lúc ra mắt, bò viên trứng muối là sản phẩm chỉ vừa ra mắt gần đây...</div>
                                    <QuantityInput index={0} />
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product6} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='product-info'>
                                    <div className='catalog'><a href='/'>Chả các loại, Sản phẩm</a></div>
                                    <div className='product-name'><a href='/'>CHẢ LỤA TRỨNG BẮC THẢO</a></div>
                                    <p>130.000đ</p>
                                    <div className='info'>Nổi tiếng trên thị trường không chỉ bởi chất lượng, chả lụa Út Liên “chiếm trọn” sự yêu thích của khách hàng. Chính nhờ đặc...</div>
                                    <QuantityInput index={1} />
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product7} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='product-info'>
                                    <div className='catalog'><a href='/'>Sản phẩm, Thịt bò</a></div>
                                    <div className='product-name'><a href='/'>THỊT BÒ GÂN</a></div>
                                    <p>180.000đ</p>
                                    <div className='info'>
                                        Hợp khẩu vị, thịt bò gân siêu ngon, dai vừa với mức giá siêu hợp lý chính là sản phẩm hảo hạng trứ danh Út Liên trên thị trường Việt.
                                    </div>
                                    <QuantityInput index={2} />
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product8} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='product-info'>
                                    <div className='catalog'><a href='/'>Sản phẩm, Thịt bò</a></div>
                                    <div className='product-name'><a href='/'>THỊT BÒ NẠM</a></div>
                                    <p>200.000đ</p>
                                    <div className='info'>
                                        Dành cho người yêu thích thịt bò nhiều nạc hoặc có dính chút gân. Nạm bò Út Liên tươi ngon chế biến được đa dạng món.
                                    </div>
                                    <QuantityInput index={3} />
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product9} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='product-info'>
                                    <div className='catalog'><a href='/'>Sản phẩm, Thịt bò</a></div>
                                    <div className='product-name'><a href='/'>THỊT THĂN BÒ</a></div>
                                    <div className='discount-list'>
                                        <div className='old'>
                                            <p>280.000đ</p>
                                        </div>
                                        <div className='new'>
                                            <b>265.000đ</b>
                                        </div>
                                    </div>
                                    <div className='info'>
                                        Sản phẩm thịt thăn bò Út Liên 100% tươi ngon, đạt chuẩn. Điểm cộng, mức giá siêu hợp lý và nhiều ưu đãi bất ngờ dành cho khách hàng.
                                    </div>
                                    <QuantityInput index={4} />
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product10} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='product-info'>
                                    <div className='catalog'><a href='/'>Bò viên, Sản phẩm</a></div>
                                    <div className='product-name'><a href='/'>BÒ VIÊN GÂN</a></div>
                                    <div className='discount-list'>
                                        <div className='old'>
                                            <p>230.000đ</p>
                                        </div>
                                        <div className='new'>
                                            <b>220.000đ</b>
                                        </div>
                                    </div>
                                    <div className='info'>
                                        <b>Thương hiệu “nức tiếng” 3 không</b> như một món quà ẩm thực dành cho khách hàng <b> Bò viên Gân:</b>
                                        <b>
                                            <li>Không bột ngọt</li>
                                            <li>Không hàn the</li>
                                            <li>Không phẩm màu</li>
                                        </b>
                                    </div>
                                    <QuantityInput index={5} />
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product11} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='product-info'>
                                    <div className='catalog'><a href='/'>Bò viên, Sản phẩm</a></div>
                                    <div className='product-name'><a href='/'>BÒ VIÊN KHỔNG LỒ</a></div>
                                    <p>85.000đ</p>
                                    <div className='info'>
                                        <b>Thương hiệu “nức tiếng” 3 không</b> như một món quà ẩm thực dành cho khách hàng <b> Bò viên Khổng Lồ:</b>
                                        <b>
                                            <li>Không bột ngọt</li>
                                            <li>Không hàn the</li>
                                            <li>Không phẩm màu</li>
                                        </b>
                                    </div>
                                    <QuantityInput index={6} />
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product12} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='product-info'>
                                    <div className='catalog'><a href='/'>Bò viên, Sản phẩm</a></div>
                                    <div className='product-name'><a href='/'>BÒ VIÊN PHÔ MAI</a></div>
                                    <div className='discount-list'>
                                        <div className='old'>
                                            <p>280.000đ</p>
                                        </div>
                                        <div className='new'>
                                            <b>265.000đ</b>
                                        </div>
                                    </div>
                                    <div className='info'>
                                        <b>Thương hiệu “nức tiếng” 3 không</b> như một món quà ẩm thực dành cho khách hàng <b> Bò viên Phô Mai:</b>
                                        <b>
                                            <li>Không bột ngọt</li>
                                            <li>Không hàn the</li>
                                            <li>Không phẩm màu</li>
                                        </b>
                                    </div>
                                    <QuantityInput index={7} />
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product13} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='product-info'>
                                    <div className='catalog'><a href='/'>Bò viên, Sản phẩm</a></div>
                                    <div className='product-name'><a href='/'>BÒ VIÊN THÌA LÀ</a></div>
                                    <p>245.000đ</p>
                                    <div className='info'>
                                        Bạn đã từng nghe đến món bò viên lá thìa là chưa?  Nhiều người khi nghe Út Liên chia sẻ về món bò viên thìa...
                                    </div>
                                    <QuantityInput index={8} />
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product14} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='product-info'>
                                    <div className='catalog'><a href='/'>Chả các loại, Sản phẩm</a></div>
                                    <div className='product-name'><a href='/'>CHẢ LỤA (500 GRAMS)</a></div>
                                    <p>120.000đ</p>
                                    <div className='info'>
                                        Chả là một trong những thực phẩm thông dụng, dễ ăn và dễ kết hợp thành những món ăn khác nhau. Vì thế, nhiều người...
                                    </div>
                                    <QuantityInput index={9} />
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product15} alt='' />
                                    <div className='icon'>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <i class="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                                <div className='product-info'>
                                    <div className='catalog'><a href='/'>Chả các loại, Sản phẩm</a></div>
                                    <div className='product-name'><a href='/'>CHẢ LỤA (200 GRAMS)</a></div>
                                    <div className='discount-list'>
                                        <div className='old'>
                                            <p>60.000đ</p>
                                        </div>
                                        <div className='new'>
                                            <b>55.000đ</b>
                                        </div>
                                    </div>
                                    <div className='info'>
                                        Chả lụa 200 gram siêu tiện dụng ưu đãi giá chỉ với 120k/2 cây phù hợp túi tiền người sử dụng. Đồng thời, nhiều hương vị thơm ngon độc đáo thích mê.
                                    </div>
                                    <QuantityInput index={10} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Products;