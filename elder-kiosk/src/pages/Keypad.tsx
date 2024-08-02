import React from 'react';
import './Keypad.css';
import { Title, Subtitle } from '../components/Tests';

const Keypad: React.FC = () => {
    console.log('Rendering Keypad component');
    return (
        <div className="keypad-page">
            <div className="header">
                <Title>세 번째 단계, 주민번호 입력하기</Title>
            </div>
            <div className="container">
                <Subtitle>증명서 발급 전용 키오스크</Subtitle>
                <div className="input-box">
                    <label htmlFor="id-number">주민번호를 입력해주세요</label>
                    <input type="text" id="id-number" className="id-input" />
                    <div className="keypad">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                            <button key={num} className="keypad-button">{num}</button>
                        ))}
                        <div className="button-row">
                            <button className="action-button cancel">정정</button>
                            <button className="action-button confirm">확인</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Keypad;
