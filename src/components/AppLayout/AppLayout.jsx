// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsFetching } from 'redux/auth/authSelectors';

// // import { ContainerStyled, MainStyled } from './Layout.styled';

// export default function Layout() {
//   const isFetching = useSelector(selectIsFetching);
//   return (
//     <div>
//       {isFetching ? (
//         <div>Please wait. Fetching user information </div>
//       ) : (
//           <>
//           {/* <Header /> */}
//           <main>
//             <Suspense fallback={<div>Loading...</div>}>
//               <Outlet />
//             </Suspense>
//           </main>
//         </>
//       )}
//     </div>
//   );
// }
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Layout, theme } from 'antd';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  ContentWrapper,
  StyledHeader,
  StyledFooter,
  UserWrapper,
  UserName,
  // StyledSider,
} from './AppLayout.styled';
import Loader from '../Loader/Loader';
import useWindowSizes from 'hooks/useWindowSizes';
import {
  selectIsFetching,
  selectIsLoggedIn,
  selectUser,
} from 'redux/auth/authSelectors';

// import { useSelector } from 'react-redux';
// import { selectIsFetching } from 'redux/auth/authSelectors';
import { fetchCurrentUser, logOut } from 'redux/auth/authOperations';
// import Filters from '../Filters/Filters';

const { Content } = Layout;
// import { Layout, Space } from 'antd';
// const { Sider } = Layout;
// const siderStyle = {
//   textAlign: 'left',
//   // lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#3ba0e9',
// };

const AppLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { height } = useWindowSizes();

  const isFetching = useSelector(selectIsFetching);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  // const siderStyle = {
  //   textAlign: 'left',
  //   // lineHeight: '120px',
  //   // color: '#fff',
  //   // fontWeight: '600',
  //   backgroundColor: '#f5f5f5',
  //   // width: '300px',
  //   // maxWidth: '300px',
  //   minWidth: '300px',
  //   height: height - 131,
  //   overflow: 'auto',
  //   // width: '250px'
  // };

  return (
    <Layout>
      <StyledHeader bgcolor={colorBgContainer}>
        <p>App Name</p>
        {isLoggedIn && (
          <UserWrapper>
            <UserName>{user.email}</UserName>
            <Button onClick={() => dispatch(logOut())}>Log out</Button>
          </UserWrapper>
        )}
      </StyledHeader>
      <Layout>
        <Content
          style={{
            margin: '12px 12px 0',
          }}
        >
          <ContentWrapper
            colorbgcontainer={colorBgContainer}
            height={height - 144}
          >
            <Suspense fallback={<Loader />}>
              {!isFetching ? <Outlet /> : <Loader />}
            </Suspense>
          </ContentWrapper>
        </Content>
        {/* {isLoggedIn && (<Sider theme='light' width={250} style={{ height: `${height - 143}px`, overflow: 'auto', marginTop: '12px', }}><Filters /></Sider>)} */}
      </Layout>
      <StyledFooter>2023</StyledFooter>
    </Layout>
  );
};

export default AppLayout;