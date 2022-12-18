import { FC } from "react";
import { ContentBlock, ModalPage } from "@shared/components";
import { Header } from "@features/header";
import { InvitationBlock } from "@features/invitation-block";
import { ResponsibilitiesBlock } from "@features/responsibilities-block";
import { DirectionsBlock } from "@features/directions-block";
import { Steps } from "@features/steps";
import { Roles } from "@features/roles";
import { VacancyBlock, VacancyBlockProps } from "@features/vacancy-block";
import { StoriesBlock } from "@features/stories-block";
import { FaqBlock } from "@features/faq-block";
import { FooterBlock } from "@features/footer-block";
import { GetStaticProps } from "next";
import {
  getVacancies,
  useVacancy,
  VacancyCategory,
  VacancyType,
} from "@shared/api";
import { useRouter } from "next/router";
import { ResponseToJob } from "@widgets/response-to-job";
import Head from "next/head";

interface PageProps {
  vacancies: VacancyBlockProps["vacancies"];
}

const Page: FC<PageProps> = ({ vacancies }) => {
  const router = useRouter();
  const { vacancyId } = router.query as Record<string, string>;
  const vacancy = useVacancy(vacancyId);

  return (
    <>
      <Head>
        <title>Я.Практикум</title>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <ContentBlock>
        <Header />
        <InvitationBlock />
        <ResponsibilitiesBlock />
        <DirectionsBlock />
        <Steps />
        <Roles />
        <VacancyBlock vacancies={vacancies} />
        <StoriesBlock />
        <FaqBlock />
        <FooterBlock />
        <ModalPage isOpen={!!vacancyId}>
          <ResponseToJob vacancy={vacancy} />
        </ModalPage>
      </ContentBlock>
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const vacancies = await getVacancies();

  return {
    props: {
      vacancies: Object.keys(VacancyType).reduce<
        VacancyBlockProps["vacancies"]
      >((acc, type) => {
        const current: VacancyBlockProps["vacancies"][number] = {
          type: type as VacancyType,
          vacancyGroups: Object.keys(VacancyCategory).reduce<
            VacancyBlockProps["vacancies"][number]["vacancyGroups"]
          >((acc, category) => {
            const current: VacancyBlockProps["vacancies"][number]["vacancyGroups"][number] =
              {
                category: category as VacancyCategory,
                vacancies: vacancies.filter(
                  (vacancy) =>
                    vacancy.type === type && vacancy.category === category
                ),
              };
            acc.push(current);
            return acc;
          }, []),
        };
        acc.push(current);
        return acc;
      }, []),
    },
  };
};
