import { FC } from "react";
import { useRouter } from "next/router";

const Page: FC = () => {
  const router = useRouter();
  const { vacancyId } = router.query;
  return <div>Page {vacancyId}</div>;
};

export default Page;
