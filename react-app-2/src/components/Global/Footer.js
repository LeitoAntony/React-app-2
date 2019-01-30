import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/styles.css';

class Footer extends Component {
    static proptypes = {
        copyright: PropTypes.string
    };
    render() {
        const { copyright = '&copy; codeJobs 2018'} = this.props;
        return (
            <div className="Footer row">
                <div className="col-md-12 ">
                    <p dangerouslySetInnerHTML={{ __html: copyright }} className="text-center"></p>
                </div>
            </div>
        )
    }
}

export default Footer;