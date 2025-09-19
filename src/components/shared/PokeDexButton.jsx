import { MdStorage } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PokeDexButton = () => {
  const navigate = useNavigate();
  
  return (
    <MdStorage size="24px" onClick={() => navigate('/pokebag')} style={{ cursor: "pointer" }} />
  );
};

export default PokeDexButton;