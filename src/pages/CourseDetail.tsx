import { Box, Button, Container, Flex, Grid, GridItem, Heading, HStack, Icon, Image, Input, InputGroup, InputLeftElement, List, ListIcon, ListItem, Select, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text, Textarea, useColorModeValue, VStack, Wrap, WrapItem, Badge, Avatar, Divider, useToast } from '@chakra-ui/react';
import { FaCheckCircle, FaClock, FaGlobe, FaPlay, FaStar, FaStarHalfAlt, FaRegStar, FaRegClock, FaRegUser, FaRegCalendarAlt, FaRegFile, FaDownload, FaMobileAlt, FaThumbsUp, FaThumbsDown, FaUserGraduate, FaBook, FaTwitter, FaLinkedin, FaGithub, FaChevronDown } from 'react-icons/fa';
import { FaInfinity, FaCertificate } from 'react-icons/fa6';
import { SimpleGrid } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const MotionBox = motion(Box);

// Mock course data - in a real app, this would come from an API
interface CourseData {
  id: number;
  title: string;
  instructor: {
    name: string;
    avatar: string;
    title: string;
    rating: number;
    students: number;
    courses: number;
  };
  category: string;
  level: string;
  rating: number;
  reviewsCount: number;
  students: number;
  duration: string;
  lectures: number;
  resources: number;
  price: number;
  discountPrice: number;
  language: string;
  lastUpdated: string;
  image: string;
  description: string;
  longDescription: string;
  whatYouWillLearn: string[];
  requirements: string[];
  whoIsThisFor: string[];
  curriculum: Array<{
    section: string;
    lectures: number;
    duration: string;
    items: Array<{
      title: string;
      duration: string;
      preview?: boolean;
    }>;
  }>;
  reviews: Array<{
    id: number;
    user: string;
    avatar: string;
    rating: number;
    date: string;
    comment: string;
    likes: number;
  }>;
}

const courseData: CourseData = {
  id: 1,
  title: 'Complete Web Development Bootcamp',
  instructor: {
    name: 'Alex Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    title: 'Senior Full Stack Developer',
    rating: 4.8,
    students: 12500,
    courses: 15,
  },
  category: 'Web Development',
  level: 'Beginner',
  rating: 4.8,
  reviewsCount: 2480,
  students: 12500,
  duration: '35 hours',
  lectures: 320,
  resources: 150,
  price: 89.99,
  discountPrice: 59.99,
  language: 'English',
  lastUpdated: 'September 2023',
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80',
  description: 'Become a full-stack web developer with just one course. HTML, CSS, JavaScript, Node, React, MongoDB and more!',
  longDescription: `In this comprehensive course, you'll learn the skills to become a professional web developer. We'll start from the very beginning, teaching you HTML and CSS fundamentals before moving on to more complex topics like JavaScript, React, Node.js, and databases. By the end of this course, you'll have the skills and knowledge to build your own full-stack web applications from scratch.`,
  whatYouWillLearn: [
    'Build 16 web development projects for your portfolio',
    'Master modern web development with HTML5, CSS3, and JavaScript (ES6+)',
    'Build full-stack applications with Node.js, Express, and MongoDB',
    'Create responsive, mobile-first websites with modern CSS (Flexbox & Grid)',
    'Learn React.js and build real-world applications',
    'Understand how to deploy your applications to the cloud',
    'Master the command line and use Git for version control',
    'Learn professional developer best practices',
  ],
  requirements: [
    "No programming experience needed - I'll teach you everything you need to know",
    'A computer with internet access',
    'A modern web browser (Chrome, Firefox, Safari, or Edge)',
    'A code editor (I\'ll show you how to install one)',
  ],
  whoIsThisFor: [
    'Beginners with no previous coding experience',
    'Designers who want to learn to code',
    'Entrepreneurs who want to build their own websites',
    'Anyone who wants to start a career in web development',
    'Freelancers looking to expand their skillset',
  ],
  curriculum: [
    {
      section: 'Getting Started',
      lectures: 8,
      duration: '1.5 hours',
      items: [
        { title: 'Welcome to the Course', duration: '5:20', preview: true },
        { title: 'How to Get the Most Out of This Course', duration: '8:45' },
        { title: 'Setting Up Your Development Environment', duration: '12:30' },
      ],
    },
    {
      section: 'HTML Fundamentals',
      lectures: 15,
      duration: '3.5 hours',
      items: [
        { title: 'Introduction to HTML', duration: '10:15' },
        { title: 'HTML Document Structure', duration: '14:20' },
        { title: 'Working with Text and Links', duration: '18:30' },
      ],
    },
    // More sections would be here...
  ],
  reviews: [
    {
      id: 1,
      user: 'Sarah M.',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      date: '2 weeks ago',
      comment: 'This course is absolutely amazing! The instructor explains everything in a clear and concise way. I went from knowing nothing about web development to building my own full-stack applications in just a few months.',
      likes: 42,
    },
    {
      id: 2,
      user: 'Michael T.',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 4,
      date: '1 month ago',
      comment: 'Great course overall! The content is well-structured and easy to follow. The only reason I\'m giving it 4 stars instead of 5 is that some of the more advanced sections could use more detailed explanations.',
      likes: 18,
    },
    // More reviews would be here...
  ],
};

