import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  
  return (
    <IoMdArrowBack size="24px" onClick={() => navigate(-1)} style={{ cursor: "pointer" }} />
  );
};

export default BackButton;