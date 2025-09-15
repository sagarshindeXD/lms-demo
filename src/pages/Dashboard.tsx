import { Box, Button, Container, Flex, Grid, GridItem, Heading, HStack, Progress, SimpleGrid, Stack, Stat, StatHelpText, StatLabel, StatNumber, Text, VStack, useColorModeValue, Badge, Avatar, Divider, Icon } from '@chakra-ui/react';
import { FaBookOpen, FaAward, FaClock, FaCheckCircle, FaPlay, FaChevronRight, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Course, ActivityType } from '@/types';
import { IconType } from 'react-icons';

const MotionBox = motion(Box);

// Types
interface DashboardStats {
  enrolledCourses: number;
  completedCourses: number;
  inProgressCourses: number;
  learningHours: number;
  certificates: number;
  completionRate: number;
}

interface EnrolledCourse extends Course {
  progress: number;
  nextLesson: string;
  lastAccessed: string;
  category: string;
  level: string;
}

interface ActivityItem {
  id: number;
  type: ActivityType;
  title: string;
  course: string;
  time: string;
}

interface StatCardProps {
  icon: IconType;
  title: string;
  value: string | number;
  helpText?: string;
  colorScheme?: string;
}

interface ProgressItemProps {
  label: string;
  value: number;
  total: number;
  colorScheme?: string;
}

interface CourseCardProps {
  course: EnrolledCourse;
}

// Mock data
const userStats: DashboardStats = {
  enrolledCourses: 5,
  completedCourses: 2,
  inProgressCourses: 3,
  learningHours: 28.5,
  certificates: 2,
  completionRate: 65,
};

const enrolledCourses: EnrolledCourse[] = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    instructor: 'Jane Smith',
    category: 'Web Development',
    level: 'Beginner',
    rating: 4.7,
    students: 12500,
    price: 199.99,
    progress: 65,
    nextLesson: 'React Hooks in Depth',
    lastAccessed: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  // Add more courses as needed
];

const recentActivities: ActivityItem[] = [
  { id: 1, type: 'progress', title: 'Completed Module 3', course: 'Web Development', time: '2 hours ago' },
  { id: 2, type: 'enrolled', title: 'Enrolled in new course', course: 'Advanced React', time: '1 day ago' },
  { id: 3, type: 'completed', title: 'Course completed', course: 'JavaScript Basics', time: '3 days ago' },
  { id: 4, type: 'certificate', title: 'Certificate earned', course: 'Responsive Design', time: '1 week ago' },
];

// Helper Components
const StatCard = ({ icon: Icon, title, value, helpText, colorScheme = 'brand' }: StatCardProps) => (
  <MotionBox
    p={6}
    bg={useColorModeValue('white', 'gray.800')}
    rounded="lg"
    shadow="md"
    whileHover={{ y: -2 }}
    transition={{ duration: 0.2 }}
  >
    <HStack spacing={3} align="center">
      <Box p={2} bg={`${colorScheme}.100`} rounded="full" color={`${colorScheme}.600`}>
        <Icon size="1.5em" />
      </Box>
      <Box>
        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
        <Text fontSize="2xl" fontWeight="bold" mt={1}>
          {value}
        </Text>
        {helpText && (
          <Text fontSize="xs" color={useColorModeValue('gray.500', 'gray.400')}>
            {helpText}
          </Text>
        )}
      </Box>
    </HStack>
  </MotionBox>
);

const ProgressItem = ({ label, value, total, colorScheme = 'brand' }: ProgressItemProps) => (
  <Box mb={4}>
    <Flex justify="space-between" mb={1}>
      <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>
        {label}
      </Text>
      <Text fontSize="sm" fontWeight="semibold">
        {value}/{total}
      </Text>
    </Flex>
    <Progress
      value={(value / total) * 100}
      size="sm"
      colorScheme={colorScheme}
      borderRadius="full"
      bg={useColorModeValue('gray.200', 'gray.700')}
    />
  </Box>
);

const CourseCard = ({ course }: CourseCardProps) => (
  <MotionBox
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    bg={useColorModeValue('white', 'gray.800')}
    whileHover={{ y: -2 }}
    transition={{ duration: 0.2 }}
  >
    <Box h="120px" bgSize="cover" bgPos="center" bgImage={`url(${course.image})`} />
    <Box p={4}>
      <HStack spacing={2} mb={2}>
        <Badge colorScheme={course.level === 'Beginner' ? 'green' : 'blue'}>{course.level}</Badge>
        <Badge colorScheme="purple">{course.category}</Badge>
      </HStack>
      <Heading as="h3" size="md" mb={2} noOfLines={2}>
        {course.title}
      </Heading>
      <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={4} noOfLines={2}>
        By {course.instructor}
      </Text>
      <Box mb={4}>
        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')} mb={1}>
          Progress: {course.progress}%
        </Text>
        <Progress value={course.progress} size="sm" colorScheme="brand" borderRadius="full" />
      </Box>
      <HStack fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} spacing={4}>
        <HStack>
          <Icon as={FaClock} />
          <Text>Last: {course.lastAccessed}</Text>
        </HStack>
        <HStack>
          <Icon as={FaPlay} />
          <Text>Next: {course.nextLesson}</Text>
        </HStack>
      </HStack>
      <Button
        mt={4}
        w="full"
        colorScheme="brand"
        rightIcon={<FaChevronRight />}
        onClick={() => {}}
      >
        Continue Learning
      </Button>
    </Box>
  </MotionBox>
);

