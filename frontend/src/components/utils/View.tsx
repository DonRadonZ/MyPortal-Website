
import styled, { css } from 'styled-components';

const StyledView = styled.div`
    border: 1px solid var(--color-gray-100);
    background-color: var(--color-gray-0);
    box-shadow: var(--shadow-sm);
    border-radius: var(--border-radius-sm);
    padding: 0.4rem;
    display: flex;
    gap: 0.4rem;
`;

type ViewButtonProps = {
    active?: boolean;
}

const ViewButton = styled.button<ViewButtonProps>`
   background-color: var(--color-gray-0);
   border: none;

   ${(props) => props.active && css`
   background-color: var(--color-brand-600);
   color: var(--color-brand-50);
   `}

   border-radius: var(--border-radius-sm);
   font-weight: 500;
   font-size: 1.4rem;

   padding: 0.44rem 0.8rem;
   transition: all 0.3s;

   &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
   }
`;

interface ViewProps {
    viewField: string;
    options: Array<{ value: string, label: string }>;
    onChangeView: (view: string) => void; // Callback to handle view changes
}

function View({ viewField, options, onChangeView }: ViewProps) {
    return (
        <StyledView>
            {options.map((option) => (
                <ViewButton
                    key={option.value}
                    active={viewField === option.value} // Apply active style if this option is selected
                    disabled={viewField === option.value} // Disable button if it’s the current view
                    onClick={() => onChangeView(option.value)} // Handle view change
                >
                    {option.label}
                </ViewButton>
            ))}
        </StyledView>
    );
}

export default View;
