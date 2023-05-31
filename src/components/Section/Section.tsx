import { SectionStyled, Title } from './Section.styled';

interface ISectionProps {
  title: string;
  children: React.ReactElement;
}

export const Section: React.FC<ISectionProps> = ({ title, children }) => {
  return (
    <SectionStyled>
      <Title>{title}</Title>
      {children}
    </SectionStyled>
  );
};
