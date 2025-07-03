'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/Chris-cv-2025', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
