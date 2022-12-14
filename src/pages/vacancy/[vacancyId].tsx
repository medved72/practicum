import { FC } from "react";
import { useRouter } from "next/router";
import { ResponseToJob } from "@widgets/response-to-job";

const Page: FC = () => {
  const router = useRouter();
  const { vacancyId } = router.query;
  return <ResponseToJob />;
};

export default Page;
