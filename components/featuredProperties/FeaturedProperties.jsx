import "./featuredProperties.css"

export const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="fpImg" />
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Old Town, Poland, Kraków</span>
                <span className="fpPrice">Starting from ₹ 12,323</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" alt="" className="fpImg" />
                <span className="fpName">7Seasons Apartments Budapest</span>
                <span className="fpCity">06. Terézváros, Hungary, Budapest</span>
                <span className="fpPrice">Starting from ₹ 11,679</span>
                <div className="fpRating">
                    <button>8.2</button>
                    <span>Fabulous</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=" alt="" className="fpImg" />
                <span className="fpName">Cheval Three Quays at The Tower of London</span>
                <span className="fpCity">City of London, United Kingdom, London</span>
                <span className="fpPrice">Starting from ₹ 55,427</span>
                <div className="fpRating">
                    <button>9.5</button>
                    <span>Exceptional</span>
                </div>
            </div>
        </div>
    )
}
