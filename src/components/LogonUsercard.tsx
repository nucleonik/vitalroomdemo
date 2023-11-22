import { Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import CustomButton from './buttons/CustomButton';

const LogonUsercard = () => {
  return (
    <Flex ml="13px" flexDir="column">
      <Flex
        h="137px"
        w="361px"
        bgGradient="linear(to-l, #8852F4, #A071FF)"
        borderTopRadius="16px"
      >
        {' '}
        <Flex h="42px" w="296px" align="center" ml="18px" mt="22px">
          <Text fontSize="18px" fontWeight="600" color="white">
            My profile
          </Text>
          <Img ml="182px" h="20px" w="20px" src="3dot.svg" />
        </Flex>
      </Flex>
      <Flex
        flexDir="column"
        borderBottomRadius="16px"
        h="255px"
        w="361px"
        bg="#F1EBFA"
        align="center"
      >
        {' '}
        <Flex w="361px" justify="center">
          <Img
            mt="-60px"
            border="8px"
            borderColor="white"
            borderRadius="62px"
            h="128px"
            w="128px"
            src="userimage.png"
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <Text pt="24px" fontSize="18px" fontWeight="600" color="#706F6F">
            Dr. Anik
          </Text>
          <Text pb="24px" fontSize="14px" fontWeight="500" color="black">
            Receptionist
          </Text>
          <CustomButton h="28px" w="80px" label="Edit" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LogonUsercard;
