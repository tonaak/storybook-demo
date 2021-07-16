import React, { Component } from 'react';
import './People.css';
import PropTypes from 'prop-types';

class People extends Component {
    render() {
        const { imgUrl, children } = this.props;
        return(
            <div className="People">
                <div className="avatar">
                    <img src={imgUrl} alt="avatar"/>
                </div>
                <div className="title">
                    <div className="name">{children}</div>
                    <div className="hint">Gợi ý cho bạn</div>
                </div>
                <div className="follow">Theo dõi</div>
            </div>
        );
    }
}

People.defaultProps = {
    imgUrl: 'https://ebook.vn/images/default.jpg'
};

People.propTypes = {
    //Avatar
    imgUrl: PropTypes.string,
    //Nickname
    children: PropTypes.string.isRequired
};

export default People;