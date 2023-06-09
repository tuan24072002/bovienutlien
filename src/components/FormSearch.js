import './FormSearchStyle.scss';
function FormSearch() {
    return (
        <form className="search-form">
            <input type="text" placeholder="Hôm nay bạn chọn món gì?" />
            <button type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    )
}
export default FormSearch;