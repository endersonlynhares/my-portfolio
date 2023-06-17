import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 920px;
  display: flex;
  margin: auto;
  margin-top: 9rem;
  flex-direction: column;
  justify-content: center;
  
  gap: 2rem;

  h1{
    font-size: 4.8rem;
  }

  @media screen and (max-width: 720px){
    align-items: center;
    text-align: center;
  }

`

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 70.5rem;
  margin-bottom: 3rem;

  
  button{
    width: 18rem;
    height: 3.5rem;
    border: none;
    border-radius: 6px;
    color: ${props => props.theme.colors["--white"]};
    background-color: ${props => props.theme.colors["--primary"]};

    @media screen and (max-width: 720px){
        width: 100%;
    }

  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label{
    font-family: "Playfair Display";
    font-size: 1.5rem;
  }

  input, textarea{
    background: none;
    border: 1px solid #C9CDCF;
    border-radius: 6px;
    padding: 14px 9px;
    font-size: 1.4rem;
    color: ${props => props.theme.colors["--base-text"]};
  }

`