import { Box, Flex, Button, useColorMode, useColorModeValue, IconButton, Avatar, Menu, MenuButton, MenuList, MenuItem, Image, InputGroup, InputLeftElement, Input, HStack } from '@chakra-ui/react';
import { MoonIcon, SunIcon, SearchIcon, BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box as="nav" position="sticky" top={0} zIndex={10} bg={bg} borderBottom="1px" borderColor={borderColor}>
      <Flex maxW="7xl" mx="auto" px={4} py={3} align="center" justify="space-between">
        <Flex align="center">
          <RouterLink to="/">
            <Image
              h={8}
              w="auto"
              src="https://img.icons8.com/color/96/000000/elearning.png"
              alt="EduGenZ Logo"
              mr={4}
            />
          </RouterLink>
          <InputGroup display={{ base: 'none', md: 'block' }} w="300px">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search courses..."
              bg={useColorModeValue('gray.100', 'gray.700')}
              border="none"
              _focus={{ bg: useColorModeValue('white', 'gray.600'), shadow: 'sm' }}
            />
          </InputGroup>
        </Flex>

        <HStack spacing={4}>
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
          />
          <IconButton
            aria-label="Notifications"
            icon={<BellIcon />}
            variant="ghost"
          />
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              rightIcon={<ChevronDownIcon />}
              leftIcon={
                <Avatar
                  size="sm"
                  name="User"
                  src="https://bit.ly/broken-link"
                  bg="brand.500"
                  color="white"
                />
              }
            >
              <Box as="span" display={{ base: 'none', md: 'inline' }}>Hi, User</Box>
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/dashboard">Dashboard</MenuItem>
              <MenuItem>My Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Sign Out</MenuItem>
            </MenuList>
          </Menu>
          <Button colorScheme="brand" display={{ base: 'none', md: 'inline-flex' }}>
            Create Course
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};
