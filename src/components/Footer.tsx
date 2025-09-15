import { Box, Container, Flex, Grid, GridItem, Heading, Link, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const mutedText = useColorModeValue('gray.600', 'gray.400');
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Templates', href: '#' },
        { label: 'Integrations', href: '#' },
        { label: 'Updates', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'Guides', href: '#' },
        { label: 'Help Center', href: '#' },
        { label: 'Community', href: '#' },
        { label: 'Status', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Security', href: '#' },
        { label: 'Cookies', href: '#' },
        { label: 'GDPR', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', href: '#' },
    { icon: FaTwitter, label: 'Twitter', href: '#' },
    { icon: FaLinkedin, label: 'LinkedIn', href: '#' },
    { icon: FaYoutube, label: 'YouTube', href: '#' },
    { icon: FaFacebook, label: 'Facebook', href: '#' },
  ];

  return (
    <Box as="footer" bg={bgColor} borderTopWidth="1px" borderColor={borderColor} mt={16}>
      <Container maxW="7xl" py={12}>
        <Grid templateColumns={{ base: '1fr', md: '2fr 1fr 1fr 1fr 1fr' }} gap={8} mb={12}>
          {/* Brand Info */}
          <Box>
            <Heading as="h2" size="lg" mb={4} color="brand.500">
              EduGenZ
            </Heading>
            <Text mb={4} color={mutedText}>
              Empowering the next generation of learners with modern education tools and resources to achieve their full potential.
            </Text>
            <Flex gap={4} mb={6}>
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  isExternal
                  p={2}
                  color={mutedText}
                  _hover={{ color: 'brand.500' }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </Flex>
            <Text fontSize="sm" color={mutedText}>
              © {new Date().getFullYear()} EduGenZ. All rights reserved.
            </Text>
          </Box>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <Box key={column.title}>
              <Heading as="h3" size="sm" mb={4}>
                {column.title}
              </Heading>
              <List spacing={3}>
                {column.links.map((link) => (
                  <ListItem key={link.label}>
                    <Link
                      href={link.href}
                      color={mutedText}
                      _hover={{ color: 'brand.500', textDecoration: 'underline' }}
                    >
                      {link.label}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Grid>

        {/* Bottom Bar */}
        <Box 
          pt={8} 
          mt={8} 
          borderTopWidth="1px" 
          borderColor={borderColor}
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          gap={4}
        >
          <Text fontSize="sm" color={mutedText} textAlign={{ base: 'center', md: 'left' }}>
            Made with ❤️ for the future of education
          </Text>
          <Flex gap={6}>
            <Link href="#" fontSize="sm" color={mutedText} _hover={{ color: 'brand.500' }}>
              Privacy Policy
            </Link>
            <Link href="#" fontSize="sm" color={mutedText} _hover={{ color: 'brand.500' }}>
              Terms of Service
            </Link>
            <Link href="#" fontSize="sm" color={mutedText} _hover={{ color: 'brand.500' }}>
              Cookies
            </Link>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
