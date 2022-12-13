import { FC, useState } from "react";
import Image from "next/image";
import RolesPeopleMentorImage from "@shared/assets/images/roles-peoples-mentor.png";
import RolesPeopleReviewerImage from "@shared/assets/images/roles-peoples-reviewer.png";
import RolesArrowImage from "@shared/assets/images/roles-arrow.svg";
import { Typography } from "@shared/components";
import { Tabs } from "@shared/components/tabs";
import { makeRolesTabsMap, Role } from "./utils";
import styles from "./roles.module.scss";

export const tabs = makeRolesTabsMap([Role.mentor, Role.reviewer]);

export const Roles: FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].key as Role);

  return (
    <div className={styles.roles}>
      <div className={styles.roles__arrow}>
        <RolesArrowImage />
      </div>
      <div>
        {activeTab === Role.mentor && (
          <Image src={RolesPeopleMentorImage} alt="" />
        )}

        {activeTab === Role.reviewer && (
          <Image src={RolesPeopleReviewerImage} alt="" />
        )}
      </div>

      <div className={styles.roles__tabs}>
        <Typography.Header level={2}>Роли в нашей команде</Typography.Header>
        <Tabs
          tabs={tabs}
          onChangeActiveTab={(tab) => setActiveTab(() => tab.key as Role)}
        />
      </div>
    </div>
  );
};
