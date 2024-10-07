import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Heading,
  Text,
  Image,
  Button,
  Flex,
  IconButton,
  Box,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import team from './players';

function TeamCards() {
  return (
    <Flex direction="column" align="center" gap={4}>
      {team.map((player, index) => (
        <Card key={index} maxW="md">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name={player.name} src={player.image} />
                <Box>
                  <Heading size="sm">{player.name}</Heading>
                  <Text>{player.nationality}</Text>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<BsThreeDotsVertical />}
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              Jersey Number: {player.jerseyNumber}
              <br />
              Age: {player.age}
            </Text>
          </CardBody>
          <Image
            objectFit="cover"
            src={player.image}
            alt={player.name}
          />
          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              '& > button': {
                minW: '136px',
              },
            }}
          >
            <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
              Like
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
              Comment
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
              Share
            </Button>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  );
}

export default TeamCards;
