import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import CustomButton from './buttons/CustomButton';
import Link from 'next/link';

const SideBarLeft = () => {
  return (
    <Flex>
      <Flex
        align="center"
        flexDir="column"
        gap="220px"
        bg="white"
        position="fixed"
      >
        <Flex align="center" gap="32px" flexDir="column" h="100%" w="260px">
          <Link href="/">
            <Text
              fontFamily="Roboto Condensed"
              letterSpacing="-1px"
              pt="48px"
              pl="48px"
              pr="48px"
              pb="8px"
              fontSize="31px"
              fontWeight="600"
              align="center"
              w="240px"
              cursor="pointer"
            >
              Vitals Room
            </Text>
          </Link>
          <CustomButton bg="#828282" label="On Queue" icons="buttonicon.svg" />
          <CustomButton label="Test" icons="buttonicon.svg" />
          <CustomButton label="Completed" icons="buttonicon.svg" />
        </Flex>
        <Flex mb="20px">
          <CustomButton
            bg="white"
            border="2px"
            borderColor="#8852F4"
            label="Log Out"
            icons="buttonicon.svg"
            color="red"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBarLeft;
