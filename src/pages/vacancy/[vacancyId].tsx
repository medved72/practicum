import { FC } from "react";
import { ResponseToJob } from "@widgets/response-to-job";
import { getVacancies, getVacancyById, VacancyDto } from "@shared/api";
import { GetStaticPaths, GetStaticProps } from "next";

interface PageProps {
  vacancy: VacancyDto | null;
}

const Page: FC<PageProps> = ({ vacancy }) => {
  return <ResponseToJob vacancy={vacancy} />;
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const vacancies = await getVacancies();
  return {
    paths: vacancies
      .map(({ id }) => id)
      .concat("not-found")
      .map((id) => `/vacancy/${id}`),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const vacancyId = context.params?.vacancyId;

  if (typeof vacancyId !== "string") {
    return { props: { vacancy: null } };
  }

  const vacancy = await getVacancyById(vacancyId);
  return { props: { vacancy } };
};
