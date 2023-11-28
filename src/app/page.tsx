'use client';
import LogonUser from '@/components/LogonUser';
import LogonUsercard from '@/components/LogonUsercard';
import Search from '@/components/Search';
import SideBarLeft from '@/components/SideBarLeft';
import CustomButton from '@/components/buttons/CustomButton';
import PatientCard from '@/components/patientcard/PatientCard';
import { Flex } from '@chakra-ui/react';
import { background } from '@/lib';
import Link from 'next/link';

<link
  href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@500&family=Zen+Maru+Gothic:wght@500&display=swap"
  rel="stylesheet"
></link>;

export default function Home() {
  return (
    <main>
      <Flex maxW="100vw">
        <SideBarLeft />
        <Flex flexDir="column" bg={background.bg} flex="1">
          <Flex w="100%" pl="32px" pt="38px" bg={background.bg} flexDir="row">
            {' '}
            <Flex flexDir="column" ml="260px">
              <Flex flexDir="row">
                <LogonUser />
                <Flex ml="32px">
                  <Search />{' '}
                </Flex>
              </Flex>
              <Flex mt="24px">
                <Flex mr="30px">
                  <Link href="/patient">
                    <PatientCard />
                  </Link>
                </Flex>
                <Flex>
                  <PatientCard />
                </Flex>
              </Flex>
            </Flex>
            <Flex>
              <LogonUsercard />
            </Flex>
          </Flex>

          <Flex 
           flexWrap="wrap" flex="1" maxW="100vw" ml="294px">
            <Flex mt="30px" mr="30px">
              {' '}
              <PatientCard />
            </Flex>
            <Flex mt="30px" mr="30px">
              {' '}
              <PatientCard />
            </Flex>
            <Flex mt="30px" mr="30px">
              {' '}
              <PatientCard />
            </Flex>
            <Flex mt="30px" mr="30px">
              {' '}
              <PatientCard />
            </Flex>
            <Flex mt="30px" mr="30px">
              {' '}
              <PatientCard />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
}
