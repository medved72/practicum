import { FC, useState } from "react";
import RolesArrowImage from "@shared/assets/images/roles-arrow.svg";
import { Tabs, Typography } from "@shared/components";
import { makeRolesTabsMap, Role } from "./utils";

import styles from "./roles.module.scss";
import { RolesImage } from "@features/roles/roles-image";

export const tabs = makeRolesTabsMap([Role.mentor, Role.reviewer]);

export const Roles: FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].key as Role);

  return (
    <div id="roles" className={styles.roles}>
      <div className={styles.roles__arrow}>
        <RolesArrowImage />
      </div>
      <RolesImage activeTab={activeTab} />

      <div className={styles.roles__tabs}>
        <Typography.Header className={styles.roles__header} level={2}>
          Роли в нашей команде
        </Typography.Header>
        <Tabs
          tabs={tabs}
          onChangeActiveTab={(tab) => setActiveTab(() => tab.key as Role)}
        />
      </div>
    </div>
  );
};