// Helper functions
const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case 'completed':
      return FaCheckCircle;
    case 'enrolled':
      return FaBookOpen;
    case 'certificate':
      return FaAward;
    case 'progress':
      return FaChartLine;
    default:
      return FaGraduationCap;
  }
};

const getActivityColor = (type: ActivityType) => {
  switch (type) {
    case 'completed':
      return 'green';
    case 'enrolled':
      return 'blue';
    case 'certificate':
      return 'yellow';
    case 'progress':
      return 'purple';
    default:
      return 'gray';
  }
};

export const Dashboard = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Container maxW="8xl" py={8}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box>
          <Heading as="h1" size="2xl" mb={2}>
            Welcome back, Learner!
          </Heading>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>
            Here's your learning dashboard. Keep up the great work!
          </Text>
        </Box>

        {/* Stats Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          <StatCard
            icon={FaBookOpen}
            title="Enrolled Courses"
            value={userStats.enrolledCourses}
            helpText={`${userStats.completedCourses} completed`}
            colorScheme="blue"
          />
          <StatCard
            icon={FaClock}
            title="Learning Hours"
            value={userStats.learningHours}
            helpText="This month"
            colorScheme="purple"
          />
          <StatCard
            icon={FaAward}
            title="Certificates"
            value={userStats.certificates}
            helpText="Earned"
            colorScheme="green"
          />
          <StatCard
            icon={FaCheckCircle}
            title="Completion Rate"
            value={`${userStats.completionRate}%`}
            helpText="Overall progress"
            colorScheme="yellow"
          />
        </SimpleGrid>

        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={6}>
          {/* Main Content */}
          <Box>
            {/* Enrolled Courses */}
            <Box mb={8}>
              <HStack justify="space-between" mb={6}>
                <Heading as="h2" size="lg">
                  Your Courses
                </Heading>
                <Button variant="outline" colorScheme="brand" size="sm">
                  View All
                </Button>
              </HStack>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                {enrolledCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </SimpleGrid>
            </Box>

            {/* Recent Activity */}
            <Box>
              <Heading as="h2" size="lg" mb={6}>
                Recent Activity
              </Heading>
              <Box bg={cardBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor} overflow="hidden">
                {recentActivities.map((activity) => {
                  const ActivityIcon = getActivityIcon(activity.type);
                  const color = getActivityColor(activity.type);
                  
                  return (
                    <Box key={activity.id} p={4} _notLast={{ borderBottom: '1px', borderColor }}>
                      <HStack spacing={4}>
                        <Box p={2} bg={`${color}.100`} rounded="full" color={`${color}.600`}>
                          <ActivityIcon size="1.2em" />
                        </Box>
                        <Box flex={1}>
                          <Text fontWeight="medium">{activity.title}</Text>
                          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                            {activity.course} • {activity.time}
                          </Text>
                        </Box>
                        <Icon as={FaChevronRight} color={useColorModeValue('gray.400', 'gray.500')} />
                      </HStack>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>

          {/* Sidebar */}
          <Box>
            {/* Progress Overview */}
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor} mb={6}>
              <Heading as="h3" size="md" mb={4}>
                Learning Progress
              </Heading>
              <ProgressItem
                label="Course Completion"
                value={userStats.completedCourses}
                total={userStats.enrolledCourses}
                colorScheme="brand"
              />
              <ProgressItem
                label="Learning Hours"
                value={Math.round(userStats.learningHours)}
                total={100}
                colorScheme="green"
              />
              <ProgressItem
                label="Certificates Earned"
                value={userStats.certificates}
                total={5}
                colorScheme="purple"
              />
            </Box>

            {/* Quick Actions */}
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="md" mb={4}>
                Quick Actions
              </Heading>
              <VStack spacing={3} align="stretch">
                <Button leftIcon={<FaBookOpen />} variant="outline" justifyContent="flex-start">
                  Browse Courses
                </Button>
                <Button leftIcon={<FaAward />} variant="outline" justifyContent="flex-start">
                  View Certificates
                </Button>
                <Button leftIcon={<FaGraduationCap />} variant="outline" justifyContent="flex-start">
                  Learning Paths
                </Button>
              </VStack>
            </Box>
          </Box>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Dashboard;
