import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './Listitem';
import bannerImg from '../image/banner.jpg';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const BannerMenu = styled.div`
  max-width: 1060px;
  min-height: 210px;
  background-color: black;
  background-image: url(${bannerImg});
  background-position: right;
  background-size: content;
`;

export const Menu = () => (
  <MenuStyled>
    <BannerMenu></BannerMenu>
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} />
    </SectionMenu>

    <SectionMenu>
      <h2>Закуски / Напитки</h2>
      <ListItem itemList={dbMenu.other} />
    </SectionMenu>
  </MenuStyled>
);