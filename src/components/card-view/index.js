/* eslint-disable no-undef */
import React from 'react';

import style from './card-view.module.scss';
import SelectBoxForm from 'components/select-box-form';
import TextField from 'components/textfield';
import Button from 'components/button';

const CardView = ({
  img,
  topText,
  control,
  setAmmount,
  className,
  ammount,
  propStyle,
  onPress,
  gridStyle2,
  setSymbol,
  symbol,
}) => {
  return (
    <div className={`${style.attorneyDiv} ${className}`}>
      <div
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className={style.topDiv}>
          <img src={img} alt="" width={25} height={25} />
          <p className={style.text} style={propStyle}>
            {topText}
          </p>
        </div>
      </div>
      <TextField
        label={'Enter Ammount in USDT'}
        placeholder="Enter Ammount in USDT"
        onChange={(e) => {
          const { value } = e.target;
          setAmmount(value);
        }}
        className={style.field}
        //   label="Search"
      />
      <SelectBoxForm
        // label={"Drop Down"}
        dynamicClass={style.dropDownTop}
        placeholder={'Select Coin'}
        options={priorityOptions}
        value={symbol}
        control={control}
        name={'location'}
        width={280}
        onChange={(ele) => setSymbol(ele)}
      />
      <Button
        //  iconStart={edit}

        text="ADD BOT"
        btnClass={style.btnClassSuspect}
        handleClick={(e) => {
          e.preventDefault();
          onPress();
        }}
      />
    </div>
  );
};

export default CardView;
const priorityOptions = [
  { value: 'XRP/USDT', label: 'XRP/USDT' },
  { value: 'BTC/USDT', label: 'BTC/USDT' },
  { value: 'ETH/USDT', label: 'ETH/USDT' },
  { value: 'TRON/USDT', label: 'Low' },
];
