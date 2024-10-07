import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TeamCards from './Player';
import { ChakraProvider } from '@chakra-ui/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
      <TeamCards />
  </ChakraProvider>
);
