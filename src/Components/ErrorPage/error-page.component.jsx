import { useRouteError } from "react-router-dom";
import { Error, Heading, Text, I } from "./ErrorPage.styles";

const ErrorPageComponent = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Error>
      <Heading>Oooops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>
        <I>{error.statusText || error.message}</I>
      </Text>
    </Error>
  );
};

export default ErrorPageComponent;
