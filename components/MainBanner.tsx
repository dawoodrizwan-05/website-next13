import * as React from "react";
import { motion } from "framer-motion";
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Icon,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GoChevronRight } from "react-icons/go";
import { BsFillBookmarkFill } from "react-icons/bs";

const MainBanner = () => {
  return (
    <Container
      maxW="9xl"
      px={{ base: 6, md: 3, lg: 1 }}
      py={24}
      bg="#EFEFEF"
      mt={"-9px"}
    >
      <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
        <Stack
          direction="column"
          spacing={6}
          justifyContent="center"
          maxW="600px"
        >
          <HStack
            p={1}
            rounded="full"
            fontSize="sm"
            textDecoration={"none"}
            w="max-content"
            bg={useColorModeValue("gray.300", "gray.700")}
          >
            <Box
              py={1}
              px={2}
              lineHeight={1}
              cursor={"pointer"}
              rounded="full"
              color="white"
              bgGradient="linear(to-l, red.300,#D2001A)"
            >
              Get Enrolled
            </Box>
            <HStack spacing={1} alignItems="center" justifyContent="center">
              <Link lineHeight={1} href="https://www.piaic.org/">
                Visit PIAIC
              </Link>
              <Icon as={GoChevronRight} w={4} h={4} />
            </HStack>
          </HStack>
          <chakra.h1
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
          >
            
            <chakra.span color="red.500">WEB 3.0 & METAVERSE</chakra.span>
          </chakra.h1>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
          >
            A One and Quarter Years Panaverse DAO Earn as you Learn Program.
            
            
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, and Ambient Computing/IoT Technologies
           
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: "3rem !important", sm: 0 }}
            flexWrap="wrap"
          >
           
             
          
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
         
          <motion.div
            initial={{ rotate: -3 }}
            animate={{ rotate: 3 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
           
          </motion.div>
        </Box>
      </Stack>
    </Container>
  );
};


export default MainBanner;
