import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 1.313rem;

    & > div:nth-child(2) {
        display: flex;
        align-items: center;

        & > span:not(:last-child) {
            margin-right: 25px;
        }
    }

    span {
        cursor: pointer;
        display: inline-block;
        font-size: 0.875rem;
        line-height: 1.375rem;
        font-wight: 400;
        color: #111827;
    }
`;

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <div>
                    법률사무소 사유
                </div>
                <div>
                    <span>
                        서비스
                    </span>
                    <span>
                        사유 피플
                    </span>
                    <span>
                        고객 리뷰
                    </span>
                    <span>
                        블로그
                    </span>
                    <Button size="sm" variant="primary">
                        상담 신청하기
                    </Button>
                </div>
            </Wrapper>
        </Container>
    );
};

export default Header;