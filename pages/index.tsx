import { FC } from "react";
import { ContentBlock } from "@shared/components";
import { Header } from "@shared/components/header";
import { InvitationBlock } from "@features/invitation-block";
import { ResponsibilitiesBlock } from "@features/responsibilities-block";
import { DirectionsBlock } from "@features/directions-block";
import { Steps } from "@features/steps";
import { Roles } from "@features/roles";

const Page: FC = () => {
  return (
    <div className="scroll background">
      <ContentBlock>
        <Header />
        <InvitationBlock />
        <ResponsibilitiesBlock />
        <DirectionsBlock />
        <Steps />
        <Roles />
      </ContentBlock>
    </div>
  );
};

export default Page;
