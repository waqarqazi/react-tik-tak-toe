import React, { useState } from 'react';

import Sidebar from './sidebar';
import Container from 'components/container';

import style from './layout.module.scss';

const Layout = ({
  children,
  textNumber,
  leftIconArrow,
  activeClass,
  inactiveClass,
  sidebarLinks,
  bgClass,
}) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSidebarMobile, setOpenSidebarMobile] = useState(false);

  return (
    <div className={`${style.layoutWrapper} ${bgClass}`}>
      <aside
        className={
          openSidebar ? `${style.sideBarOpen} ${style.aside}` : style.side
        }
        style={{ paddingLeft: '0px' }}
      >
        <div className={style.hiddenSmall}>
          <Sidebar
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
            textNumber={textNumber}
            leftIconArrow={leftIconArrow}
            activeClass={activeClass}
            inactiveClass={inactiveClass}
            sidebarLinks={sidebarLinks}
          />
        </div>
        <div className={style.showSmall}>
          {openSidebarMobile && (
            <div
              className={style.backdropDiv}
              onClick={() => setOpenSidebarMobile(false)}
            ></div>
          )}
          <div className={style.innerSide}>
            <Sidebar
              openSidebar={openSidebarMobile}
              setOpenSidebar={setOpenSidebarMobile}
              textNumber={textNumber}
              leftIconArrow={leftIconArrow}
              activeClass={activeClass}
              inactiveClass={inactiveClass}
              sidebarLinks={sidebarLinks}
            />
          </div>
        </div>
      </aside>
      <main style={{ marginLeft: openSidebar ? '250px' : '20px' }}>
        <Container className={style.containerStyle}>{children}</Container>
      </main>
    </div>
  );
};

export default Layout;
