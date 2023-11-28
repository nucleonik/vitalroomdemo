import { Flex, FlexProps, Input } from '@chakra-ui/react';
import React, { FC } from 'react';
import CustomButton from './buttons/CustomButton';

type SearchProps = FlexProps & {
  label?: string;
  cat?: string;
  children?: React.ReactNode;
};

const Search: FC<SearchProps> = ({ label, cat, children, ...props }) => {
  return (
    <Flex {...props}>
      <CustomButton
        borderRadius="16px"
        h="56px"
        width="56px"
        icons="scann.svg"
      />
      <Input
        w="357px"
        borderRadius="16px"
        ml="16px"
        h="56px"
        placeholder="hello"
      ></Input>
    </Flex>
  );
};

export default Search;
