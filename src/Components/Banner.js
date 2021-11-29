import styled from 'styled-components';
import bannerImg from '../image/banner.jpg';

export const Banner = styled.div`
  width: 100%;
  min-height: 210px;
  background-image: url(${bannerImg});
  background-position: center;
  background-size: cover;
`;