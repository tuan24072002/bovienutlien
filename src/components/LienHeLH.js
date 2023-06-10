import './LienHeLHStyle.scss';
function LienHe() {
    return (
        <div className='thongtin-container'>
            <div className='thongtinall'>
                <div className='thongtin'>

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
    )
}
export default LienHe;