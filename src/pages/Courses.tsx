import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Badge,
  HStack,
  Icon,
  VStack,
  Image,
  Divider,
} from '@chakra-ui/react';
import { SearchIcon, StarIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Course } from '@/types';

const MotionBox = motion(Box);

// Types
interface CourseCardProps {
  course: Course;
}
type SortOption = 'relevance' | 'newest' | 'highest-rated' | 'most-popular';
type Level = 'all' | 'beginner' | 'intermediate' | 'advanced';

// Mock data
const categories = [
  'All Categories',
  'Web Development',
  'Data Science',
  'Mobile Development',
  'UI/UX Design',
  'Business',
  'Marketing',
  'Photography',
  'Music',
];

const levels: { value: Level; label: string }[] = [
  { value: 'all', label: 'All Levels' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'newest', label: 'Newest' },
  { value: 'highest-rated', label: 'Highest Rated' },
  { value: 'most-popular', label: 'Most Popular' },
];

// Mock course data
const mockCourses: Course[] = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp 2024',
    instructor: 'Jane Smith',
    category: 'Web Development',
    level: 'beginner',
    rating: 4.7,
    students: 12500,
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 2,
    title: 'Python for Data Science and Machine Learning',
    instructor: 'John Doe',
    category: 'Data Science',
    level: 'intermediate',
    rating: 4.6,
    students: 8765,
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  // Add more mock courses as needed
];

const CourseCard = ({ course }: CourseCardProps) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const mutedText = useColorModeValue('gray.600', 'gray.400');

  return (
    <MotionBox
      as={RouterLink}
      to={`/courses/${course.id}`}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={cardBg}
      borderColor={borderColor}
      _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}
      transition="all 0.2s"
      h="100%"
      display="flex"
      flexDirection="column"
    >
      <Box h="160px" bgSize="cover" bgPos="center" bgImage={`url(${course.image})`} />
      <Box p={5} flex={1} display="flex" flexDirection="column">
        <HStack spacing={2} mb={2}>
          <Badge colorScheme={course.level === 'beginner' ? 'green' : course.level === 'intermediate' ? 'blue' : 'red'}>
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </Badge>
          <Badge colorScheme="purple">{course.category}</Badge>
        </HStack>
        <Heading as="h3" size="md" mb={2} noOfLines={2}>
          {course.title}
        </Heading>
        <Text fontSize="sm" color={mutedText} mb={4}>
          By {course.instructor}
        </Text>
        <HStack spacing={2} mb={4}>
          <Box display="flex" alignItems="center">
            <Text fontWeight="bold" color="yellow.500" mr={1}>
              {course.rating}
            </Text>
            <Icon as={StarIcon} color="yellow.500" />
          </Box>
          <Text fontSize="sm" color={mutedText}>
            ({course.rating > 999 ? `${(course.rating / 1000).toFixed(1)}k` : course.rating} ratings)
          </Text>
        </HStack>
        <Text fontSize="lg" fontWeight="bold" color={useColorModeValue('gray.900', 'white')} mt="auto">
          ${course.price.toFixed(2)}
        </Text>
      </Box>
    </MotionBox>
  );
};

export const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState<Level>('all');
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8;

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    return mockCourses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
      
      return matchesSearch && matchesCategory && matchesLevel;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.id - a.id; // Assuming higher ID means newer
        case 'highest-rated':
          return b.rating - a.rating;
        case 'most-popular':
          return b.students - a.students;
        case 'relevance':
        default:
          return 0; // Default sorting (could be improved with more sophisticated logic)
      }
    });
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

  // Pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const inputBg = useColorModeValue('white', 'gray.700');
  const inputBorder = useColorModeValue('gray.200', 'gray.600');
  const mutedText = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box py={12} bg={useColorModeValue('gray.50', 'gray.900')} minH="100vh">
      <Container maxW="8xl">
        {/* Header */}
        <Box textAlign="center" mb={12}>
          <Text color="brand.500" fontWeight="semibold" mb={2}>
            EXPLORE COURSES
          </Text>
          <Heading as="h1" size="2xl" mb={4}>
            Find the Perfect Course
          </Heading>
          <Text fontSize="lg" color={mutedText} maxW="2xl" mx="auto">
            Browse through our extensive collection of courses and start learning today. Gain new skills and advance your
            career with expert-led video courses.
          </Text>
        </Box>

        {/* Search and Filter Section */}
        <Box mb={8} p={6} bg={cardBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={4} alignItems="end">
            <GridItem colSpan={{ base: 1, md: 2 }}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color={mutedText} />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  bg={inputBg}
                  borderColor={inputBorder}
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <Select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                bg={inputBg}
                borderColor={inputBorder}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem>
              <Select
                value={selectedLevel}
                onChange={(e) => {
                  setSelectedLevel(e.target.value as Level);
                  setCurrentPage(1);
                }}
                bg={inputBg}
                borderColor={inputBorder}
              >
                {levels.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </Select>
            </GridItem>
          </Grid>
          <Flex justify="space-between" mt={4} align="center">
            <Text color={mutedText} fontSize="sm">
              {filteredCourses.length} courses found
            </Text>
            <HStack spacing={4}>
              <Text fontSize="sm" color={mutedText}>
                Sort by:
              </Text>
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                size="sm"
                width="auto"
                bg={inputBg}
                borderColor={inputBorder}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </HStack>
          </Flex>
        </Box>

        {/* Courses Grid */}
        {currentCourses.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={6} mb={8}>
            {currentCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </SimpleGrid>
        ) : (
          <Box textAlign="center" py={12}>
            <Text fontSize="xl" color={mutedText} mb={4}>
              No courses found matching your criteria.
            </Text>
            <Button
              colorScheme="brand"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
                setSelectedLevel('all');
                setCurrentPage(1);
              }}
            >
              Clear Filters
            </Button>
          </Box>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Flex justify="center" mt={8}>
            <HStack spacing={2}>
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                isDisabled={currentPage === 1}
                variant="outline"
              >
                Previous
              </Button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Show first 2 pages, current page, and last 2 pages
                let pageNum;
                if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                if (pageNum < 1 || pageNum > totalPages) return null;
                
                return (
                  <Button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    colorScheme={currentPage === pageNum ? 'brand' : 'gray'}
                    variant={currentPage === pageNum ? 'solid' : 'outline'}
                  >
                    {pageNum}
                  </Button>
                );
              })}
              <Button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                isDisabled={currentPage === totalPages}
                variant="outline"
              >
                Next
              </Button>
            </HStack>
          </Flex>
        )}
      </Container>
    </Box>
  );
};

export default Courses;
