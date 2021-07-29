import { useRouter } from 'next/dist/client/router';

const Project = () => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <p>Project: {pid}</p>
    </>
  );
};

export default Project;
