import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Ul = styled.ul`
  &:not(:last-child) {
    padding-right: 3rem;
  }

  min-width: 8rem;

  span {
    font-size: 1rem;
    line-height: 1.5rem;
    font-wight: 700;
    color: #111827;
    padding-bottom: 0.75rem;
    display: inline-block;
  }

  li {
    font-size: 1rem;
    line-height: 1.5rem;
    font-wight: 400;
    color: #6B7280;
    padding-bottom: 0.25rem;
    list-style: none;
  }
`;

interface Props {
    menuHeader: string;
    menus: Array<string>;
    links: Array<string>;
}

const FooterContentWithLink: React.FC<Props> = ({ menuHeader, menus, links }) => {
    return (
        <Ul>
            <span>
                {menuHeader}
            </span>
            {
                menus.map((menu, index) => {
                    return (
                        <Link href={links[index]} key={index}>
                          <li>{menu}</li>
                        </Link>
                    )
                })
            }
        </Ul>
    );
};

export default FooterContentWithLink;