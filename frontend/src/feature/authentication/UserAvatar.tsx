import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const StyledUserAvatar = styled.div`
    display: flex;
    gap: 1.2rem;
    align-items: center;
    font-weight: 500;
    font-size: 1.6rem;
    color: var(--color-gray-600);
`;

const Avatar = styled.img`
    display: block;
    width: 4rem;
    width: 3.6rem;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    outline: 2px solid var(--color-gray-100);
`

const ImageButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    outline: none;

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: 2px solid var(--color-primary);
    }
`;

export default function UserAvatar() {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to a specific route if needed
        navigate('/profile'); // Example route
    };
  return (
    <StyledUserAvatar>
        <span>Guest</span>
        <ImageButton onClick={handleClick}>
        <Avatar src={'default-user.png'} />
        </ImageButton>
    </StyledUserAvatar>
  )
}
