import React, { useState } from 'react';
import './NewProductsStyle.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import product5 from '../assets/images/bo-vien-trung-muoi-ut-lien-tiem-nha-ut-300x300.jpg';
import product6 from '../assets/images/mua-thit-bo-tuoi-ut-lien-300x300.jpg';
import product7 from '../assets/images/bo-vien-gan-ut-lien-ngon-quan-4-an-lien-1-300x300.jpg';
import product8 from '../assets/images/cha-lua-200gram-thom-ngon-nhieu-huong-vi-300x300.jpg';

function NewProducts() {
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

    return (
        <div className='new-product'>
            <Carousel responsive={responsive} className='carousel'>
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
                    <div className='catalog'><a href='/'>Bò viên, Sản phẩm</a></div>
                    <div className='product-name'><a href='/'>BÒ VIÊN TRỨNG MUỐI</a></div>
                    <p>265.000đ</p>
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
                    <div className='catalog'><a href='/'>Bò viên, Sản phẩm</a></div>
                    <div className='product-name'><a href='/'>BÒ VIÊN TRỨNG MUỐI</a></div>
                    <p>265.000đ</p>
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
                    <div className='catalog'><a href='/'>Bò viên, Sản phẩm</a></div>
                    <div className='product-name'><a href='/'>BÒ VIÊN TRỨNG MUỐI</a></div>
                    <p>265.000đ</p>
                    <QuantityInput index={3} />
                </div>
            </Carousel>
        </div>
    );
}

export default NewProducts;
