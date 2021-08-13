import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            /* App badge section*/
            <section className="bg-gradient-primary-to-secondary" id="download">
                <div className="container px-5">
                    <h2 className="text-center text-white font-alt mb-4">Hãy để M-Invoice giúp bạn CÙNG TRẢI NGHIỆM PHẦN MỀM HÓA ĐƠN ĐIỆN TỬ BẢO MẬT ƯU VIỆT NHẤT CHO DOANH NGHIỆP CỦA BẠN</h2>
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                        <a className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" target="_blank" rel="noopener noreferrer" href="https://minvoice.vn/dang-ky-su-dung/">
                            <span className="d-flex align-items-center">
                                <i className="bi-chat-text-fill me-2" />
                                <span className="small">Liên hệ chúng tôi</span>
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;