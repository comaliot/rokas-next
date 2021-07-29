import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Open Sans',
      },
    },
  },
  components: {
    Link: {
      variants: {
        // you can name it whatever you want
        socialLink: ({ colorScheme = 'yellow' }) => ({
          color: `${colorScheme}.500`,
          _hover: {
            color: `${colorScheme}.600`,
          },
        }),
      },
      defaultProps: {
        // you can name it whatever you want
        variant: 'socialLink',
      },
    },
  },
});

export default theme;
