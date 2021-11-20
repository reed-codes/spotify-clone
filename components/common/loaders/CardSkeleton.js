import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function CardSkeleton() {
  return (
        
        <Box sx={{ width: 210, minWidth:210, mb: 3 }}>
            <Skeleton variant="rectangular" width="100%" height={190} />

            <Box sx={{ pt: 0.5 }}>
              <Skeleton width={66} height={30}/>
              <Skeleton width="100%" height={35}/>
            </Box>
        </Box>

  );
}
