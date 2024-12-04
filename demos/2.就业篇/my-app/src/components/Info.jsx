import React from 'react';
import PropTypes from 'prop-types';

function Info({
    name = '张三',
    age = 18,
    phone = '12345678901',
    address = '北京市',
    scores = [0, 0, 0, 0, 0],
    children
}) {
    return (
        <>
            <div className="info-item">
                <span className="label">姓名：</span>
                <span className="value">{name}</span>
            </div>
            <div className="info-item">
                <span className="label">年龄：</span>
                <span className="value">{age}</span>
            </div>
            <div className="info-item">
                <span className="label">电话：</span>
                <span className="value">{phone}</span>
            </div>
            <div className="info-item">
                <span className="label">地址：</span>
                <span className="value">{address}</span>
            </div>
            <div className="info-item">
                <span className="label">分数：</span>
                <span className="value">{scores.join(', ')}</span>
            </div>
            <div className="children">
                {children}
            </div>
        </>
    );
}

Info.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    phone: function (props, propName, componentName) {
        if (!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(props[propName])) {
            return new Error('电话号码格式不正确')
        }
    },
    address: PropTypes.string,
    scores: PropTypes.arrayOf((propValue, index, componentName, prop) => {
        if (!propValue.every(item => typeof item === 'number')) {
            return new Error('分数必须是数字')
        } else if (propValue.length !== 5) {
            return new Error('分数必须是5个')
        } else if (propValue.some(item => item < 0 || item > 100)) {
            return new Error('分数必须在0-100之间')
        }
    }),
    children: PropTypes.element.isRequired

}
export default Info;