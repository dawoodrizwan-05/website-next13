import {
  Container,
  Text,
  VStack,
  Stack,
  Avatar,
  Icon,
  useColorModeValue,
  Heading,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
// Here we have used react-icons package for the icon
 import { FaQuoteRight } from "react-icons/fa";
interface TestimonialAttributes {
  username: string;
  position: string;
  company: string;
  image: string;
}

const testimonial: TestimonialAttributes = {
  username: "M.Dawood Rizwan",
  position: "Student | Panaverse",
  company: "PIAIC",
  image:
    "https://www.simpleimageresizer.com/_uploads/photos/0d176b6e/PXL_20230201_111255026.PORTRAIT_0.jpg"

};

const HomeStudentFB = () => {
  return (
    <Container maxW="8xl" p={{ base: 10, md: 14 }}>
      <Heading textAlign={"center"} mb={"30px"}>
        <chakra.span color={"#D2001A"}>Student</chakra.span> Speaks
      </Heading>
      <VStack
        spacing={3}
        p={4}
        bg={useColorModeValue("white", "blackAlpha.600")}
        border="3px solid"
        borderColor="#D2001A"
        maxW="4xl"
        margin="0 auto"
        boxShadow="lg"
        pos="relative"
      >
        <Icon
        //  as={FaQuoteRight}
          w={10}
          h={10}
          color="#D2001A"
          left="-1.3rem"
          position="absolute"
          top="-1.5rem"
        />
        <Stack direction="column" spacing={5}>
          <Text color="gray.500">
            As a student, I have found this course to be very good to my
            learning and professional development. One of the things I
            appreciate most about this course is the relevance of the material
            to my field of study. The course content is directly applicable to
            my career goals and has given me with a solid foundation of
            knowledge and skills. The difficulty of the course was challenging
            but not overwhelming, it has pushed me to learn new skills and think
            critically. The workload was well-balanced, and I felt that the
            assignments were challenging but achievable.The quality of
            instruction was excellent, the instructor was knowledgeable,
            engaging, and given clear explanations. The support team was quick
            to respond to any issues I had and given clear and concise
            instructions for resolving them.
          </Text>

          <Text
            fontWeight="bold"
            fontSize="lg"
            align="right"
            mr="3rem !important"
          >
            {testimonial.username}
          </Text>
        </Stack>

        <Avatar
          name="avatar"
          src={testimonial.image}
          showBorder={true}
          borderColor="#D2001A"
          size="xl"
          pos="absolute"
          right="-48px"
          bottom="-20px"
          shadow="lg"
        />
      </VStack>
    </Container>
  );
};

export default HomeStudentFB;
