'use client';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

import React, { FC } from 'react';

type ProviderProps = {
  children: React.ReactNode;
};
const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default Provider;
