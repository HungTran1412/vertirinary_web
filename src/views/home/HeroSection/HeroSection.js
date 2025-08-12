import React from "react";
import './HeroSection.scss';
import banner from '../../../assets/images/banner.png'

class HeroSection extends React.Component {
    render() {
        return (
            <section className="hero_section">
                <div className="hero__content">
                    <h1>Trao niềm tin để nhận yêu thương</h1>
                    <p>
                        Cung cấp dịch vụ chăm sóc thú cưng ở Mỹ Đình và Nam Từ Liêm, Thành phố Hà Nội
                    </p>
                    <button className="btn_booking">
                        <span>🐾</span> Đặt lịch ngay
                    </button>
                </div>
                <div className="hero__image">
                    <img src={banner} alt="Pet care"/>
                </div>
            </section>
        )
    };
}

export default HeroSection;