import styled from 'styled-components';
import { Layout } from 'antd';

export const StyledHeader = styled(Layout.Header)`
  padding: '0 20px';
  background: ${props => props.bgcolor};
  position: 'sticky';
  top: 0;
  z-index: 1;
  width: '100%';
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

export const StyledFooter = styled(Layout.Footer)`
  display: flex;
  justify-content: flex-end;
  flex-flow: row wrap;
  align-items: center;
  p {
    margin: 0;
  }
  @media (max-width: 520px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div`
  padding: 24;
  min-height: ${props => props.height}px;
  background: ${props => props.colorbgcontainer};
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const UserName = styled.p`
  margin-right: 24px;
`;

export const StyledSider = styled(Layout.Sider)`
  text-align: left;
  height: ${props => props.height}px;
  overflow: auto;
`;
