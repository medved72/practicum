import { FC } from "react";
import { ContentBlock } from "@shared/components";
import { Header } from "@features/header";
import { InvitationBlock } from "@features/invitation-block";
import { ResponsibilitiesBlock } from "@features/responsibilities-block";
import { DirectionsBlock } from "@features/directions-block";
import { Steps } from "@features/steps";
import { Roles } from "@features/roles";
import { VacancyBlock } from "@features/vacancy-block";
import { StoriesBlock } from "@features/stories-block";
import { FaqBlock } from "@features/faq-block";
import { FooterBlock } from "@features/footer-block";
import { useRouter } from "next/router";
import { ModalPage } from "@shared/components/modal-page";

const Page: FC = () => {
  const router = useRouter();
  const { vacancyId } = router.query;

  return (
    <ContentBlock>
      <Header />
      <InvitationBlock />
      <ResponsibilitiesBlock />
      <DirectionsBlock />
      <Steps />
      <Roles />
      <VacancyBlock />
      <StoriesBlock />
      <FaqBlock />
      <FooterBlock />
      <ModalPage isOpen={!!vacancyId}>Content</ModalPage>
    </ContentBlock>
  );
};

export default Page;
