import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function TrackItemSkeleton() {
  return (
        
         <Box sx={{ width:'100%', mb: 2 }}>
            <Skeleton variant="rectangular" width="100%" height={50} />
         </Box>

  );
}
