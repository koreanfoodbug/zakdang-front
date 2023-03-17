import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import FooterContent from './FooterContent';
import FooterContentWithLink from './FooterContentWithLink';

const Row = styled.div`
    display: flex;
`;

const StyledContainer = styled(Container)`
    padding: 3rem 0;
    position: relative;
`;

const Footer = () => {
    return (
        <StyledContainer>
            <Row>
                <FooterContentWithLink
                    menuHeader='업무영역'
                    menus={[
                        '스타트업',
                        '금융, 핀테크',
                        '블록체인',
                        '민사, 가사',
                        '형사'
                    ]}
                    links={[
                        'http://www.sayulaw.com/startup',
                        'http://www.sayulaw.com/finance',
                        'http://www.sayulaw.com/block',
                        'http://www.sayulaw.com/civil',
                        'http://www.sayulaw.com/detective'
                    ]}
                />
                <FooterContent
                    menuHeader='고객센터'
                    menus={[
                        '대표전화: 02)6956-4662',
                        '팩스: 02)6956-4663',
                        '이메일: jhchoi@sayulaw.com,',
                        'jwsong@sayulaw.com',
                    ]}
                />
            </Row>
            <div style={{ paddingTop: '3rem'}} />
            <FooterContent
                menuHeader='법률사무소 사유'
                menus={[
                    '사업자등록번호: 168-27-01317',
                    '대표변호사: 최지현, 송지원, 이상호 | 광고책임변호사: 최지현, 송지원, 이상호',
                    '서울 서초구 강남대로 210, 9층(양재동, 행복빌딩)',
                ]}
            />
        </StyledContainer>
    );
};

export default Footer;