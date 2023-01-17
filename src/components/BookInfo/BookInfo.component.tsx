import { useDeleteBookMutation } from '../../redux/bookSlice';
import { useHistory } from 'react-router-dom';
import Loading from '../Loading';
import Error from '../Error';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Heading, IconButton, Text } from '@chakra-ui/react';

const BookInfo = ({
  title,
  author,
  bookId,
  ...rest
}: {
  title: string | undefined;
  author: string | undefined;
  bookId: string;
}) => {
  const [deleteBook, { isLoading, isError }] = useDeleteBookMutation();
  const history = useHistory();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  const onDeleteHandler = (bookId: string) => {
    console.log(bookId);
    if (window.confirm('Are you sure')) {
      deleteBook(bookId);
    }
  };

  const redirect = (bookId: string) => {
    history.push(`/update-book/${bookId}`);
  };

  return (
    <Box
      p={5}
      justifyContent="space-between"
      display="flex"
      shadow="md"
      borderWidth="1px"
      {...rest}
    >
      <Box display="flex" flexDirection="column">
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{author}</Text>
      </Box>
      <Box>
        <IconButton
          color="#1a202c"
          aria-label=""
          icon={<DeleteIcon />}
          marginRight="1rem"
          onClick={() => onDeleteHandler(bookId)}
        />
        <IconButton
          color="#1a202c"
          aria-label=""
          icon={<EditIcon />}
          onClick={() => redirect(bookId)}
        />
      </Box>
    </Box>
  );
};

export default BookInfo;
