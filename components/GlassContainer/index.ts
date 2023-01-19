import styled from 'styled-components'

export const GlassContainer = styled.div`
    background: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 1);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 4rem;

    @media only screen and (max-width: 576px) {
        padding: 1.5rem;
    }
`;