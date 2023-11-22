import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const LogonUser = () => {
  const name = 'Dr. Anik';
  return (
    <Flex flexDir="column">
      <Flex flexDir="row">
        <Text pr="5px" fontSize="30px" color="#706F6F" fontWeight="600">
          Hello, {name}
        </Text>
        <Text pr="5px" fontSize="30px" color="#706F6F" fontWeight="600">
          Dr. Anik
        </Text>
      </Flex>
      <Text fontSize="16px" color="#706F6F" fontWeight="400">
        Have a nice day at work and stay healthy!
      </Text>
    </Flex>
  );
};

export default LogonUser;
