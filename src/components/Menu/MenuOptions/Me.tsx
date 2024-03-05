import React from 'react';
import { useTranslation } from 'react-i18next';

import HeartIcon from '@icon/HeartIcon';

const Me = () => {
  const { t } = useTranslation();
  return (
    <a
      className='flex py-2 px-2 items-center gap-3 rounded-xl hover:new-lightblue transition-colors duration-200 text-white cursor-pointer text-sm'
      href='https://github.com/lerejbox/jbox'
      target='_blank'
    >
      <HeartIcon />
      {t('author')}
    </a>
  );
};

export default Me;
