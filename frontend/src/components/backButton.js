import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

const BackButton = () => {
  return (
     <div className='flex'>
          <Link to='/'>
               <Button variant="outlined"  startIcon={<ArrowBackIcon />}>
               </Button>
          </Link>
     </div>
     
     
  );
};

export default BackButton;