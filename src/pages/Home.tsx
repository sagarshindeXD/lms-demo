import { Box, Button, Container, Flex, Grid, Heading, Image, Stack, Text, VStack, SimpleGrid, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaPlay, FaChartLine, FaCertificate, FaUsers, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const features = [
  {
    icon: FaPlay,
    title: '10,000+ Video Lessons',
    description: 'Learn at your own pace with our extensive library of video content.',
  },
  {
    icon: FaCertificate,
    title: 'Earn Certificates',
    description: 'Get certified and showcase your new skills to the world.',
  },
  {
    icon: FaUsers,
    title: 'Community Support',
    description: 'Join a community of like-minded learners and experts.',
  },
  {
    icon: FaLaptopCode,
    title: 'Hands-on Projects',
    description: 'Apply what you learn with real-world projects.',
  },
];

const popularCourses = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    instructor: 'Alex Johnson',
    rating: 4.8,
    students: 12500,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    instructor: 'Sarah Chen',
    rating: 4.9,
    students: 8900,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    instructor: 'Miguel Rodriguez',
    rating: 4.7,
    students: 10200,
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
];

export const Home = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, brand.400, brand.600)',
    'linear(to-r, brand.500, brand.700)'
  );

  return (
    <Box>
      {/* Hero Section */}
      <Box bg={bgGradient} color="white" py={20}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10} alignItems="center">
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Text fontWeight="bold" mb={4} fontSize="lg">WELCOME TO EDUGENZ</Text>
                <Heading as="h1" size="3xl" fontWeight="bold" mb={6} lineHeight="1.2">
                  Learn New Skills Online with Top Educators
                </Heading>
                <Text fontSize="xl" mb={8} opacity={0.9}>
                  Access 5,000+ courses taught by industry experts. Start learning today and boost your career!
                </Text>
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                  <Button
                    as={RouterLink}
                    to="/courses"
                    size="lg"
                    colorScheme="white"
                    variant="solid"
                    rightIcon={<FaPlay />}
                  >
                    Start Learning
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    color="white"
                    _hover={{ bg: 'whiteAlpha.200' }}
                  >
                    View Courses
                  </Button>
                </Stack>
              </motion.div>
            </Box>
            <Box>
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Students learning online"
                  borderRadius="lg"
                  shadow="2xl"
                />
              </MotionBox>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="7xl">
          <VStack spacing={3} textAlign="center" mb={16}>
            <Text color="brand.500" fontWeight="bold" fontSize="lg">WHY CHOOSE US</Text>
            <Heading as="h2" size="2xl" fontWeight="bold">
              Learn Without Limits
            </Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')} maxW="2xl">
              Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {features.map((feature, index) => (
              <MotionBox
                key={feature.title}
                p={6}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="lg"
                boxShadow="md"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon as={feature.icon} w={8} h={8} color="brand.500" mb={4} />
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  {feature.title}
                </Text>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  {feature.description}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Popular Courses */}
      <Box py={20}>
        <Container maxW="7xl">
          <VStack spacing={3} textAlign="center" mb={12}>
            <Text color="brand.500" fontWeight="bold" fontSize="lg">POPULAR COURSES</Text>
            <Heading as="h2" size="2xl" fontWeight="bold">
              Start Learning from the Best
            </Heading>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {popularCourses.map((course) => (
              <MotionBox
                key={course.id}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                _hover={{ boxShadow: 'xl' }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  h={48}
                  w="full"
                  objectFit="cover"
                />
                <Box p={6}>
                  <Text color="brand.500" fontWeight="semibold" fontSize="sm" mb={1}>
                    {course.instructor}
                  </Text>
                  <Heading as="h3" size="md" mb={2} noOfLines={2}>
                    {course.title}
                  </Heading>
                  <Flex justify="space-between" align="center" mt={4}>
                    <Flex align="center">
                      <Box as="span" color="yellow.400" mr={1}>
                        ★
                      </Box>
                      <Text fontSize="sm" color="gray.600">
                        {course.rating} ({course.students.toLocaleString()} students)
                      </Text>
                    </Flex>
                    <Button colorScheme="brand" size="sm" variant="outline">
                      Enroll Now
                    </Button>
                  </Flex>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>

          <Flex justify="center" mt={12}>
            <Button
              as={RouterLink}
              to="/courses"
              size="lg"
              colorScheme="brand"
              rightIcon={<FaChartLine />}
            >
              Browse All Courses
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={20} bg={bgGradient} color="white">
        <Container maxW="4xl" textAlign="center">
          <Heading as="h2" size="2xl" fontWeight="bold" mb={6}>
            Ready to Start Learning?
          </Heading>
          <Text fontSize="xl" mb={8} opacity={0.9} maxW="2xl" mx="auto">
            Join thousands of students already learning with us. Start your learning journey today and unlock your potential!
          </Text>
          <Button
            as={RouterLink}
            to="/courses"
            size="lg"
            colorScheme="white"
            variant="outline"
            _hover={{ bg: 'whiteAlpha.200' }}
          >
            Get Started Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};
