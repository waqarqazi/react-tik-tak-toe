import Container from 'components/container';

import style from './tab.module.scss';

const Tab = ({ className, tabs, color, onChange, active = 0 }) => {
  return (
    <div className={style.scrollDiv}>
      <div className={style.innerScrollDiv}>
        <Container>
          <div className={`${style.wraper} ${className}`}>
            {tabs.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${style.items} `}
                  style={{
                    borderBottom: active === index ? `1px solid ${color}` : '',
                    color: active === index ? `${color}` : '#696F7A',
                    transition: active === index ? 'all 1s' : '',
                    fontWeight: active === index ? 600 : '',
                    marginBottom: active === index ? '-1px' : '0px',
                  }}
                  onClick={() => {
                    onChange(index);
                  }}
                >
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Tab;
