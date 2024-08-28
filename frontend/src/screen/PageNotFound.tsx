import styled from "styled-components"
import Heading from "../components/Typography/Heading";
import Button from "../components/ui/Button";
import { useMoveBack } from "../hooks/useMoveBack";

const StyledPageNotFound = styled.main`
    height: 100vh;
    background-color: var(--color-gray-50);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4.8rem;
`;

const Box = styled.div`
    background-color: var(--color-gray-0);
    border: 1px solid var(--color-gray-100);
    border-radius: var(--border-radius-md);

    padding: 4.8rem;
    flex: 0 1 96rem;
    text-align: center;

    & h1{
        margin-bottom: 3.2rem;
    }

`

export default function PageNotFound() {
    const moveBack = useMoveBack()
  return (
    <StyledPageNotFound>
        <Box>
            <Heading as="h1" align="center">
                Page You Are Looking for Could not be found
            </Heading>
            <Button onClick={moveBack} size="large">
                Go Back
            </Button>
        </Box>
    </StyledPageNotFound>
  )
}
