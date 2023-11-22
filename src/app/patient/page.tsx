'use-client';
import SideBarLeft from '@/components/SideBarLeft';
import { fontmediumsize, fontsmallsize } from '@/lib';
import { Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

const page = () => {
  return (
    <Flex maxW="100vw">
      <SideBarLeft />

      <Flex flexDir="column" bg="#F5F6FA" flex="1" pl="83px" pt="20px">
        <Flex>
          <Text fontSize={fontsmallsize.fontSize}>Home</Text>
          <Img src="Breadcrumbseparator.svg" />
          <Text fontSize={fontsmallsize.fontSize}>Khadiza Begum</Text>
        </Flex>
        <Flex mt="14px" align="center">
          <Text
            fontSize={fontmediumsize.fontSize}
            fontWeight={fontmediumsize.fontWeight}
          >
            Appointment Details
          </Text>
          <Flex ml="24px" bg="green.100">
            <Text
              pl="5px"
              pr="5px"
              fontSize={fontsmallsize.fontSize}
              color={fontsmallsize.color}
              fontFamily={fontmediumsize.fontFamily}
              fontWeight="600"
            >
              IN VITAL ROOM
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default page;
