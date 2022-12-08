import { FC } from "react";
import { ContentBlock } from "@shared/components";
import { Header } from "@shared/components/header";
import { InvitationBlock } from "@features/invitation-block";
import { ResponsibilitiesBlock } from "@features/responsibilities-block";
import { DirectionsBlock } from "@features/directions-block";

const Page: FC = () => {
  return (
    <div className="scroll background">
      <ContentBlock>
        <Header />
        <InvitationBlock />
        <ResponsibilitiesBlock />
        <DirectionsBlock />
      </ContentBlock>
    </div>
  );
};

export default Page;
