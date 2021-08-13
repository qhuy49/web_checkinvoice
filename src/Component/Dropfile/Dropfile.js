import React, { Component } from 'react';
import DropZone from './DropZone/DropZone';

class DropFile extends Component {
    render() {
        return (
            /* Quote/testimonial aside*/
            <aside className="text-center bg-gradient-primary-to-secondary">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xl-8">
                            <div>
                                <p className="title">Kéo và thả file vào đây để kiểm tra</p>
                                <div className="content">
                                    <DropZone/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}

export default DropFile;