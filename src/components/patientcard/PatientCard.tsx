import { Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

const PatientCard = () => {
  return (
    <Flex
      cursor="pointer"
      flexDir="column"
      bg="white"
      borderRadius="16px"
      w="370px"
    >
      <Flex mt="24px" ml="24px" mb="32px" mr="24px">
        <Flex mr="32px">
          <Img h="104px" w="104px" src="patientimage.png" />
        </Flex>
        <Flex w="187px" flexDir="column">
          <Flex flexDir="row" justifyContent="flex-end">
            <Text fontSize="14px" fontWeight="500" pr="50px" textAlign="right">
              Date:
            </Text>
            <Text textAlign="right" fontSize="14px" fontWeight="500">
              11/16/2023
            </Text>
          </Flex>
          <Flex justifyContent="flex-end">
            <Text fontSize="14px" fontWeight="500" textAlign="right" pr="58px">
              Time:
            </Text>
            <Text fontSize="14px" fontWeight="500" textAlign="right">
              02:30 pm
            </Text>
          </Flex>
          <Flex justifyContent="flex-end">
            <Text fontSize="32px" fontWeight="700">
              Serial:
            </Text>
            <Text pl="12px" fontSize="32px" fontWeight="700">
              5
            </Text>
          </Flex>
          <Flex justifyContent="flex-end">
            <Text fontSize="16px" fontWeight="600">
              Satus:
            </Text>
            <Flex ml="12px" justify="center" bg="#C6F6D5" align="center">
              <Text
                pl="5px"
                pr="5px"
                align="center"
                fontSize="12px"
                fontWeight="600"
              >
                Waiting Room
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex ml="24px" mb="24px" mr="24px" flexDir="column">
        {' '}
        <Flex justifyContent="space-between" w="322px">
          <Text fontSize="18px" fontWeight="600">
            Patient Name:
          </Text>
          <Text fontSize="18px">Asif Hossain</Text>
        </Flex>
        <Flex justifyContent="space-between" w="322px">
          <Text fontSize="18px" fontWeight="600">
            Doctor Name:
          </Text>
          <Text fontSize="18px">Kazi Mubin</Text>
        </Flex>
        <Flex justifyContent="space-between" w="322px">
          <Text fontSize="18px" fontWeight="600">
            Age:
          </Text>
          <Text fontSize="18px">32</Text>
        </Flex>
        <Flex justifyContent="space-between" w="322px">
          <Text fontSize="18px" fontWeight="600">
            Gender:
          </Text>
          <Text fontSize="18px">Male</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PatientCard;
