import { useNavigate } from 'react-router-dom';

export const Start: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    navigate('/');
  };

  return <button onClick={handleSubmit}>START</button>;
};
