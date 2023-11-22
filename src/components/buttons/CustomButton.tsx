import { Button, ButtonProps, Img, Text } from '@chakra-ui/react';

import React, { FC } from 'react';

type CustomButtonProps = ButtonProps & {
  label?: string;
  icons: string;
};

const CustomButton: FC<CustomButtonProps> = ({ label, icons, ...props }) => {
  return (
    <Button
      justify="center"
      align="center"
      flexDir="column"
      h="120px"
      w="130px"
      row-rowGap="16px"
      bgGradient="linear(to-l, #8852F4, #A071FF)"
      borderRadius="16px"
      _hover={{
        background: 'linear(to-l, #8852F4, #A071FF)',
      }}
      {...props}
    >
      <Img src={icons} />
      <Text
        fontFamily="Roboto Condensed"
        fontSize="20px"
        fontWeight="500"
        color="white"
      >
        {label}
      </Text>
    </Button>
  );
};

export default CustomButton;
