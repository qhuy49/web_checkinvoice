import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            /* Footer*/
            <footer className="bg-black text-center py-5">
                <div className="container px-5">
                    <div className="text-white-50 small">
                        <div className="mb-2">Copyrights © 2021 Phần mềm Hóa đơn điện tử M-Invoice. All Rights Reserved.</div>
                        <a href="#!">Privacy</a>
                        <span className="mx-1">·</span>
                        <a href="#!">Terms</a>
                        <span className="mx-1">·</span>
                        <a href="#!">FAQ</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;