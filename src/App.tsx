import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { Dashboard } from './pages/Dashboard';
import { CourseDetail } from './pages/CourseDetail';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <Box 
      minH="100vh" 
      display="flex" 
      flexDirection="column"
      bg={useColorModeValue('white', 'gray.900')}
      color={useColorModeValue('gray.800', 'gray.100')}
      transition="background-color 0.2s, color 0.2s"
    >
      <Helmet>
        <title>EduGenZ - Modern Learning Platform</title>
        <meta name="description" content="A modern learning management system for the next generation of learners" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      <Navbar />
      
      <Box 
        as="main" 
        flex="1" 
        py={8}
        bg={useColorModeValue('white', 'gray.900')}
      >
        <Container maxW="container.xl">
          <Box 
            bg={useColorModeValue('white', 'gray.800')} 
            borderRadius="lg" 
            p={6}
            boxShadow={useColorModeValue('sm', 'dark-lg')}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Box>
        </Container>
      </Box>
      
      <Box 
        as="footer" 
        bg={useColorModeValue('gray.50', 'gray.800')}
        borderTopWidth="1px"
        borderTopColor={useColorModeValue('gray.200', 'gray.700')}
        py={8}
      >
        <Container maxW="container.xl">
          <Footer />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
