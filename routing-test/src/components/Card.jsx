import { useNavigate } from 'react-router-dom';

export default function Card({ person }) {
  const { id, name, job, location } = person;
  const navigate = useNavigate();

  const NavigateToBio = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="card" onClick={NavigateToBio}>
      <div className="title">{name}</div>
      <div className="details">
        {job}
        <br />
        {location}
      </div>
    </div>
  );
}
