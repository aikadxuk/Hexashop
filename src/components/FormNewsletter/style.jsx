import styled from "styled-components";

export const FormContainer = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  gap: 60px;
  padding: 50px 7%;

  @media (width <= 905px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FormHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: clamp(1.5rem, 3vw, 2rem);
`;

export const Text = styled.p`
  --black: #00000090;
  color: var(--black);
  font-style: ${({ italic }) => italic && "italic"};
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

export const FormSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Input = styled.input`
  background: none;
  border: 1px solid var(--black);
  padding: 13px 20px;
  font-style: italic;
  width: 100%;
  font-size: 1rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: clamp(0.7rem, 1vw, 1rem);
  }
`;

export const Icon = styled.i`
  font-size: 1rem;
  color: white;
`;

export const Button = styled.button`
  background: var(--black);
  border: none;
  padding: 12px 15px;
  cursor: pointer;

  &:hover {
    background: white;
    border: 1px solid var(--black);
  }

  &:hover ${Icon} {
    color: var(--black);
  }
`;

export const ScheduleInfo = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Subtitle = styled.h5`
  font-weight: 600;
  font-size: 1.1rem;
`;

export const LinkInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 80px);
  gap: 5px;
`;

export const Link = styled.a`
  --black: #00000090;
  text-decoration: none;
  color: var(--black);

  &:hover {
    --black: #000000;
    color: var(--black);
  }
`;