interface RatingStarsProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}

const RatingStars = ({ rating, size = 'md' }: RatingStarsProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <HStack spacing={0.5}>
      {[...Array(fullStars)].map((_, i) => (
        <Icon key={`full-${i}`} as={FaStar} color="yellow.400" boxSize={size === 'sm' ? 3 : 4} />
      ))}
      {hasHalfStar && <Icon as={FaStarHalfAlt} color="yellow.400" boxSize={size === 'sm' ? 3 : 4} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Icon key={`empty-${i}`} as={FaRegStar} color="yellow.400" boxSize={size === 'sm' ? 3 : 4} />
      ))}
      <Text fontSize={size === 'sm' ? 'sm' : 'md'} color={useColorModeValue('gray.600', 'gray.400')} ml={1}>
        {rating.toFixed(1)}
      </Text>
    </HStack>
  );
};

export const CourseDetail: React.FC = () => {
  const { id } = useParams();
  const toast = useToast();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const mutedText = useColorModeValue('gray.600', 'gray.400');
  
  const handleEnroll = () => {
    setIsEnrolled(true);
    toast({
      title: 'Enrollment Successful!',
      description: 'You have successfully enrolled in this course.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };
  
  const handleAddToCart = () => {
    toast({
      title: 'Added to Cart',
      description: 'This course has been added to your cart.',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };
  
  const handleSubmitReview = () => {
    toast({
      title: 'Review Submitted',
      description: 'Thank you for your review!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    setReview('');
    setActiveTab(1); // Switch to the reviews tab
  };

  return (
    <Box py={12}>
      <Container maxW="7xl">
        {/* Course Header */}
        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8} mb={12}>
          <Box>
            <Tag colorScheme="brand" mb={4}>
              {courseData.category}
            </Tag>
            <Heading as="h1" size="2xl" mb={4}>
              {courseData.title}
            </Heading>
            <Text fontSize="xl" color={mutedText} mb={6}>
              {courseData.description}
            </Text>
            
            <Flex align="center" mb={6}>
              <RatingStars rating={courseData.rating} />
              <Text ml={2} color={mutedText}>
                ({courseData.reviewsCount.toLocaleString()} reviews)
              </Text>
              <Text mx={2}>•</Text>
              <Text color={mutedText}>
                {courseData.students.toLocaleString()} students
              </Text>
            </Flex>
            
            <Flex align="center" color={mutedText} mb={6}>
              <HStack mr={6}>
                <Icon as={FaRegUser} />
                <Text>Created by {courseData.instructor.name}</Text>
              </HStack>
              <HStack mr={6}>
                <Icon as={FaRegClock} />
                <Text>Last updated {courseData.lastUpdated}</Text>
              </HStack>
              <HStack>
                <Icon as={FaGlobe} />
                <Text>{courseData.language}</Text>
              </HStack>
            </Flex>
            
            <Box bg={useColorModeValue('blue.50', 'blue.900')} p={4} borderRadius="md" mb={6}>
              <Text fontWeight="bold" mb={2}>This course includes:</Text>
              <Grid templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr' }} gap={2}>
                <HStack>
                  <Icon as={FaPlay} color="brand.500" />
                  <Text>{courseData.duration} on-demand video</Text>
                </HStack>
                <HStack>
                  <Icon as={FaRegFile} color="brand.500" />
                  <Text>{courseData.lectures} lectures</Text>
                </HStack>
                <HStack>
                  <Icon as={FaDownload} color="brand.500" />
                  <Text>{courseData.resources} downloadable resources</Text>
                </HStack>
                <HStack>
                  <Icon as={FaInfinity} color="brand.500" />
                  <Text>Full lifetime access</Text>
                </HStack>
                <HStack>
                  <Icon as={FaMobileAlt} color="brand.500" />
                  <Text>Access on mobile and TV</Text>
                </HStack>
                <HStack>
                  <Icon as={FaCertificate} color="brand.500" />
                  <Text>Certificate of completion</Text>
                </HStack>
              </Grid>
            </Box>
          </Box>
          
          {/* Course Sidebar */}
          <Box>
            <Box 
              bg={cardBg} 
              borderRadius="lg" 
              overflow="hidden"
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="sm"
            >
              <Box position="relative" h="180px">
                <Image
                  src={courseData.image}
                  alt={courseData.title}
                  w="full"
                  h="full"
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="blackAlpha.600"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button 
                    leftIcon={<FaPlay />} 
                    colorScheme="white" 
                    variant="outline"
                    size="lg"
                    _hover={{ bg: 'whiteAlpha.200' }}
                  >
                    Preview this course
                  </Button>
                </Box>
              </Box>
              
              <Box p={6}>
                <Flex justify="space-between" align="center" mb={4}>
                  <Text fontSize="2xl" fontWeight="bold">
                    ${courseData.discountPrice}
                  </Text>
                  <Text textDecoration="line-through" color={mutedText}>
                    ${courseData.price}
                  </Text>
                  <Badge colorScheme="green" fontSize="0.8em">
                    {Math.round((1 - courseData.discountPrice / courseData.price) * 100)}% OFF
                  </Badge>
                </Flex>
                
                <VStack spacing={4} mb={6}>
                  {isEnrolled ? (
                    <Button 
                      colorScheme="brand" 
                      size="lg" 
                      w="full"
                      as="a"
                      href="#curriculum"
                      onClick={() => setActiveTab(0)}
                    >
                      Continue Learning
                    </Button>
                  ) : (
                    <>
                      <Button 
                        colorScheme="brand" 
                        size="lg" 
                        w="full"
                        onClick={handleEnroll}
                      >
                        Enroll Now
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        w="full"
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </Button>
                    </>
                  )}
                  
                  <Button variant="link" colorScheme="blue" size="sm">
                    30-Day Money-Back Guarantee
                  </Button>
                </VStack>
                
                <Box>
                  <Text fontWeight="bold" mb={2}>This course includes:</Text>
                  <VStack align="start" spacing={2}>
                    <HStack>
                      <Icon as={FaCheckCircle} color="green.500" />
                      <Text>{courseData.duration} on-demand video</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCheckCircle} color="green.500" />
                      <Text>Full lifetime access</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCheckCircle} color="green.500" />
                      <Text>Certificate of completion</Text>
                    </HStack>
                  </VStack>
                </Box>
              </Box>
            </Box>
            
            {/* Instructor Card */}
            <Box 
              mt={6} 
              bg={cardBg}
              borderRadius="lg"
              p={6}
              borderWidth="1px"
              borderColor={borderColor}
            >
              <Text fontWeight="bold" fontSize="lg" mb={4}>Instructor</Text>
              <Flex align="center" mb={4}>
                <Avatar 
                  src={courseData.instructor.avatar} 
                  name={courseData.instructor.name} 
                  size="lg"
                  mr={4}
                />
                <Box>
                  <Text fontWeight="bold">{courseData.instructor.name}</Text>
                  <Text color={mutedText} fontSize="sm">{courseData.instructor.title}</Text>
                </Box>
              </Flex>
              <Flex justify="space-between" mb={4}>
                <VStack align="center">
                  <Text fontWeight="bold">{courseData.instructor.rating.toFixed(1)}</Text>
                  <Text fontSize="sm" color={mutedText}>Instructor Rating</Text>
                </VStack>
                <VStack align="center">
                  <Text fontWeight="bold">{courseData.instructor.students.toLocaleString()}</Text>
                  <Text fontSize="sm" color={mutedText}>Students</Text>
                </VStack>
                <VStack align="center">
                  <Text fontWeight="bold">{courseData.instructor.courses}</Text>
                  <Text fontSize="sm" color={mutedText}>Courses</Text>
                </VStack>
              </Flex>
              <Text color={mutedText} mb={4} noOfLines={3}>
                {courseData.instructor.name} is a {courseData.instructor.title} with over 10 years of experience in web development. He has worked with companies like Google, Amazon, and Microsoft, and has helped thousands of students learn to code.
              </Text>
              <Button variant="outline" size="sm" w="full">
                View Profile
              </Button>
            </Box>
          </Box>
        </Grid>
        
        {/* Course Content Tabs */}
        <Box mb={16}>
          <Tabs 
            variant="enclosed" 
            colorScheme="brand"
            index={activeTab}
            onChange={(index) => setActiveTab(index)}
          >
            <TabList>
              <Tab>Curriculum</Tab>
              <Tab>Reviews</Tab>
              <Tab>Instructor</Tab>
              <Tab>FAQ</Tab>
            </TabList>
            
            <Box 
              bg={cardBg}
              borderBottomRadius="lg"
              borderWidth="1px"
              borderTopWidth="0"
              borderColor={borderColor}
              p={6}
            >
              <TabPanels>
                {/* Curriculum Tab */}
                <TabPanel p={0}>
                  <VStack align="stretch" spacing={6}>
                    <Box>
                      <Heading as="h2" size="lg" mb={4} id="what-youll-learn">
                        What you'll learn
                      </Heading>
                      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4} mb={6}>
                        {courseData.whatYouWillLearn.map((item, index) => (
                          <HStack key={index} align="flex-start">
                            <Icon as={FaCheckCircle} color="green.500" mt={1} />
                            <Text>{item}</Text>
                          </HStack>
                        ))}
                      </Grid>
                    </Box>
                    
                    <Divider my={6} />
                    
                    <Box>
                      <Heading as="h2" size="lg" mb={4}>
                        Course Content
                      </Heading>
                      <Text color={mutedText} mb={6}>
                        {courseData.curriculum.length} sections • {courseData.lectures} lectures • {courseData.duration} total length
                      </Text>
                      
                      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                        {courseData.curriculum.map((section, sectionIndex) => (
                          <Box key={sectionIndex} borderBottomWidth={sectionIndex < courseData.curriculum.length - 1 ? '1px' : '0'} borderColor={borderColor}>
                            <Flex 
                              justify="space-between" 
                              align="center" 
                              p={4} 
                              bg={useColorModeValue('gray.50', 'gray.700')}
                              cursor="pointer"
                              onClick={() => {}}
                            >
                              <HStack>
                                <Text fontWeight="bold">{section.section}</Text>
                              </HStack>
                              <HStack color={mutedText}>
                                <Text fontSize="sm">{section.lectures} lectures • {section.duration}</Text>
                                <Icon as={FaChevronDown} />
                              </HStack>
                            </Flex>
                            <Box>
                              {section.items.map((item, itemIndex) => (
                                <Flex 
                                  key={itemIndex} 
                                  p={4} 
                                  borderTopWidth="1px" 
                                  borderColor={borderColor}
                                  _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
                                >
                                  <HStack flex={1}>
                                    <Icon as={FaPlay} color={mutedText} boxSize={4} />
                                    <Text>{item.title}</Text>
                                    {item.preview && (
                                      <Badge colorScheme="blue" ml={2}>
                                        Preview
                                      </Badge>
                                    )}
                                  </HStack>
                                  <Text color={mutedText} fontSize="sm">
                                    {item.duration}
                                  </Text>
                                </Flex>
                              ))}
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    
                    <Divider my={6} />
                    
                    <Box>
                      <Heading as="h2" size="lg" mb={4}>
                        Requirements
                      </Heading>
                      <List spacing={2} mb={6}>
                        {courseData.requirements.map((req, index) => (
                          <ListItem key={index} display="flex" alignItems="flex-start">
                            <ListIcon as={FaCheckCircle} color="green.500" mt={1} />
                            <Text>{req}</Text>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                    
                    <Divider my={6} />
                    
                    <Box>
                      <Heading as="h2" size="lg" mb={4}>
                        Who this course is for:
                      </Heading>
                      <List spacing={2} mb={6}>
                        {courseData.whoIsThisFor.map((item, index) => (
                          <ListItem key={index} display="flex" alignItems="flex-start">
                            <ListIcon as={FaCheckCircle} color="green.500" mt={1} />
                            <Text>{item}</Text>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </VStack>
                </TabPanel>
                
                {/* Reviews Tab */}
                <TabPanel p={0}>
                  <VStack align="stretch" spacing={6}>
                    <Flex justify="space-between" align="center" mb={6}>
                      <Box>
                        <Heading as="h2" size="lg" mb={2}>
                          Student Feedback
                        </Heading>
                        <Flex align="center">
                          <Text fontSize="4xl" fontWeight="bold" mr={4}>
                            {courseData.rating.toFixed(1)}
                          </Text>
                          <Box>
                            <RatingStars rating={courseData.rating} size="lg" />
                            <Text color={mutedText}>
                              Course Rating • {courseData.reviews.toLocaleString()} ratings
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                      
                      <Box>
                        {[5, 4, 3, 2, 1].map((stars) => (
                          <Flex key={stars} align="center" mb={1}>
                            <Text w={8}>{stars} star</Text>
                            <Box 
                              w="200px" 
                              h="8px" 
                              bg={useColorModeValue('gray.200', 'gray.700')} 
                              mx={2}
                              borderRadius="full"
                              overflow="hidden"
                            >
                              <Box 
                                w={`${(courseData.rating / 5) * 100}%`} 
                                h="100%" 
                                bg="yellow.400"
                              />
                            </Box>
                            <Text w={12} textAlign="right" color={mutedText}>
                              {Math.round((courseData.rating / 5) * 100)}%
                            </Text>
                          </Flex>
                        ))}
                      </Box>
                    </Flex>
                    
                    {/* Add Review Form */}
                    <Box 
                      bg={useColorModeValue('gray.50', 'gray.700')} 
                      p={6} 
                      borderRadius="lg"
                      mb={8}
                    >
                      <Heading as="h3" size="md" mb={4}>
                        Write a Review
                      </Heading>
                      <VStack align="stretch" spacing={4}>
                        <Box>
                          <Text mb={2}>Your Rating</Text>
                          <HStack spacing={1}>
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Icon
                                key={star}
                                as={star <= rating ? FaStar : FaRegStar}
                                color="yellow.400"
                                boxSize={6}
                                cursor="pointer"
                                onClick={() => setRating(star)}
                              />
                            ))}
                          </HStack>
                        </Box>
                        <Box>
                          <Text mb={2}>Your Review</Text>
                          <Textarea
                            placeholder="Share your thoughts about this course..."
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            rows={4}
                          />
                        </Box>
                        <Button 
                          colorScheme="brand" 
                          alignSelf="flex-end"
                          onClick={handleSubmitReview}
                          isDisabled={!review.trim()}
                        >
                          Submit Review
                        </Button>
                      </VStack>
                    </Box>
                    
                    {/* Reviews List */}
                    <VStack align="stretch" spacing={6}>
                      {courseData.reviews.map((review) => (
                        <Box 
                          key={review.id} 
                          borderBottomWidth="1px" 
                          borderColor={borderColor} 
                          pb={6}
                          _last={{ borderBottomWidth: 0 }}
                        >
                          <Flex justify="space-between" mb={2}>
                            <HStack>
                              <Avatar size="sm" src={review.avatar} name={review.user} />
                              <Box>
                                <Text fontWeight="bold">{review.user}</Text>
                                <RatingStars rating={review.rating} size="sm" />
                              </Box>
                            </HStack>
                            <Text color={mutedText} fontSize="sm">
                              {review.date}
                            </Text>
                          </Flex>
                          <Text mb={2}>
                            {review.comment}
                          </Text>
                          <HStack color={mutedText} spacing={4}>
                            <HStack>
                              <Icon as={FaThumbsUp} />
                              <Text>Helpful ({review.likes})</Text>
                            </HStack>
                            <HStack>
                              <Icon as={FaThumbsDown} />
                              <Text>Not Helpful (0)</Text>
                            </HStack>
                            <Text>•</Text>
                            <Text>Report</Text>
                          </HStack>
                        </Box>
                      ))}
                    </VStack>
                    
                    <Flex justify="center" mt={8}>
                      <Button variant="outline">
                        Load More Reviews
                      </Button>
                    </Flex>
                  </VStack>
                </TabPanel>
                
                {/* Instructor Tab */}
                <TabPanel p={0}>
                  <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
                    <Box flex={1}>
                      <HStack align="start" spacing={6} mb={8}>
                        <Avatar 
                          src={courseData.instructor.avatar} 
                          name={courseData.instructor.name} 
                          size="2xl"
                        />
                        <Box>
                          <Heading as="h2" size="lg" mb={2}>
                            {courseData.instructor.name}
                          </Heading>
                          <Text color={mutedText} mb={4}>
                            {courseData.instructor.title}
                          </Text>
                          <Flex mb={4}>
                            <RatingStars rating={courseData.instructor.rating} />
                            <Text mx={2}>•</Text>
                            <Text>
                              {courseData.instructor.rating} Instructor Rating
                            </Text>
                          </Flex>
                          <Flex color={mutedText} mb={4}>
                            <HStack mr={6}>
                              <Icon as={FaUserGraduate} />
                              <Text>{courseData.instructor.students.toLocaleString()} Students</Text>
                            </HStack>
                            <HStack>
                              <Icon as={FaBook} />
                              <Text>{courseData.instructor.courses} Courses</Text>
                            </HStack>
                          </Flex>
                          <Button colorScheme="brand" size="sm" variant="outline">
                            Follow
                          </Button>
                        </Box>
                      </HStack>
                      
                      <Box mb={8}>
                        <Heading as="h3" size="md" mb={4}>
                          About Me
                        </Heading>
                        <Text mb={4} lineHeight="tall">
                          {courseData.instructor.name} is a {courseData.instructor.title} with over 10 years of experience in web development. He has worked with companies like Google, Amazon, and Microsoft, helping them build scalable and performant web applications.
                        </Text>
                        <Text mb={4} lineHeight="tall">
                          With a passion for teaching, {courseData.instructor.name} has been creating online courses for the past 5 years, helping over {courseData.instructor.students.toLocaleString()} students worldwide to learn web development and advance their careers.
                        </Text>
                        <Text lineHeight="tall">
                          When not coding or teaching, {courseData.instructor.name.split(' ')[0]} enjoys hiking, photography, and contributing to open-source projects.
                        </Text>
                      </Box>
                      
                      <Box mb={8}>
                        <Heading as="h3" size="md" mb={4}>
                          Work Experience
                        </Heading>
                        <VStack align="stretch" spacing={6}>
                          <Box>
                            <Text fontWeight="bold">Senior Full Stack Developer</Text>
                            <Text color={mutedText} mb={1}>Google • 2018 - Present</Text>
                            <Text>Leading a team of developers to build scalable web applications using modern technologies.</Text>
                          </Box>
                          <Box>
                            <Text fontWeight="bold">Frontend Developer</Text>
                            <Text color={mutedText} mb={1}>Amazon • 2015 - 2018</Text>
                            <Text>Developed and maintained customer-facing features for Amazon's e-commerce platform.</Text>
                          </Box>
                          <Box>
                            <Text fontWeight="bold">Web Developer</Text>
                            <Text color={mutedText} mb={1}>Microsoft • 2012 - 2015</Text>
                            <Text>Worked on various web projects using .NET and JavaScript frameworks.</Text>
                          </Box>
                        </VStack>
                      </Box>
                      
                      <Box>
                        <Heading as="h3" size="md" mb={4}>
                          Education
                        </Heading>
                        <VStack align="stretch" spacing={4}>
                          <Box>
                            <Text fontWeight="bold">Master of Computer Science</Text>
                            <Text color={mutedText}>Stanford University • 2010 - 2012</Text>
                          </Box>
                          <Box>
                            <Text fontWeight="bold">Bachelor of Science in Computer Science</Text>
                            <Text color={mutedText}>University of California, Berkeley • 2006 - 2010</Text>
                          </Box>
                        </VStack>
                      </Box>
                    </Box>
                    
                    <Box w={{ base: 'full', md: '300px' }}>
                      <Box 
                        bg={cardBg}
                        borderRadius="lg"
                        p={6}
                        borderWidth="1px"
                        borderColor={borderColor}
                        position="sticky"
                        top="100px"
                      >
                        <Text fontWeight="bold" mb={4}>Instructor Stats</Text>
                        <VStack align="stretch" spacing={4}>
                          <HStack justify="space-between">
                            <Text color={mutedText}>Total Students</Text>
                            <Text fontWeight="bold">{courseData.instructor.students.toLocaleString()}</Text>
                          </HStack>
                          <HStack justify="space-between">
                            <Text color={mutedText}>Courses</Text>
                            <Text fontWeight="bold">{courseData.instructor.courses}</Text>
                          </HStack>
                          <HStack justify="space-between">
                            <Text color={mutedText}>Reviews</Text>
                            <Text fontWeight="bold">{(courseData.instructor.students * 0.2).toLocaleString()}</Text>
                          </HStack>
                          <HStack justify="space-between">
                            <Text color={mutedText}>Rating</Text>
                            <HStack>
                              <RatingStars rating={courseData.instructor.rating} size="sm" />
                            </HStack>
                          </HStack>
                        </VStack>
                        
                        <Divider my={6} />
                        
                        <Text fontWeight="bold" mb={4}>Contact</Text>
                        <VStack align="stretch" spacing={4}>
                          <Button leftIcon={<FaGlobe />} variant="outline" justifyContent="flex-start">
                            Website
                          </Button>
                          <Button leftIcon={<FaTwitter />} variant="outline" justifyContent="flex-start">
                            Twitter
                          </Button>
                          <Button leftIcon={<FaLinkedin />} variant="outline" justifyContent="flex-start">
                            LinkedIn
                          </Button>
                          <Button leftIcon={<FaGithub />} variant="outline" justifyContent="flex-start">
                            GitHub
                          </Button>
                        </VStack>
                      </Box>
                    </Box>
                  </Flex>
                </TabPanel>
                
                {/* FAQ Tab */}
                <TabPanel p={0}>
                  <VStack align="stretch" spacing={6}>
                    <Box>
                      <Heading as="h2" size="lg" mb={6}>
                        Frequently Asked Questions
                      </Heading>
                      
                      <VStack align="stretch" spacing={4}>
                        {[
                          {
                            question: 'When does the course start and finish?',
                            answer: 'The course starts now and never ends! It is a completely self-paced online course - you decide when you start and when you finish.'
                          },
                          {
                            question: 'How long do I have access to the course?',
                            answer: 'How does lifetime access sound? After enrolling, you have unlimited access to this course for as long as you like - across any and all devices you own.'
                          },
                          {
                            question: 'What if I am unhappy with the course?',
                            answer: 'We would never want you to be unhappy! If you are unsatisfied with your purchase, contact us in the first 30 days and we will give you a full refund.'
                          },
                          {
                            question: 'Do I get a certificate after completing the course?',
                            answer: 'Yes, you will receive a certificate of completion that you can add to your resume or LinkedIn profile after completing all the course content.'
                          },
                          {
                            question: 'What if I need help during the course?',
                            answer: 'You can ask questions in the Q&A section of the course, and our teaching assistants or other students can help you out. For more complex issues, you can also reach out to the instructor directly.'
                          },
                          {
                            question: 'Are there any prerequisites for this course?',
                            answer: 'This course is designed for beginners with no prior experience required. All you need is a computer with internet access and a willingness to learn!'
                          },
                          {
                            question: 'Can I download the course videos?',
                            answer: 'Yes, you can download the course videos for offline viewing on the Udemy mobile app.'
                          },
                          {
                            question: 'Will I have access to the course materials after completing the course?',
                            answer: 'Yes, you will have lifetime access to all course materials, including any future updates.'
                          },
                          {
                            question: 'Can I share my course with others?',
                            answer: 'No, the course is for individual use only. Each person must purchase their own subscription or license.'
                          },
                          {
                            question: 'How do I access the course after purchasing?',
                            answer: 'After purchasing the course, you can access it immediately by logging into your account on our website or mobile app.'
                          }
                        ].map((faq, index) => (
                          <Box 
                            key={index} 
                            borderWidth="1px" 
                            borderRadius="lg" 
                            overflow="hidden"
                            borderColor={borderColor}
                          >
                            <Flex 
                              p={4} 
                              justify="space-between" 
                              align="center"
                              cursor="pointer"
                              onClick={() => {}}
                            >
                              <Text fontWeight="medium">{faq.question}</Text>
                              <Icon as={FaChevronDown} />
                            </Flex>
                            <Box 
                              p={4} 
                              pt={0} 
                              borderTopWidth="1px" 
                              borderColor={borderColor}
                              bg={useColorModeValue('gray.50', 'gray.700')}
                            >
                              <Text>{faq.answer}</Text>
                            </Box>
                          </Box>
                        ))}
                      </VStack>
                      
                      <Box mt={8} textAlign="center">
                        <Text fontSize="lg" mb={4}>
                          Still have questions?
                        </Text>
                        <Button colorScheme="brand">
                          Contact Support
                        </Button>
                      </Box>
                    </Box>
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Box>
          </Tabs>
        </Box>
        
        {/* Related Courses */}
        <Box mb={16}>
          <Heading as="h2" size="xl" mb={6}>
            You May Also Like
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {[
              {
                id: 2,
                title: 'Advanced JavaScript Concepts',
                instructor: 'Sarah Chen',
                rating: 4.9,
                students: 8900,
                price: 94.99,
                image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
              },
              {
                id: 3,
                title: 'React Native Mobile App Development',
                instructor: 'Miguel Rodriguez',
                rating: 4.7,
                students: 10200,
                price: 84.99,
                image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
              },
              {
                id: 4,
                title: 'Node.js & Express: From Zero to Master',
                instructor: 'Taylor Swift',
                rating: 4.8,
                students: 7500,
                price: 79.99,
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
              },
            ].map((course) => (
              <MotionBox
                key={course.id}
                as={RouterLink}
                to={`/courses/${course.id}`}
                bg={cardBg}
                borderRadius="lg"
                overflow="hidden"
                borderWidth="1px"
                borderColor={borderColor}
                _hover={{ shadow: 'lg', transform: 'translateY(-4px)' }}
                transition="all 0.3s"
              >
                <Box h={40} overflow="hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    w="full"
                    h="full"
                    objectFit="cover"
                    transition="transform 0.3s"
                    _hover={{ transform: 'scale(1.05)' }}
                  />
                </Box>
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
                      <Text fontSize="sm" color={mutedText}>
                        {course.rating} ({course.students.toLocaleString()})
                      </Text>
                    </Flex>
                    <Text fontSize="lg" fontWeight="bold" color="brand.500">
                      ${course.price}
                    </Text>
                  </Flex>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
      
      {/* Floating CTA */}
      <Box 
        position="fixed" 
        bottom={0} 
        left={0} 
        right={0} 
        bg={cardBg}
        borderTopWidth="1px"
        borderColor={borderColor}
        p={4}
        zIndex={10}
        display={{ base: 'block', lg: 'none' }}
      >
        <Container maxW="7xl">
          <Flex justify="space-between" align="center">
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                ${courseData.discountPrice}
              </Text>
              <Text fontSize="sm" color={mutedText} textDecoration="line-through">
                ${courseData.price}
              </Text>
            </Box>
            <Button colorScheme="brand" size="lg">
              {isEnrolled ? 'Continue Learning' : 'Enroll Now'}
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
